import * as THREE from "three";
import type {
    AtlasLayout,
    AtlasState,
    AtlasUvRect,
    BlocksByName,
    TilePosition,
} from "@project-types";

const TILE_SIZE = 16;
const MISSING_TEXTURE_KEY = "__missing__";

const imageLoader = new THREE.ImageLoader();
const imageCache = new Map<string, HTMLImageElement | null>();

export function normalizeTextureReference(
    textureRef: string | undefined | null,
): string {
    if (typeof textureRef !== "string" || textureRef.length === 0) {
        return MISSING_TEXTURE_KEY;
    }

    return textureRef.split("/").pop() ?? MISSING_TEXTURE_KEY;
}

export async function createRuntimeBlockTextureAtlas({
    blocks,
    faceMappings,
}: {
    blocks: BlocksByName;
    faceMappings: readonly string[];
}): Promise<AtlasState> {
    const textureKeys = collectTextureKeys(blocks, faceMappings);
    const atlasLayout = createAtlasLayout(textureKeys.length);

    const canvas = document.createElement("canvas");
    canvas.width = atlasLayout.size;
    canvas.height = atlasLayout.size;

    const context = canvas.getContext("2d");
    if (!context) {
        throw new Error("Could not create block texture atlas canvas context.");
    }

    context.imageSmoothingEnabled = false;

    const atlasUvsByTextureKey = new Map<string, AtlasUvRect>();

    for (let index = 0; index < textureKeys.length; index += 1) {
        const textureKey = textureKeys[index];
        const tilePosition = getTilePosition(index, atlasLayout);

        if (textureKey === MISSING_TEXTURE_KEY) {
            drawMissingTextureTile(context, tilePosition.x, tilePosition.y);
        } else {
            const image = await loadTextureImage(textureKey);
            if (image) {
                drawTextureTile(context, image, tilePosition.x, tilePosition.y);
            } else {
                drawMissingTextureTile(context, tilePosition.x, tilePosition.y);
            }
        }

        atlasUvsByTextureKey.set(
            textureKey,
            createUvRect({
                column: tilePosition.column,
                row: tilePosition.row,
                tilesPerSide: atlasLayout.tilesPerSide,
            }),
        );
    }

    const atlasTexture = new THREE.CanvasTexture(canvas);
    atlasTexture.colorSpace = THREE.SRGBColorSpace;
    atlasTexture.magFilter = THREE.NearestFilter;
    atlasTexture.minFilter = THREE.NearestFilter;
    atlasTexture.wrapS = THREE.ClampToEdgeWrapping;
    atlasTexture.wrapT = THREE.ClampToEdgeWrapping;
    atlasTexture.generateMipmaps = false;
    atlasTexture.needsUpdate = true;

    const missingUvs = atlasUvsByTextureKey.get(MISSING_TEXTURE_KEY);
    if (!missingUvs) {
        throw new Error("Missing atlas UV rect was not generated.");
    }

    const blockFaceUvs = new Map<string, AtlasUvRect[]>();

    Object.entries(blocks).forEach(([blockName, blockData]) => {
        const textureMap = blockData.textures ?? {};
        const faceUvs = faceMappings.map((face) => {
            const textureKey = normalizeTextureReference(textureMap[face]);
            return atlasUvsByTextureKey.get(textureKey) ?? missingUvs;
        });

        blockFaceUvs.set(blockName, faceUvs);
    });

    return {
        atlasTexture,
        blockFaceUvs,
    };
}

export function createAtlasMappedBoxGeometry(
    faceUvs: AtlasUvRect[],
): THREE.BoxGeometry {
    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const uvAttribute = geometry.getAttribute("uv");

    faceUvs.forEach((uvRect, faceIndex) => {
        const vertexOffset = faceIndex * 4;

        for (let vertexIndex = 0; vertexIndex < 4; vertexIndex += 1) {
            const attributeIndex = vertexOffset + vertexIndex;
            uvAttribute.setXY(
                attributeIndex,
                lerp(
                    uvRect.minU,
                    uvRect.maxU,
                    uvAttribute.getX(attributeIndex),
                ),
                lerp(
                    uvRect.minV,
                    uvRect.maxV,
                    uvAttribute.getY(attributeIndex),
                ),
            );
        }
    });

    uvAttribute.needsUpdate = true;
    return geometry;
}

