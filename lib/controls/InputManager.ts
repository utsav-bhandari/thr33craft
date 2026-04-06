import type { KeyMapLike, KeyStoreLike } from "@project-types";

export class InputManager {
    keyMap: KeyMapLike;
    keyStore: KeyStoreLike;

    constructor(keyMap: KeyMapLike, keyStore: KeyStoreLike) {
        this.keyMap = keyMap;
        this.keyStore = keyStore;
    }

    isPressed(action: string): boolean {
        const keyForAction = this.keyMap.getKey(action);

        return typeof keyForAction === "string"
            ? this.keyStore.hasPressedKey(keyForAction)
            : false;
    }
}
