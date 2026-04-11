import blocksJson from "@blocks";
import type {
    BlockDefinition,
    BlockId,
    BlockName,
    BlocksByName,
} from "@project-types";

export const AIR_BLOCK_NAME = "air";
export const AIR_BLOCK_ID = 0;

export const staticBlocks = blocksJson as BlocksByName;
validateStaticBlocks(staticBlocks);

const blocksByName = new Map<BlockName, BlockDefinition>();
const blocksById = new Map<BlockId, BlockDefinition>();

registerBlock({
    id: AIR_BLOCK_ID,
    name: AIR_BLOCK_NAME,
    transparent: true,
    textures: {},
});

// Register all blocks from the static JSON data and populate the blocksByName and blocksById maps for efficient retrieval of block data by name or ID throughout the game. This setup allows for easy access to block properties, such as transparency and texture information, which are essential for rendering and game mechanics involving different block types in the game world.
Object.entries(staticBlocks).forEach(([name, blockData]) => {
    registerBlock({
        ...blockData,
        name,
    });
});

export const renderableBlockNames = getRenderableBlockNames();

export function getRegisteredBlockNames(): BlockName[] {
    return (
        [...blocksById.entries()]
            // Sort by block ID to ensure consistent ordering, especially important for rendering and atlas generation where block IDs may be used as indices.
            .sort(([leftId], [rightId]) => leftId - rightId)
            .map(([, blockData]) => blockData.name)
    );
}

function getRenderableBlockNames(): BlockName[] {
    return getRegisteredBlockNames().filter(
        (blockName) => blockName !== AIR_BLOCK_NAME,
    );
}

export function getRenderableBlocksByName(): BlocksByName {
    return Object.fromEntries(
        renderableBlockNames.map((blockName) => {
            const { name: _name, ...blockData } = blocksByName.get(blockName)!;

            return [blockName, blockData];
        }),
    );
}

export function isTransparentBlock(block: BlockName | BlockId): boolean {
    const name =
        typeof block === "string" ? block : blocksById.get(block)!.name;

    return blocksByName.get(name)!.transparent;
}

function registerBlock(blockData: BlockDefinition): void {
    blocksByName.set(blockData.name, blockData);
    blocksById.set(blockData.id, blockData);
}

export function getIDForBlock(blockName: BlockName): BlockId {
    return blocksByName.get(blockName)!.id;
}

export function getNameForBlock(blockId: BlockId): BlockName {
    return blocksById.get(blockId)!.name;
}

function validateStaticBlocks(blocks: BlocksByName): void {
    const ids = Object.values(blocks)
        .map((blockData) => blockData.id)
        .sort((leftId, rightId) => leftId - rightId);

    ids.forEach((id, index) => {
        const expectedId = index + 1;
        if (id !== expectedId) {
            throw new Error(
                `Expected blocks.json ids to be sequential starting at 1. Found ${id}, expected ${expectedId}.`,
            );
        }
    });
}
