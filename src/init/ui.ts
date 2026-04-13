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
import { generateBlockTextureSheet } from "@lib/texture/generateBlockTextureSheet";
import { Inventory } from "@/impl/inventory/Inventory";
import { loadIndividualBlocks } from "@lib/texture/loadBlockTextureSheet";
import { debug } from "@/utils/logger";
import { renderableBlockNames } from "@/init/block-registry";

/** Creates game UI modals and starts inventory texture-sheet initialization. */
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
    inventory: Inventory;
} {
    const uiHandler = new UIHandler(inputManager, pointerControls);

    const menu = uiHandler.registerModal(
        "menu",
        new BaseUIModal(gameParams.menuHtmlElm),
    );
    const inventory = uiHandler.registerModal(
        "inventory",
        new Inventory(
            gameParams.inventoryHtmlElm,
            gameParams.inventoryBlockTextureSheetParams,
        ),
    );

    uiHandler.openModal("menu");
    debug("Menu modal opened and inventory initialization started");
    document
        .getElementById("reset-world")
        ?.addEventListener("click", () => window.location.reload());

    void initializeInventoryUI(
        inventory,
        gameParams.inventoryBlockTextureSheetParams,
    );

    return {
        uiHandler,
        menu,
        inventory,
    };
}

async function initializeInventoryUI(
    inventoryUI: Inventory,
    blockTextureSheetConfig: InventoryBlockTextureSheetParams = {},
): Promise<void> {
    try {
        const {
            source = "static",
            staticTextureSheetUrl = "/assets/images/block-texture-sheet.png",
            columns = 16,
            iconSize = 64,
            chunkSize = 20,
            renderScale,
        } = blockTextureSheetConfig;

        const blockNames = renderableBlockNames;

        debug("Initializing inventory UI", {
            source,
            staticTextureSheetUrl,
            columns,
            iconSize,
        });

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

        debug("Inventory texture sheet loaded", {
            source,
            blockCount: blockNames.length,
        });
        inventoryUI.setGridTextureSheet(textureSheet);
    } catch (error) {
        console.error(error);
        inventoryUI.setErrorState("Failed to load block texture sheet.");
    }
}

/** Generates the inventory texture sheet and streams progress into inventory status UI. */
function generateTextureSheetFromScratch(
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

/** Loads an inventory texture sheet from prebuilt image assets. */
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
