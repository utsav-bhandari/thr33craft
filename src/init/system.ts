import { GUI } from "lil-gui";
import { InputManager } from "@lib/controls/InputManager";
import { KeyMap } from "@lib/controls/KeyMap";
import { KeyStore } from "@lib/controls/KeyStore";
import * as THREE from "three";
import type { InitSystemArgs } from "@project-types";
import { DEFAULT_KEYS_PRESET, WORLD_PARAMS } from "@/utils/config";
import { PlayerController } from "@/engine/PlayerController";
import { System } from "@/engine/System";
import { createBlockMesh } from "@lib/texture/block-loader";
import { Player } from "@/impl/Player";
import { initUI } from "@/init/ui";
import { debug } from "@/utils/logger";
import { ChunkLoader } from "@/engine/world/chunk/ChunkLoader";
import { HUDSystem } from "@/engine/HUDSystem";
import { BEDROCK_BLOCK_ID } from "@/utils/constants";

/** Builds runtime systems: input, player controller, UI handler, world streaming, and HUD. */
export async function initSystem({
    scene,
    camera,
    pointerControls,
    gameParams,
    options = {},
}: InitSystemArgs): Promise<{
    player: Player;
    system: System;
    uiHandler: ReturnType<typeof initUI>["uiHandler"];
    inputManager: InputManager;
    keyStore: KeyStore;
}> {
    const {
        keyPreset = gameParams.keysPreset ?? DEFAULT_KEYS_PRESET,
        player: playerOptions = {},
        actions: actionOptions = {},
    } = options;

    // Apply player defaults early so later setup reads one source of truth.
    const {
        blockName = "redstone_block",
        spawnPosition = WORLD_PARAMS.PLAYER_STARTING_POSITION,
        params: playerParams = gameParams.playerParams,
    } = playerOptions;

    const {
        menu = "MENU",
        inventory = "INVENTORY",
        hud = "HUD_TOGGLE",
    } = actionOptions;

    const keyMap = new KeyMap();
    keyMap.init(keyPreset);

    const keyStore = new KeyStore();
    const inputManager = new InputManager(keyMap, keyStore);

    // Create player mesh once and register it in the world scene.
    debug("Creating player mesh", blockName);
    const playerMesh = await createBlockMesh(blockName);
    debug("Player mesh created", { blockName });
    playerMesh.position.set(...spawnPosition);
    scene.add(playerMesh);

    const player = new Player(playerMesh, playerParams);
    const playerController = new PlayerController(player, inputManager, camera);
    const chunkLoader = new ChunkLoader();
    const hudSystem = new HUDSystem();
    setupDebugPlacementGui(scene, chunkLoader, hudSystem);

    const { uiHandler } = initUI({
        inputManager,
        pointerControls,
        gameParams,
    });

    const system = new System(
        inputManager,
        uiHandler,
        playerController,
        chunkLoader,
        hudSystem,
    );

    debug("UI initialized");

    registerHandlers({
        system,
        keyStore,
        uiHandler,
        menuAction: menu,
        inventoryAction: inventory,
        hudAction: hud,
    });

    return {
        player,
        system,
        uiHandler,
        inputManager,
        keyStore,
    };
}

