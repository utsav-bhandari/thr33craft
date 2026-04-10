import * as THREE from "three";
import type { PerspectiveCamera, Scene, WebGLRenderer } from "three";
import { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import type { SceneInitConfig, Vector3Tuple } from "@project-types";
import { WORLD_PARAMS } from "@utils/config";

function setVectorFromTuple(vector: THREE.Vector3, tuple: Vector3Tuple): void {
    vector.fromArray(tuple);
}

export function initScene(options: SceneInitConfig = {}): {
    scene: Scene;
    renderer: WebGLRenderer;
    camera: PerspectiveCamera;
    pointerControls: PointerLockControls;
} {
    const {
        backgroundColor = 0x80adff,
        fog: fogOptions = {},
        axesHelper = {},
        grid = {},
        camera: cameraOptions = {},
        ambientLight: ambientLightOptions = {},
        renderer: rendererOptions = {},
    } = options;

    const { enabled: axesEnabled = true, size: axesSize = 100 } = axesHelper;
    const {
        enabled: gridEnabled = true,
        size: gridSize = WORLD_PARAMS.BLOCK_SIZE *
            WORLD_PARAMS.WORLD_SIZE_BLOCKS,
        divisions = WORLD_PARAMS.BLOCK_SIZE * WORLD_PARAMS.WORLD_SIZE_BLOCKS,
    } = grid;
    const {
        fov = 70,
        aspect = 1,
        near = 1,
        far = 100,
        position = WORLD_PARAMS.PLAYER_STARTING_POSITION,
        lookAt = [0, 0, 0],
    } = cameraOptions;
    const {
        enabled: ambientEnabled = true,
        color: ambientColor = 0xffffff,
        intensity: ambientIntensity = 1,
    } = ambientLightOptions;
    const {
        enabled: fogEnabled = false,
        color: fogColor = backgroundColor,
        near: fogNear = 32,
        far: fogFar = far,
    } = fogOptions;
    const { antialias = true, pixelRatio = window.devicePixelRatio } =
        rendererOptions;

    const scene = new THREE.Scene();
    if (axesEnabled) {
        scene.add(new THREE.AxesHelper(axesSize));
    }
    scene.background = new THREE.Color(backgroundColor);
    if (fogEnabled) {
        scene.fog = new THREE.Fog(fogColor, fogNear, fogFar);
    }

    const renderer = new THREE.WebGLRenderer({ antialias });
    renderer.setPixelRatio(pixelRatio);

    if (gridEnabled) {
        scene.add(new THREE.GridHelper(gridSize, divisions));
    }

    const camera = new THREE.PerspectiveCamera(fov, aspect, near, far);
    setVectorFromTuple(camera.position, position);
    camera.lookAt(lookAt[0], lookAt[1], lookAt[2]);
    scene.add(camera);

    if (ambientEnabled) {
        scene.add(new THREE.AmbientLight(ambientColor, ambientIntensity));
    }

    // Initialize pointer lock controls for first-person camera movement, allowing the player to look around the scene using mouse movement while the pointer is locked to the canvas. This provides an immersive experience for navigating the 3D environment.
    const pointerControls = new PointerLockControls(
        camera,
        renderer.domElement,
    );

    return {
        scene,
        renderer,
        camera,
        pointerControls,
    };
}
