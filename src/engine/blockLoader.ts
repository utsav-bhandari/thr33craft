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
} from "@/engine/blockTextureAtlas";

// This module is responsible for loading block data and textures, creating block meshes, and managing texture atlases for efficient rendering of blocks in the game world. It includes functions to retrieve block data, preload textures, create materials for block faces, and generate meshes based on block names, utilizing caching mechanisms to optimize performance and reduce redundant loading of resources.

const textureLoader = new THREE.TextureLoader();

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
const textureCache = new Map<string, THREE.Texture>();
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
    return blockTextureAtlasPromise;
}

// Loads a texture from the specified path, utilizing a cache to avoid redundant loading and improve performance
async function loadTexture(texturePath: string): Promise<THREE.Texture> {
    const cachedTexture = textureCache.get(texturePath);
    if (cachedTexture) {
        return cachedTexture;
    }

    return new Promise<THREE.Texture>((resolve, reject) => {
        textureLoader.load(
            texturePath,
            (texture) => {
                texture.magFilter = THREE.NearestFilter;
                texture.minFilter = THREE.NearestFilter;
                texture.colorSpace = THREE.SRGBColorSpace;
                textureCache.set(texturePath, texture);
                resolve(texture);
            },
            undefined,
            reject,
        );
    });
}

// Retrieves a texture based on the provided texture file name, first checking the cache for an existing texture before attempting to load it from the specified path
async function getTexture(textureFile: string): Promise<THREE.Texture> {
    const cachedTexture = textureCache.get(textureFile);
    if (cachedTexture) {
        return cachedTexture;
    }

    const texture = await loadTexture(`/assets/blocks/${textureFile}.png`);
    textureCache.set(textureFile, texture);
    return texture;
}

/** Creates a material for a block face based on the provided texture path. If the texture path is undefined or if there is an error loading the texture, it returns a default magenta material to indicate a missing texture. The function also handles special cases, such as making glass blocks non-opaque by disabling depth writing. */
export async function createFaceMaterial(
    texturePath: string | undefined,
): Promise<THREE.MeshStandardMaterial> {
    if (!texturePath) {
        return new THREE.MeshStandardMaterial({ color: 0xff00ff });
    }

    const textureFile = texturePath.split("/").pop();
    if (!textureFile) {
        return new THREE.MeshStandardMaterial({ color: 0xff00ff });
    }

    try {
        const texture = await getTexture(textureFile);
        return new THREE.MeshStandardMaterial({
            map: texture,
            alphaTest: 0.5,
            depthWrite: !textureFile.includes("glass"),
        });
    } catch {
        return new THREE.MeshStandardMaterial({ color: 0xff00ff });
    }
}

/** Creates an array of materials for the faces of a block based on the provided texture mapping. It iterates through the defined FACE_MAPPINGS order and creates a material for each face using the corresponding texture path from the texture mapping, ensuring that each face of the block is rendered with the correct texture in the game world. */
export async function createBlockMaterials(
    textureMap: Record<string, string> = {},
): Promise<THREE.MeshStandardMaterial[]> {
    return Promise.all(
        FACE_MAPPINGS.map((face) => createFaceMaterial(textureMap[face])),
    );
}

export async function createBlockMesh(
    blockName: string,
): Promise<THREE.Mesh<THREE.BoxGeometry, THREE.MeshStandardMaterial>> {
    const atlasState = await fetchBlockTextureAtlas();
    return new THREE.Mesh(
        getBlockGeometry(blockName, atlasState),
        getAtlasMaterial(atlasState.atlasTexture),
    );
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
        depthWrite: false,
    });
    atlasMaterialCache.set(atlasTexture, material);
    return material;
}

/** Retrieves both the geometry and material for a block based on its name, utilizing caching mechanisms to optimize performance. It first fetches the block texture atlas state to access the necessary UV mappings and atlas texture, then retrieves or creates the corresponding geometry and material for the block, returning them as a pair for use in rendering block meshes in the game world. */
export async function getCachedGeometryAndMaterial(
    blockName: string,
): Promise<GeometryMaterialPair> {
    const atlasState = await fetchBlockTextureAtlas();

    return {
        geometry: getBlockGeometry(blockName, atlasState),
        material: getAtlasMaterial(atlasState.atlasTexture),
    };
}
