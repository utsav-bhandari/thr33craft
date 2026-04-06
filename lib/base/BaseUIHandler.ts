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

    setActiveUI(newUI: UIModalLike | null): boolean {
        if (newUI === null) {
            return this.closeActiveUI();
        }

        if (this.activeUI === newUI) {
            return this.closeActiveUI();
        }

        this.activeUI?.close();
        this.activeUI = newUI;

        if (this.activeUI) {
            this.activeUI.open();
            this.ptrControls.unlock();
            return true;
        }

        this.ptrControls.lock();
        return false;
    }

    toggle(ui: UIModalLike | null): boolean {
        return this.setActiveUI(ui);
    }
}