function collectTextureKeys(
    blocks: BlocksByName,
    faceMappings: readonly string[],
): string[] {
    const textureKeys = new Set<string>([MISSING_TEXTURE_KEY]);

    Object.values(blocks).forEach((blockData) => {
        const textureMap = blockData.textures ?? {};
        faceMappings.forEach((face) => {
            textureKeys.add(normalizeTextureReference(textureMap[face]));
        });
    });

    return [...textureKeys].sort((left, right) => {
        if (left === MISSING_TEXTURE_KEY) {
            return -1;
        }
        if (right === MISSING_TEXTURE_KEY) {
            return 1;
        }

        return left.localeCompare(right);
    });
}

function createAtlasLayout(textureCount: number): AtlasLayout {
    const minimumTilesPerSide = Math.max(1, Math.ceil(Math.sqrt(textureCount)));
    const tilesPerSide = nextPowerOfTwo(minimumTilesPerSide);

    return {
        tilesPerSide,
        size: tilesPerSide * TILE_SIZE,
    };
}

function getTilePosition(
    index: number,
    atlasLayout: AtlasLayout,
): TilePosition {
    const column = index % atlasLayout.tilesPerSide;
    const row = Math.floor(index / atlasLayout.tilesPerSide);

    return {
        column,
        row,
        x: column * TILE_SIZE,
        y: row * TILE_SIZE,
    };
}

function createUvRect({
    column,
    row,
    tilesPerSide,
}: {
    column: number;
    row: number;
    tilesPerSide: number;
}): AtlasUvRect {
    const uvStep = 1 / tilesPerSide;

    return {
        minU: column * uvStep,
        maxU: (column + 1) * uvStep,
        minV: 1 - (row + 1) * uvStep,
        maxV: 1 - row * uvStep,
    };
}

function nextPowerOfTwo(value: number): number {
    return 2 ** Math.ceil(Math.log2(value));
}

async function loadTextureImage(
    textureKey: string,
): Promise<HTMLImageElement | null> {
    if (imageCache.has(textureKey)) {
        return imageCache.get(textureKey) ?? null;
    }

    const image = await new Promise<HTMLImageElement | null>((resolve) => {
        imageLoader.load(
            `/assets/blocks/${textureKey}.png`,
            (loadedImage) => resolve(loadedImage),
            undefined,
            () => resolve(null),
        );
    });

    imageCache.set(textureKey, image);
    return image;
}

function drawTextureTile(
    context: CanvasRenderingContext2D,
    image: HTMLImageElement,
    x: number,
    y: number,
): void {
    const sourceWidth = Math.min(TILE_SIZE, image.naturalWidth || image.width);
    const sourceHeight = Math.min(
        TILE_SIZE,
        image.naturalHeight || image.height,
    );

    context.drawImage(
        image,
        0,
        0,
        sourceWidth,
        sourceHeight,
        x,
        y,
        TILE_SIZE,
        TILE_SIZE,
    );
}

function drawMissingTextureTile(
    context: CanvasRenderingContext2D,
    x: number,
    y: number,
): void {
    const halfTile = TILE_SIZE / 2;

    context.fillStyle = "#ff00ff";
    context.fillRect(x, y, TILE_SIZE, TILE_SIZE);
    context.fillStyle = "#111111";
    context.fillRect(x, y, halfTile, halfTile);
    context.fillRect(x + halfTile, y + halfTile, halfTile, halfTile);
}

function lerp(min: number, max: number, value: number): number {
    return min + (max - min) * value;
}
