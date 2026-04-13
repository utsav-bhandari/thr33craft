import * as THREE from "three";
import { AIR_BLOCK_ID } from "@/utils/constants";
import { getAtlasMaterial, getBlockGeometry } from "@lib/texture/block-loader";
import { Chunk } from "./Chunk";
import { Subchunk } from "./SubChunks";
import type { ChunkManager } from "./ChunkManager";

export class ChunkMeshManager {
    private readonly subchunkMeshes = new Map<
        Subchunk,
        Map<number, THREE.InstancedMesh>
    >();

    constructor(private readonly chunkManager: ChunkManager) {}

    rebuildChunkMeshes(chunk: Chunk): void {
        for (const subchunk of chunk.subchunks) {
            this.rebuildSubchunkMesh(chunk, subchunk);
        }
    }

    freeChunkMeshes(chunk: Chunk): void {
        for (const subchunk of chunk.subchunks) {
            const meshes = this.subchunkMeshes.get(subchunk);
            if (!meshes) {
                subchunk.dirty = true;
                continue;
            }

            for (const mesh of meshes.values()) {
                chunk.container.remove(mesh);
                mesh.dispose();
            }

            meshes.clear();
            this.subchunkMeshes.delete(subchunk);
            subchunk.dirty = true;
        }
    }

    private rebuildSubchunkMesh(chunk: Chunk, subchunk: Subchunk): void {
        if (!subchunk.dirty) return;

        const existingMeshes = this.subchunkMeshes.get(subchunk);
        if (existingMeshes) {
            for (const mesh of existingMeshes.values()) {
                chunk.container.remove(mesh);
                mesh.dispose();
            }
            existingMeshes.clear();
        }

        const visibleBlocks = new Map<
            number,
            Array<[number, number, number]>
        >();
        const subchunkWorldY = subchunk.yIndex * Subchunk.height;
        const chunkWorldX = chunk.getWorldX();
        const chunkWorldZ = chunk.getWorldZ();

        for (let x = 0; x < Chunk.size; x++) {
            for (let y = 0; y < Subchunk.height; y++) {
                for (let z = 0; z < Chunk.size; z++) {
                    const blockId = subchunk.getVoxelId(x, y, z);
                    if (blockId === AIR_BLOCK_ID) continue;

                    const worldX = chunkWorldX + x;
                    const worldY = subchunkWorldY + y;
                    const worldZ = chunkWorldZ + z;

                    if (this.isHidden(worldX, worldY, worldZ)) {
                        continue;
                    }

                    if (!visibleBlocks.has(blockId)) {
                        visibleBlocks.set(blockId, []);
                    }

                    visibleBlocks.get(blockId)!.push([x, y, z]);
                }
            }
        }

        const material = getAtlasMaterial();
        const localY = subchunk.yIndex * Subchunk.height;
        const dummyMatrix = new THREE.Matrix4();
        const nextMeshes = new Map<number, THREE.InstancedMesh>();

        visibleBlocks.forEach((positions, blockId) => {
            const geometry = getBlockGeometry(blockId);
            const instancedMesh = new THREE.InstancedMesh(
                geometry,
                material,
                positions.length,
            );

            instancedMesh.position.set(0, localY, 0);

            positions.forEach((pos, index) => {
                dummyMatrix.setPosition(
                    pos[0] + 0.5,
                    pos[1] + 0.5,
                    pos[2] + 0.5,
                );
                instancedMesh.setMatrixAt(index, dummyMatrix);
            });

            instancedMesh.instanceMatrix.needsUpdate = true;
            chunk.container.add(instancedMesh);
            nextMeshes.set(blockId, instancedMesh);
        });

        this.subchunkMeshes.set(subchunk, nextMeshes);
        subchunk.dirty = false;
    }

    private isHidden(worldX: number, worldY: number, worldZ: number): boolean {
        return (
            this.chunkManager.isVoxelSolidForMeshing(
                worldX,
                worldY + 1,
                worldZ,
            ) &&
            this.chunkManager.isVoxelSolidForMeshing(
                worldX,
                worldY - 1,
                worldZ,
            ) &&
            this.chunkManager.isVoxelSolidForMeshing(
                worldX + 1,
                worldY,
                worldZ,
            ) &&
            this.chunkManager.isVoxelSolidForMeshing(
                worldX - 1,
                worldY,
                worldZ,
            ) &&
            this.chunkManager.isVoxelSolidForMeshing(
                worldX,
                worldY,
                worldZ + 1,
            ) &&
            this.chunkManager.isVoxelSolidForMeshing(worldX, worldY, worldZ - 1)
        );
    }
}
