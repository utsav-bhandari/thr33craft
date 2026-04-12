import { Subchunk } from "./SubChunks";
import * as THREE from "three";
import { BlockId } from "@project-types";

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

    generateMeshes(): void {
        for (const sub of this.subchunks) {
            sub.generateMesh(this.container);
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

    setVoxel(x: number, y: number, z: number, blockId: BlockId): void {
        const sub = this.getSubchunk(y);
        sub.setVoxel(x, y % Subchunk.height, z, blockId);

        // If the initial terrain generation is done, and a block changes,
        // it means the player (or an in-game event) did it
        if (this.isDataGenerated) {
            this.setModified(true);
        }
    }

    setModified(value: boolean): void {
        this.isModified = value;
    }

    markDataAsGenerated(value: boolean): void {
        this.isDataGenerated = value;
    }

    freeSubchunkMeshes(): void {
        // Dispose of all subchunk resources
        for (const sub of this.subchunks) {
            for (const mesh of sub.instancedMeshes.values()) {
                this.container.remove(mesh);
                mesh.dispose();
            }
            sub.instancedMeshes.clear();

            // When the meshes are destroyed, the subchunk must
            // be marked dirty so it knows to rebuild the 3D meshes if
            // the player ever walks back to this area.
            sub.dirty = true;
        }
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
