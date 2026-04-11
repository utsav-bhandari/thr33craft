import type { Camera, Scene, WebGLRenderer } from "three";
import type { InputManagerLike, PlayerControllerLike } from "@project-types";
import { BaseSystem } from "@lib/base/BaseSystem";
import type { UIHandler } from "@/engine/UIHandler";
import { ChunkLoader } from "@/engine/world/chunk/ChunkLoader";
import { HUDSystem } from "@/engine/HUDSystem";

export class System extends BaseSystem {
    uiHandler: UIHandler;
    lastFrameTime: number | null;
    chunkLoader: ChunkLoader;
    hudSystem: HUDSystem;

    constructor(
        inputManager: InputManagerLike,
        uiHandler: UIHandler,
        playerController: PlayerControllerLike,
        chunkLoader: ChunkLoader,
        hudSystem: HUDSystem,
    ) {
        super(inputManager, playerController);

        this.uiHandler = uiHandler;
        this.lastFrameTime = null;
        this.chunkLoader = chunkLoader;
        this.hudSystem = hudSystem;
    }

    toggleHUD(): void {
        this.hudSystem.toggle();
    }

    worldUpdate(scene: Scene, deltaTime: number): void {
        this.playerController.updatePlayer(deltaTime);
        this.chunkLoader.updateWorldChunks(
            scene,
            this.playerController.getPosition(),
        );
    }

    override animate(
        time: number,
        renderer: WebGLRenderer,
        scene: Scene,
        worldCamera: Camera,
    ): void {
        const deltaTime =
            this.lastFrameTime === null
                ? 0
                : (time - this.lastFrameTime) / 1000;
        this.lastFrameTime = time;

        const playerPosition = this.playerController.getPosition();

        this.hudSystem.update({
            playerPosition,
            deltaTime,
            loadedChunkCount: this.chunkLoader.getLoadedChunkCount(),
            cachedChunkCount: this.chunkLoader.getCachedChunkCount(),
            pointerLocked: this.uiHandler.isPointerLocked(),
            uiOpen: this.uiHandler.isUIOpen(),
        });

        // Only update the world if no UI is open to prevent unintended interactions and ensure that
        // the game state remains consistent while the player is interacting with the UI.
        if (this.uiHandler.isPointerLocked() && !this.uiHandler.isUIOpen()) {
            this.worldUpdate(scene, deltaTime);
        }

        renderer.render(scene, worldCamera);
    }
}
