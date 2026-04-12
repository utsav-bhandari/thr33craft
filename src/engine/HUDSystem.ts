import { Chunk } from "@/engine/world/chunk/Chunk";
import { Subchunk } from "@/engine/world/chunk/SubChunks";
import { WORLD_PARAMS } from "@/utils/config";
import { mod } from "@/utils/helper";

export interface HUDSnapshot {
    playerPosition: {
        x: number;
        y: number;
        z: number;
    };
    deltaTime: number;
    loadedChunkCount: number;
    cachedChunkCount: number;
    pointerLocked: boolean;
    uiOpen: boolean;
}

export class HUDSystem {
    htmlElement: HTMLDivElement;
    visible: boolean;
    private smoothedFps: number;

    constructor() {
        this.htmlElement = document.createElement("div");
        this.htmlElement.className = "hud gameplay";
        document.body.appendChild(this.htmlElement);

        this.visible = false;
        this.smoothedFps = 0;
    }

    toggle(): void {
        this.visible = !this.visible;
        this.syncVisibility();
    }

    update(snapshot: HUDSnapshot): void {
        const { playerPosition, deltaTime } = snapshot;
        const blockX = Math.floor(playerPosition.x);
        const blockY = Math.floor(playerPosition.y);
        const blockZ = Math.floor(playerPosition.z);
        const chunkX = Math.floor(blockX / Chunk.size);
        const chunkZ = Math.floor(blockZ / Chunk.size);
        const subchunkY = Math.floor(blockY / Subchunk.height);
        const localX = mod(blockX, Chunk.size);
        const localY = mod(blockY, Chunk.height);
        const localZ = mod(blockZ, Chunk.size);
        const localSubchunkY = mod(blockY, Subchunk.height);
        const frameMs = deltaTime * 1000;
        const instantFps = deltaTime > 0 ? 1 / deltaTime : 0;

        // The more you know huh
        // Smooth the FPS value using an exponential moving average to avoid rapid fluctuations
        // in the displayed FPS, which can make it easier to read and provide a more stable indication of performance.
        this.smoothedFps =
            this.smoothedFps === 0
                ? instantFps
                : this.smoothedFps * 0.9 + instantFps * 0.1;

        this.htmlElement.textContent = [
            `FPS: ${this.formatNumber(this.smoothedFps, 1)} | Frame: ${this.formatNumber(frameMs, 2)} ms`,
            `World: (${this.formatNumber(playerPosition.x, 2)}, ${this.formatNumber(playerPosition.y, 2)}, ${this.formatNumber(playerPosition.z, 2)})`,
            `Block: (${blockX}, ${blockY}, ${blockZ})`,
            `Chunk: (${chunkX}, ${chunkZ}) | Local: (${localX}, ${localY}, ${localZ})`,
            `Subchunk: (${chunkX}, ${subchunkY}, ${chunkZ}) | Local Y: ${localSubchunkY}`,
            `Loaded Chunks: ${snapshot.loadedChunkCount} | Cached Chunks: ${snapshot.cachedChunkCount}`,
            `Render Distance: ${WORLD_PARAMS.RENDER_DISTANCE} | Pointer: ${snapshot.pointerLocked ? "locked" : "free"} | UI: ${snapshot.uiOpen ? "open" : "closed"}`,
        ].join("\n");

        this.syncVisibility();
    }

    private syncVisibility(): void {
        this.htmlElement.classList.toggle("hidden", !this.visible);
    }

    private formatNumber(value: number, decimals: number): string {
        return Number.isFinite(value) ? value.toFixed(decimals) : "0.00";
    }
}
