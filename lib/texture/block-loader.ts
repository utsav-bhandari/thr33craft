import * as THREE from "three";
import type { AtlasState, BlockId, BlockName } from "@project-types";
import { getNameForBlock, staticBlocks } from "@/init/block-registry";
import { BLOCK_TEXTURE_ATLAS_PARAMS } from "@/utils/config";
import {
    createAtlasMappedBoxGeometry,
    createConfiguredBlockTextureAtlas,
} from "@lib/texture/blockTextureAtlas";
import { debug } from "@/utils/logger";

const atlasMaterialCache = new Map<THREE.Texture, THREE.MeshStandardMaterial>();
const glassMaterialCache = new Map<THREE.Texture, THREE.MeshStandardMaterial>();
const waterMaterialCache = new Map<THREE.Texture, THREE.MeshStandardMaterial>();
const blockGeometryCache = new Map<string, THREE.BoxGeometry>();

debug("Fetching block texture atlas");

export const blockTextureAtlas = await createConfiguredBlockTextureAtlas({
    blocks: staticBlocks,
    params: BLOCK_TEXTURE_ATLAS_PARAMS,
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

/** Returns cached block geometry or creates one from atlas face UV mappings. */
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

/** Returns cached atlas material for a texture, creating it on first use. */
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

/** Returns a cached alpha-blended atlas material for glass-type blocks. */
export function getGlassAtlasMaterial(
    atlasTexture: THREE.Texture = blockTextureAtlas.atlasTexture,
): THREE.MeshStandardMaterial {
    const cached = glassMaterialCache.get(atlasTexture);
    if (cached) {
        return cached;
    }

    const material = new THREE.MeshStandardMaterial({
        map: atlasTexture,
        transparent: true,
        opacity: 0.7,
        depthWrite: false,
    });
    glassMaterialCache.set(atlasTexture, material);
    return material;
}

/** Returns a cached alpha-blended atlas material for water blocks. */
export function getWaterAtlasMaterial(
    atlasTexture: THREE.Texture = blockTextureAtlas.atlasTexture,
): THREE.MeshStandardMaterial {
    const cached = waterMaterialCache.get(atlasTexture);
    if (cached) {
        return cached;
    }

    const material = new THREE.MeshStandardMaterial({
        map: atlasTexture,
        transparent: true,
        opacity: 0.2,
        depthWrite: false,
    });
    waterMaterialCache.set(atlasTexture, material);
    return material;
}
