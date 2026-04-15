import { Chunk } from "./Chunk";
import { BlockId } from "@project-types";
import { AIR_BLOCK_ID, WATER_BLOCK_ID } from "@/utils/constants";
import { isTransparentBlock } from "@/init/block-registry";
import { mod } from "@/utils/helper";
import { WORLD_PARAMS } from "@/utils/config";
import { Subchunk } from "@/engine/world/chunk/SubChunks";
import { ChunkMeshManager } from "@/engine/world/chunk/ChunkMeshManager";
import { generateFlatTerrain } from "@/engine/world/World-Generator";

export class ChunkManager {
    private readonly worldChunksMap: Map<string, Chunk> = new Map();
    private readonly meshManager: ChunkMeshManager;

    constructor() {
        this.meshManager = new ChunkMeshManager(this);
    }

    /** Returns an existing chunk or creates and caches a new one. */
    getOrCreateChunk(chunkX: number, chunkZ: number): Chunk {
        const chunkKey = this.getChunkKey(chunkX, chunkZ);
        const existingChunk = this.worldChunksMap.get(chunkKey);

        if (existingChunk) {
            return existingChunk;
        }

        const chunk = new Chunk(chunkX, chunkZ);
        this.worldChunksMap.set(chunkKey, chunk);
        return chunk;
    }

    /** Returns a chunk only if it already exists in cache. */
    getChunkIfExists(chunkX: number, chunkZ: number): Chunk | null {
        return (
            this.worldChunksMap.get(this.getChunkKey(chunkX, chunkZ)) ?? null
        );
    }

    /** Returns a neighboring chunk if it has already been created. */
    getNeighborChunk(
        chunk: Chunk,
        offsetX: number,
        offsetZ: number,
    ): Chunk | null {
        const neighborKey = this.getChunkKey(
            chunk.chunkX + offsetX,
            chunk.chunkZ + offsetZ,
        );

        return this.worldChunksMap.get(neighborKey) ?? null;
    }

    deleteChunk(chunk: Chunk): void {
        this.worldChunksMap.delete(chunk.getKey());
    }

    /** Lazily generates chunk voxel data exactly once. */
    ensureChunkGenerated(chunk: Chunk): void {
        if (!chunk.isDataGenerated) {
            generateFlatTerrain(chunk, this);
            chunk.isDataGenerated = true;
        }
    }

    /**
     * Writes a voxel in local chunk coordinates and marks touching subchunks dirty
     * so border meshes are rebuilt consistently.
     */
    setVoxelInChunk(
        chunk: Chunk,
        x: number,
        y: number,
        z: number,
        blockId: BlockId,
        markChunkModified: boolean,
    ): void {
        const subchunk = chunk.getSubchunk(y);
        const localY = y % Subchunk.height;

        subchunk.setVoxel(x, localY, z, blockId);
        this.markNeighborSubchunksDirtyForEdgeVoxel(
            chunk,
            subchunk.yIndex,
            x,
            localY,
            z,
        );

        if (markChunkModified) {
            chunk.isModified = true;
        }
    }

    /** Writes a voxel in world coordinates and returns all generated chunks whose meshes must be rebuilt. */
    setVoxelWorld(
        worldX: number,
        worldY: number,
        worldZ: number,
        blockId: BlockId,
    ): Chunk[] {
        const { chunkX, chunkZ } = Chunk.worldToChunkCoords(worldX, worldZ);
        const chunk = this.getOrCreateChunk(chunkX, chunkZ);

        const localX = mod(worldX, Chunk.size);
        const localZ = mod(worldZ, Chunk.size);

        this.setVoxelInChunk(
            chunk,
            localX,
            worldY,
            localZ,
            blockId,
            chunk.isDataGenerated,
        );

        return this.collectChunksNeedingMeshRebuild(chunk, localX, localZ);
    }

    getVoxelIdWorld(
        worldX: number,
        worldY: number,
        worldZ: number,
    ): BlockId | null {
        return this.tryGetVoxelIdWorld(worldX, worldY, worldZ);
    }

    rotateVoxelWorld(worldX: number, worldY: number, worldZ: number): boolean {
        const voxelRef = this.tryGetVoxelRefWorld(worldX, worldY, worldZ);
        if (!voxelRef) {
            return false;
        }

        const { chunk, subchunk, localX, localY, localZ } = voxelRef;
        if (subchunk.getVoxelId(localX, localY, localZ) === AIR_BLOCK_ID) {
            return false;
        }

        subchunk.setVoxelRotation(
            localX,
            localY,
            localZ,
            subchunk.getVoxelRotation(localX, localY, localZ) + 1,
        );

        if (chunk.isDataGenerated) {
            chunk.isModified = true;
        }

        return true;
    }

    isVoxelSolidWorld(worldX: number, worldY: number, worldZ: number): boolean {
        if (worldY < WORLD_PARAMS.WORLD_BOTTOM_Y) {
            return true;
        }

        const voxelId = this.tryGetVoxelIdWorld(worldX, worldY, worldZ);
        return (
            voxelId !== null &&
            voxelId !== AIR_BLOCK_ID &&
            voxelId !== WATER_BLOCK_ID
        );
    }

    /**
     * Meshing/culling variant: unknown neighbor chunks are treated as solid so
     * chunk-border blocks stay hidden until the adjacent chunk is generated.
     */
    isVoxelSolidForMeshing(
        worldX: number,
        worldY: number,
        worldZ: number,
    ): boolean {
        // The world has no playable space below y=0, so treat that boundary as
        // solid to avoid rendering buried bedrock blocks at the bottom layer.
        if (worldY < WORLD_PARAMS.WORLD_BOTTOM_Y) {
            return true;
        }

        const voxelId = this.tryGetVoxelIdWorld(worldX, worldY, worldZ);
        if (voxelId === null) {
            return true;
        }

        return voxelId !== AIR_BLOCK_ID;
    }

