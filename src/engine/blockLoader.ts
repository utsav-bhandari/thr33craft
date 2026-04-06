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
} from "@/engine/blockTextureAtlas.js";

const textureLoader = new THREE.TextureLoader();

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

export function getBlockData(blockName: string): BlockData {
    const blockData = allBlocks[blockName];
    if (!blockData) {
        throw new Error(`Block "${blockName}" not found`);
    }

    return blockData;
}

export async function preloadBlockTextureAtlas(): Promise<AtlasState> {
    return blockTextureAtlasPromise;
}

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

async function getTexture(textureFile: string): Promise<THREE.Texture> {
    const cachedTexture = textureCache.get(textureFile);
    if (cachedTexture) {
        return cachedTexture;
    }

    const texture = await loadTexture(`/assets/blocks/${textureFile}.png`);
    textureCache.set(textureFile, texture);
    return texture;
}

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
    const atlasState = await preloadBlockTextureAtlas();
    return new THREE.Mesh(
        getBlockGeometry(blockName, atlasState),
        getAtlasMaterial(atlasState.atlasTexture),
    );
}

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

export async function getCachedGeometryAndMaterial(
    blockName: string,
): Promise<GeometryMaterialPair> {
    const atlasState = await preloadBlockTextureAtlas();

    return {
        geometry: getBlockGeometry(blockName, atlasState),
        material: getAtlasMaterial(atlasState.atlasTexture),
    };
}
