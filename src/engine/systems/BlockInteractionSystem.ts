import type { InputManagerLike } from "@project-types";
import { PlayerController } from "@/engine/controllers/PlayerController";
import { BlockTargetingSystem } from "@/engine/systems/BlockTargetingSystem";
import { Chunk } from "@/engine/world/chunk/Chunk";
import { ChunkLoader } from "@/engine/world/chunk/ChunkLoader";
import { getIDForBlock } from "@/init/block-registry";
import { AIR_BLOCK_ID } from "@/utils/constants";
import { INTERACTION_PARAMS, WORLD_PARAMS } from "@/utils/config";

export class BlockInteractionSystem {
    private lastBreakTime = Number.NEGATIVE_INFINITY;
    private lastPlaceTime = Number.NEGATIVE_INFINITY;
    private wasRotatePressed = false;

    constructor(
        private readonly inputManager: InputManagerLike,
        private readonly playerController: PlayerController,
        private readonly chunkLoader: ChunkLoader,
        private readonly blockTargetingSystem: BlockTargetingSystem,
    ) {}

    update(time: number): boolean {
        const isRotatePressed = this.inputManager.isPressed("ROTATE_BLOCK");
        let didChangeWorld = false;

        if (
            !this.wasRotatePressed &&
            isRotatePressed &&
            this.rotateHoveredBlock()
        ) {
            didChangeWorld = true;
        }

        this.wasRotatePressed = isRotatePressed;

        if (
            this.inputManager.isPressed("BREAK_BLOCK") &&
            time - this.lastBreakTime >= INTERACTION_PARAMS.breakRepeatMs &&
            this.breakHoveredBlock()
        ) {
            this.lastBreakTime = time;
            didChangeWorld = true;
        }

        if (
            this.inputManager.isPressed("PLACE_BLOCK") &&
            time - this.lastPlaceTime >= INTERACTION_PARAMS.placeRepeatMs &&
            this.placeSelectedBlock()
        ) {
            this.lastPlaceTime = time;
            didChangeWorld = true;
        }

        return didChangeWorld;
    }

    suspend(): void {
        this.wasRotatePressed = false;
    }

    private rotateHoveredBlock(): boolean {
        const hoveredBlock = this.blockTargetingSystem.getHoveredBlock();
        if (!hoveredBlock) {
            return false;
        }

        return this.chunkLoader.rotateVoxelWorld(
            hoveredBlock.blockX,
            hoveredBlock.blockY,
            hoveredBlock.blockZ,
        );
    }

    private breakHoveredBlock(): boolean {
        const hoveredBlock = this.blockTargetingSystem.getHoveredBlock();
        if (!hoveredBlock) {
            return false;
        }

        this.chunkLoader.setVoxelWorld(
            hoveredBlock.blockX,
            hoveredBlock.blockY,
            hoveredBlock.blockZ,
            AIR_BLOCK_ID,
        );
        return true;
    }

    private placeSelectedBlock(): boolean {
        const hoveredBlock = this.blockTargetingSystem.getHoveredBlock();
        if (!hoveredBlock) {
            return false;
        }

        if (
            hoveredBlock.normalX === 0 &&
            hoveredBlock.normalY === 0 &&
            hoveredBlock.normalZ === 0
        ) {
            return false;
        }

        const selectedBlockName =
            this.playerController.player.getSelectedBlockName();
        if (!selectedBlockName) {
            return false;
        }

        const placeX = hoveredBlock.blockX + hoveredBlock.normalX;
        const placeY = hoveredBlock.blockY + hoveredBlock.normalY;
        const placeZ = hoveredBlock.blockZ + hoveredBlock.normalZ;

        if (placeY < WORLD_PARAMS.WORLD_BOTTOM_Y || placeY >= Chunk.height) {
            return false;
        }

        const currentBlockId = this.chunkLoader.getVoxelIdWorld(
            placeX,
            placeY,
            placeZ,
        );
        if (currentBlockId === null || currentBlockId !== AIR_BLOCK_ID) {
            return false;
        }

        if (this.playerController.occupiesBlock(placeX, placeY, placeZ)) {
            return false;
        }

        this.chunkLoader.setVoxelWorld(
            placeX,
            placeY,
            placeZ,
            getIDForBlock(selectedBlockName),
        );
        return true;
    }
}
