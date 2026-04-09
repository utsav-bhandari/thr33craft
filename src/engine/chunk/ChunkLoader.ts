import * as THREE from "three";
import { Chunk } from "./Chunk";
import { WORLD_PARAMS } from "@config";
import { createInstancedFill } from "@engine/generators/fill";
import { getAtlasMaterial, getBlockGeometry } from "@libtexture/block-loader";
import { debug } from "@logger";

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

        this.updateCurrentChunksList(scene, {
            chunkX,
            chunkZ,
        });

        this.framesSinceLastLoad = 0;
        this.loadChunks(scene, this.curChunksToLoad);
    }

    updateCurrentChunksList(
        scene: THREE.Scene,
        { chunkX, chunkZ }: { chunkX: number; chunkZ: number },
    ): void {
        const radius = WORLD_PARAMS.RENDER_DISTANCE;

        for (let x = chunkX - radius; x <= chunkX + radius; x++) {
            for (let z = chunkZ - radius; z <= chunkZ + radius; z++) {
                const chunkKey = `${x},${z}`;
                const chunk = this.getOrCreateChunk(chunkKey);
                this.curChunksToLoad.add(chunk);
            }
        }

        const chunksToLoad = this.getChunksWithinRadiusSorted(
            chunkX,
            chunkZ,
            radius,
        );

        this.removeChunksOutsideRadius(scene, chunksToLoad);
        this.curChunksToLoad = new Set(chunksToLoad);
    }

    loadChunks(scene: THREE.Scene, chunks: Set<Chunk>): void {
        debug(chunks);
        const geometry = getBlockGeometry(WORLD_PARAMS.GROUND_BLOCK_NAME);
        const material = getAtlasMaterial();

        for (const chunk of chunks) {
            // Only add the chunk to the scene if it hasn't been added already.
            if (chunk.container.children.length === 0) {
                const chunkMesh = createInstancedFill({
                    geometry,
                    material,
                    blockSize: WORLD_PARAMS.BLOCK_SIZE,
                    startX: 0,
                    startZ: 0,
                    endX: Chunk.size,
                    endZ: Chunk.size,
                    startY: -2,
                    endY: 0,
                });

                chunk.container.add(chunkMesh);
            }
            // This check ensures that we only modify the scene graph when necessary, which can
            // help maintain smooth performance as the player moves around and chunks are loaded and unloaded.
            if (chunk.container.parent !== scene) {
                scene.add(chunk.container);
            }
        }
    }

    private removeChunksOutsideRadius(
        scene: THREE.Scene,
        chunksToLoad: Chunk[],
    ) {
        const allowedSet = new Set(chunksToLoad);

        for (const chunk of this.curChunksToLoad) {
            if (!allowedSet.has(chunk)) {
                this.curChunksToLoad.delete(chunk);
                scene.remove(chunk.container);
            }
        }
    }

    private getChunksWithinRadiusSorted(
        centerX: number,
        centerZ: number,
        radius: number,
    ): Chunk[] {
        return Array.from(this.curChunksToLoad)
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

    getOrCreateChunk(chunkKey: string): Chunk {
        const chunk = this.worldChunksMap.get(chunkKey);
        if (!chunk) {
            const [chunkX, chunkZ] = chunkKey.split(",").map(Number);
            return this.createChunkData(chunkX, chunkZ);
        }
        return chunk;
    }

    createChunkData(chunkX: number, chunkZ: number): Chunk {
        const chunk = new Chunk(chunkX, chunkZ);
        const chunkKey = chunk.getKey();
        this.worldChunksMap.set(chunkKey, chunk);
        return chunk;
    }
}
