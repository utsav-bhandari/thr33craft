import { GUI } from "lil-gui";
import { InputManager } from "@lib/controls/InputManager";
import { KeyMap } from "@lib/controls/KeyMap";
import { KeyStore } from "@lib/controls/KeyStore";
import * as THREE from "three";
import type { InitSystemArgs } from "@project-types";
import {
    DEFAULT_KEYS_PRESET,
    HOTBAR_SLOT_COUNT,
    WORLD_PARAMS,
} from "@/utils/config";
import { PlayerController } from "@/engine/controllers/PlayerController";
import { System } from "@/engine/systems/System";
import { createBlockMesh } from "@lib/texture/block-loader";
import { Player } from "@/impl/Player";
import { initUI } from "@/init/ui";
import { Hotbar } from "@/impl/inventory/Hotbar";
import { Inventory } from "@/impl/inventory/Inventory";
import { debug } from "@/utils/logger";
import { ChunkLoader } from "@/engine/world/chunk/ChunkLoader";
import { HUDSystem } from "@/engine/systems/HUDSystem";
import { BEDROCK_BLOCK_ID } from "@/utils/constants";
import type { InventoryBlockSelectionDetail } from "@project-types";
import { getNameForBlock } from "@/init/block-registry";
import { formatBlockLabel } from "@/impl/inventory/InventoryGrid";

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
        inventory: inventoryActionName = "INVENTORY",
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
    const chunkLoader = new ChunkLoader();
    const playerController = new PlayerController(
        player,
        inputManager,
        camera,
        chunkLoader,
    );
    const hudSystem = new HUDSystem();
    setupDebugGui(scene, chunkLoader, hudSystem, playerController);

    const { uiHandler, inventory } = initUI({
        inputManager,
        pointerControls,
        gameParams,
    });
    const hotbar = new Hotbar(HOTBAR_SLOT_COUNT);
    document.body.appendChild(hotbar.htmlElement);
    uiHandler.registerContainedElement(hotbar.htmlElement);
    hotbar.render(player.getHotbarSnapshot());

    const system = new System(
        inputManager,
        uiHandler,
        playerController,
        chunkLoader,
        hudSystem,
    );

    const assignHotbarItem = (detail: InventoryBlockSelectionDetail): void => {
        const assignment = player.assignHotbarItem(detail);
        hotbar.render(player.getHotbarSnapshot());
        inventory.showSelectionFeedback(
            createHotbarSelectionMessage(detail.label, assignment, player),
        );
        debug("Hotbar item assigned", {
            blockId: detail.id,
            slot: assignment.slotIndex + 1,
            mode: assignment.mode,
            selectedBlock: player.getSelectedBlockName(),
        });
    };

    const getInventorySelectionDetailForBlock = (
        blockId: number,
    ): InventoryBlockSelectionDetail | null => {
        const blockName = getNameForBlock(blockId);
        const metadata = inventory.textureSheet?.metadata[blockName];
        const textureSheetUrl = inventory.textureSheet?.textureSheetUrl;

        if (!metadata || !textureSheetUrl) {
            return null;
        }

        return {
            id: blockName,
            label: formatBlockLabel(blockName),
            textureSheetUrl,
            backgroundPosition: metadata.backgroundPosition,
            backgroundSize: metadata.backgroundSize,
        };
    };

    const removeActiveHotbarItem = (): void => {
        const removedItem = player.clearActiveHotbarItem();
        hotbar.render(player.getHotbarSnapshot());

        if (!removedItem) {
            inventory.showSelectionFeedback(
                "Active hotbar slot is already empty",
            );
            return;
        }

        inventory.showSelectionFeedback(
            `Removed ${removedItem.label} from hotbar slot ${player.activeHotbarSlotIndex + 1}`,
        );
        debug("Hotbar item removed", {
            blockId: removedItem.id,
            slot: player.activeHotbarSlotIndex + 1,
        });
    };

    debug("UI initialized");

    inventory.on("blockselect", (event: Event) => {
        if (!(event instanceof CustomEvent)) {
            return;
        }

        const detail = event.detail as
            | InventoryBlockSelectionDetail
            | undefined;
        if (!detail) {
            return;
        }

        assignHotbarItem(detail);
    });

    registerHandlers({
        system,
        player,
        hotbar,
        keyStore,
        uiHandler,
        assignHotbarItem,
        removeActiveHotbarItem,
        getInventorySelectionDetailForBlock,
        menuAction: menu,
        inventoryAction: inventoryActionName,
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

function createHotbarSelectionMessage(
    label: string,
    assignment: ReturnType<Player["assignHotbarItem"]>,
    player: Player,
): string {
    const slotNumber = assignment.slotIndex + 1;

    if (assignment.mode === "existing") {
        return `${label} is already in hotbar slot ${slotNumber}`;
    }

    if (assignment.mode === "replaced") {
        const activeSlotNumber = player.activeHotbarSlotIndex + 1;
        return `Replaced active slot ${activeSlotNumber} with ${label}`;
    }

    return `Added ${label} to hotbar slot ${slotNumber}`;
}

function registerHandlers({
    system,
    player,
    hotbar,
    keyStore,
    uiHandler,
    assignHotbarItem,
    removeActiveHotbarItem,
    getInventorySelectionDetailForBlock,
    menuAction,
    inventoryAction,
    hudAction,
}: {
    system: System;
    player: Player;
    hotbar: Hotbar;
    keyStore: KeyStore;
    uiHandler: ReturnType<typeof initUI>["uiHandler"];
    assignHotbarItem: (detail: InventoryBlockSelectionDetail) => void;
    removeActiveHotbarItem: () => void;
    getInventorySelectionDetailForBlock: (
        blockId: number,
    ) => InventoryBlockSelectionDetail | null;
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
    const getMouseActionKey = (button: number): string | null => {
        if (button === 0) {
            return "mouse-left";
        }

        if (button === 1) {
            return "mouse-middle";
        }

        if (button === 2) {
            return "mouse-right";
        }

        return null;
    };

    const syncHotbarSelection = (slotIndex: number): void => {
        player.selectHotbarSlot(slotIndex);
        hotbar.render(player.getHotbarSnapshot());
        debug("Hotbar slot selected", {
            slot: slotIndex + 1,
            selectedBlock: player.getSelectedBlockName(),
        });
    };

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

    addKeyHandler("keydown", (_key, event) => {
        if (event.repeat) {
            return;
        }

        if (uiHandler.isUIOpen() || !uiHandler.isPointerLocked()) {
            return;
        }

        if (!system.inputManager.isPressed("REMOVE_HOTBAR_ITEM")) {
            return;
        }

        event.preventDefault();
        removeActiveHotbarItem();
    });

    addKeyHandler("keydown", (_key, event) => {
        if (event.repeat) {
            return;
        }

        for (let slotIndex = 0; slotIndex < HOTBAR_SLOT_COUNT; slotIndex += 1) {
            if (
                !system.inputManager.isPressed(`HOTBAR_SLOT_${slotIndex + 1}`)
            ) {
                continue;
            }

            syncHotbarSelection(slotIndex);
            return;
        }
    });

    document.addEventListener(
        "wheel",
        (event) => {
            if (uiHandler.isUIOpen() || !uiHandler.isPointerLocked()) {
                return;
            }

            if (event.deltaY === 0) {
                return;
            }

            event.preventDefault();

            const direction = event.deltaY < 0 ? -1 : 1;
            const nextSlotIndex =
                (player.activeHotbarSlotIndex + direction + HOTBAR_SLOT_COUNT) %
                HOTBAR_SLOT_COUNT;

            syncHotbarSelection(nextSlotIndex);
        },
        { passive: false },
    );

    document.addEventListener("pointerdown", (event) => {
        const mouseActionKey = getMouseActionKey(event.button);
        if (!mouseActionKey) {
            return;
        }

        if (event.button === 1) {
            event.preventDefault();
        }

        if (!uiHandler.isPointerLocked() || uiHandler.isUIOpen()) {
            return;
        }

        keyStore.addPressedKey(mouseActionKey);

        if (event.button !== 1) {
            return;
        }

        const hoveredBlockId = system.getHoveredBlockId();
        if (hoveredBlockId === null) {
            return;
        }

        const selectionDetail =
            getInventorySelectionDetailForBlock(hoveredBlockId);
        if (!selectionDetail) {
            return;
        }

        assignHotbarItem(selectionDetail);
    });

    document.addEventListener("pointerup", (event) => {
        const mouseActionKey = getMouseActionKey(event.button);
        if (!mouseActionKey) {
            return;
        }

        keyStore.removePressedKey(mouseActionKey);
    });

    document.addEventListener("click", (event) => {
        if (uiHandler.isTargetInsideActiveUI(event.target)) {
            return;
        }

        if (
            event instanceof MouseEvent &&
            uiHandler.isPointInsideActiveUI(event.clientX, event.clientY)
        ) {
            return;
        }

        if (uiHandler.isPointerLocked()) {
            return;
        }

        uiHandler.closeActiveUI();
        uiHandler.lockPointer();
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

    document.addEventListener("contextmenu", (event) => {
        event.preventDefault();
    });

    document.addEventListener("auxclick", (event) => {
        if (event.button === 1) {
            event.preventDefault();
        }
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

function setupDebugGui(
    scene: THREE.Scene,
    chunkLoader: ChunkLoader,
    hudSystem: HUDSystem,
    playerController: PlayerController,
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
        x: 0,
        y: 30,
        z: 0,
        collisionEnabled: playerController.isCollisionEnabled(),
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
    debugFolder
        .add(markerState, "collisionEnabled")
        .name("Player Collision")
        .onChange((value: boolean) => {
            playerController.setCollisionEnabled(value);
            debug(`Player collision ${value ? "enabled" : "disabled"}`);
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
