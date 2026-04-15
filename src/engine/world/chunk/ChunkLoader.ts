import * as THREE from "three";
import type { BlockId } from "@project-types";
import { Chunk } from "@/engine/world/chunk/Chunk";
import { WORLD_PARAMS } from "@/utils/config";
import { ChunkManager } from "@/engine/world/chunk/ChunkManager";
import { ChunkLoadPlanner } from "@/engine/world/chunk/ChunkLoadPlanner";
import { ChunkSceneController } from "@/engine/world/chunk/ChunkSceneController";

export class ChunkLoader {
    private readonly chunkManager: ChunkManager;
    private readonly loadPlanner: ChunkLoadPlanner;
    private readonly sceneController: ChunkSceneController;
    private readonly pendingChunkRefreshKeys = new Set<string>();
    private readonly pendingChunkRefreshQueue: string[] = [];
    // Start at interval so first update triggers immediate chunk refresh.
    private framesSinceLastLoad: number = WORLD_PARAMS.CHUNK_LOAD_INTERVAL;

    constructor() {
        this.chunkManager = new ChunkManager();
        this.loadPlanner = new ChunkLoadPlanner(this.chunkManager);
        this.sceneController = new ChunkSceneController();
    }

    /**
     * Advances chunk streaming around the player and updates debug wireframe.
     * Runs one chunk build per frame via processBuildQueue.
     */
    updateWorldChunks(scene: THREE.Scene, playerPosition: THREE.Vector3): void {
        const { chunkX, chunkZ } = Chunk.worldToChunkCoords(
            playerPosition.x,
            playerPosition.z,
        );

        if (this.shouldRefreshVisibleChunks()) {
            this.refreshVisibleChunks(scene, chunkX, chunkZ);
            this.framesSinceLastLoad = 0;
        } else {
            this.framesSinceLastLoad++;
        }

        this.processBuildQueue(scene);

        this.sceneController.updateCurrentChunkWireframe(scene, chunkX, chunkZ);
    }

    private shouldRefreshVisibleChunks(): boolean {
        return this.framesSinceLastLoad >= WORLD_PARAMS.CHUNK_LOAD_INTERVAL;
    }

    /** Refreshes active chunk set and detaches chunks that left range. */
    private refreshVisibleChunks(
        scene: THREE.Scene,
        chunkX: number,
        chunkZ: number,
    ): void {
        const radius = WORLD_PARAMS.RENDER_DISTANCE;
        const chunksToRemove = this.loadPlanner.refreshVisibleChunks(
            scene,
            chunkX,
            chunkZ,
            radius,
        );
        this.purgeUnmodifiedChunksOutsideRadius(scene, chunksToRemove);
    }

    /** Builds one chunk or processes one deferred refresh per tick. */
    processBuildQueue(scene: THREE.Scene): void {
        const chunkCoords = this.loadPlanner.dequeueChunkToBuild();
        if (!chunkCoords) {
            this.processPendingChunkRefresh();
            return;
        }

        const chunkToBuild = this.chunkManager.getOrCreateChunk(
            chunkCoords.chunkX,
            chunkCoords.chunkZ,
        );
        const chunksNeedingNeighborRefresh =
            this.chunkManager.ensureChunkGenerated(chunkToBuild);
        this.chunkManager.rebuildChunkMeshes(chunkToBuild);
        this.enqueueChunkRefreshes(chunksNeedingNeighborRefresh);

        this.sceneController.attachChunk(scene, chunkToBuild);
    }

    /** Removes out-of-range chunks and releases GPU memory when possible. */
    private purgeUnmodifiedChunksOutsideRadius(
        scene: THREE.Scene,
        chunksToBeRemoved: Chunk[],
    ): void {
        for (const chunk of chunksToBeRemoved) {
            // Remove from scene graph.
            this.sceneController.removeChunk(scene, chunk);

            // Dispose GPU-side mesh resources.
            this.chunkManager.freeChunkMeshes(chunk);

            // Keep modified chunk data in RAM; drop untouched chunks.
            if (!chunk.isModified) {
                this.chunkManager.deleteChunk(chunk);
            }

            this.pendingChunkRefreshKeys.delete(chunk.getKey());
        }
    }

    private enqueueChunkRefreshes(chunks: Chunk[]): void {
        for (const chunk of chunks) {
            const chunkKey = chunk.getKey();

            if (this.pendingChunkRefreshKeys.has(chunkKey)) {
                continue;
            }

            this.pendingChunkRefreshKeys.add(chunkKey);
            this.pendingChunkRefreshQueue.push(chunkKey);
        }
    }

    private processPendingChunkRefresh(): void {
        const chunkKey = this.pendingChunkRefreshQueue.shift();
        if (!chunkKey) {
            return;
        }

        this.pendingChunkRefreshKeys.delete(chunkKey);

        const [chunkX, chunkZ] = chunkKey
            .split(",")
            .map((value) => Number.parseInt(value, 10));
        const chunk = this.chunkManager.getChunkIfExists(chunkX, chunkZ);
        if (!chunk?.isDataGenerated) {
            return;
        }

        this.chunkManager.rebuildChunkMeshes(chunk);
    }

    setVoxelWorld(
        worldX: number,
        worldY: number,
        worldZ: number,
        blockId: number,
    ) {
        const chunks = this.chunkManager.setVoxelWorld(
            worldX,
            worldY,
            worldZ,
            blockId,
        );

        for (const chunk of chunks) {
            this.chunkManager.rebuildChunkMeshes(chunk);
        }
    }

    isVoxelSolidWorld(worldX: number, worldY: number, worldZ: number): boolean {
        return this.chunkManager.isVoxelSolidWorld(worldX, worldY, worldZ);
    }

    getVoxelIdWorld(
        worldX: number,
        worldY: number,
        worldZ: number,
    ): BlockId | null {
        return this.chunkManager.getVoxelIdWorld(worldX, worldY, worldZ);
    }

    rotateVoxelWorld(worldX: number, worldY: number, worldZ: number): boolean {
        const didRotate = this.chunkManager.rotateVoxelWorld(
            worldX,
            worldY,
            worldZ,
        );

        if (!didRotate) {
            return false;
        }

        const { chunkX, chunkZ } = Chunk.worldToChunkCoords(worldX, worldZ);
        const chunk = this.chunkManager.getChunkIfExists(chunkX, chunkZ);
        if (!chunk) {
            return false;
        }

        this.chunkManager.rebuildChunkMeshes(chunk);
        return true;
    }

    getLoadedChunkCount(): number {
        return this.loadPlanner.getLoadedChunkCount();
    }

    getCachedChunkCount(): number {
        return this.chunkManager.getChunkCount();
    }

    toggleChunkWireframes(): void {
        this.sceneController.toggleChunkWireframes();
    }

    setWireframeVisibility(visible: boolean): void {
        this.sceneController.setWireframeVisibility(visible);
    }
}
