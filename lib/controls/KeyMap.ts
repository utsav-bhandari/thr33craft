import type { KeyPreset } from "@project-types";

/** Stores action-to-key bindings used by the input system. */
export class KeyMap {
    keys: Map<string, string>;

    constructor() {
        this.keys = new Map();
    }

    /** Loads key bindings from a preset object. */
    init(keyConfig: KeyPreset): void {
        Object.keys(keyConfig).forEach((action) => {
            this.keys.set(action, keyConfig[action]);
        });
    }

    /** Assigns a key for a single action. */
    setKey(action: string, key: string): void {
        this.keys.set(action, key);
    }

    /** Returns the mapped key for an action, if present. */
    getKey(action: string): string | undefined {
        return this.keys.get(action);
    }
}
