import * as THREE from "three";
import type { FillRegionOptions } from "@project-types";

function getBlockCount(span: number, blockSize: number): number {
    return Math.ceil(span / blockSize);
}

export function createInstancedFill({
    geometry,
    material,
    blockSize,
    startX,
    startY,
    startZ,
    endX,
    endY = 0,
    endZ,
}: FillRegionOptions): THREE.InstancedMesh<
    THREE.BoxGeometry,
    THREE.MeshStandardMaterial
> {
    if (blockSize <= 0) {
        throw new Error("blockSize must be greater than zero.");
    }

    const xCount = getBlockCount(endX - startX, blockSize);
    const zCount = getBlockCount(endZ - startZ, blockSize);
    const yCount = getBlockCount(endY - startY, blockSize);
    const count = xCount * zCount * yCount;

    const instancedMesh = new THREE.InstancedMesh(geometry, material, count);
    const matrix = new THREE.Matrix4();
    const halfBlock = blockSize / 2;
    let instanceIndex = 0;

    for (let yi = 0; yi < yCount; yi++) {
        for (let z = 0; z < zCount; z++) {
            for (let x = 0; x < xCount; x++) {
                matrix.setPosition(
                    startX + x * blockSize + halfBlock,
                    startY + yi * blockSize + halfBlock,
                    startZ + z * blockSize + halfBlock,
                );
                instancedMesh.setMatrixAt(instanceIndex, matrix);
                instanceIndex += 1;
            }
        }
    }

    instancedMesh.instanceMatrix.needsUpdate = true;
    return instancedMesh;
}
