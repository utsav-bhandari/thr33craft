import * as THREE from "three";
import type { FillRegionOptions } from "@project-types";
import { getCachedGeometryAndMaterial } from "@/engine/blockLoader";

function getBlockCount(span: number, blockSize: number): number {
    return Math.ceil(span / blockSize);
}

export async function createInstancedFill({
    blockName,
    blockSize,
    startX,
    startZ,
    endX,
    endZ,
    startY,
    endY = 0,
}: FillRegionOptions): Promise<
    THREE.InstancedMesh<THREE.BoxGeometry, THREE.MeshStandardMaterial>
> {
    if (blockSize <= 0) {
        throw new Error("blockSize must be greater than zero.");
    }

    const { geometry, material } =
        await getCachedGeometryAndMaterial(blockName);

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
                console.log(
                    `Setting block at (x: ${x}, y: ${yi}, z: ${z}) - instance index: ${instanceIndex}`,
                );
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
