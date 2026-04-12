import * as THREE from "three";
import { Chunk } from "./Chunk";
import { ChunkManager } from "./ChunkManager";

export class ChunkLoadPlanner {
    private activeChunks: Set<Chunk> = new Set();
    private buildQueue: Chunk[] = [];

    constructor(private readonly chunkManager: ChunkManager) {}

    refreshVisibleChunks(
        scene: THREE.Scene,
        centerX: number,
        centerZ: number,
        radius: number,
    ): Chunk[] {
        const nextActiveChunks = this.collectChunksWithinRadius(
            centerX,
            centerZ,
            radius,
        );

        const chunksToRemove = [...this.activeChunks].filter(
            (chunk) => !nextActiveChunks.has(chunk),
        );

        this.activeChunks = nextActiveChunks;
        this.buildQueue = this.getChunksWithinRadiusSorted(
            centerX,
            centerZ,
            radius,
        ).filter((chunk) => chunk.container.parent !== scene);

        return chunksToRemove;
    }

    dequeueChunkToBuild(): Chunk | undefined {
        return this.buildQueue.shift();
    }

    getLoadedChunkCount(): number {
        return this.activeChunks.size;
    }

    private collectChunksWithinRadius(
        centerX: number,
        centerZ: number,
        radius: number,
    ): Set<Chunk> {
        const chunks = new Set<Chunk>();

        for (let x = centerX - radius; x <= centerX + radius; x++) {
            for (let z = centerZ - radius; z <= centerZ + radius; z++) {
                chunks.add(this.chunkManager.getOrCreateChunk(x, z));
            }
        }

        return chunks;
    }

    private getChunksWithinRadiusSorted(
        centerX: number,
        centerZ: number,
        radius: number,
    ): Chunk[] {
        return Array.from(this.activeChunks)
            .filter(
                (chunk) =>
                    this.getChunkDistance(chunk, centerX, centerZ) <= radius,
            )
            .sort((a, b) => {
                const distanceA = this.getChunkDistance(a, centerX, centerZ);
                const distanceB = this.getChunkDistance(b, centerX, centerZ);
                return distanceA - distanceB;
            });
    }

    private getChunkDistance(
        chunk: Chunk,
        centerX: number,
        centerZ: number,
    ): number {
        return Math.max(
            Math.abs(chunk.chunkX - centerX),
            Math.abs(chunk.chunkZ - centerZ),
        );
    }
}
