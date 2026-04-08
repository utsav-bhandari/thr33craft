import type {
    BlockTextureSheet,
    LoadBlockTextureSheetOptions,
} from "@project-types";
import {
    createBlockTextureSheetLayout,
    createBlockTextureSheetMetadata,
    // } from "@/init/texture-sheet/blockTextureSheetLayout";
} from "@lib/texture-sheet/blockTextureSheetLayout";

export async function loadIndividualBlocks(
    blockNames: string[],
    options: LoadBlockTextureSheetOptions = {},
): Promise<BlockTextureSheet> {
    const textureSheetUrl =
        options.textureSheetUrl ?? "/assets/images/block-texture-sheet.png";
    const columns = options.columns ?? 16;
    const iconSize = options.iconSize ?? 64;

    const textureSheetImage = await loadBlockTextureSheet(textureSheetUrl);
    const sheetLayout = createBlockTextureSheetLayout(
        blockNames.length,
        columns,
        iconSize,
    );
    const metadata = createBlockTextureSheetMetadata(
        blockNames,
        sheetLayout.columns,
        iconSize,
        sheetLayout.backgroundSize,
    );

    return {
        textureSheetUrl,
        textureSheetImage,
        iconSize,
        items: blockNames.map((blockName) => ({
            ...metadata[blockName],
            textureSheetUrl,
        })),
        metadata,
    };
}

function loadBlockTextureSheet(
    textureSheetUrl: string,
): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const image = new Image();
        image.addEventListener("load", () => resolve(image), { once: true });
        image.addEventListener(
            "error",
            () => {
                reject(
                    new Error(
                        `Failed to load block texture sheet image: ${textureSheetUrl}`,
                    ),
                );
            },
            { once: true },
        );
        image.src = textureSheetUrl;
    });
}
