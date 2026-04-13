import { Vector3 } from "three";
import type { Object3D } from "three";
import type {
    HotbarAssignmentResult,
    HotbarItem,
    HotbarSnapshot,
    PlayerParams,
} from "@project-types";
import { BasePlayer } from "@lib/base/BasePlayer";
import { HOTBAR_SLOT_COUNT } from "@/utils/config";

export class Player extends BasePlayer {
    speed: number;
    position: Vector3;
    velocity: Vector3;
    height: number;
    hotbarSlots: Array<HotbarItem | null>;
    activeHotbarSlotIndex: number;

    constructor(mesh: Object3D, playerParams: PlayerParams) {
        super(mesh);
        this.speed = playerParams.speed ?? 7;
        this.position = this.mesh.position;
        this.velocity = new Vector3();
        this.height = playerParams.height ?? 1.85;
        this.hotbarSlots = Array.from(
            { length: HOTBAR_SLOT_COUNT },
            (): HotbarItem | null => null,
        );
        this.activeHotbarSlotIndex = 0;
    }

    selectHotbarSlot(index: number): void {
        if (index < 0 || index >= this.hotbarSlots.length) {
            return;
        }

        this.activeHotbarSlotIndex = index;
    }

    assignHotbarItem(item: HotbarItem): HotbarAssignmentResult {
        const existingIndex = this.hotbarSlots.findIndex(
            (slot) => slot?.id === item.id,
        );

        if (existingIndex !== -1) {
            this.hotbarSlots[existingIndex] = { ...item };
            return {
                slotIndex: existingIndex,
                mode: "existing",
            };
        }

        const firstEmptyIndex = this.hotbarSlots.findIndex(
            (slot) => slot === null,
        );
        const targetIndex =
            firstEmptyIndex !== -1
                ? firstEmptyIndex
                : this.activeHotbarSlotIndex;

        this.hotbarSlots[targetIndex] = { ...item };

        return {
            slotIndex: targetIndex,
            mode: firstEmptyIndex !== -1 ? "empty" : "replaced",
        };
    }

    getSelectedBlockName(): string | null {
        return this.hotbarSlots[this.activeHotbarSlotIndex]?.id ?? null;
    }

    getHotbarSnapshot(): HotbarSnapshot {
        return {
            slots: [...this.hotbarSlots],
            activeSlotIndex: this.activeHotbarSlotIndex,
        };
    }

    move(targetVelocity: Vector3, accel: number, deltaTime: number): void {
        // smoothly interpolate velocity towards target velocity based on acceleration and delta time
        this.velocity.lerp(targetVelocity, accel * deltaTime);

        this.position.addScaledVector(this.velocity, deltaTime);
    }
}
