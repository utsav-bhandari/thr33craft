import * as THREE from "three";
import type {
    BlockTextureSheet,
    GenerateBlockTextureSheetOptions,
} from "@project-types";
import {
    createBlockTextureSheetLayout,
    createBlockTextureSheetMetadata,
} from "@libtexture/blockTextureSheetLayout";
import { debug } from "@/logger";
import {
    blockTextureAtlas,
    getAtlasMaterial,
    getBlockGeometry,
} from "./block-loader";

export async function generateBlockTextureSheet(
    blockNames: string[],
    options: GenerateBlockTextureSheetOptions = {},
): Promise<BlockTextureSheet> {
    const columns = options.columns ?? 16;
    const iconSize = options.iconSize ?? 64;
    const chunkSize = options.chunkSize ?? 20;
    const renderScale =
        options.renderScale ?? Math.min(window.devicePixelRatio || 1, 2);
    const onProgress = options.onProgress;

    // generate the layout for the texture sheet based on the number of blocks and the specified columns and icon size
    const sheetLayout = createBlockTextureSheetLayout(
        blockNames.length,
        columns,
        iconSize,
    );

    // create a canvas element to render the block textures onto, with dimensions based on the calculated layout and render scale
    const sheetCanvas = document.createElement("canvas");
    sheetCanvas.width = sheetLayout.logicalWidth * renderScale;
    sheetCanvas.height = sheetLayout.logicalHeight * renderScale;

    const sheetContext = sheetCanvas.getContext("2d");
    if (!sheetContext) {
        throw new Error(
            "Could not create the block texture sheet canvas context.",
        );
    }

    sheetContext.imageSmoothingEnabled = true;
    // Clear the canvas to ensure it's empty before rendering the block textures
    sheetContext.clearRect(0, 0, sheetCanvas.width, sheetCanvas.height);

    const renderer = new THREE.WebGLRenderer({
        alpha: true,
        antialias: true,
        preserveDrawingBuffer: true,
    });
    renderer.setPixelRatio(renderScale);
    renderer.outputColorSpace = THREE.SRGBColorSpace;
    renderer.setSize(iconSize, iconSize, false);
    renderer.setClearColor(0x000000, 0);

    const scene = new THREE.Scene();
    // Set up an orthographic camera for rendering the block textures, with a position that allows it to capture the entire block model
    const camera = new THREE.OrthographicCamera(
        -1.15,
        1.15,
        1.15,
        -1.15,
        0.1,
        10,
    );
    camera.position.set(-2.6, 1.8, 2.6);
    camera.lookAt(0, 0, 0);
    camera.updateProjectionMatrix();

    const keyLight = new THREE.DirectionalLight(0xffffff, 3);
    keyLight.position.set(-5, 10, 1);
    keyLight.lookAt(0, 0, 0);
    scene.add(keyLight);

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    const placeholderMaterial = new THREE.MeshBasicMaterial({
        transparent: true,
        opacity: 0,
    });
    const mesh = new THREE.Mesh<
        THREE.BoxGeometry,
        THREE.Material | THREE.Material[]
    >(geometry, placeholderMaterial);
    scene.add(mesh);

    const metadata = createBlockTextureSheetMetadata(
        blockNames,
        sheetLayout.columns,
        iconSize,
        sheetLayout.backgroundSize,
    );
    const totalBlocks = blockNames.length;
    debug("Starting texture sheet generation", {
        totalBlocks,
        columns,
        iconSize,
        chunkSize,
        renderScale,
    });

    // Notify the progress callback that the texture sheet generation has started, with 0 completed blocks out of the total number of blocks to process
    onProgress?.({ completed: 0, total: totalBlocks });

    for (let index = 0; index < blockNames.length; index += 1) {
        const blockName = blockNames[index];
        debug("Generating texture sheet block", { index, blockName });
        const blockGeometry = getBlockGeometry(blockName, blockTextureAtlas);
        const blockMaterial = getAtlasMaterial(blockTextureAtlas.atlasTexture);

        mesh.geometry = blockGeometry;
        mesh.material = blockMaterial;

        renderer.clear();
        renderer.render(scene, camera);

        const column = index % sheetLayout.columns;
        const row = Math.floor(index / sheetLayout.columns);
        const x = column * iconSize;
        const y = row * iconSize;

        sheetContext.drawImage(
            renderer.domElement,
            x * renderScale,
            y * renderScale,
        );

        onProgress?.({ completed: index + 1, total: totalBlocks });

        if ((index + 1) % chunkSize === 0) {
            await nextFrame();
        }
    }

    mesh.material = placeholderMaterial;
    mesh.geometry = geometry;
    geometry.dispose();
    placeholderMaterial.dispose();
    renderer.dispose();

    const sheetUrl = sheetCanvas.toDataURL("image/png");

    return {
        sheetCanvas,
        sheetUrl,
        textureSheetUrl: sheetUrl,
        iconSize,
        items: blockNames.map((blockName) => ({
            ...metadata[blockName],
            textureSheetUrl: sheetUrl,
        })),
        metadata,
    };
}

function nextFrame(): Promise<void> {
    return new Promise((resolve) => {
        requestAnimationFrame(() => resolve());
    });
}
