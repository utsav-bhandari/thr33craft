import { WORLD_PARAMS } from "@config";
import * as THREE from "three";

export class Chunk {
    static size = WORLD_PARAMS.CHUNK_SIZE ?? 16;
    // container is the THREE.Group that holds all the meshes for this chunk and is positioned at the chunk's world coordinates
    container: THREE.Group<THREE.Object3DEventMap>;
    chunkX: number;
    chunkZ: number;

    constructor(x: number, z: number) {
        this.container = new THREE.Group();
        this.container.name = `Chunk_${x}_${z}`;
        this.chunkX = x;
        this.chunkZ = z;
        this.setPosition();
    }

    static worldToChunkCoords(
        worldX: number,
        worldZ: number,
    ): { chunkX: number; chunkZ: number } {
        const chunkX = Math.floor(worldX / Chunk.size);
        const chunkZ = Math.floor(worldZ / Chunk.size);
        return { chunkX, chunkZ };
    }

    getWorldX(): number {
        return this.chunkX * Chunk.size;
    }

    getWorldZ(): number {
        return this.chunkZ * Chunk.size;
    }

    setPosition(): void {
        this.container.position.set(this.getWorldX(), 0, this.getWorldZ());
    }
}
