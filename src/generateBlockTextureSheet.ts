import * as THREE from "three";
import type {
    BlockTextureSheet,
    GenerateBlockTextureSheetOptions,
} from "@project-types";
import {
    createBlockTextureSheetLayout,
    createBlockTextureSheetMetadata,
} from "@/init/blockTextureSheetLayout";
import { createBlockMaterials, getBlockData } from "@/engine/blockLoader";

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

    const sheetLayout = createBlockTextureSheetLayout(
        blockNames.length,
        columns,
        iconSize,
    );

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

    onProgress?.({ completed: 0, total: totalBlocks });

    for (let index = 0; index < blockNames.length; index += 1) {
        const blockName = blockNames[index];
        const blockData = getBlockData(blockName);
        const materials = await createBlockMaterials(blockData.textures ?? {});

        mesh.material = materials;

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

        disposeMaterials(materials);
        onProgress?.({ completed: index + 1, total: totalBlocks });

        if ((index + 1) % chunkSize === 0) {
            await nextFrame();
        }
    }

    mesh.material = placeholderMaterial;
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

function disposeMaterials(materials: THREE.Material | THREE.Material[]): void {
    const materialList = Array.isArray(materials) ? materials : [materials];

    materialList.forEach((material) => {
        material.dispose();
    });
}

function nextFrame(): Promise<void> {
    return new Promise((resolve) => {
        requestAnimationFrame(() => resolve());
    });
}
