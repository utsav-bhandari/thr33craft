import { InputManager } from "@lib/controls/InputManager";
import { KeyMap } from "@lib/controls/KeyMap";
import { KeyStore } from "@lib/controls/KeyStore";
import type { InitSystemArgs } from "@project-types";
import { DEFAULT_KEYS_PRESET, WORLD_PARAMS } from "@/config";
import { PlayerController } from "@/engine/PlayerController";
import { System } from "@/engine/System";
import { createBlockMesh } from "@libtexture/block-loader";
import { Player } from "@/impl/Player";
import { initUI } from "@/init/ui";
import { debug } from "@/logger";
import { ChunkLoader } from "@engine/chunk/ChunkLoader";

/** Initializes the system, including the player, input manager, UI, and other core components */
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
    // Destructure options with defaults, allowing for overrides from gameParams and SYSTEM_INIT_CONFIG
    const {
        keyPreset = gameParams.keysPreset ?? DEFAULT_KEYS_PRESET,
        player: playerOptions = {},
        actions: actionOptions = {},
    } = options;

    // Further destructure player options with defaults
    const {
        blockName = "redstone_block",
        spawnPosition = WORLD_PARAMS.PLAYER_STARTING_POSITION,
        params: playerParams = gameParams.playerParams,
    } = playerOptions;

    const { menu = "MENU", inventory = "INVENTORY" } = actionOptions;

    const keyMap = new KeyMap();
    keyMap.init(keyPreset);

    const keyStore = new KeyStore();
    const inputManager = new InputManager(keyMap, keyStore);

    const { uiHandler } = initUI({
        inputManager,
        pointerControls,
        gameParams,
    });
    debug("UI initialized");

    // Create the player mesh and add it to the scene
    debug("Creating player mesh", blockName);
    const playerMesh = await createBlockMesh(blockName);
    debug("Player mesh created", { blockName });
    playerMesh.position.set(...spawnPosition);
    scene.add(playerMesh);

    const player = new Player(playerMesh, playerParams);
    const playerController = new PlayerController(player, inputManager, camera);
    const chunkLoader = new ChunkLoader();
    const system = new System(
        inputManager,
        uiHandler,
        playerController,
        chunkLoader,
    );

    registerHandlers({
        system,
        keyStore,
        uiHandler,
        menuAction: menu,
        inventoryAction: inventory,
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
}: {
    system: System;
    keyStore: KeyStore;
    uiHandler: ReturnType<typeof initUI>["uiHandler"];
    menuAction: string;
    inventoryAction: string;
}): void {
    // Helper function to add key event listeners while ignoring events from editable elements to prevent interference with typing in inputs, textareas, etc. This ensures that game controls do not interfere with standard text input behavior in the UI.
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

    const worldgen = uiHandler.getModal("worldgen");

    addKeyHandler("keydown", (key) => {
        debug(key, "pressed");
        keyStore.addPressedKey(key);
    });

    addKeyHandler("keyup", (key) => {
        debug(key, "released");
        keyStore.removePressedKey(key);
    });

    addKeyHandler("keydown", () => {
        if (worldgen?.isVisible()) {
            return;
        }

        if (system.inputManager.isPressed(menuAction)) {
            uiHandler.toggleModal("menu");
        }
    });

    addKeyHandler("keydown", () => {
        if (worldgen?.isVisible()) {
            return;
        }

        if (system.inputManager.isPressed(inventoryAction)) {
            uiHandler.toggleModal("inventory");
        }
    });

    // If user switches tabs or the window loses focus, clear the key store to prevent stuck keys when they return to the game. This ensures that the game does not continue to register keys as pressed when the user is not actively interacting with the game, providing a smoother and more intuitive user experience.
    window.addEventListener("blur", () => {
        debug("Window blurred, clearing key store");
        keyStore.clear();
        focusWarning.classList.add("visible");
    });

    window.addEventListener("focus", () => {
        debug("Window focused");
        if (!system.uiHandler.isUIOpen()) {
            system.uiHandler.lockPointer();
        }
        setTimeout(() => {
            focusWarning.classList.remove("visible");
        }, 400);
    });
}

function createWindowFocusWarning(): HTMLElement {
    const message = document.createElement("div");
    message.className = "focus-window-message";
    message.textContent = "Click on window to continue playing";
    document.body.appendChild(message);
    return message;
}

// Helper function to check if keyboard event target is an editable element to avoid interfering with typing in inputs, textareas, etc. This ensures that game controls do not interfere with standard text input behavior in the UI.
function isEditableTarget(event: KeyboardEvent): boolean {
    const target = event.target;

    return (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        (target instanceof HTMLElement && target.isContentEditable)
    );
}
