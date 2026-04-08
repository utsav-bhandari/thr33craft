import type { BlockTextureSheetMetadata } from "@project-types";

export interface BlockTextureSheetLayout {
    columns: number;
    rows: number;
    logicalWidth: number;
    logicalHeight: number;
    backgroundSize: string;
}

export function createBlockTextureSheetLayout(
    blockCount: number,
    columns: number,
    iconSize: number,
): BlockTextureSheetLayout {
    // Ensure at least 1 column to avoid division by zero
    const normalizedColumns = Math.max(1, columns);
    // Calculate the number of rows needed to fit all blocks
    const rows = Math.ceil(blockCount / normalizedColumns);
    // Calculate the logical dimensions of the texture sheet
    const logicalWidth = normalizedColumns * iconSize;
    const logicalHeight = rows * iconSize;

    // Return the layout information for the block texture sheet
    return {
        columns: normalizedColumns,
        rows,
        logicalWidth,
        logicalHeight,
        backgroundSize: `${logicalWidth}px ${logicalHeight}px`,
    };
}

export function createBlockTextureSheetMetadata(
    blockNames: string[],
    columns: number,
    iconSize: number,
    backgroundSize: string,
): BlockTextureSheetMetadata {
    // Create metadata for each block, including its background position on the texture sheet
    const metadata: BlockTextureSheetMetadata = {};

    // Loop through each block name and calculate its position on the texture sheet
    blockNames.forEach((blockName, index) => {
        const column = index % columns;
        const row = Math.floor(index / columns);
        const x = column * iconSize;
        const y = row * iconSize;

        // Store the metadata for the block, including its ID, background position, and background size
        metadata[blockName] = {
            id: blockName,
            backgroundPosition: `-${x}px -${y}px`,
            backgroundSize,
        };
    });

    return metadata;
}
