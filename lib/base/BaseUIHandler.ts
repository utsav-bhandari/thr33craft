import type { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import type { InputManagerLike, UIModalLike } from "@project-types";

export class BaseUIHandler {
    inputManager: InputManagerLike;
    ptrControls: PointerLockControls;
    activeUI: UIModalLike | null;

    constructor(
        inputManager: InputManagerLike,
        pointerControls: PointerLockControls,
    ) {
        this.inputManager = inputManager;
        this.ptrControls = pointerControls;
        this.activeUI = null;
    }

    isUIOpen(): boolean {
        return this.activeUI !== null;
    }

    closeActiveUI(): boolean {
        if (!this.activeUI) {
            this.ptrControls.lock();
            return false;
        }

        this.activeUI.close();
        this.activeUI = null;
        this.ptrControls.lock();
        return false;
    }

    /** Sets the active UI to the specified modal, closing any currently active modal and unlocking the pointer controls to allow for UI interaction. If the new UI is null, it will simply close the currently active modal and lock the pointer controls. This function ensures that only one modal is active at a time and that the pointer controls are properly managed based on the UI state. */
    setActiveUI(newUI: UIModalLike | null): boolean {
        if (newUI === null) {
            return this.closeActiveUI();
        }

        if (this.activeUI === newUI) {
            this.ptrControls.unlock();
            return true;
        }

        this.activeUI?.close();
        this.activeUI = newUI;
        this.activeUI.open();
        this.ptrControls.unlock();
        return true;
    }

    /** Toggles the specified UI modal, opening it if it's currently closed or closing it if it's currently open. This function also ensures that the pointer controls are properly managed based on the new UI state, unlocking them when a modal is opened and locking them when a modal is closed. */
    toggle(ui: UIModalLike | null): boolean {
        if (ui === null || this.activeUI === ui) {
            return this.closeActiveUI();
        }

        return this.setActiveUI(ui);
    }
}
