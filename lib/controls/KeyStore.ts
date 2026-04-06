export class KeyStore {
    curPressedKeys: Set<string>;

    constructor() {
        this.curPressedKeys = new Set();
    }

    hasPressedKey(key: string): boolean {
        return this.curPressedKeys.has(key);
    }

    addPressedKey(key: string): void {
        this.curPressedKeys.add(key);
    }

    removePressedKey(key: string): void {
        this.curPressedKeys.delete(key);
    }

    clear(): void {
        this.curPressedKeys.clear();
    }
}
