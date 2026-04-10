import { DEBUG } from "@utils/config";

export function debug(...args: unknown[]): void {
    if (!DEBUG) {
        return;
    }

    console.log("[DEBUG]", ...args);
}
