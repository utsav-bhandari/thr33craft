import * as THREE from "three";
import { Chunk } from "@/engine/world/chunk/Chunk";
import {
    createChunkWireframe,
    setChunkWireframePosition,
} from "@/engine/world/chunk/chunkWireframe";

export class ChunkSceneController {
    private wireframeVisible = false;
    private readonly wireframe: THREE.LineSegments;
    private currentChunkKey: string | null = null;

    constructor() {
        this.wireframe = createChunkWireframe();
    }

    attachChunk(scene: THREE.Scene, chunk: Chunk): void {
        if (chunk.container.parent !== scene) {
            scene.add(chunk.container);
        }
    }

    removeChunk(scene: THREE.Scene, chunk: Chunk): void {
        scene.remove(chunk.container);
    }

    toggleChunkWireframes(): void {
        this.setWireframeVisibility(!this.wireframeVisible);
    }

    setWireframeVisibility(visible: boolean): void {
        this.wireframeVisible = visible;
        this.wireframe.visible = visible;
    }

    updateCurrentChunkWireframe(
        scene: THREE.Scene,
        chunkX: number,
        chunkZ: number,
    ): void {
        if (!this.wireframeVisible) {
            return;
        }

        const chunkKey = `${chunkX},${chunkZ}`;
        if (this.currentChunkKey === chunkKey) {
            return;
        }

        this.currentChunkKey = chunkKey;
        setChunkWireframePosition(this.wireframe, chunkX, chunkZ);

        if (this.wireframe.parent !== scene) {
            scene.add(this.wireframe);
        }
    }
}
