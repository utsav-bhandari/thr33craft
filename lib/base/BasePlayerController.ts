import type { Camera } from "three";
import type { InputManagerLike, PlayerLike } from "@project-types";

export class BasePlayerController {
    player: PlayerLike;
    inputManager: InputManagerLike;
    camera: Camera;

    constructor(
        player: PlayerLike,
        inputManager: InputManagerLike,
        camera: Camera,
    ) {
        this.player = player;
        this.inputManager = inputManager;
        this.camera = camera;
    }
}