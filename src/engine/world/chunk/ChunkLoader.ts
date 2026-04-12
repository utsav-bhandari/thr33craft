import * as THREE from "three";
import { Chunk } from "./Chunk";
import { WORLD_PARAMS } from "@/utils/config";
import { ChunkManager } from "./ChunkManager";
import { ChunkLoadPlanner } from "./ChunkLoadPlanner";
import { ChunkSceneController } from "./ChunkSceneController";

export class ChunkLoader {
    private readonly chunkManager: ChunkManager;
    private readonly loadPlanner: ChunkLoadPlanner;
    private readonly sceneController: ChunkSceneController;
    // Initially set framesSinceLastLoad to the chunk load interval to allow
    // immediate loading of chunks when the game starts.
    private framesSinceLastLoad: number = WORLD_PARAMS.CHUNK_LOAD_INTERVAL;

    constructor() {
        this.chunkManager = new ChunkManager();
        this.loadPlanner = new ChunkLoadPlanner(this.chunkManager);
        this.sceneController = new ChunkSceneController();
    }

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

    processBuildQueue(scene: THREE.Scene): void {
        const chunkToBuild = this.loadPlanner.dequeueChunkToBuild();
        if (!chunkToBuild) return;

        this.chunkManager.ensureChunkGenerated(chunkToBuild);
        this.chunkManager.rebuildChunkMeshes(chunkToBuild);
        this.sceneController.attachChunk(scene, chunkToBuild);
    }

    private purgeUnmodifiedChunksOutsideRadius(
        scene: THREE.Scene,
        chunksToBeRemoved: Chunk[],
    ): void {
        for (const chunk of chunksToBeRemoved) {
            // remove from the Scene graph
            this.sceneController.removeChunk(scene, chunk);

            // free the VRAM/WebGL Meshes
            this.chunkManager.freeChunkMeshes(chunk);

            // If the user touched it, keep the 1D arrays in RAM
            // If it's untouched, delete it to save RAM.
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
