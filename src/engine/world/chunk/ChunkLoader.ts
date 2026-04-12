import * as THREE from "three";
import { Chunk } from "./Chunk";
import {
    createChunkWireframe,
    setChunkWireframePosition,
} from "./chunkWireframe";
import { WORLD_PARAMS } from "@/utils/config";
import { mod } from "@/utils/helper";
import { generateFlatTerrain } from "@/engine/world/World-Generator";
import { debug } from "@/utils/logger";

export class ChunkLoader {
    worldChunksMap: Map<string, Chunk>;
    activeChunks: Set<Chunk>;
    buildQueue: Chunk[] = [];
    wireframeVisible: boolean = false;
    wireframe: THREE.LineSegments;
    currentChunkKey: string | null = null;
    // Initially set framesSinceLastLoad to the chunk load interval to allow
    // immediate loading of chunks when the game starts.
    framesSinceLastLoad: number = WORLD_PARAMS.CHUNK_LOAD_INTERVAL;

    constructor() {
        this.worldChunksMap = new Map();
        this.activeChunks = new Set();
        this.wireframe = createChunkWireframe();
    }

    updateWorldChunks(scene: THREE.Scene, playerPosition: THREE.Vector3): void {
        const { chunkX, chunkZ } = Chunk.worldToChunkCoords(
            playerPosition.x,
            playerPosition.z,
        );

        if (this.shouldRefreshVisibleChunks()) {
            this.refreshVisibleChunks(scene, {
                chunkX,
                chunkZ,
            });
            this.framesSinceLastLoad = 0;
        } else {
            this.framesSinceLastLoad++;
        }

        this.processBuildQueue(scene);

        this.updateCurrentChunkWireframe(
            scene,
            playerPosition.x,
            playerPosition.z,
        );
    }

    private shouldRefreshVisibleChunks(): boolean {
        return this.framesSinceLastLoad >= WORLD_PARAMS.CHUNK_LOAD_INTERVAL;
    }

    refreshVisibleChunks(
        scene: THREE.Scene,
        { chunkX, chunkZ }: { chunkX: number; chunkZ: number },
    ): void {
        const radius = WORLD_PARAMS.RENDER_DISTANCE;
        const nextBatchOfActiveChunks = this.collectChunksWithinRadius(
            chunkX,
            chunkZ,
            radius,
        );

        const chunksToRemove = this.getChunksToRemove(nextBatchOfActiveChunks);
        this.purgeUnmodifiedChunksOutsideRadius(scene, chunksToRemove);

        this.activeChunks = nextBatchOfActiveChunks;
        this.rebuildQueue(scene, chunkX, chunkZ, radius);
    }

    private collectChunksWithinRadius(
        centerX: number,
        centerZ: number,
        radius: number,
    ): Set<Chunk> {
        const chunks = new Set<Chunk>();

        for (let x = centerX - radius; x <= centerX + radius; x++) {
            for (let z = centerZ - radius; z <= centerZ + radius; z++) {
                const chunkKey = `${x},${z}`;
                chunks.add(this.fetchOrInitializeChunk(chunkKey));
            }
        }

        return chunks;
    }

    private getChunksToRemove(nextBatchOfActiveChunks: Set<Chunk>): Chunk[] {
        // Return chunks that are currently active but won't be in the next batch of active chunks
        return [...this.activeChunks].filter(
            (chunk) => !nextBatchOfActiveChunks.has(chunk),
        );
    }

    private rebuildQueue(
        scene: THREE.Scene,
        chunkX: number,
        chunkZ: number,
        radius: number,
    ): void {
        this.buildQueue = this.getChunksWithinRadiusSorted(
            chunkX,
            chunkZ,
            radius,
        ).filter((chunk) => !this.isChunkAttachedToScene(chunk, scene));
    }

    private isChunkAttachedToScene(chunk: Chunk, scene: THREE.Scene): boolean {
        return chunk.container.parent === scene;
    }

    processBuildQueue(scene: THREE.Scene): void {
        const chunkToBuild = this.buildQueue.shift();
        if (!chunkToBuild) return;

        this.ensureChunkGenerated(chunkToBuild);
        chunkToBuild.generateMeshes();
        this.attachChunkToScene(scene, chunkToBuild);
    }

    private ensureChunkGenerated(chunk: Chunk): void {
        if (!chunk.isDataGenerated) {
            generateFlatTerrain(chunk);
        }
    }

