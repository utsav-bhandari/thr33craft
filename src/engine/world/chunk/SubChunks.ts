import * as THREE from "three";
import { Chunk } from "./Chunk";
import { getAtlasMaterial, getBlockGeometry } from "@lib/texture/block-loader";
import { BlockId } from "@project-types";
import { AIR_BLOCK_ID } from "@/init/block-registry";

export class Subchunk {
    static height = 16;
    size: number;
    voxels: Uint16Array;
    dirty: boolean;
    instancedMeshes: Map<number, THREE.InstancedMesh>;

    constructor(public yIndex: number) {
        this.yIndex = yIndex;

        this.size = Chunk.size;

        this.voxels = new Uint16Array(this.size * Subchunk.height * this.size); // 16 * 16 * 16 = 4096

        this.instancedMeshes = new Map();
        this.dirty = true;
    }

    // Pseudo-code for your sub-chunk generation loop
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

    index(x: number, y: number, z: number): number {
        // for a given (x, y, z) coordinate in the subchunk, we calculate a single index into the 1D voxels array
        // we want x to change the fastest, then z, then y
        // so we can think of the voxels array as being organized into layers of xz planes, where each layer corresponds to a different y value
        return x + this.size * (z + this.size * y);
    }

    isVoxelSolid(x: number, y: number, z: number): boolean {
        // If the coordinate is outside this subchunk, assume it's air (false).
        // TODO: update this to query neighboring Subchunks.
        if (
            x < 0 ||
            x >= this.size ||
            y < 0 ||
            y >= Subchunk.height ||
            z < 0 ||
            z >= this.size
        ) {
            return false;
        }

        const blockId = this.getVoxelId(x, y, z);
        return blockId !== AIR_BLOCK_ID;
    }

    getVoxelId(x: number, y: number, z: number): number {
        return this.voxels[this.index(x, y, z)];
    }

    // TODO: add neighbor subchunk dirty flagging for voxels on the edge of the subchunk
    setVoxel(x: number, y: number, z: number, blockId: BlockId): void {
        this.voxels[this.index(x, y, z)] = blockId;
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
                dummyMatrix.setPosition(pos[0], pos[1], pos[2]);
                instancedMesh.setMatrixAt(index, dummyMatrix);
            });

            instancedMesh.instanceMatrix.needsUpdate = true;

            // Add to chunk container and save to map for future cleanup
            container.add(instancedMesh);
            this.instancedMeshes.set(blockId, instancedMesh);
        });

        this.dirty = false;
    }
}
