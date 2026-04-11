import { Chunk } from "./chunk/Chunk";
import {
    BEDROCK_BLOCK_ID,
    DIRT_BLOCK_ID,
    GRASS_BLOCK_ID,
    STONE_BLOCK_ID,
} from "@/utils/constants";

export function generateFlatTerrain(chunk: Chunk) {
    for (let x = 0; x < Chunk.size; x++) {
        for (let z = 0; z < Chunk.size; z++) {
            // Make the bottom 10 blocks solid
            for (let y = 0; y < Chunk.height / 4; y++) {
                let blockId =
                    y === Math.floor(Chunk.height / 4) - 1
                        ? GRASS_BLOCK_ID
                        : DIRT_BLOCK_ID;
                if (y < Math.floor(Chunk.height / 8)) blockId = STONE_BLOCK_ID;
                if (y === 0) blockId = BEDROCK_BLOCK_ID;

                chunk.setVoxel(x, y, z, blockId);
            }
        }
    }
}
