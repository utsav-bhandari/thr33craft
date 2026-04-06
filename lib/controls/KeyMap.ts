import type { KeyPreset } from "@project-types";

export class KeyMap {
    keys: Map<string, string>;

    constructor() {
        this.keys = new Map();
    }

    init(keyConfig: KeyPreset): void {
        Object.keys(keyConfig).forEach((action) => {
            this.keys.set(action, keyConfig[action]);
        });
    }

    setKey(action: string, key: string): void {
        this.keys.set(action, key);
    }

    getKey(action: string): string | undefined {
        return this.keys.get(action);
    }
}