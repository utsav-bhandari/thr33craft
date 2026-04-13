import * as THREE from "three";
import { Chunk } from "@/engine/world/chunk/Chunk";
import { Subchunk } from "@/engine/world/chunk/SubChunks";

export function createChunkWireframe(): THREE.LineSegments {
    const positions: number[] = [];
    const size = Chunk.size;
    const height = Chunk.height;
    const subchunkHeight = Subchunk.height;
    const subchunkCount = height / subchunkHeight;

    // Top and bottom grid lines
    for (let i = 0; i <= size; i++) {
        positions.push(0, 0, i, size, 0, i);
        positions.push(i, 0, 0, i, 0, size);
        positions.push(0, height, i, size, height, i);
        positions.push(i, height, 0, i, height, size);
    }

    // Vertical boundary rails along chunk edges
    for (let i = 0; i <= size; i++) {
        positions.push(i, 0, 0, i, height, 0);
        positions.push(i, 0, size, i, height, size);
        positions.push(0, 0, i, 0, height, i);
        positions.push(size, 0, i, size, height, i);
    }

    // Subchunk boundary grid planes at each vertical division
    for (let boundary = 1; boundary < subchunkCount; boundary++) {
        const y = boundary * subchunkHeight;
        for (let x = 0; x <= size; x++) {
            positions.push(x, y, 0, x, y, size);
        }
        for (let z = 0; z <= size; z++) {
            positions.push(0, y, z, size, y, z);
        }
    }

    // Horizontal edge lines at every unit height to form a visible ladder/grid on the sides
    for (let y = 0; y <= height; y++) {
        positions.push(0, y, 0, size, y, 0);
        positions.push(0, y, size, size, y, size);
        positions.push(0, y, 0, 0, y, size);
        positions.push(size, y, 0, size, y, size);
    }

    const geometry = new THREE.BufferGeometry();
    geometry.setAttribute(
        "position",
        new THREE.Float32BufferAttribute(positions, 3),
    );

    const material = new THREE.LineBasicMaterial({
        color: 0xff0000,
        transparent: true,
        opacity: 0.55,
        depthTest: true,
        depthWrite: false,
        polygonOffset: true,
        polygonOffsetFactor: -1,
        polygonOffsetUnits: -1,
    });

    const wireframe = new THREE.LineSegments(geometry, material);
    wireframe.renderOrder = 999;
    wireframe.visible = false;
    return wireframe;
}

export function setChunkWireframePosition(
    wireframe: THREE.LineSegments,
    chunkX: number,
    chunkZ: number,
): void {
    wireframe.position.set(chunkX * Chunk.size, 0, chunkZ * Chunk.size);
}
