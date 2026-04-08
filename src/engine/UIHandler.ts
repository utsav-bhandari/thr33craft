import type { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import type { InputManagerLike, UIModalLike } from "@project-types";
import { BaseUIHandler } from "@lib/base/BaseUIHandler";

export class UIHandler extends BaseUIHandler {
    modals: Map<string, UIModalLike>;
    modalListeners: Map<string, () => void>;

    constructor(
        inputManager: InputManagerLike,
        pointerControls: PointerLockControls,
    ) {
        super(inputManager, pointerControls);
        this.modals = new Map();
        this.modalListeners = new Map();
        this.onActiveUIChange(this.activeUI);
    }

    protected override onActiveUIChange(activeUI: UIModalLike | null): void {
        document.body.classList.toggle("ui-open", activeUI !== null);
    }

    isPointerLocked(): boolean {
        return this.ptrControls.isLocked;
    }

    /** Registers a new modal with the UI handler, replacing any existing modal with the same name and setting up an event listener to close the modal when a "close-request" event is emitted. This function ensures that only one instance of a modal with a given name exists at any time and that the UI state is properly managed when modals are opened or closed. */
    registerModal<T extends UIModalLike>(name: string, modal: T): T {
        const disposeListener = this.modalListeners.get(name);
        disposeListener?.();

        this.modals.set(name, modal);
        this.modalListeners.set(
            name,
            modal.on("close-request", () => {
                if (this.activeUI === modal) {
                    this.closeActiveUI();
                }
            }),
        );

        return modal;
    }

    getModal(name: string): UIModalLike | null {
        return this.modals.get(name) ?? null;
    }

    openModal(name: string): boolean {
        return this.setActiveUI(this.requireModal(name));
    }

    toggleModal(name: string): boolean {
        return this.toggle(this.requireModal(name));
    }

    closeModal(name: string): boolean {
        const modal = this.requireModal(name);

        if (this.activeUI === modal) {
            return this.closeActiveUI();
        }

        modal.close();
        return false;
    }

    /** Ensures that a modal with the specified name exists and returns it. Throws an error if the modal is not found. */
    requireModal(name: string): UIModalLike {
        const modal = this.getModal(name);

        if (!modal) {
            throw new Error(`Unknown modal: ${name}`);
        }

        return modal;
    }
}
