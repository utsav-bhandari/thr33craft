import * as THREE from "three";
import { Chunk } from "@/engine/world/chunk/Chunk";
import { ChunkManager } from "@/engine/world/chunk/ChunkManager";

export class ChunkLoadPlanner {
    private activeChunkKeys: Set<string> = new Set();
    private buildQueue: Array<{ chunkX: number; chunkZ: number }> = [];

    constructor(private readonly chunkManager: ChunkManager) {}

    /**
     * Recomputes active chunks around the player and rebuild queue ordering.
     * Returns chunks that left the active set and should be detached/purged.
     */
    refreshVisibleChunks(
        scene: THREE.Scene,
        centerX: number,
        centerZ: number,
        radius: number,
    ): Chunk[] {
        const nextActiveChunkKeys = this.collectChunkKeysWithinRadius(
            centerX,
            centerZ,
            radius,
        );

        const chunksToRemove: Chunk[] = [];
        for (const chunkKey of this.activeChunkKeys) {
            if (nextActiveChunkKeys.has(chunkKey)) {
                continue;
            }

            const { chunkX, chunkZ } = this.parseChunkKey(chunkKey);
            const chunk = this.chunkManager.getChunkIfExists(chunkX, chunkZ);
            if (chunk) {
                chunksToRemove.push(chunk);
            }
        }

        this.activeChunkKeys = nextActiveChunkKeys;

        this.buildQueue = this.getChunkCoordsWithinRadiusSorted(
            centerX,
            centerZ,
            radius,
        ).filter(({ chunkX, chunkZ }) => {
            const chunk = this.chunkManager.getChunkIfExists(chunkX, chunkZ);
            // Only include chunks that exist but aren't yet attached to the scene because attached chunks will be up-to-date and don't need to be built.
            return !chunk || chunk.container.parent !== scene;
        });

        return chunksToRemove;
    }

    /** Returns the next not-yet-attached chunk to build for this frame. */
    dequeueChunkToBuild(): { chunkX: number; chunkZ: number } | undefined {
        return this.buildQueue.shift();
    }

    getLoadedChunkCount(): number {
        return this.activeChunkKeys.size;
    }

    /** Collects chunk keys in a square radius around the center chunk. */
    private collectChunkKeysWithinRadius(
        centerX: number,
        centerZ: number,
        radius: number,
    ): Set<string> {
        const chunkKeys = new Set<string>();

        for (let x = centerX - radius; x <= centerX + radius; x++) {
            for (let z = centerZ - radius; z <= centerZ + radius; z++) {
                chunkKeys.add(this.getChunkKey(x, z));
            }
        }

        return chunkKeys;
    }

    /** Returns chunk coordinates sorted nearest-first for stable build priority. */
    private getChunkCoordsWithinRadiusSorted(
        centerX: number,
        centerZ: number,
        radius: number,
    ): Array<{ chunkX: number; chunkZ: number }> {
        const chunkCoords = Array.from(this.activeChunkKeys, (chunkKey) =>
            this.parseChunkKey(chunkKey),
        );

        return chunkCoords
            .filter(
                ({ chunkX, chunkZ }) =>
                    this.getChunkDistance(chunkX, chunkZ, centerX, centerZ) <=
                    radius,
            )
            .sort((a, b) => {
                const distanceA = this.getChunkDistance(
                    a.chunkX,
                    a.chunkZ,
                    centerX,
                    centerZ,
                );
                const distanceB = this.getChunkDistance(
                    b.chunkX,
                    b.chunkZ,
                    centerX,
                    centerZ,
                );
                return distanceA - distanceB;
            });
    }

    /** Uses Chebyshev distance in chunk space. */
    private getChunkDistance(
        chunkX: number,
        chunkZ: number,
        centerX: number,
        centerZ: number,
    ): number {
        return Math.max(Math.abs(chunkX - centerX), Math.abs(chunkZ - centerZ));
    }

    private getChunkKey(chunkX: number, chunkZ: number): string {
        return `${chunkX},${chunkZ}`;
    }

    private parseChunkKey(chunkKey: string): {
        chunkX: number;
        chunkZ: number;
    } {
        const [chunkX, chunkZ] = chunkKey
            .split(",")
            .map((value) => Number.parseInt(value, 10));

        return { chunkX, chunkZ };
    }
}
