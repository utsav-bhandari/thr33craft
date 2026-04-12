import { Subchunk } from "./SubChunks";
import * as THREE from "three";

export class Chunk {
    static size = 16;
    static height = 128;
    container: THREE.Group;
    isDataGenerated: boolean;
    isModified: boolean;
    subchunks: Subchunk[];
    subchunkCount: number;

    constructor(
        public chunkX: number,
        public chunkZ: number,
    ) {
        this.chunkX = chunkX;
        this.chunkZ = chunkZ;
        this.container = new THREE.Group();
        this.container.position.set(this.getWorldX(), 0, this.getWorldZ());
        this.isDataGenerated = false;
        this.isModified = false;
        this.subchunks = [];

        this.subchunkCount = Chunk.height / Subchunk.height;

        for (let i = 0; i < this.subchunkCount; i++) {
            this.subchunks[i] = new Subchunk(i);
        }
    }

    static worldToChunkCoords(
        worldX: number,
        worldZ: number,
    ): { chunkX: number; chunkZ: number } {
        const chunkX = Math.floor(worldX / Chunk.size);
        const chunkZ = Math.floor(worldZ / Chunk.size);
        return { chunkX, chunkZ };
    }

    getSubchunk(y: number): Subchunk {
        const index = Math.floor(y / Subchunk.height);
        return this.subchunks[index];
    }

    getWorldX(): number {
        return this.chunkX * Chunk.size;
    }

    getWorldZ(): number {
        return this.chunkZ * Chunk.size;
    }

    getKey(): string {
        return `${this.chunkX},${this.chunkZ}`;
    }
}
