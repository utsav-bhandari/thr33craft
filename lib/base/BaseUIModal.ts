import { BaseUIComponent } from "@lib/base/BaseUIComponent";

export class BaseUIModal extends BaseUIComponent {
    openState: boolean;

    constructor(htmlElement: HTMLElement) {
        super(htmlElement);
        this.openState = false;
        this.close();
    }

    close(): void {
        this.openState = false;
        this.hide();
    }

    open(): void {
        this.openState = true;
        this.show();
    }

    isOpen(): boolean {
        return this.openState;
    }
}
