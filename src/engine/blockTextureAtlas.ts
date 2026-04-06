import * as THREE from "three";
import type {
    AtlasLayout,
    AtlasState,
    AtlasUvRect,
    BlocksByName,
    TilePosition,
} from "@project-types";

// This module is responsible for generating a texture atlas for block textures, creating geometries that are mapped to the atlas, and providing utility functions for managing block textures and their corresponding UV mappings. It includes functionality to create a runtime texture atlas based on block data, generate box geometries with UVs mapped to the atlas, and handle missing textures gracefully by providing a default "missing texture" tile in the atlas. The module also defines constants and helper functions for working with texture keys, atlas layouts, and tile positions to ensure efficient management of block textures in the game world.

const TILE_SIZE = 16;
const MISSING_TEXTURE_KEY = "__missing__";

const imageLoader = new THREE.ImageLoader();
const imageCache = new Map<string, HTMLImageElement | null>();

/** Normalizes a texture reference by extracting the file name or returning a default missing texture key if the reference is invalid. */
export function normalizeTextureReference(
    textureRef: string | undefined | null,
): string {
    if (typeof textureRef !== "string" || textureRef.length === 0) {
        return MISSING_TEXTURE_KEY;
    }

    return textureRef.split("/").pop() ?? MISSING_TEXTURE_KEY;
}

/** Creates a runtime block texture atlas by collecting all unique texture references from the provided block data, generating a layout for the atlas, and drawing each texture onto a canvas to create a single texture that can be efficiently used for rendering blocks in the game world. The function also calculates UV mappings for each block face based on the atlas layout and returns the resulting atlas texture and UV mappings for use in block rendering. */
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
            // Attempt to load the texture image for the current texture key. If the image cannot be loaded, a missing texture tile will be drawn in its place to indicate the issue visually in the atlas.
            const image = await loadTextureImage(textureKey);
            if (image) {
                drawTextureTile(context, image, tilePosition.x, tilePosition.y);
            } else {
                drawMissingTextureTile(context, tilePosition.x, tilePosition.y);
            }
        }

        // Calculate and store the UV rectangle for the current texture key based on its position in the atlas layout. This UV rectangle will be used to map the correct portion of the atlas texture onto block faces during rendering.
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
    // Set the wrapping mode to clamp to edge to prevent bleeding artifacts when sampling the atlas texture, ensuring that textures are rendered cleanly without unintended seams or artifacts at the edges of tiles.
    atlasTexture.wrapS = THREE.ClampToEdgeWrapping;
    atlasTexture.wrapT = THREE.ClampToEdgeWrapping;
    // Crisp pixel art style is important for block textures, so mipmaps are disabled to maintain sharpness and prevent blurring when the texture is viewed at different distances or angles in the game world.
    atlasTexture.generateMipmaps = false;
    atlasTexture.needsUpdate = true;

    const missingUvs = atlasUvsByTextureKey.get(MISSING_TEXTURE_KEY);
    if (!missingUvs) {
        throw new Error("Missing atlas UV rect was not generated.");
    }

    const blockFaceUvs = new Map<string, AtlasUvRect[]>();

    // Iterate through each block and its corresponding texture references to generate UV mappings for each face of the block based on the atlas layout. If a block face does not have a valid texture reference, it will use the UVs for the missing texture tile to ensure that all block faces have valid UV mappings for rendering.
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

/** Creates a box geometry with UV mappings that correspond to the provided face UV rectangles, allowing for correct texturing of block faces based on the atlas layout. The function modifies the UV attribute of the geometry to map each face to the appropriate section of the texture atlas, ensuring that block textures are rendered correctly in the game world. */
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

/** Collects all unique texture keys from the provided block data and face mappings, including a default missing texture key. This function ensures that all textures used by blocks are accounted for when generating the texture atlas, allowing for efficient packing and UV mapping. */
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

/** Creates a layout for the texture atlas based on the number of unique textures, calculating the number of tiles needed per side and the overall size of the atlas. The layout ensures that all textures can fit within a square atlas while optimizing for power-of-two dimensions to improve compatibility and performance in WebGL rendering. */
function createAtlasLayout(textureCount: number): AtlasLayout {
    const minimumTilesPerSide = Math.max(1, Math.ceil(Math.sqrt(textureCount)));
    const tilesPerSide = nextPowerOfTwo(minimumTilesPerSide);

    return {
        tilesPerSide,
        size: tilesPerSide * TILE_SIZE,
    };
}

/** Calculates the position of a texture tile within the atlas based on its index and the layout of the atlas. The function determines the column and row of the tile, as well as the pixel coordinates for where the tile should be drawn on the atlas canvas. This information is essential for correctly placing each texture in the atlas and generating accurate UV mappings for block rendering. */
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

/** Creates a UV rectangle for a texture tile based on its column and row position in the atlas, as well as the total number of tiles per side. The UV rectangle defines the normalized texture coordinates that correspond to the area of the atlas where the tile is located, allowing for correct mapping of textures onto block geometries during rendering.
 * Example: If a texture tile is located at column 2 and row 3 in an atlas with 16 tiles per side, the function will calculate the UV coordinates that correspond to that tile's position in the atlas, which can then be used to map the correct portion of the atlas texture onto a block face in the game world.
 */
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

/** Calculates the next power of two greater than or equal to the given value. This is useful for ensuring that texture atlas dimensions are compatible with WebGL requirements and optimized for performance. Also eliminates bleeding artifacts by aligning textures to power-of-two boundaries. */
function nextPowerOfTwo(value: number): number {
    return 2 ** Math.ceil(Math.log2(value));
}

/** Loads a texture image based on the provided texture key, utilizing a cache to avoid redundant loading and improve performance. If the texture cannot be loaded, the function returns null, allowing for graceful handling of missing textures in the atlas generation process. */
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

/** Draws a texture tile onto the atlas canvas at the specified coordinates, ensuring that the source image is properly scaled to fit within the defined tile size. This function is responsible for copying the block texture from its original image onto the correct location in the atlas, allowing it to be used for rendering blocks in the game world. */
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

/** Draws a placeholder texture tile for missing textures onto the atlas canvas at the specified coordinates. This function is used to visually indicate missing textures in the atlas, helping developers identify and debug texture issues during development. */
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
