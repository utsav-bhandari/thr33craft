import type {
    BoxGeometry,
    InstancedMesh,
    MeshStandardMaterial,
    Scene,
} from "three";
import type { WorldgenDimensions } from "@project-types";
import type { System } from "@/engine/System";
import { createInstancedFill } from "@/engine/generators/fill";
import { WORLD_PARAMS } from "@utils/config";
import { debug } from "@utils/logger";
import { getAtlasMaterial, getBlockGeometry } from "@libtexture/block-loader";

function requireWorldgenForm(): HTMLFormElement {
    const element = document.getElementById("worldgen-form");

    if (!(element instanceof HTMLFormElement)) {
        throw new Error("Missing required worldgen form.");
    }

    return element;
}

function getResetWorldButton(): HTMLButtonElement | null {
    const element = document.getElementById("reset-world");

    return element instanceof HTMLButtonElement ? element : null;
}

function getRequiredNumberField(
    form: HTMLFormElement,
    fieldName: string,
): number {
    const field = form.elements.namedItem(fieldName);

    if (!(field instanceof HTMLInputElement)) {
        throw new Error(`Missing numeric worldgen field: ${fieldName}`);
    }

    return field.valueAsNumber;
}

export function initWorldgen({
    scene,
    system,
}: {
    scene: Scene;
    system: System;
}): void {
    const worldgenForm = requireWorldgenForm();
    const resetWorldButton = getResetWorldButton();

    worldgenForm.addEventListener("submit", async (event) => {
        event.preventDefault();

        const xBlocks = getRequiredNumberField(worldgenForm, "x");
        const yBlocks = getRequiredNumberField(worldgenForm, "y");
        const zBlocks = getRequiredNumberField(worldgenForm, "z");
        debug("Worldgen submitted", { xBlocks, yBlocks, zBlocks });

        // const geometry = getBlockGeometry(WORLD_PARAMS.GROUND_BLOCK_NAME);
        // const material = getAtlasMaterial();

        // const groundMesh = buildUserRequestedGroundMesh({
        //     geometry,
        //     material,
        //     xBlocks,
        //     yBlocks,
        //     zBlocks,
        // });
        // scene.add(groundMesh);
        debug("Worldgen mesh created", { xBlocks, yBlocks, zBlocks });
        system.uiHandler.closeModal("worldgen");
    });

    resetWorldButton?.addEventListener("click", () => {
        debug("Reset world clicked");
        window.location.reload();
    });
}

function buildUserRequestedGroundMesh({
    geometry,
    material,
    xBlocks,
    yBlocks,
    zBlocks,
}: WorldgenDimensions): InstancedMesh<BoxGeometry, MeshStandardMaterial> {
    const blockSize = WORLD_PARAMS.BLOCK_SIZE;
    const xSpan = xBlocks * blockSize;
    const zSpan = zBlocks * blockSize;
    const ySpan = yBlocks * blockSize;

    const startX = -xSpan / 2;
    const startZ = -zSpan / 2;
    const endY = 0;
    const startY = endY - ySpan;

    return createInstancedFill({
        geometry,
        material,
        blockSize,
        startX,
        startZ,
        endX: startX + xSpan,
        endZ: startZ + zSpan,
        startY,
        endY,
    });
}
