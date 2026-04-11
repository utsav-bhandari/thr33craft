import type { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import type { InputManagerLike, UIModalLike } from "@project-types";
import { BaseUIHandler } from "@lib/base/BaseUIHandler";
import { debug } from "@/utils/logger";

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

    /** Registers a new modal with the UI handler, replacing any existing modal with the same name and setting up an event listener to close the modal when a "close-request" event is emitted. This function ensures that only one instance of a modal with a given name exists at any time and that the UI state is properly managed when modals are opened or closed. */
    registerModal<T extends UIModalLike>(name: string, modal: T): T {
        const disposeListener = this.modalListeners.get(name);
        disposeListener?.();

        this.modals.set(name, modal);
        this.modalListeners.set(
            name,
            modal.on("close-request", () => {
                if (this.isActiveUI(modal)) {
                    this.closeUI(modal);
                }
            }),
        );

        return modal;
    }

    closeModal(name: string): void {
        const modal = this.getModal(name);

        if (this.isActiveUI(modal)) {
            debug(`Closing modal: ${name}`);
            this.closeUI(modal);
        }
    }

    openModal(name: string): void {
        const modal = this.getModal(name);
        debug(`Opening modal: ${name}`);
        this.setActiveUI(modal);
    }

    /** Toggles the specified UI modal, opening it if it's currently closed or closing it if it's currently open.*/
    toggleModal(name: string): void {
        const modal = this.getModal(name);

        if (this.isActiveUI(modal)) {
            debug(`Closing modal: ${name}`);
            this.closeUI(modal);
            return;
        }
        debug(`Opening modal: ${name}`);
        this.setActiveUI(modal);
    }

    /** Ensures that a modal with the specified name exists for all callers. */
    getModal(name: string): UIModalLike {
        if (!this.modals.has(name)) {
            throw new Error(`No modal registered with name: ${name}`);
        }
        return this.modals.get(name)!;
    }
}
