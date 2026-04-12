import * as THREE from "three";
import { Chunk } from "./Chunk";
import { getAtlasMaterial, getBlockGeometry } from "@lib/texture/block-loader";
import { BlockId } from "@project-types";
import { AIR_BLOCK_ID } from "@/utils/constants";

export enum NeighborDirection {
    POS_X,
    NEG_X,
    POS_Y,
    NEG_Y,
    POS_Z,
    NEG_Z,
}

export class Subchunk {
    static height = 16;
    size: number;
    voxels: Uint16Array;
    dirty: boolean;
    instancedMeshes: Map<number, THREE.InstancedMesh>;
    chunk: Chunk;

    constructor(
        public yIndex: number,
        chunk: Chunk,
    ) {
        this.yIndex = yIndex;
        this.chunk = chunk;

        this.size = Chunk.size;

        this.voxels = new Uint16Array(this.size * Subchunk.height * this.size); // 16 * 16 * 16 = 4096

        this.instancedMeshes = new Map();
        this.dirty = true;
    }

    generateMesh(container: THREE.Object3D): void {
        if (!this.dirty) return;

        // Clean up old meshes from the parent container before rebuilding
        this.instancedMeshes.forEach((mesh) => {
            container.remove(mesh);
            mesh.dispose();
        });
        this.instancedMeshes.clear();

        // first pass find visible blocks and group their local coordinates by BlockId
        const visibleBlocks = new Map<
            number,
            Array<[number, number, number]>
        >();

        for (let x = 0; x < this.size; x++) {
            for (let y = 0; y < Subchunk.height; y++) {
                for (let z = 0; z < this.size; z++) {
                    const blockId = this.getVoxelId(x, y, z);

                    if (blockId === AIR_BLOCK_ID) continue;

                    if (!this.isBlockHidden(x, y, z)) {
                        if (!visibleBlocks.has(blockId)) {
                            visibleBlocks.set(blockId, []);
                        }
                        // Store LOCAL coordinates (0 to 15)
                        visibleBlocks.get(blockId)!.push([x, y, z]);
                    }
                }
            }
        }

        // second pass create the InstancedMeshes
        const material = getAtlasMaterial();
        const localY = this.yIndex * Subchunk.height;
        const dummyMatrix = new THREE.Matrix4();

        visibleBlocks.forEach((positions, blockId) => {
            const count = positions.length;

            const geometry = getBlockGeometry(blockId);
            const instancedMesh = new THREE.InstancedMesh(
                geometry,
                material,
                count,
            );

            // Position each subchunk mesh in chunk-local space.
            instancedMesh.position.set(0, localY, 0);

            // Apply local translations to each instance
            positions.forEach((pos, index) => {
                // BoxGeometry is centered at origin, so offset by 0.5 to align voxel
                // coordinates to cell corners in world space.
                dummyMatrix.setPosition(
                    pos[0] + 0.5,
                    pos[1] + 0.5,
                    pos[2] + 0.5,
                );
                instancedMesh.setMatrixAt(index, dummyMatrix);
            });

            instancedMesh.instanceMatrix.needsUpdate = true;

            // Add to chunk container and save to map for future cleanup
            container.add(instancedMesh);
            this.instancedMeshes.set(blockId, instancedMesh);
        });

        this.dirty = false;
    }

    isBlockHidden(x: number, y: number, z: number): boolean {
        return (
            this.isVoxelSolid(x, y + 1, z) &&
            this.isVoxelSolid(x, y - 1, z) &&
            this.isVoxelSolid(x + 1, y, z) &&
            this.isVoxelSolid(x - 1, y, z) &&
            this.isVoxelSolid(x, y, z + 1) &&
            this.isVoxelSolid(x, y, z - 1)
        );
    }

