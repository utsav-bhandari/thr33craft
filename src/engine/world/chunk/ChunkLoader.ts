import * as THREE from "three";
import { Chunk } from "./Chunk";
import { WORLD_PARAMS } from "@/utils/config";
import { mod } from "@/utils/helper";
import { generateFlatTerrain } from "@/engine/world/World-Generator";

export class ChunkLoader {
    worldChunksMap: Map<string, Chunk>;
    curChunksToLoad: Set<Chunk>;
    // Initially set framesSinceLastLoad to the chunk load interval to allow
    // immediate loading of chunks when the game starts.
    framesSinceLastLoad: number = WORLD_PARAMS.CHUNK_LOAD_INTERVAL;

    constructor() {
        this.worldChunksMap = new Map();
        this.curChunksToLoad = new Set();
    }

    updateWorldChunks(scene: THREE.Scene, playerPosition: THREE.Vector3): void {
        const { chunkX, chunkZ } = Chunk.worldToChunkCoords(
            playerPosition.x,
            playerPosition.z,
        );

        if (this.framesSinceLastLoad < WORLD_PARAMS.CHUNK_LOAD_INTERVAL) {
            this.framesSinceLastLoad++;
            return;
        }

        this.refreshVisibleChunks(scene, {
            chunkX,
            chunkZ,
        });

        this.framesSinceLastLoad = 0;
        this.renderChunksToScene(scene, this.curChunksToLoad);
    }

    refreshVisibleChunks(
        scene: THREE.Scene,
        { chunkX, chunkZ }: { chunkX: number; chunkZ: number },
    ): void {
        const radius = WORLD_PARAMS.RENDER_DISTANCE;

        for (let x = chunkX - radius; x <= chunkX + radius; x++) {
            for (let z = chunkZ - radius; z <= chunkZ + radius; z++) {
                const chunkKey = `${x},${z}`;
                // CREATES new chunk if it doesn't exist, but doesn't add to scene or generate meshes yet
                const chunk = this.getOrCreateChunkData(chunkKey);
                // union of current chunks to load and new chunks to load
                this.curChunksToLoad.add(chunk);
            }
        }

        const nextBatchOfChunksToLoad = this.getChunksWithinRadiusSorted(
            chunkX,
            chunkZ,
            radius,
        );

        this.removeChunksOutsideRadius(
            scene,
            this.curChunksToLoad.difference(nextBatchOfChunksToLoad),
        );
        // update the current chunks to load to be the new batch of chunks to load
        this.curChunksToLoad = new Set(nextBatchOfChunksToLoad);
    }

    renderChunksToScene(scene: THREE.Scene, chunks: Set<Chunk>): void {
        for (const chunk of chunks) {
            if (!chunk.generated) {
                generateFlatTerrain(chunk);
                chunk.generated = true;
            }

            chunk.generateMeshes();

            // This check ensures that we only modify the scene graph when necessary
            if (chunk.container.parent !== scene) {
                scene.add(chunk.container);
            }
        }
    }

    createChunkData(chunkX: number, chunkZ: number): Chunk {
        const chunk = new Chunk(chunkX, chunkZ);
        generateFlatTerrain(chunk);
        chunk.generated = true;
        const chunkKey = chunk.getKey();
        this.worldChunksMap.set(chunkKey, chunk);
        return chunk;
    }

    private removeChunksOutsideRadius(
        scene: THREE.Scene,
        chunksToBeRemoved: Set<Chunk>,
    ): void {
        for (const chunk of chunksToBeRemoved) {
            // remove from the currently loaded list
            this.curChunksToLoad.delete(chunk);

            // remove from the Scene graph
            scene.remove(chunk.container);

            // free the VRAM/WebGL Meshes
            chunk.freeSubchunkMeshes();

            // If the user touched it, keep the 1D arrays in RAM
            // If it's untouched wilderness, delete it to save RAM.
            if (!chunk.isModified) {
                this.worldChunksMap.delete(chunk.getKey());
            }
        }
    }

    getOrCreateChunkData(chunkKey: string): Chunk {
        const chunk = this.worldChunksMap.get(chunkKey);
        if (!chunk) {
            const [chunkX, chunkZ] = chunkKey.split(",").map(Number);
            return this.createChunkData(chunkX, chunkZ);
        }
        return chunk;
    }

    private getChunksWithinRadiusSorted(
        centerX: number,
        centerZ: number,
        radius: number,
    ): Set<Chunk> {
        return new Set(
            Array.from(this.curChunksToLoad)
                .filter((chunk) =>
                    this.isChunkWithinRadius(chunk, centerX, centerZ, radius),
                )
                .sort((a, b) => {
                    const distanceA = this.getChunkDistance(
                        a,
                        centerX,
                        centerZ,
                    );
                    const distanceB = this.getChunkDistance(
                        b,
                        centerX,
                        centerZ,
                    );
                    return distanceA - distanceB;
                }),
        );
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
        value: number,
    ) {
        const chunkX = Math.floor(worldX / Chunk.size);
        const chunkZ = Math.floor(worldZ / Chunk.size);

        const chunk = this.getOrCreateChunkData(`${chunkX},${chunkZ}`);

        const localX = mod(worldX, Chunk.size);
        const localZ = mod(worldZ, Chunk.size);

        chunk.setVoxel(localX, worldY, localZ, value);
    }

    getLoadedChunkCount(): number {
        return this.curChunksToLoad.size;
    }

    getCachedChunkCount(): number {
        return this.worldChunksMap.size;
    }
}
