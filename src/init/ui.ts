import type {
    BlockTextureSheet,
    GameParams,
    GenerateBlockTextureSheetOptions,
    InputManagerLike,
    InventoryBlockTextureSheetParams,
    LoadBlockTextureSheetOptions,
    UIModalLike,
} from "@project-types";
import type { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import { BaseUIModal } from "@lib/base/BaseUIModal.js";
import { UIHandler } from "@/engine/UIHandler.js";
import { getAllBlockTextureNames } from "@/engine/blockLoader.js";
import { generateBlockTextureSheet } from "@/generateBlockTextureSheet.js";
import { Inventory } from "@/impl/inventory/Inventory.js";
import { loadIndividualBlocks } from "@/init/loadBlockTextureSheet.js";

export function initUI({
    inputManager,
    pointerControls,
    gameParams,
    hideOnUIHtmlElems = [],
}: {
    inputManager: InputManagerLike;
    pointerControls: PointerLockControls;
    gameParams: GameParams;
    hideOnUIHtmlElems?: HTMLElement[];
}): {
    uiHandler: UIHandler;
    menu: UIModalLike;
    worldgen: UIModalLike;
    inventory: Inventory;
} {
    const uiHandler = new UIHandler(
        inputManager,
        pointerControls,
        hideOnUIHtmlElems,
    );

    const menu = uiHandler.registerModal(
        "menu",
        new BaseUIModal(gameParams.menuHtmlElm),
    );
    const worldgen = uiHandler.registerModal(
        "worldgen",
        new BaseUIModal(gameParams.worldGenHtmlElm),
    );
    const inventory = uiHandler.registerModal(
        "inventory",
        new Inventory(
            gameParams.inventoryHtmlElm,
            gameParams.inventoryBlockTextureSheetParams,
        ),
    );

    uiHandler.openModal("worldgen");
    void initializeInventoryUI(
        inventory,
        gameParams.inventoryBlockTextureSheetParams,
    );

    return {
        uiHandler,
        menu,
        worldgen,
        inventory,
    };
}

async function initializeInventoryUI(
    inventoryUI: Inventory,
    blockTextureSheetConfig: InventoryBlockTextureSheetParams = {},
): Promise<void> {
    try {
        const blockNames = getAllBlockTextureNames().sort();
        const {
            source = "static",
            staticTextureSheetUrl = "/assets/images/block-texture-sheet.png",
            columns = 16,
            iconSize = 64,
            chunkSize = 20,
            renderScale,
        } = blockTextureSheetConfig;

        const textureSheet =
            source === "generated"
                ? await generateTextureSheetFromScratch(
                      inventoryUI,
                      blockNames,
                      {
                          columns,
                          iconSize,
                          chunkSize,
                          renderScale,
                      },
                  )
                : await loadTextureSheetFromAsset(inventoryUI, blockNames, {
                      textureSheetUrl: staticTextureSheetUrl,
                      columns,
                      iconSize,
                  });

        inventoryUI.setGridTextureSheet(textureSheet);
    } catch (error) {
        console.error(error);
        inventoryUI.setErrorState("Failed to load block texture sheet.");
    }
}

async function generateTextureSheetFromScratch(
    inventoryUI: Inventory,
    blockNames: string[],
    options: GenerateBlockTextureSheetOptions,
): Promise<BlockTextureSheet> {
    inventoryUI.setLoadingState(
        `Generating block texture sheet... 0/${blockNames.length} blocks`,
    );

    return generateBlockTextureSheet(blockNames, {
        ...options,
        onProgress: ({ completed, total }) => {
            inventoryUI.setLoadingState(
                `Generating block texture sheet... ${completed}/${total} blocks`,
            );
        },
    });
}

async function loadTextureSheetFromAsset(
    inventoryUI: Inventory,
    blockNames: string[],
    options: LoadBlockTextureSheetOptions,
): Promise<BlockTextureSheet> {
    inventoryUI.setLoadingState(
        `Loading block texture sheet... ${blockNames.length} blocks`,
    );

    return loadIndividualBlocks(blockNames, options);
}
