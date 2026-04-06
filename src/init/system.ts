import { InputManager } from "@lib/controls/InputManager";
import { KeyMap } from "@lib/controls/KeyMap";
import { KeyStore } from "@lib/controls/KeyStore";
import type { InitSystemArgs } from "@project-types";
import { DEFAULT_KEYS_PRESET, WORLD_PARAMS } from "@/config";
import { PlayerController } from "@/engine/PlayerController";
import { System } from "@/engine/System";
import { createBlockMesh } from "@/engine/blockLoader";
import { Player } from "@/impl/Player";
import { initUI } from "@/init/ui";

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
        ui: uiOptions = {},
        actions: actionOptions = {},
    } = options;

    const {
        blockName = "redstone_block",
        spawnPosition = WORLD_PARAMS.PLAYER_STARTING_POSITION,
        params: playerParams = gameParams.playerParams,
    } = playerOptions;

    const hideOnUIHtmlElems = uiOptions.hideOnUIHtmlElems ?? [
        gameParams.crosshairHtmlElm,
        gameParams.hudHintHtmlElm,
    ];

    const { menu = "MENU", inventory = "INVENTORY" } = actionOptions;

    const keyMap = new KeyMap();
    keyMap.init(keyPreset);

    const keyStore = new KeyStore();
    const inputManager = new InputManager(keyMap, keyStore);

    const { uiHandler } = initUI({
        inputManager,
        pointerControls,
        gameParams,
        hideOnUIHtmlElems,
    });

    const playerMesh = await createBlockMesh(blockName);
    playerMesh.position.set(...spawnPosition);
    scene.add(playerMesh);

    const player = new Player(playerMesh, playerParams);
    const playerController = new PlayerController(player, inputManager, camera);
    const system = new System(inputManager, uiHandler, playerController);

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

    const menu = uiHandler.getModal("menu");
    const worldgen = uiHandler.getModal("worldgen");

    addKeyHandler("keydown", (key) => {
        console.log(`Key down: ${key}`);
        keyStore.addPressedKey(key);
    });

    addKeyHandler("keyup", (key) => {
        keyStore.removePressedKey(key);
    });

    menu?.htmlElement.addEventListener("click", (event) => {
        if (event.target === menu.htmlElement) {
            uiHandler.closeModal("menu");
        }
    });

    addKeyHandler("keydown", () => {
        if (worldgen?.isOpen()) {
            return;
        }

        if (system.inputManager.isPressed(menuAction)) {
            uiHandler.toggleModal("menu");
        }
    });

    addKeyHandler("keydown", () => {
        if (worldgen?.isOpen()) {
            return;
        }

        if (system.inputManager.isPressed(inventoryAction)) {
            uiHandler.toggleModal("inventory");
        }
    });

    window.addEventListener("blur", () => {
        keyStore.clear();
    });
}

// helper function to check if keyboard event target is an editable element to avoid interfering with typing in inputs, textareas, etc.
function isEditableTarget(event: KeyboardEvent): boolean {
    const target = event.target;

    return (
        target instanceof HTMLInputElement ||
        target instanceof HTMLTextAreaElement ||
        target instanceof HTMLSelectElement ||
        (target instanceof HTMLElement && target.isContentEditable)
    );
}
