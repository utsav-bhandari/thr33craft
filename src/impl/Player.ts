import { Vector3 } from "three";
import type { Object3D } from "three";
import type { PlayerParams } from "@project-types";
import { BasePlayer } from "@lib/base/BasePlayer";

export class Player extends BasePlayer {
    speed: number;
    position: Vector3;
    velocity: Vector3;
    height: number;

    constructor(mesh: Object3D, playerParams: PlayerParams) {
        super(mesh);
        this.speed = playerParams.speed ?? 7;
        this.position = this.mesh.position;
        this.velocity = new Vector3();
        this.height = playerParams.height ?? 1.85;
    }

    move(targetVelocity: Vector3, accel: number, deltaTime: number): void {
        // smoothly interpolate velocity towards target velocity based on acceleration and delta time
        this.velocity.lerp(targetVelocity, accel * deltaTime);

        this.position.addScaledVector(this.velocity, deltaTime);
    }
}
