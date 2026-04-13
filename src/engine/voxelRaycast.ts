import type { BlockId } from "@project-types";
import { AIR_BLOCK_ID } from "@/utils/constants";

export interface VoxelRaycastHit {
    blockX: number;
    blockY: number;
    blockZ: number;
    blockId: BlockId;
    normalX: number;
    normalY: number;
    normalZ: number;
}

type VoxelReader = (
    worldX: number,
    worldY: number,
    worldZ: number,
) => BlockId | null;

export function raycastVoxels(
    origin: { x: number; y: number; z: number },
    direction: { x: number; y: number; z: number },
    maxDistance: number,
    getVoxelId: VoxelReader,
): VoxelRaycastHit | null {
    const directionLength = Math.hypot(direction.x, direction.y, direction.z);
    if (directionLength === 0) {
        return null;
    }

    const dirX = direction.x / directionLength;
    const dirY = direction.y / directionLength;
    const dirZ = direction.z / directionLength;

    let worldX = Math.floor(origin.x);
    let worldY = Math.floor(origin.y);
    let worldZ = Math.floor(origin.z);

    const stepX = Math.sign(dirX);
    const stepY = Math.sign(dirY);
    const stepZ = Math.sign(dirZ);

    const tDeltaX = stepX === 0 ? Number.POSITIVE_INFINITY : Math.abs(1 / dirX);
    const tDeltaY = stepY === 0 ? Number.POSITIVE_INFINITY : Math.abs(1 / dirY);
    const tDeltaZ = stepZ === 0 ? Number.POSITIVE_INFINITY : Math.abs(1 / dirZ);

    let tMaxX =
        stepX === 0 ? Number.POSITIVE_INFINITY : intBound(origin.x, dirX);
    let tMaxY =
        stepY === 0 ? Number.POSITIVE_INFINITY : intBound(origin.y, dirY);
    let tMaxZ =
        stepZ === 0 ? Number.POSITIVE_INFINITY : intBound(origin.z, dirZ);

    let normalX = 0;
    let normalY = 0;
    let normalZ = 0;
    let travelledDistance = 0;

    while (travelledDistance <= maxDistance) {
        const blockId = getVoxelId(worldX, worldY, worldZ);
        if (blockId === null) {
            return null;
        }

        if (blockId !== AIR_BLOCK_ID) {
            return {
                blockX: worldX,
                blockY: worldY,
                blockZ: worldZ,
                blockId,
                normalX,
                normalY,
                normalZ,
            };
        }

        if (tMaxX <= tMaxY && tMaxX <= tMaxZ) {
            travelledDistance = tMaxX;
            worldX += stepX;
            tMaxX += tDeltaX;
            normalX = -stepX;
            normalY = 0;
            normalZ = 0;
            continue;
        }

        if (tMaxY <= tMaxZ) {
            travelledDistance = tMaxY;
            worldY += stepY;
            tMaxY += tDeltaY;
            normalX = 0;
            normalY = -stepY;
            normalZ = 0;
            continue;
        }

        travelledDistance = tMaxZ;
        worldZ += stepZ;
        tMaxZ += tDeltaZ;
        normalX = 0;
        normalY = 0;
        normalZ = -stepZ;
    }

    return null;
}

function intBound(position: number, delta: number): number {
    if (delta < 0) {
        return intBound(-position, -delta);
    }

    const normalized = position - Math.floor(position);
    return (1 - normalized) / delta;
}
