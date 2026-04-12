export type InventoryStatusTone = "default" | "error" | "success";

export class InventoryStatus {
    htmlElement: HTMLParagraphElement;

    constructor(htmlElement?: HTMLParagraphElement) {
        this.htmlElement = htmlElement ?? document.createElement("p");
        this.htmlElement.className = "inventory-status";
    }

    /** Sets status copy and semantic tone classes for the inventory header. */
    setMessage(message: string, tone: InventoryStatusTone = "default"): void {
        this.htmlElement.textContent = message;
        this.htmlElement.classList.toggle("error", tone === "error");
        this.htmlElement.classList.toggle("success", tone === "success");
    }
}
