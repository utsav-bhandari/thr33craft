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
    const normalizedColumns = Math.max(1, columns);
    const rows = Math.ceil(blockCount / normalizedColumns);
    const logicalWidth = normalizedColumns * iconSize;
    const logicalHeight = rows * iconSize;

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
    const metadata: BlockTextureSheetMetadata = {};

    blockNames.forEach((blockName, index) => {
        const column = index % columns;
        const row = Math.floor(index / columns);
        const x = column * iconSize;
        const y = row * iconSize;

        metadata[blockName] = {
            id: blockName,
            backgroundPosition: `-${x}px -${y}px`,
            backgroundSize,
        };
    });

    return metadata;
}