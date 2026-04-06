import type { KeyPreset } from "@project-types";

/** Represents a mapping of game actions to their corresponding key bindings, allowing for customizable controls in the game.
 * The KeyMap class provides methods to initialize the key mappings from a preset configuration, as well as to set and retrieve individual key bindings for specific actions.
 * This allows players to customize their controls according to their preferences while ensuring that the game can easily access the current key bindings when processing input. */
export class KeyMap {
    keys: Map<string, string>;

    constructor() {
        this.keys = new Map();
    }

    /** Initializes the key mappings based on a provided key configuration preset, which defines the default key bindings for various game actions. This method populates the internal keys map with the action-key pairs specified in the preset, allowing the game to use these mappings for input handling. */
    init(keyConfig: KeyPreset): void {
        Object.keys(keyConfig).forEach((action) => {
            this.keys.set(action, keyConfig[action]);
        });
    }

    /** Sets the key binding for a specific action, allowing for customization of controls. */
    setKey(action: string, key: string): void {
        this.keys.set(action, key);
    }

    /** Retrieves the key binding for a specific action, returning undefined if the action is not mapped. */
    getKey(action: string): string | undefined {
        return this.keys.get(action);
    }
}