    getNeighborSubchunk(direction: NeighborDirection): Subchunk | null {
        let offsetX = 0;
        let offsetY = 0;
        let offsetZ = 0;

        switch (direction) {
            case NeighborDirection.POS_X:
                offsetX = 1;
                break;
            case NeighborDirection.NEG_X:
                offsetX = -1;
                break;
            case NeighborDirection.POS_Y:
                offsetY = 1;
                break;
            case NeighborDirection.NEG_Y:
                offsetY = -1;
                break;
            case NeighborDirection.POS_Z:
                offsetZ = 1;
                break;
            case NeighborDirection.NEG_Z:
                offsetZ = -1;
                break;
            default:
                return null;
        }

        if (offsetY !== 0) {
            const neighborYIndex = this.yIndex + offsetY;
            if (
                neighborYIndex < 0 ||
                neighborYIndex >= Chunk.height / Subchunk.height
            ) {
                return null;
            }
            return this.chunk.getSubchunk(neighborYIndex * Subchunk.height);
        }

        const neighborChunk = this.chunk.getNeighborChunk(offsetX, offsetZ);
        return (
            neighborChunk?.getSubchunk(this.yIndex * Subchunk.height) ?? null
        );
    }

    index(x: number, y: number, z: number): number {
        // for a given (x, y, z) coordinate in the subchunk, we calculate a single index into the 1D voxels array
        // we want x to change the fastest, then z, then y
        // so we can think of the voxels array as being organized into layers of xz planes, where each layer corresponds to a different y value
        return x + this.size * (z + this.size * y);
    }

    getVoxelId(x: number, y: number, z: number): number {
        return this.voxels[this.index(x, y, z)];
    }

    isVoxelSolid(x: number, y: number, z: number): boolean {
        if (
            x >= 0 &&
            x < this.size &&
            y >= 0 &&
            y < Subchunk.height &&
            z >= 0 &&
            z < this.size
        ) {
            const blockId = this.getVoxelId(x, y, z);
            return blockId !== AIR_BLOCK_ID;
        }

        // this function is currently used for block-culling with 6-neighbor checks,
        // so at most one axis should be outside bounds at a time.
        const outOfBoundsAxisCount =
            Number(x < 0 || x >= this.size) +
            Number(y < 0 || y >= Subchunk.height) +
            Number(z < 0 || z >= this.size);

        if (outOfBoundsAxisCount !== 1) {
            return false;
        }

        if (x < 0) {
            const neighbor = this.getNeighborSubchunk(NeighborDirection.NEG_X);
            return neighbor?.isVoxelSolid(this.size - 1, y, z) ?? false;
        }

        if (x >= this.size) {
            const neighbor = this.getNeighborSubchunk(NeighborDirection.POS_X);
            return neighbor?.isVoxelSolid(0, y, z) ?? false;
        }

        if (y < 0) {
            const neighbor = this.getNeighborSubchunk(NeighborDirection.NEG_Y);
            return neighbor?.isVoxelSolid(x, Subchunk.height - 1, z) ?? false;
        }

        if (y >= Subchunk.height) {
            const neighbor = this.getNeighborSubchunk(NeighborDirection.POS_Y);
            return neighbor?.isVoxelSolid(x, 0, z) ?? false;
        }

        if (z < 0) {
            const neighbor = this.getNeighborSubchunk(NeighborDirection.NEG_Z);
            return neighbor?.isVoxelSolid(x, y, this.size - 1) ?? false;
        }

        const neighbor = this.getNeighborSubchunk(NeighborDirection.POS_Z);
        return neighbor?.isVoxelSolid(x, y, 0) ?? false;
    }

    private markNeighborSubchunksDirtyForEdgeVoxel(
        x: number,
        y: number,
        z: number,
    ): void {
        const neighboringDirections: NeighborDirection[] = [];

        if (x === 0) neighboringDirections.push(NeighborDirection.NEG_X);
        if (x === this.size - 1)
            neighboringDirections.push(NeighborDirection.POS_X);
        if (y === 0) neighboringDirections.push(NeighborDirection.NEG_Y);
        if (y === Subchunk.height - 1) {
            neighboringDirections.push(NeighborDirection.POS_Y);
        }
        if (z === 0) neighboringDirections.push(NeighborDirection.NEG_Z);
        if (z === this.size - 1)
            neighboringDirections.push(NeighborDirection.POS_Z);

        for (const direction of neighboringDirections) {
            const neighbor = this.getNeighborSubchunk(direction);
            if (neighbor) {
                neighbor.dirty = true;
            }
        }
    }

    setVoxel(x: number, y: number, z: number, blockId: BlockId): void {
        this.voxels[this.index(x, y, z)] = blockId;
        this.dirty = true;
        this.markNeighborSubchunksDirtyForEdgeVoxel(x, y, z);
    }
}
