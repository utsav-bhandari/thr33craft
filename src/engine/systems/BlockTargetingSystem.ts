import * as THREE from "three";
import type { Scene } from "three";
import { PlayerController } from "@/engine/controllers/PlayerController";
import {
    raycastVoxels,
    type VoxelRaycastHit,
} from "@/engine/targeting/voxelRaycast";
import { ChunkLoader } from "@/engine/world/chunk/ChunkLoader";
import { INTERACTION_PARAMS } from "@/utils/config";

export class BlockTargetingSystem {
    private readonly playerController: PlayerController;
    private readonly chunkLoader: ChunkLoader;
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

    constructor(playerController: PlayerController, chunkLoader: ChunkLoader) {
        this.playerController = playerController;
        this.chunkLoader = chunkLoader;
    }

    getHoveredBlock(): VoxelRaycastHit | null {
        return this.hoveredBlock;
    }

    getHoveredBlockId(): number | null {
        return this.hoveredBlock?.blockId ?? null;
    }

    update(scene: Scene): void {
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

    clear(): void {
        this.hoveredBlock = null;
        if (this.blockOutline) {
            this.blockOutline.visible = false;
        }
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
}
