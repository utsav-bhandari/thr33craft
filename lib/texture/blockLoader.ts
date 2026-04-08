import * as THREE from "three";
import blocksJson from "@blocks";
import type {
    AtlasState,
    BlockData,
    BlocksByName,
    GeometryMaterialPair,
} from "@project-types";
import {
    createAtlasMappedBoxGeometry,
    createRuntimeBlockTextureAtlas,
} from "@libtexture/blockTextureAtlas";
import { debug } from "@/logger";

// This module is responsible for loading block data and textures, creating block meshes, and managing texture atlases for efficient rendering of blocks in the game world. It includes functions to retrieve block data, preload textures, create materials for block faces, and generate meshes based on block names, utilizing caching mechanisms to optimize performance and reduce redundant loading of resources.

// A certain blocky game uses a specific order for block faces, which is important to maintain when creating geometries and applying textures. The FACE_MAPPINGS constant defines this order, ensuring that textures are correctly mapped to the corresponding faces of the block geometry when generating meshes for rendering in the game world.
export const FACE_MAPPINGS = [
    "east",
    "west",
    "up",
    "down",
    "north",
    "south",
] as const;

const allBlocks = blocksJson as BlocksByName;
const atlasMaterialCache = new Map<THREE.Texture, THREE.MeshStandardMaterial>();
const blockGeometryCache = new Map<string, THREE.BoxGeometry>();

const blockTextureAtlasPromise = createRuntimeBlockTextureAtlas({
    blocks: allBlocks,
    faceMappings: FACE_MAPPINGS,
});

export function getAllBlockTextureNames(): string[] {
    return Object.keys(allBlocks);
}

/** Retrieves the block data for a given block name, including its texture information if available */
export function getBlockData(blockName: string): BlockData {
    const blockData = allBlocks[blockName];
    if (!blockData) {
        throw new Error(`Block "${blockName}" not found`);
    }

    return blockData;
}

export async function fetchBlockTextureAtlas(): Promise<AtlasState> {
    debug("Fetching block texture atlas");
    const atlasState = await blockTextureAtlasPromise;
    debug("Block texture atlas fetched");
    return atlasState;
}

export async function createBlockMesh(
    blockName: string,
): Promise<THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial>> {
    debug("Creating block mesh", blockName);
    const atlasState = await fetchBlockTextureAtlas();
    const mesh = new THREE.Mesh(
        getBlockGeometry(blockName, atlasState),
        getAtlasMaterial(atlasState.atlasTexture),
    );
    debug("Block mesh created", blockName);
    return mesh;
}

/** Retrieves the geometry for a block based on its name and the provided atlas state. It first checks a cache for an existing geometry to avoid redundant creation, and if not found, it creates a new geometry using the atlas UV mappings for the block's faces. The generated geometry is then cached for future use to optimize performance when rendering multiple instances of the same block type in the game world. */
function getBlockGeometry(
    blockName: string,
    atlasState: AtlasState,
): THREE.BoxGeometry {
    const cachedGeometry = blockGeometryCache.get(blockName);
    if (cachedGeometry) {
        return cachedGeometry;
    }

    const faceUvs = atlasState.blockFaceUvs.get(blockName);
    if (!faceUvs) {
        throw new Error(`Block atlas UVs for "${blockName}" not found`);
    }

    const geometry = createAtlasMappedBoxGeometry(faceUvs);
    blockGeometryCache.set(blockName, geometry);
    return geometry;
}

/** Retrieves a material for the block atlas texture, utilizing a cache to avoid redundant creation and improve performance when rendering multiple blocks that share the same atlas texture. If a material for the given atlas texture already exists in the cache, it returns that material; otherwise, it creates a new material, caches it, and returns it for use in rendering block meshes. */
function getAtlasMaterial(
    atlasTexture: THREE.Texture,
): THREE.MeshStandardMaterial {
    const cachedMaterial = atlasMaterialCache.get(atlasTexture);
    if (cachedMaterial) {
        return cachedMaterial;
    }

    const material = new THREE.MeshStandardMaterial({
        map: atlasTexture,
        alphaTest: 0.5,
        depthWrite: true,
    });
    atlasMaterialCache.set(atlasTexture, material);
    return material;
}

/** Retrieves both the geometry and material for a block based on its name, utilizing caching mechanisms to optimize performance. It first fetches the block texture atlas state to access the necessary UV mappings and atlas texture, then retrieves or creates the corresponding geometry and material for the block, returning them as a pair for use in rendering block meshes in the game world. */
export async function getCachedGeometryAndMaterial(
    blockName: string,
): Promise<GeometryMaterialPair> {
    debug("Getting cached geometry and material", blockName);
    const atlasState = await fetchBlockTextureAtlas();

    return {
        geometry: getBlockGeometry(blockName, atlasState),
        material: getAtlasMaterial(atlasState.atlasTexture),
    };
}
