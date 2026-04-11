import * as THREE from "three";
import type { AtlasState, BlockId, BlockName } from "@project-types";
import { getNameForBlock, staticBlocks } from "@/init/block-registry";
import {
    createAtlasMappedBoxGeometry,
    createRuntimeBlockTextureAtlas,
} from "@lib/texture/blockTextureAtlas";
import { debug } from "@/utils/logger";

const atlasMaterialCache = new Map<THREE.Texture, THREE.MeshStandardMaterial>();
const blockGeometryCache = new Map<string, THREE.BoxGeometry>();

debug("Fetching block texture atlas");

export const blockTextureAtlas = await createRuntimeBlockTextureAtlas({
    blocks: staticBlocks,
});
debug("Block texture atlas fetched");

export async function createBlockMesh(
    blockName: BlockName,
): Promise<THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial>> {
    debug("Creating block mesh", blockName);
    const mesh = new THREE.Mesh(
        getBlockGeometry(blockName),
        getAtlasMaterial(),
    );
    debug("Block mesh created", blockName);
    return mesh;
}

/** Retrieves the geometry for a block based on its name and the provided atlas state. It first checks a cache for an existing geometry to avoid redundant creation, and if not found, it creates a new geometry using the atlas UV mappings for the block's faces. The generated geometry is then cached for future use to optimize performance when rendering multiple instances of the same block type in the game world. */
export function getBlockGeometry(
    block: BlockName | BlockId,
    _atlasState?: AtlasState,
): THREE.BoxGeometry {
    const blockName =
        typeof block === "number" ? getNameForBlock(block) : block;

    const cachedGeometry = blockGeometryCache.get(blockName);
    if (cachedGeometry) {
        return cachedGeometry;
    }

    const faceUvs = blockTextureAtlas.blockFaceUvs.get(blockName);
    if (!faceUvs) {
        throw new Error(`Block atlas UVs for "${blockName}" not found`);
    }

    const geometry = createAtlasMappedBoxGeometry(faceUvs);
    blockGeometryCache.set(blockName, geometry);
    return geometry;
}

/** Retrieves a material for the block atlas texture, utilizing a cache to avoid redundant creation and improve performance when rendering multiple blocks that share the same atlas texture. If a material for the given atlas texture already exists in the cache, it returns that material; otherwise, it creates a new material, caches it, and returns it for use in rendering block meshes. */
export function getAtlasMaterial(
    atlasTexture: THREE.Texture = blockTextureAtlas.atlasTexture,
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
