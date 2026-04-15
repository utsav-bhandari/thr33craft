import { Chunk } from "@/engine/world/chunk/Chunk";
import type { ChunkManager } from "@/engine/world/chunk/ChunkManager";
import {
    BEDROCK_BLOCK_ID,
    DIRT_BLOCK_ID,
    GRASS_BLOCK_ID,
    SAND_BLOCK_ID,
    SNOW_BLOCK_ID,
    STONE_BLOCK_ID,
    WATER_BLOCK_ID,
} from "@/utils/constants";
import { TERRAIN_PARAMS, WORLD_PARAMS } from "@/utils/config";
import { OpenSimplex2S } from "@/engine/generators/OpenSimplex2S";

const terrainNoise = new OpenSimplex2S(TERRAIN_PARAMS.seed);

function clampSurfaceHeight(surfaceHeight: number): number {
    return Math.max(
        WORLD_PARAMS.WORLD_BOTTOM_Y + 1,
        Math.min(Chunk.height - 1, surfaceHeight),
    );
}

function getSurfaceHeight(worldX: number, worldZ: number): number {
    const sampledNoise = terrainNoise.noise3ImproveXZ(
        worldX * TERRAIN_PARAMS.noiseScale,
        TERRAIN_PARAMS.surfaceSampleY,
        worldZ * TERRAIN_PARAMS.noiseScale,
    );
    const clampedNoise = Math.max(-1, Math.min(1, sampledNoise));

    return clampSurfaceHeight(
        Math.round(
            TERRAIN_PARAMS.baseHeight +
                clampedNoise * TERRAIN_PARAMS.heightVariation,
        ),
    );
}

function isBeachSurface(surfaceY: number): boolean {
    return surfaceY <= TERRAIN_PARAMS.seaLevel + TERRAIN_PARAMS.beachBand;
}

function isSnowSurface(surfaceY: number): boolean {
    return surfaceY >= TERRAIN_PARAMS.snowStartHeight;
}

function getSurfaceBlockId(surfaceY: number): number {
    if (isSnowSurface(surfaceY)) {
        return SNOW_BLOCK_ID;
    }

    if (isBeachSurface(surfaceY)) {
        return SAND_BLOCK_ID;
    }

    return GRASS_BLOCK_ID;
}

function getSubsurfaceBlockId(y: number, surfaceY: number): number {
    if (isBeachSurface(surfaceY) && surfaceY - y <= TERRAIN_PARAMS.sandDepth) {
        return SAND_BLOCK_ID;
    }

    if (surfaceY - y <= TERRAIN_PARAMS.topsoilDepth) {
        return DIRT_BLOCK_ID;
    }

    return STONE_BLOCK_ID;
}

function getTerrainBlockId(y: number, surfaceY: number): number {
    if (y === WORLD_PARAMS.WORLD_BOTTOM_Y) {
        return BEDROCK_BLOCK_ID;
    }

    if (y === surfaceY) {
        return getSurfaceBlockId(surfaceY);
    }

    return getSubsurfaceBlockId(y, surfaceY);
}

export function generateTerrain(chunk: Chunk, chunkManager: ChunkManager) {
    const chunkWorldX = chunk.getWorldX();
    const chunkWorldZ = chunk.getWorldZ();

    for (let x = 0; x < Chunk.size; x++) {
        for (let z = 0; z < Chunk.size; z++) {
            const worldX = chunkWorldX + x;
            const worldZ = chunkWorldZ + z;
            const surfaceY = getSurfaceHeight(worldX, worldZ);
            const highestFilledY = Math.min(
                Chunk.height - 1,
                Math.max(surfaceY, TERRAIN_PARAMS.seaLevel),
            );

            for (
                let y = WORLD_PARAMS.WORLD_BOTTOM_Y;
                y <= highestFilledY;
                y++
            ) {
                const blockId =
                    y <= surfaceY
                        ? getTerrainBlockId(y, surfaceY)
                        : WATER_BLOCK_ID;
                chunkManager.setVoxelInChunk(chunk, x, y, z, blockId, false);
            }
        }
    }
}
