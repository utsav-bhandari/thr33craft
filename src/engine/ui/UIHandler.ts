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

    /** Registers (or replaces) a modal and hooks its close request into the handler. */
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

    /** Opens a modal if inactive, otherwise closes it. */
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

    /** Returns a registered modal or throws if it does not exist. */
    getModal(name: string): UIModalLike {
        if (!this.modals.has(name)) {
            throw new Error(`No modal registered with name: ${name}`);
        }
        return this.modals.get(name)!;
    }
}
