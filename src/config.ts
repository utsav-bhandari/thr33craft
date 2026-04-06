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

const PLAYER_STARTING_POSITION: Vector3Tuple = [10, 10, 5];

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
    worldGenHtmlElm: requireElement("worldgen", HTMLDivElement),
    crosshairHtmlElm: requireElement("crosshair", HTMLImageElement),
    hudHintHtmlElm: requireElement("menu-hint", HTMLDivElement),
    inventoryBlockTextureSheetParams: INVENTORY_BLOCK_TEXTURE_SHEET_PARAMS,
};

export const WORLD_PARAMS = {
    BLOCK_SIZE: 1,
    WORLD_SIZE_BLOCKS: 100,
    DEFAULT_WORLD_FILL: {
        x: 1,
        y: 1,
        z: 1,
    },
    GROUND_BLOCK_NAME: "glass",
    PLAYER_STARTING_POSITION,
} as const;

export const SCENE_INIT_CONFIG: SceneInitConfig = {
    backgroundColor: 0x80adff,
    axesHelper: {
        enabled: true,
        size: 100,
    },
    grid: {
        enabled: true,
        size: WORLD_PARAMS.BLOCK_SIZE * WORLD_PARAMS.WORLD_SIZE_BLOCKS,
        divisions: WORLD_PARAMS.BLOCK_SIZE * WORLD_PARAMS.WORLD_SIZE_BLOCKS,
    },
    camera: {
        fov: 70,
        aspect: 1,
        near: 1,
        far: 100,
        position: [...WORLD_PARAMS.PLAYER_STARTING_POSITION],
        lookAt: [0, 1.85, 0],
    },
    ambientLight: {
        enabled: true,
        color: 0xffffff,
        intensity: 1,
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
    ui: {
        hideOnUIHtmlElems: [gameParams.crosshairHtmlElm],
    },
    actions: {
        menu: "MENU",
        inventory: "INVENTORY",
    },
};
