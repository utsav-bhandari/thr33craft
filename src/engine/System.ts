import type { Camera, Scene, WebGLRenderer } from "three";
import type { InputManagerLike, PlayerControllerLike } from "@project-types";
import { BaseSystem } from "@lib/base/BaseSystem.js";
import type { UIHandler } from "@/engine/UIHandler.js";

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
            this.lastFrameTime === null ? 0 : (time - this.lastFrameTime) / 1000;
        this.lastFrameTime = time;

        if (!this.uiHandler.isUIOpen()) {
            this.worldUpdate(deltaTime);
        }

        renderer.render(scene, worldCamera);
    }
}