import type { Camera, Scene, WebGLRenderer } from "three";
import type { InputManagerLike } from "@project-types";
import { BaseSystem } from "@lib/base/BaseSystem";
import { BlockInteractionSystem } from "@/engine/systems/BlockInteractionSystem";
import { BlockTargetingSystem } from "@/engine/systems/BlockTargetingSystem";
import type { UIHandler } from "@/engine/ui/UIHandler";
import { ChunkLoader } from "@/engine/world/chunk/ChunkLoader";
import { HUDSystem } from "@/engine/systems/HUDSystem";
import { PlayerController } from "@/engine/controllers/PlayerController";

export class System extends BaseSystem {
    declare playerController: PlayerController;
    uiHandler: UIHandler;
    lastFrameTime: number | null;
    chunkLoader: ChunkLoader;
    hudSystem: HUDSystem;
    private readonly blockTargetingSystem: BlockTargetingSystem;
    private readonly blockInteractionSystem: BlockInteractionSystem;

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
        this.blockTargetingSystem = new BlockTargetingSystem(
            playerController,
            chunkLoader,
        );
        this.blockInteractionSystem = new BlockInteractionSystem(
            inputManager,
            playerController,
            chunkLoader,
            this.blockTargetingSystem,
        );
    }

    toggleHUD(): void {
        this.hudSystem.toggle();
        this.chunkLoader.toggleChunkWireframes();
    }

    getHoveredBlockId(): number | null {
        return this.blockTargetingSystem.getHoveredBlockId();
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
            this.blockTargetingSystem.update(scene);

            if (this.blockInteractionSystem.update(time)) {
                this.blockTargetingSystem.update(scene);
            }
        } else {
            this.blockInteractionSystem.suspend();
            this.blockTargetingSystem.clear();
        }

        renderer.render(scene, worldCamera);
    }

    private isGameplayActive(): boolean {
        return this.uiHandler.isPointerLocked() && !this.uiHandler.isUIOpen();
    }
}
