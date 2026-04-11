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

export const WORLD_PARAMS = {
    get RENDER_DISTANCE() {
        const cameraFar = SCENE_INIT_CONFIG.camera?.far ?? 32;

        return Math.max(
            1,
            Math.floor(cameraFar / 16) + WORLD_PARAMS.CHUNK_PADDING,
        );
    },
    CHUNK_PADDING: 1,
    CHUNK_LOAD_INTERVAL: 10,
    BLOCK_SIZE: 1,
    DEFAULT_WORLD_FILL: {
        x: 1,
        y: 1,
        z: 1,
    },
    GROUND_BLOCK_NAME: "grass_block",
    PLAYER_STARTING_POSITION,
};

export const SCENE_INIT_CONFIG: SceneInitConfig = {
    backgroundColor: 0x80adff,
    fog: {
        enabled: true,
        color: 0x80adff,
        near: 36,
        far: 96,
    },
    axesHelper: {
        enabled: true,
        size: 100,
    },
    camera: {
        fov: 70,
        aspect: 1,
        near: 1,
        far: 96,
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
