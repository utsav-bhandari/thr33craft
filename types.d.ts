import type * as THREE from "three";
import type { PointerLockControls } from "three/addons/controls/PointerLockControls.js";

export type Vector3Tuple = [number, number, number];

export interface KeyPreset extends Record<string, string> {}

export interface PlayerParams {
    speed?: number;
    height?: number;
}

export interface InventoryBlockTextureSheetParams {
    source?: "static" | "generated";
    staticTextureSheetUrl?: string;
    showDownloadButton?: boolean;
    downloadFileName?: string;
    columns?: number;
    iconSize?: number;
    chunkSize?: number;
    renderScale?: number;
}

export interface GameParams {
    playerParams: PlayerParams;
    keysPreset: KeyPreset;
    inventoryHtmlElm: HTMLElement;
    menuHtmlElm: HTMLElement;
    inventoryBlockTextureSheetParams: InventoryBlockTextureSheetParams;
}

export interface SceneInitConfig {
    backgroundColor?: number;
    fog?: {
        enabled?: boolean;
        color?: number;
        near?: number;
        far?: number;
    };
    axesHelper?: {
        enabled?: boolean;
        size?: number;
    };
    grid?: {
        enabled?: boolean;
        size?: number;
        divisions?: number;
    };
    camera?: {
        fov?: number;
        aspect?: number;
        near?: number;
        far?: number;
        position?: Vector3Tuple;
        lookAt?: Vector3Tuple;
    };
    ambientLight?: {
        enabled?: boolean;
        color?: number;
        intensity?: number;
    };
    renderer?: {
        antialias?: boolean;
        pixelRatio?: number;
    };
}

export interface SystemInitConfig {
    keyPreset?: KeyPreset;
    player?: {
        blockName?: string;
        spawnPosition?: Vector3Tuple;
        params?: PlayerParams;
    };
    actions?: {
        menu?: string;
        inventory?: string;
        hud?: string;
    };
}

export interface InitSystemArgs {
    scene: THREE.Scene;
    camera: THREE.PerspectiveCamera;
    pointerControls: PointerLockControls;
    gameParams: GameParams;
    options?: SystemInitConfig;
}

export interface UIComponentLike {
    htmlElement: HTMLElement;
    show(): void;
    hide(): void;
    on(
        eventName: string,
        handler?: EventListenerOrEventListenerObject | null,
        options?: AddEventListenerOptions | boolean,
    ): () => void;
    off(
        eventName: string,
        handler?: EventListenerOrEventListenerObject | null,
        options?: EventListenerOptions | boolean,
    ): void;
    emit(eventName: string, detail?: unknown): boolean;
}

export interface UIModalLike extends UIComponentLike {
    open(): void;
    close(): void;
    isVisible(): boolean;
}

export interface KeyMapLike {
    getKey(action: string): string | undefined;
}

export interface KeyStoreLike {
    hasPressedKey(key: string): boolean;
    addPressedKey(key: string): void;
    removePressedKey(key: string): void;
    clear(): void;
}

export interface InputManagerLike {
    isPressed(action: string): boolean;
}

export interface PlayerLike {
    speed: number;
    position: THREE.Vector3;
    height: number;
    move(targetVelocity: THREE.Vector3, accel: number, deltaTime: number): void;
}

export interface PlayerControllerLike {
    updatePlayer(deltaTime: number): void;
    getPosition(): THREE.Vector3;
    getDirection(): MovementDirection;
}

export interface MovementDirection {
    dx: number;
    dy: number;
    dz: number;
}

export interface BlockData {
    readonly id: BlockId;
    readonly transparent: boolean;
    readonly textures: Record<string, string>;
}

export type BlockName = string;

export type BlockId = number;

export type BlocksByName = Record<BlockName, BlockData>;

export interface BlockDefinition extends BlockData {
    readonly name: BlockName;
}

export interface AtlasUvRect {
    minU: number;
    maxU: number;
    minV: number;
    maxV: number;
}

export interface AtlasLayout {
    tilesPerSide: number;
    size: number;
}

export interface TilePosition {
    column: number;
    row: number;
    x: number;
    y: number;
}

export interface AtlasState {
    readonly atlasTexture: THREE.CanvasTexture;
    readonly blockFaceUvs: Map<string, AtlasUvRect[]>;
}

export interface FillRegionOptions {
    geometry: THREE.BoxGeometry;
    material: THREE.MeshStandardMaterial;
    blockSize: number;
    startX: number;
    startZ: number;
    endX: number;
    endZ: number;
    startY: number;
    endY?: number;
}

export interface BlockTextureSheetProgressUpdate {
    completed: number;
    total: number;
}

export type BlockTextureSheetProgressCallback = (
    update: BlockTextureSheetProgressUpdate,
) => void;

export interface GenerateBlockTextureSheetOptions {
    columns?: number;
    iconSize?: number;
    chunkSize?: number;
    renderScale?: number;
    onProgress?: BlockTextureSheetProgressCallback;
}

export interface LoadBlockTextureSheetOptions {
    textureSheetUrl?: string;
    columns?: number;
    iconSize?: number;
}

export interface BlockTextureSheetMetadataItem {
    id: string;
    backgroundPosition: string;
    backgroundSize: string;
}

export type BlockTextureSheetMetadata = Record<
    string,
    BlockTextureSheetMetadataItem
>;

export interface BlockTextureSheetItem extends BlockTextureSheetMetadataItem {
    textureSheetUrl: string;
}

export interface BlockTextureSheet {
    textureSheetUrl: string;
    iconSize: number;
    items: BlockTextureSheetItem[];
    metadata: BlockTextureSheetMetadata;
    textureSheetImage?: HTMLImageElement;
    sheetCanvas?: HTMLCanvasElement;
    sheetUrl?: string;
}

declare global {
    var system: import("@/engine/System.js").System | undefined;
    var scene: THREE.Scene | undefined;
}
