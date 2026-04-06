import type { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import type { InputManagerLike, UIModalLike } from "@project-types";
import { BaseUIHandler } from "@lib/base/BaseUIHandler";

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
        // Initialize hidden html elments like crosshair and hud hints, which should be hidden when any UI modal is open to prevent visual clutter and ensure a clear user interface. This array can be customized based on the specific HTML elements used in the game that should be hidden during UI interactions.
        this.hideOnUIHtmlElems = hideOnUIHtmlElems;
        this.modals = new Map();
        this.modalListeners = new Map();
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

    /** Overrides the setActiveUI method to include synchronization of hidden HTML elements based on the new UI state. This ensures that when a modal is opened or closed, the appropriate HTML elements (such as crosshairs or HUD hints) are shown or hidden accordingly to maintain a clear and uncluttered user interface. */
    override setActiveUI(newUI: UIModalLike | null): boolean {
        const result = super.setActiveUI(newUI);
        this.syncHiddenElements();
        return result;
    }

    override toggle(ui: UIModalLike | null): boolean {
        const result = super.toggle(ui);
        this.syncHiddenElements();
        return result;
    }

    /** Ensures that a modal with the specified name exists and returns it. Throws an error if the modal is not found. */
    requireModal(name: string): UIModalLike {
        const modal = this.getModal(name);

        if (!modal) {
            throw new Error(`Unknown modal: ${name}`);
        }

        return modal;
    }

    /** Synchronizes the visibility of HTML elements that should be hidden when any UI modal is open. This ensures a clear and uncluttered user interface by showing or hiding elements like crosshairs and HUD hints based on the current UI state. */
    syncHiddenElements(): void {
        const shouldHide = this.isUIOpen();

        this.hideOnUIHtmlElems.forEach((htmlElement) => {
            htmlElement.classList.toggle("hidden", shouldHide);
        });
    }
}
