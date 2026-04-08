import { BaseUIComponent } from "@lib/base/BaseUIComponent";

export class BaseUIModal extends BaseUIComponent {
    constructor(htmlElement: HTMLElement) {
        super(htmlElement);
        this.close();
    }

    close(): void {
        super.hide();
    }

    open(): void {
        super.show();
    }

    isVisible(): boolean {
        return !this.htmlElement.classList.contains("hidden");
    }
}
