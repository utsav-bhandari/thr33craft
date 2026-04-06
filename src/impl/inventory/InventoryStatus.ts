export type InventoryStatusTone = "default" | "error" | "success";

export class InventoryStatus {
    htmlElement: HTMLParagraphElement;

    constructor(htmlElement?: HTMLParagraphElement) {
        this.htmlElement = htmlElement ?? document.createElement("p");
        this.htmlElement.className = "inventory-status";
    }

    /** Sets the status message in the inventory UI, with an optional tone to indicate the nature of the message (default, error, or success). This function updates the text content of the status element and applies appropriate CSS classes based on the specified tone to visually differentiate between different types of messages. */
    setMessage(message: string, tone: InventoryStatusTone = "default"): void {
        this.htmlElement.textContent = message;
        this.htmlElement.classList.toggle("error", tone === "error");
        this.htmlElement.classList.toggle("success", tone === "success");
    }
}
