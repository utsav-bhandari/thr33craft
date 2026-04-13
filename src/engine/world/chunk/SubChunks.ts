import { BlockId } from "@project-types";
import { Chunk } from "./Chunk";

export class Subchunk {
    static height = 16;
    size: number;
    voxels: Uint16Array;
    dirty: boolean;

    constructor(public yIndex: number) {
        this.yIndex = yIndex;

        this.size = Chunk.size;

        this.voxels = new Uint16Array(this.size * Subchunk.height * this.size); // 16 * 16 * 16 = 4096
        this.dirty = true;
    }

    index(x: number, y: number, z: number): number {
        // for a given (x, y, z) coordinate in the subchunk, we calculate a single index into the 1D voxels array
        // we want x to change the fastest, then z, then y
        // so we can think of the voxels array as being organized into layers of xz planes, where each layer corresponds to a different y value
        return x + this.size * (z + this.size * y);
    }

    getVoxelId(x: number, y: number, z: number): BlockId {
        return this.voxels[this.index(x, y, z)];
    }

    setVoxel(x: number, y: number, z: number, blockId: BlockId): void {
        this.voxels[this.index(x, y, z)] = blockId;
        this.dirty = true;
    }

    markDirty(): void {
        this.dirty = true;
    }
}
