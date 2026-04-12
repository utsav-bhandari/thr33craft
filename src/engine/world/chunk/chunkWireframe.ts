import * as THREE from "three";
import { Chunk } from "./Chunk";

export function createChunkWireframe(): THREE.LineSegments {
    const positions: number[] = [];
    const size = Chunk.size;
    const height = Chunk.height;

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
        color: 0xc0c0c0,
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
