import { Vector3 } from "three";
import type { PerspectiveCamera } from "three";
import type {
    InputManagerLike,
    MovementDirection,
    PlayerLike,
} from "@project-types";
import { BasePlayerController } from "@lib/base/BasePlayerController";

export class PlayerController extends BasePlayerController {
    declare player: PlayerLike;
    declare inputManager: InputManagerLike;
    declare camera: PerspectiveCamera;

    constructor(
        player: PlayerLike,
        inputManager: InputManagerLike,
        camera: PerspectiveCamera,
    ) {
        super(player, inputManager, camera);
    }

    getDirection(): MovementDirection {
        let dx = 0;
        let dy = 0;
        let dz = 0;

        if (this.inputManager.isPressed("UP")) dy += 1;
        if (this.inputManager.isPressed("DOWN")) dy -= 1;
        if (this.inputManager.isPressed("FORWARD")) dz += 1;
        if (this.inputManager.isPressed("BACKWARD")) dz -= 1;
        if (this.inputManager.isPressed("LEFT")) dx -= 1;
        if (this.inputManager.isPressed("RIGHT")) dx += 1;

        const forward = new Vector3();
        this.camera.getWorldDirection(forward);

        // ignore vertical component of forward direction to prevent flying when looking up/down
        forward.y = 0;
        forward.normalize();

        // right direction is perpendicular to forward and up directions
        const right = new Vector3();
        right.crossVectors(forward, new Vector3(0, 1, 0)).normalize();

        // combine forward and right directions based on input to get movement direction
        const move = new Vector3();
        move.addScaledVector(forward, dz);
        move.addScaledVector(right, dx);

        // normalize movement direction to prevent faster diagonal movement
        if (move.lengthSq() > 0) {
            move.normalize();
        }

        return { dx: move.x, dy, dz: move.z };
    }

    updatePlayer(deltaTime: number): void {
        // get movement direction based on input
        const { dx, dy, dz } = this.getDirection();
        const speedMultiplier = this.inputManager.isPressed("SPRINT") ? 1.5 : 1;
        const targetVelocity = new Vector3(
            dx * this.player.speed * speedMultiplier,
            dy * this.player.speed * speedMultiplier,
            dz * this.player.speed * speedMultiplier,
        );

        this.player.move(targetVelocity, 20, deltaTime);
        this.camera.position.copy(this.player.position);
    }
}
