import { Chunk } from "@/engine/world/chunk/Chunk";
import type { ChunkManager } from "@/engine/world/chunk/ChunkManager";
import {
    BEDROCK_BLOCK_ID,
    DIRT_BLOCK_ID,
    GRASS_BLOCK_ID,
    STONE_BLOCK_ID,
} from "@/utils/constants";
import { WORLD_PARAMS } from "@/utils/config";

export function generateFlatTerrain(chunk: Chunk, chunkManager: ChunkManager) {
    for (let x = 0; x < Chunk.size; x++) {
        for (let z = 0; z < Chunk.size; z++) {
            // Make the bottom 10 blocks solid
            for (
                let y = WORLD_PARAMS.WORLD_BOTTOM_Y;
                y < Chunk.height / 4;
                y++
            ) {
                let blockId =
                    y === Math.floor(Chunk.height / 4) - 1
                        ? GRASS_BLOCK_ID
                        : DIRT_BLOCK_ID;
                if (y < Math.floor(Chunk.height / 8)) blockId = STONE_BLOCK_ID;
                if (y === WORLD_PARAMS.WORLD_BOTTOM_Y)
                    blockId = BEDROCK_BLOCK_ID;

                chunkManager.setVoxelInChunk(chunk, x, y, z, blockId, false);
            }
        }
    }
}
