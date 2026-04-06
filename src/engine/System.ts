import type { Camera, Scene, WebGLRenderer } from "three";
import type { InputManagerLike, PlayerControllerLike } from "@project-types";
import { BaseSystem } from "@lib/base/BaseSystem";
import type { UIHandler } from "@/engine/UIHandler";

export class System extends BaseSystem {
    uiHandler: UIHandler;
    lastFrameTime: number | null;

    constructor(
        inputManager: InputManagerLike,
        uiHandler: UIHandler,
        playerController: PlayerControllerLike,
    ) {
        super(inputManager, playerController);
        this.uiHandler = uiHandler;
        this.lastFrameTime = null;
    }

    worldUpdate(deltaTime: number): void {
        this.playerController.updatePlayer(deltaTime);
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

        // Only update the world if no UI is open to prevent unintended interactions and ensure that the game state remains consistent while the player is interacting with the UI. This allows for a clear separation between gameplay and UI interactions, providing a smoother user experience.
        if (!this.uiHandler.isUIOpen()) {
            this.worldUpdate(deltaTime);
        }

        renderer.render(scene, worldCamera);
    }
}
