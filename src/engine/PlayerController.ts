import { Vector3 } from "three";
import type { PerspectiveCamera } from "three";
import type { InputManagerLike, MovementDirection } from "@project-types";
import { BasePlayerController } from "@lib/base/BasePlayerController";
import { ChunkLoader } from "@/engine/world/chunk/ChunkLoader";
import { Player } from "@/impl/Player";
import { PLAYER_COLLISION, WORLD_PARAMS } from "@/utils/config";

type MovementAxis = "x" | "y" | "z";

interface OccupiedBlockRange {
    minX: number;
    maxX: number;
    minY: number;
    maxY: number;
    minZ: number;
    maxZ: number;
}

export class PlayerController extends BasePlayerController {
    declare player: Player;
    declare inputManager: InputManagerLike;
    declare camera: PerspectiveCamera;
    private readonly chunkLoader: ChunkLoader;
    private collisionEnabled = true;
    private readonly candidatePosition = new Vector3();
    private readonly occupiedBlockRange: OccupiedBlockRange = {
        minX: 0,
        maxX: 0,
        minY: 0,
        maxY: 0,
        minZ: 0,
        maxZ: 0,
    };

    constructor(
        player: Player,
        inputManager: InputManagerLike,
        camera: PerspectiveCamera,
        chunkLoader: ChunkLoader,
    ) {
        super(player, inputManager, camera);
        this.chunkLoader = chunkLoader;
    }

    setCollisionEnabled(enabled: boolean): void {
        this.collisionEnabled = enabled;
    }

    isCollisionEnabled(): boolean {
        return this.collisionEnabled;
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

    getPosition(): Vector3 {
        return this.player.position;
    }

    occupiesBlock(worldX: number, worldY: number, worldZ: number): boolean {
        const occupiedBlockRange = this.getOccupiedBlockRange(
            this.player.position,
        );

        return (
            worldX >= occupiedBlockRange.minX &&
            worldX <= occupiedBlockRange.maxX &&
            worldY >= occupiedBlockRange.minY &&
            worldY <= occupiedBlockRange.maxY &&
            worldZ >= occupiedBlockRange.minZ &&
            worldZ <= occupiedBlockRange.maxZ
        );
    }

    updatePlayer(deltaTime: number): void {
        const cappedDeltaTime = Math.min(
            deltaTime,
            PLAYER_COLLISION.maxDeltaTime,
        );
        const { dx, dy, dz } = this.getDirection();
        const speedMultiplier = this.inputManager.isPressed("SPRINT") ? 1.5 : 1;
        const targetVelocity = new Vector3(
            dx * this.player.speed * speedMultiplier,
            dy * this.player.speed * speedMultiplier,
            dz * this.player.speed * speedMultiplier,
        );

        if (this.collisionEnabled) {
            this.moveWithCollisions(targetVelocity, 20, cappedDeltaTime);
        } else {
            this.player.move(targetVelocity, 20, cappedDeltaTime);
        }

        this.camera.position.copy(this.player.position);
    }

    private moveWithCollisions(
        targetVelocity: Vector3,
        accel: number,
        deltaTime: number,
    ): void {
        this.player.velocity.lerp(
            targetVelocity,
            Math.min(1, accel * deltaTime),
        );
        this.moveAlongAxis("x", this.player.velocity.x * deltaTime);
        this.moveAlongAxis("y", this.player.velocity.y * deltaTime);
        this.moveAlongAxis("z", this.player.velocity.z * deltaTime);
    }

    private moveAlongAxis(axis: MovementAxis, distance: number): void {
        if (distance === 0) {
            return;
        }

        const candidatePosition = this.candidatePosition.copy(
            this.player.position,
        );
        candidatePosition[axis] += distance;

        if (this.collidesAt(candidatePosition)) {
            this.player.velocity[axis] = 0;
            return;
        }

        this.player.position[axis] = candidatePosition[axis];
    }

    private collidesAt(position: Vector3): boolean {
        const occupiedBlockRange = this.getOccupiedBlockRange(position);

        if (occupiedBlockRange.minY < WORLD_PARAMS.WORLD_BOTTOM_Y) {
            return true;
        }

        for (
            let worldX = occupiedBlockRange.minX;
            worldX <= occupiedBlockRange.maxX;
            worldX += 1
        ) {
            for (
                let worldY = occupiedBlockRange.minY;
                worldY <= occupiedBlockRange.maxY;
                worldY += 1
            ) {
                for (
                    let worldZ = occupiedBlockRange.minZ;
                    worldZ <= occupiedBlockRange.maxZ;
                    worldZ += 1
                ) {
                    if (
                        this.chunkLoader.isVoxelSolidWorld(
                            worldX,
                            worldY,
                            worldZ,
                        )
                    ) {
                        return true;
                    }
                }
            }
        }

        return false;
    }

    private getOccupiedBlockRange(position: Vector3): OccupiedBlockRange {
        const padding = PLAYER_COLLISION.padding;
        const halfWidth = this.player.width / 2;
        const occupiedBlockRange = this.occupiedBlockRange;

        occupiedBlockRange.minX = Math.floor(position.x - halfWidth + padding);
        occupiedBlockRange.maxX = Math.floor(position.x + halfWidth - padding);
        occupiedBlockRange.minY = Math.floor(
            position.y - this.player.height + padding,
        );
        occupiedBlockRange.maxY = Math.floor(position.y - padding);
        occupiedBlockRange.minZ = Math.floor(position.z - halfWidth + padding);
        occupiedBlockRange.maxZ = Math.floor(position.z + halfWidth - padding);

        return occupiedBlockRange;
    }
}
