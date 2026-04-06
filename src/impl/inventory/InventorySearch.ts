import { BaseUIComponent } from "@lib/base/BaseUIComponent.js";

export interface InventoryQueryChangeDetail {
    query: string;
}

export class InventorySearch extends BaseUIComponent {
    declare htmlElement: HTMLDivElement;
    inputElement: HTMLInputElement;

    constructor() {
        const searchContainer = document.createElement("div");
        searchContainer.className = "inventory-search-container";
        super(searchContainer);

        this.inputElement = document.createElement("input");
        this.inputElement.autocorrect = false;
        this.inputElement.type = "search";
        this.inputElement.className = "inventory-search";
        this.inputElement.setAttribute("aria-label", "Search inventory blocks");
        this.inputElement.id = "inventory-search-input";

        const label = document.createElement("label");
        label.textContent = "Search Blocks:";
        label.className = "inventory-search-label";
        label.setAttribute("for", "inventory-search-input");

        this.htmlElement.append(label);
        this.inputElement.addEventListener("input", () => {
            this.emit("querychange", {
                query: this.inputElement.value,
            } satisfies InventoryQueryChangeDetail);
        });

        this.htmlElement.append(this.inputElement);
    }

    clear(): void {
        this.inputElement.value = "";
    }

    setDisabled(disabled: boolean): void {
        this.inputElement.disabled = disabled;
    }
}
