import { WORLD_PARAMS } from "@utils/config";
import * as THREE from "three";

export class Chunk {
    static size = 16;
    static minY = -64;
    static maxY = 128;
    // data: Uint16Array;
    // isEmpty: boolean;
    // container is the THREE.Group that holds all the meshes for this chunk and is positioned at the chunk's world coordinates
    container: THREE.Group<THREE.Object3DEventMap>;
    chunkX: number;
    chunkZ: number;
    // chunkY: number;

    constructor(x: number, z: number) {
        this.container = new THREE.Group();
        this.container.name = `Chunk_${x}_${z}`;
        this.chunkX = x;
        this.chunkZ = z;
        this.setPosition();
        // this.data = new Uint16Array(4096); // 16 * 16 * 16
        // this.mesh = null
        // this.isEmpty = true;
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

    getKey(): string {
        return `${this.chunkX},${this.chunkZ}`;
    }
}
