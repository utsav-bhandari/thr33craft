import type { KeyMapLike, KeyStoreLike } from "@project-types";

export class InputManager {
    keyMap: KeyMapLike;
    keyStore: KeyStoreLike;

    constructor(keyMap: KeyMapLike, keyStore: KeyStoreLike) {
        this.keyMap = keyMap;
        this.keyStore = keyStore;
    }

    /** Checks if the key mapped to the given action is currently pressed. Returns true if the key is pressed, false otherwise. */
    isPressed(action: string): boolean {
        const keyForAction = this.keyMap.getKey(action);

        return typeof keyForAction === "string"
            ? this.keyStore.hasPressedKey(keyForAction)
            : false;
    }
}