    isVoxelOpaqueForMeshing(
        worldX: number,
        worldY: number,
        worldZ: number,
    ): boolean {
        if (worldY < WORLD_PARAMS.WORLD_BOTTOM_Y) {
            return true;
        }

        const voxelId = this.tryGetVoxelIdWorld(worldX, worldY, worldZ);
        if (voxelId === null) {
            return true;
        }

        return voxelId !== AIR_BLOCK_ID && !isTransparentBlock(voxelId);
    }

    rebuildChunkMeshes(chunk: Chunk): void {
        this.meshManager.rebuildChunkMeshes(chunk);
    }

    freeChunkMeshes(chunk: Chunk): void {
        this.meshManager.freeChunkMeshes(chunk);
    }

    getChunkCount(): number {
        return this.worldChunksMap.size;
    }

    /**
     * Resolves world-space voxel id across chunk/subchunk boundaries.
     * Returns null when the owning chunk does not exist or is not generated.
     */
    private tryGetVoxelIdWorld(
        worldX: number,
        worldY: number,
        worldZ: number,
    ): BlockId | null {
        if (worldY < WORLD_PARAMS.WORLD_BOTTOM_Y || worldY >= Chunk.height) {
            return AIR_BLOCK_ID;
        }

        const voxelRef = this.tryGetVoxelRefWorld(worldX, worldY, worldZ);
        if (!voxelRef) {
            return null;
        }

        return voxelRef.subchunk.getVoxelId(
            voxelRef.localX,
            voxelRef.localY,
            voxelRef.localZ,
        );
    }

    private tryGetVoxelRefWorld(
        worldX: number,
        worldY: number,
        worldZ: number,
    ): {
        chunk: Chunk;
        subchunk: Subchunk;
        localX: number;
        localY: number;
        localZ: number;
    } | null {
        if (worldY < WORLD_PARAMS.WORLD_BOTTOM_Y || worldY >= Chunk.height) {
            return null;
        }

        const { chunkX, chunkZ } = Chunk.worldToChunkCoords(worldX, worldZ);
        const chunk = this.worldChunksMap.get(this.getChunkKey(chunkX, chunkZ));
        if (!chunk || !chunk.isDataGenerated) {
            return null;
        }

        const localX = mod(worldX, Chunk.size);
        const localZ = mod(worldZ, Chunk.size);
        const subchunk = chunk.getSubchunk(worldY);
        const localY = worldY % Subchunk.height;

        return {
            chunk,
            subchunk,
            localX,
            localY,
            localZ,
        };
    }

    private markNeighborSubchunksDirtyForEdgeVoxel(
        chunk: Chunk,
        subchunkYIndex: number,
        x: number,
        y: number,
        z: number,
    ): void {
        if (x === 0) {
            this.getNeighborChunk(chunk, -1, 0)
                ?.getSubchunk(subchunkYIndex * Subchunk.height)
                .markDirty();
        }

        if (x === Chunk.size - 1) {
            this.getNeighborChunk(chunk, 1, 0)
                ?.getSubchunk(subchunkYIndex * Subchunk.height)
                .markDirty();
        }

        if (z === 0) {
            this.getNeighborChunk(chunk, 0, -1)
                ?.getSubchunk(subchunkYIndex * Subchunk.height)
                .markDirty();
        }

        if (z === Chunk.size - 1) {
            this.getNeighborChunk(chunk, 0, 1)
                ?.getSubchunk(subchunkYIndex * Subchunk.height)
                .markDirty();
        }

        if (y === 0 && subchunkYIndex > 0) {
            chunk
                .getSubchunk((subchunkYIndex - 1) * Subchunk.height)
                .markDirty();
        }

        if (
            y === Subchunk.height - 1 &&
            subchunkYIndex < chunk.subchunkCount - 1
        ) {
            chunk
                .getSubchunk((subchunkYIndex + 1) * Subchunk.height)
                .markDirty();
        }
    }

    private collectChunksNeedingMeshRebuild(
        chunk: Chunk,
        localX: number,
        localZ: number,
    ): Chunk[] {
        const chunks = new Set<Chunk>();

        if (chunk.isDataGenerated) {
            chunks.add(chunk);
        }

        if (localX === 0) {
            this.addGeneratedNeighborChunk(chunks, chunk, -1, 0);
        }

        if (localX === Chunk.size - 1) {
            this.addGeneratedNeighborChunk(chunks, chunk, 1, 0);
        }

        if (localZ === 0) {
            this.addGeneratedNeighborChunk(chunks, chunk, 0, -1);
        }

        if (localZ === Chunk.size - 1) {
            this.addGeneratedNeighborChunk(chunks, chunk, 0, 1);
        }

        return Array.from(chunks);
    }

    private addGeneratedNeighborChunk(
        chunks: Set<Chunk>,
        chunk: Chunk,
        offsetX: number,
        offsetZ: number,
    ): void {
        const neighborChunk = this.getNeighborChunk(chunk, offsetX, offsetZ);

        if (neighborChunk?.isDataGenerated) {
            chunks.add(neighborChunk);
        }
    }

    private getChunkKey(chunkX: number, chunkZ: number): string {
        return `${chunkX},${chunkZ}`;
    }
}
