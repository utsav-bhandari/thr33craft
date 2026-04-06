import type { Camera, Scene, WebGLRenderer } from "three";
import type { InputManagerLike, PlayerControllerLike } from "@project-types";

export class BaseSystem {
    inputManager: InputManagerLike;
    playerController: PlayerControllerLike;

    constructor(
        inputManager: InputManagerLike,
        playerController: PlayerControllerLike,
    ) {
        this.inputManager = inputManager;
        this.playerController = playerController;
    }

    animate(
        _time: number,
        _renderer: WebGLRenderer,
        _scene: Scene,
        _camera: Camera,
    ): void {}
}