import { BaseUIComponent } from "@lib/base/BaseUIComponent";

export interface InventoryQueryChangeDetail {
    query: string;
}

/**
 * Represents the search component of the inventory UI, allowing players to filter the displayed blocks based on a search query. This class manages the state of the search input and emits events when the query changes, enabling real-time filtering of the inventory grid based on user input. It also provides methods to clear the search input and enable or disable the search functionality as needed.
 */
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
