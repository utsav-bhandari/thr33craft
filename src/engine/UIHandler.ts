import type { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import type { InputManagerLike, UIModalLike } from "@project-types";
import { BaseUIHandler } from "@lib/base/BaseUIHandler.js";

export class UIHandler extends BaseUIHandler {
    hideOnUIHtmlElems: HTMLElement[];
    modals: Map<string, UIModalLike>;
    modalListeners: Map<string, () => void>;

    constructor(
        inputManager: InputManagerLike,
        pointerControls: PointerLockControls,
        hideOnUIHtmlElems: HTMLElement[] = [],
    ) {
        super(inputManager, pointerControls);
        this.hideOnUIHtmlElems = hideOnUIHtmlElems;
        this.modals = new Map();
        this.modalListeners = new Map();
    }

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

    override setActiveUI(newUI: UIModalLike | null): boolean {
        const result = super.setActiveUI(newUI);
        this.syncHiddenElements();
        return result;
    }

    requireModal(name: string): UIModalLike {
        const modal = this.getModal(name);

        if (!modal) {
            throw new Error(`Unknown modal: ${name}`);
        }

        return modal;
    }

    syncHiddenElements(): void {
        const shouldHide = this.isUIOpen();

        this.hideOnUIHtmlElems.forEach((htmlElement) => {
            htmlElement.classList.toggle("hidden", shouldHide);
        });
    }
}
