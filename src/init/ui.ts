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
import { BaseUIModal } from "@lib/base/BaseUIModal";
import { UIHandler } from "@/engine/UIHandler";
import { getAllBlockTextureNames } from "@/engine/blockLoader";
import { generateBlockTextureSheet } from "@lib/texture-sheet/generateBlockTextureSheet";
import { Inventory } from "@/impl/inventory/Inventory";
import { loadIndividualBlocks } from "@lib/texture-sheet/loadBlockTextureSheet";

/** Initializes the UI components of the game, including the menu, world generation screen, and inventory, and sets up the necessary event handlers for user interaction.
 * This function is responsible for creating instances of the UI modals and integrating them with the input manager and pointer controls to ensure a seamless user experience when interacting with the game's UI. */
export function initUI({
    inputManager,
    pointerControls,
    gameParams,
}: {
    inputManager: InputManagerLike;
    pointerControls: PointerLockControls;
    gameParams: GameParams;
}): {
    uiHandler: UIHandler;
    menu: UIModalLike;
    worldgen: UIModalLike;
    inventory: Inventory;
} {
    const uiHandler = new UIHandler(inputManager, pointerControls);

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

/** Generates a block texture sheet from scratch based on the provided block names and options, and updates the inventory UI with the loading progress. This function is used when the block texture sheet needs to be dynamically created at runtime, allowing for customization of the texture sheet generation process and providing feedback to the user through the inventory UI. */
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

/** Loads a block texture sheet from a static asset based on the provided block names and options, and updates the inventory UI with the loading progress. This function is used when a pre-generated block texture sheet is available as an asset, allowing for efficient loading of the texture sheet while providing feedback to the user through the inventory UI. */
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
