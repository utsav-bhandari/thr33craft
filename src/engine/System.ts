import * as THREE from "three";
import type { Camera, Scene, WebGLRenderer } from "three";
import type { InputManagerLike } from "@project-types";
import { BaseSystem } from "@lib/base/BaseSystem";
import type { UIHandler } from "@/engine/UIHandler";
import { ChunkLoader } from "@/engine/world/chunk/ChunkLoader";
import { HUDSystem } from "@/engine/HUDSystem";
import { Chunk } from "@/engine/world/chunk/Chunk";
import { PlayerController } from "@/engine/PlayerController";
import { getIDForBlock } from "@/init/block-registry";
import { raycastVoxels, type VoxelRaycastHit } from "@/engine/voxelRaycast";
import { AIR_BLOCK_ID } from "@/utils/constants";
import { INTERACTION_PARAMS, WORLD_PARAMS } from "@/utils/config";

export class System extends BaseSystem {
    declare playerController: PlayerController;
    uiHandler: UIHandler;
    lastFrameTime: number | null;
    chunkLoader: ChunkLoader;
    hudSystem: HUDSystem;
    private readonly lookDirection = new THREE.Vector3();
    private readonly blockOutlineGeometry = new THREE.EdgesGeometry(
        new THREE.BoxGeometry(1, 1, 1),
    );
    private readonly blockOutlineMaterial = new THREE.LineBasicMaterial({
        color: 0xffd84d,
        depthTest: true,
        depthWrite: false,
        transparent: true,
        opacity: 0.95,
    });
    private blockOutline: THREE.LineSegments | null = null;
    private hoveredBlock: VoxelRaycastHit | null = null;
    private lastBreakTime = Number.NEGATIVE_INFINITY;
    private lastPlaceTime = Number.NEGATIVE_INFINITY;

    constructor(
        inputManager: InputManagerLike,
        uiHandler: UIHandler,
        playerController: PlayerController,
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
        this.chunkLoader.toggleChunkWireframes();
    }

    /** Updates player motion and streams nearby world chunks. */
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

        // Suspend world simulation while UI is open or pointer is unlocked.
        if (this.isGameplayActive()) {
            this.worldUpdate(scene, deltaTime);
            this.updateHoveredBlock(scene);
            this.handleBlockInteractions(scene, time);
        } else {
            this.hideHoveredBlock();
        }

        renderer.render(scene, worldCamera);
    }

    private isGameplayActive(): boolean {
        return this.uiHandler.isPointerLocked() && !this.uiHandler.isUIOpen();
    }

    private ensureBlockOutline(scene: Scene): THREE.LineSegments {
        if (this.blockOutline) {
            return this.blockOutline;
        }

        const blockOutline = new THREE.LineSegments(
            this.blockOutlineGeometry,
            this.blockOutlineMaterial,
        );
        blockOutline.renderOrder = 1000;
        blockOutline.visible = false;
        scene.add(blockOutline);
        this.blockOutline = blockOutline;
        return blockOutline;
    }

    private updateHoveredBlock(scene: Scene): void {
        const blockOutline = this.ensureBlockOutline(scene);
        const camera = this.playerController.camera;

        camera.getWorldDirection(this.lookDirection);
        this.hoveredBlock = raycastVoxels(
            camera.position,
            this.lookDirection,
            INTERACTION_PARAMS.maxReach,
            (worldX, worldY, worldZ) =>
                this.chunkLoader.getVoxelIdWorld(worldX, worldY, worldZ),
        );

        if (!this.hoveredBlock) {
            blockOutline.visible = false;
            return;
        }

        blockOutline.position.set(
            this.hoveredBlock.blockX + 0.5,
            this.hoveredBlock.blockY + 0.5,
            this.hoveredBlock.blockZ + 0.5,
        );
        blockOutline.visible = true;
    }

    private hideHoveredBlock(): void {
        this.hoveredBlock = null;
        if (this.blockOutline) {
            this.blockOutline.visible = false;
        }
    }

    private handleBlockInteractions(scene: Scene, time: number): void {
        if (
            this.inputManager.isPressed("BREAK_BLOCK") &&
            time - this.lastBreakTime >= INTERACTION_PARAMS.breakRepeatMs &&
            this.breakHoveredBlock()
        ) {
            this.lastBreakTime = time;
            this.updateHoveredBlock(scene);
        }

        if (
            this.inputManager.isPressed("PLACE_BLOCK") &&
            time - this.lastPlaceTime >= INTERACTION_PARAMS.placeRepeatMs &&
            this.placeSelectedBlock()
        ) {
            this.lastPlaceTime = time;
            this.updateHoveredBlock(scene);
        }
    }

    private breakHoveredBlock(): boolean {
        if (!this.hoveredBlock) {
            return false;
        }

        this.chunkLoader.setVoxelWorld(
            this.hoveredBlock.blockX,
            this.hoveredBlock.blockY,
            this.hoveredBlock.blockZ,
            AIR_BLOCK_ID,
        );
        return true;
    }

    private placeSelectedBlock(): boolean {
        if (!this.hoveredBlock) {
            return false;
        }

        if (
            this.hoveredBlock.normalX === 0 &&
            this.hoveredBlock.normalY === 0 &&
            this.hoveredBlock.normalZ === 0
        ) {
            return false;
        }

        const selectedBlockName =
            this.playerController.player.getSelectedBlockName();
        if (!selectedBlockName) {
            return false;
        }

        const placeX = this.hoveredBlock.blockX + this.hoveredBlock.normalX;
        const placeY = this.hoveredBlock.blockY + this.hoveredBlock.normalY;
        const placeZ = this.hoveredBlock.blockZ + this.hoveredBlock.normalZ;

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
