import type {
    GameParams,
    InventoryBlockTextureSheetParams,
    KeyPreset,
    SceneInitConfig,
    SystemInitConfig,
    Vector3Tuple,
} from "@project-types";

function requireElement<T extends HTMLElement>(
    id: string,
    elementType: { new (): T },
): T {
    const element = document.getElementById(id);

    if (!(element instanceof elementType)) {
        throw new Error(`Missing required DOM element: #${id}`);
    }

    return element;
}

export const DEBUG = true;

const PLAYER_STARTING_POSITION: Vector3Tuple = [0, 33, 0];

export const DEFAULT_KEYS_PRESET: KeyPreset = {
    UP: " ",
    DOWN: "c",
    FORWARD: "w",
    BACKWARD: "s",
    LEFT: "a",
    RIGHT: "d",
    SPRINT: "shift",
    MENU: "f",
    INVENTORY: "e",
    HUD_TOGGLE: "h",
};

export const INVENTORY_BLOCK_TEXTURE_SHEET_PARAMS: InventoryBlockTextureSheetParams =
    {
        source: "static",
        staticTextureSheetUrl: "/assets/images/block-texture-sheet.png",
        showDownloadButton: false,
        downloadFileName: "block-texture-sheet.png",
        columns: 16,
        iconSize: 64,
        chunkSize: 20,
        renderScale: Math.min(window.devicePixelRatio || 1, 2),
    };

export const gameParams: GameParams = {
    playerParams: {
        speed: 10,
        height: 1.85,
    },
    keysPreset: DEFAULT_KEYS_PRESET,
    inventoryHtmlElm: requireElement("inventory", HTMLDivElement),
    menuHtmlElm: requireElement("menu", HTMLDivElement),
    inventoryBlockTextureSheetParams: INVENTORY_BLOCK_TEXTURE_SHEET_PARAMS,
};

const DEFAULT_CAMERA_FAR = 32;
const CHUNK_SIZE = 16;

const FOG_NEAR_FACTOR = 0.5;
const FOG_FAR_FACTOR = 1.5;

function getCameraFar() {
    return DEFAULT_CAMERA_FAR;
}

function calculateRenderDistance(
    cameraFar: number,
    chunkPadding: number,
): number {
    return Math.max(1, Math.floor(cameraFar / CHUNK_SIZE) + chunkPadding);
}

function calculateFogNear(cameraFar: number): number {
    return cameraFar * FOG_NEAR_FACTOR;
}

function calculateFogFar(cameraFar: number): number {
    return cameraFar * FOG_FAR_FACTOR;
}

export const WORLD_PARAMS = {
    WORLD_BOTTOM_Y: 0,
    CHUNK_PADDING: 0,
    CHUNK_LOAD_INTERVAL: 10,
    PLAYER_STARTING_POSITION,

    get RENDER_DISTANCE() {
        return calculateRenderDistance(getCameraFar(), this.CHUNK_PADDING);
    },
};

export const SCENE_INIT_CONFIG: SceneInitConfig = {
    backgroundColor: 0x80adff,

    fog: {
        enabled: true,
        color: 0xb9d2fa,
        near: calculateFogNear(getCameraFar()),
        far: calculateFogFar(getCameraFar()),
    },

    axesHelper: {
        enabled: true,
        size: 128,
    },

    camera: {
        fov: 70,
        aspect: 1,
        near: 1,
        far: getCameraFar(),
        position: [...WORLD_PARAMS.PLAYER_STARTING_POSITION],
        lookAt: [0, 1.85, 10],
    },

    ambientLight: {
        enabled: true,
        color: 0xeeeeee,
        intensity: 3,
    },

    renderer: {
        antialias: true,
        pixelRatio: window.devicePixelRatio,
    },
};

export const SYSTEM_INIT_CONFIG: SystemInitConfig = {
    keyPreset: DEFAULT_KEYS_PRESET,
    player: {
        blockName: "redstone_block",
        spawnPosition: [...WORLD_PARAMS.PLAYER_STARTING_POSITION],
    },
    actions: {
        menu: "MENU",
        inventory: "INVENTORY",
        hud: "HUD_TOGGLE",
    },
};
