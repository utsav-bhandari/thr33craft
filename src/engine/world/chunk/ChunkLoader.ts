import * as THREE from "three";
import type { BlockId } from "@project-types";
import { Chunk } from "./Chunk";
import { WORLD_PARAMS } from "@/utils/config";
import { ChunkManager } from "./ChunkManager";
import { ChunkLoadPlanner } from "./ChunkLoadPlanner";
import { ChunkSceneController } from "./ChunkSceneController";

export class ChunkLoader {
    private readonly chunkManager: ChunkManager;
    private readonly loadPlanner: ChunkLoadPlanner;
    private readonly sceneController: ChunkSceneController;
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

    /** Builds and attaches at most one queued chunk per tick. */
    processBuildQueue(scene: THREE.Scene): void {
        const chunkCoords = this.loadPlanner.dequeueChunkToBuild();
        if (!chunkCoords) return;

        const chunkToBuild = this.chunkManager.getOrCreateChunk(
            chunkCoords.chunkX,
            chunkCoords.chunkZ,
        );
        this.chunkManager.ensureChunkGenerated(chunkToBuild);
        this.chunkManager.rebuildChunkMeshes(chunkToBuild);
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
        }
    }

    setVoxelWorld(
        worldX: number,
        worldY: number,
        worldZ: number,
        blockId: number,
    ) {
        const chunk = this.chunkManager.setVoxelWorld(
            worldX,
            worldY,
            worldZ,
            blockId,
        );
        this.chunkManager.rebuildChunkMeshes(chunk);
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