    private attachChunkToScene(scene: THREE.Scene, chunk: Chunk): void {
        if (!this.isChunkAttachedToScene(chunk, scene)) {
            scene.add(chunk.container);
        }
    }

    initEmptyChunk(chunkX: number, chunkZ: number): Chunk {
        const chunk = new Chunk(chunkX, chunkZ, (x: number, z: number) =>
            this.worldChunksMap.get(`${x},${z}`),
        );
        const chunkKey = chunk.getKey();
        this.worldChunksMap.set(chunkKey, chunk);
        return chunk;
    }

    private purgeUnmodifiedChunksOutsideRadius(
        scene: THREE.Scene,
        chunksToBeRemoved: Chunk[],
    ): void {
        for (const chunk of chunksToBeRemoved) {
            // remove from the currently loaded list
            this.activeChunks.delete(chunk);

            // remove from the Scene graph
            scene.remove(chunk.container);

            // free the VRAM/WebGL Meshes
            chunk.freeSubchunkMeshes();

            // If the user touched it, keep the 1D arrays in RAM
            // If it's untouched, delete it to save RAM.
            if (!chunk.isModified) {
                this.worldChunksMap.delete(chunk.getKey());
            }
        }
    }

    fetchOrInitializeChunk(chunkKey: string): Chunk {
        const chunk = this.worldChunksMap.get(chunkKey);
        if (!chunk) {
            const [chunkX, chunkZ] = chunkKey.split(",").map(Number);
            return this.initEmptyChunk(chunkX, chunkZ);
        }
        return chunk;
    }

    private getChunksWithinRadiusSorted(
        centerX: number,
        centerZ: number,
        radius: number,
    ): Chunk[] {
        return Array.from(this.activeChunks)
            .filter((chunk) =>
                this.isChunkWithinRadius(chunk, centerX, centerZ, radius),
            )
            .sort((a, b) => {
                const distanceA = this.getChunkDistance(a, centerX, centerZ);
                const distanceB = this.getChunkDistance(b, centerX, centerZ);
                return distanceA - distanceB;
            });
    }

    private isChunkWithinRadius(
        chunk: Chunk,
        centerX: number,
        centerZ: number,
        radius: number,
    ): boolean {
        return this.getChunkDistance(chunk, centerX, centerZ) <= radius;
    }

    private getChunkDistance(
        chunk: Chunk,
        centerX: number,
        centerZ: number,
    ): number {
        // Using Chebyshev distance since we want to load chunks in a square pattern around the player
        return Math.max(
            Math.abs(chunk.chunkX - centerX),
            Math.abs(chunk.chunkZ - centerZ),
        );
    }

    setVoxelWorld(
        worldX: number,
        worldY: number,
        worldZ: number,
        blockId: number,
    ) {
        const chunkX = Math.floor(worldX / Chunk.size);
        const chunkZ = Math.floor(worldZ / Chunk.size);

        const chunk = this.fetchOrInitializeChunk(`${chunkX},${chunkZ}`);

        const localX = mod(worldX, Chunk.size);
        const localZ = mod(worldZ, Chunk.size);

        debug(
            `setting block at chunk coords (${chunkX}, ${chunkZ}) and local coords (${localX}, ${worldY}, ${localZ})`,
        );
        chunk.setVoxel(localX, worldY, localZ, blockId);
        // FOR TESTING: immediately generate meshes and mark as modified so we can see the change right away
        chunk.markAsModified(true);
        chunk.generateMeshes();
    }

    getLoadedChunkCount(): number {
        return this.activeChunks.size;
    }

    getCachedChunkCount(): number {
        return this.worldChunksMap.size;
    }

    toggleChunkWireframes(): void {
        this.setWireframeVisibility(!this.wireframeVisible);
    }

    setWireframeVisibility(visible: boolean): void {
        this.wireframeVisible = visible;
        this.wireframe.visible = visible;
    }

    private updateCurrentChunkWireframe(
        scene: THREE.Scene,
        worldX: number,
        worldZ: number,
    ): void {
        if (!this.wireframeVisible) {
            return;
        }

        const { chunkX, chunkZ } = Chunk.worldToChunkCoords(worldX, worldZ);
        const chunkKey = `${chunkX},${chunkZ}`;

        if (this.currentChunkKey === chunkKey) {
            return;
        }

        this.currentChunkKey = chunkKey;
        setChunkWireframePosition(this.wireframe, chunkX, chunkZ);

        if (this.wireframe.parent !== scene) {
            scene.add(this.wireframe);
        }
    }
}
