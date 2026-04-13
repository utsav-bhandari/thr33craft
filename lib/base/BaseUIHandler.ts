import type { PointerLockControls } from "three/addons/controls/PointerLockControls.js";
import type { InputManagerLike, UIModalLike } from "@project-types";

export class BaseUIHandler {
    inputManager: InputManagerLike;
    ptrControls: PointerLockControls;
    activeUI: UIModalLike | null;
    protected containedElements: Set<HTMLElement>;

    constructor(
        inputManager: InputManagerLike,
        pointerControls: PointerLockControls,
    ) {
        this.inputManager = inputManager;
        this.ptrControls = pointerControls;
        this.activeUI = null;
        this.containedElements = new Set();
    }

    protected onActiveUIChange(_activeUI: UIModalLike | null): void {}

    isUIOpen(): boolean {
        return this.activeUI !== null;
    }

    isActiveUI(ui: UIModalLike): boolean {
        return this.activeUI === ui;
    }

    /** Closes the currently active UI modal, if any, and locks the pointer controls to return to the default game state. */
    closeActiveUI(): void {
        if (this.activeUI === null) {
            return;
        }
        this.activeUI.close();
        this.activeUI = null;
        this.lockPointer();
        this.onActiveUIChange(this.activeUI);
        return;
    }

    /** Closes the specified UI modal if it's currently open. */
    closeUI(ui: UIModalLike): void {
        if (!this.isActiveUI(ui)) {
            return;
        }
        // active ui is the ui to be closed
        this.closeActiveUI();
    }

    /** Sets the active UI to the specified modal, unlocking the pointer controls to allow for UI interaction. */
    setActiveUI(ui: UIModalLike): void {
        if (this.activeUI === null) {
            this.activeUI = ui;
            this.activeUI.open();
            this.unlockPointer();
            this.onActiveUIChange(this.activeUI);
            return;
        }
        this.activeUI.close();
        this.activeUI = ui;
        this.activeUI.open();
        this.unlockPointer();
        this.onActiveUIChange(this.activeUI);
    }

    lockPointer(): void {
        this.ptrControls.lock();
    }

    unlockPointer(): void {
        this.ptrControls.unlock();
    }

    isPointerLocked(): boolean {
        return this.ptrControls.isLocked;
    }

    registerContainedElement(element: HTMLElement): void {
        this.containedElements.add(element);
    }

    unregisterContainedElement(element: HTMLElement): void {
        this.containedElements.delete(element);
    }

    isPointInsideActiveUI(clientX: number, clientY: number): boolean {
        if (
            this.activeUI &&
            this.isPointInsideElement(
                this.activeUI.htmlElement,
                clientX,
                clientY,
            )
        ) {
            return true;
        }

        for (const element of this.containedElements) {
            if (this.isPointInsideElement(element, clientX, clientY)) {
                return true;
            }
        }

        return false;
    }

    isTargetInsideActiveUI(target: EventTarget | null): boolean {
        if (!(target instanceof Node)) {
            return false;
        }

        if (this.activeUI?.htmlElement.contains(target)) {
            return true;
        }

        for (const element of this.containedElements) {
            if (element.contains(target)) {
                return true;
            }
        }

        return false;
    }

    private isPointInsideElement(
        element: HTMLElement,
        clientX: number,
        clientY: number,
    ): boolean {
        const rect = element.getBoundingClientRect();

        return (
            clientX >= rect.left &&
            clientX <= rect.right &&
            clientY >= rect.top &&
            clientY <= rect.bottom
        );
    }
}
