import { Chunk } from "./Chunk";
import { BlockId } from "@project-types";
import { AIR_BLOCK_ID } from "@/utils/constants";
import { mod } from "@/utils/helper";
import { Subchunk } from "./SubChunks";
import { ChunkMeshManager } from "./ChunkMeshManager";
import { generateFlatTerrain } from "../World-Generator";

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

    /** Writes a voxel in world coordinates and returns the owning chunk. */
    setVoxelWorld(
        worldX: number,
        worldY: number,
        worldZ: number,
        blockId: BlockId,
    ): Chunk {
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

        return chunk;
    }

    isVoxelSolidWorld(worldX: number, worldY: number, worldZ: number): boolean {
        return this.getVoxelIdWorld(worldX, worldY, worldZ) !== AIR_BLOCK_ID;
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

    /** Resolves world-space voxel id across chunk/subchunk boundaries. */
    private getVoxelIdWorld(
        worldX: number,
        worldY: number,
        worldZ: number,
    ): number {
        if (worldY < 0 || worldY >= Chunk.height) {
            return AIR_BLOCK_ID;
        }

        const { chunkX, chunkZ } = Chunk.worldToChunkCoords(worldX, worldZ);
        const chunk = this.worldChunksMap.get(this.getChunkKey(chunkX, chunkZ));
        if (!chunk) {
            return AIR_BLOCK_ID;
        }

        const localX = mod(worldX, Chunk.size);
        const localZ = mod(worldZ, Chunk.size);
        const subchunk = chunk.getSubchunk(worldY);
        const localY = worldY % Subchunk.height;

        return subchunk.getVoxelId(localX, localY, localZ);
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

    private getChunkKey(chunkX: number, chunkZ: number): string {
        return `${chunkX},${chunkZ}`;
    }
}