function registerHandlers({
    system,
    keyStore,
    uiHandler,
    menuAction,
    inventoryAction,
    hudAction,
}: {
    system: System;
    keyStore: KeyStore;
    uiHandler: ReturnType<typeof initUI>["uiHandler"];
    menuAction: string;
    inventoryAction: string;
    hudAction: string;
}): void {
    // Ignore editable elements so typing in UI controls does not trigger actions.
    const addKeyHandler = (
        eventName: "keydown" | "keyup",
        callback: (key: string, event: KeyboardEvent) => void,
    ): void => {
        const listener = (event: KeyboardEvent): void => {
            if (isEditableTarget(event)) {
                return;
            }

            callback(event.key.toLowerCase(), event);
        };

        document.addEventListener(eventName, listener);
    };

    const focusWarning = createWindowFocusWarning();

    addKeyHandler("keydown", (key) => {
        debug(key, "pressed");
        keyStore.addPressedKey(key);
    });

    addKeyHandler("keyup", (key) => {
        debug(key, "released");
        keyStore.removePressedKey(key);
    });

    addKeyHandler("keydown", (_key, event) => {
        if (!event.repeat && system.inputManager.isPressed(menuAction)) {
            uiHandler.toggleModal("menu");
        }
    });

    addKeyHandler("keydown", (_key, event) => {
        if (!event.repeat && system.inputManager.isPressed(inventoryAction)) {
            uiHandler.toggleModal("inventory");
        }
    });

    addKeyHandler("keydown", (_key, event) => {
        if (!event.repeat && system.inputManager.isPressed(hudAction)) {
            system.toggleHUD();
        }
    });

    document.addEventListener("click", () => {
        console.log("Document clicked, attempting to lock pointer");
        if (!uiHandler.isUIOpen()) {
            uiHandler.lockPointer();
        }
    });

    // If user switches tabs or the window loses focus, clear the key store to prevent stuck keys when they return to the game.
    window.addEventListener("blur", () => {
        debug("Window blurred, clearing key store");
        keyStore.clear();
        focusWarning.classList.add("visible");
    });

    window.addEventListener("focus", () => {
        debug("Window focused");
        setTimeout(() => {
            focusWarning.classList.remove("visible");
        }, 400);
    });
}

function createWindowFocusWarning(): HTMLElement {
    const message = document.createElement("div");
    message.className = "focus-window-message";
    message.textContent = "Window out of focus";
    document.body.appendChild(message);
    return message;
}

// Guards gameplay hotkeys while user is focused on editable UI controls.
function isEditableTarget(event: KeyboardEvent): boolean {
    const target = event.target;

    return (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        (target instanceof HTMLElement && target.isContentEditable)
    );
}

function setupDebugPlacementGui(
    scene: THREE.Scene,
    chunkLoader: ChunkLoader,
    hudSystem: HUDSystem,
): void {
    const wireframeGeometry = new THREE.EdgesGeometry(
        new THREE.BoxGeometry(1, 1, 1),
    );
    const wireframeMaterial = new THREE.LineBasicMaterial({
        color: 0xffd84d,
    });
    const createMarker = (): THREE.LineSegments =>
        new THREE.LineSegments(wireframeGeometry, wireframeMaterial);

    const markerState = {
        x: 5,
        y: 32 - 5,
        z: 5,
        placeDebugBlock(): void {
            const { x, y, z } = markerState;
            chunkLoader.setVoxelWorld(x, y, z, BEDROCK_BLOCK_ID);
            const placedMarker = createMarker();
            placedMarker.position.set(x + 0.5, y + 0.5, z + 0.5);
            scene.add(placedMarker);
            debug(
                `Origin alignment debug marker placed at world cell (${x}, ${y}, ${z})`,
            );
        },
        clearDebugBlock(): void {
            const { x, y, z } = markerState;
            chunkLoader.setVoxelWorld(x, y, z, 0);
            debug(`Cleared block at world cell (${x}, ${y}, ${z})`);
        },
    };

    const marker = createMarker();
    marker.position.set(
        markerState.x + 0.5,
        markerState.y + 0.5,
        markerState.z + 0.5,
    );
    scene.add(marker);

    const gui = new GUI({ title: "Debug Controls" });
    hudSystem.registerToggleElement(gui.domElement);

    const debugFolder = gui.addFolder("Debug Placement");
    debugFolder
        .add(markerState, "x")
        .name("World X")
        .step(1)
        .onChange((value: number) => {
            marker.position.x = value + 0.5;
        });
    debugFolder
        .add(markerState, "y")
        .name("World Y")
        .step(1)
        .onChange((value: number) => {
            marker.position.y = value + 0.5;
        });
    debugFolder
        .add(markerState, "z")
        .name("World Z")
        .step(1)
        .onChange((value: number) => {
            marker.position.z = value + 0.5;
        });
    debugFolder.add(markerState, "placeDebugBlock").name("Place Debug Block");
    debugFolder.add(markerState, "clearDebugBlock").name("Set To Air");
    debugFolder.open();

    document.addEventListener("keydown", (event) => {
        if (event.repeat || isEditableTarget(event)) {
            return;
        }

        if (event.key.toLowerCase() !== "p") {
            return;
        }

        markerState.placeDebugBlock();
    });
}
