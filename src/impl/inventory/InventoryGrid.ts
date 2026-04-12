import type { BlockTextureSheet, BlockTextureSheetItem } from "@project-types";
import { BaseUIComponent } from "@lib/base/BaseUIComponent";
import { AIR_BLOCK_NAME } from "@/init/block-registry";

export interface InventoryFilterResult {
    query: string;
    totalCount: number;
    visibleCount: number;
}

/** Represents the grid component of the inventory UI, responsible for displaying the block texture sheet and applying filters based on user input. This class manages the creation of inventory slots based on the provided block texture sheet and updates the visibility of slots based on search queries to allow players to easily find specific blocks within their inventory. */
export class InventoryGrid extends BaseUIComponent {
    declare htmlElement: HTMLDivElement;
    slots: HTMLButtonElement[];

    constructor() {
        const gridElement = document.createElement("div");
        gridElement.className = "inventory-grid hidden";
        super(gridElement);

        this.slots = [];
    }

    /** Sets the block texture sheet for the inventory grid, creating inventory slots based on the items in the texture sheet and displaying them within the grid. This function replaces any existing slots with new ones generated from the provided texture sheet and ensures that the grid is visible to the player once the texture sheet is loaded. */
    setTextureSheet(textureSheet: BlockTextureSheet): void {
        this.slots = textureSheet.items
            .filter((item) => item.id !== AIR_BLOCK_NAME)
            .map((item) => this.createSlot(item));
        this.htmlElement.replaceChildren(...this.slots);
        this.show();
    }

    /** Applies a filter to the inventory grid based on the provided search query, updating the visibility of inventory slots to show only those that match the query. This function normalizes the query and compares it against the dataset name of each slot, toggling the "hidden" class accordingly and returning an InventoryFilterResult object containing details about the filtering operation. */
    applyFilter(query: string): InventoryFilterResult {
        const normalizedQuery = query.trim().toLowerCase();
        let visibleCount = 0;

        this.slots.forEach((slot) => {
            const name = slot.dataset.name ?? "";
            const isVisible = name.includes(normalizedQuery);

            slot.classList.toggle("hidden", !isVisible);
            if (isVisible) {
                visibleCount += 1;
            }
        });

        return {
            query: normalizedQuery,
            totalCount: this.slots.length,
            visibleCount,
        };
    }

    /** Creates an inventory slot element based on the provided BlockTextureSheetItem, including setting the appropriate background image and styles to display the block's texture. This function generates a button element for each block in the texture sheet, allowing for potential future interactions such as selecting or dragging blocks within the inventory UI. */
    createSlot(item: BlockTextureSheetItem): HTMLButtonElement {
        const slot = document.createElement("button");
        slot.type = "button";
        slot.className = "inventory-slot";

        const label = formatBlockLabel(item.id);
        slot.title = label;
        slot.setAttribute("aria-label", label);
        slot.dataset.name = label.toLowerCase();

        const icon = document.createElement("span");
        icon.className = "inventory-icon";
        icon.style.backgroundImage = `url(${item.textureSheetUrl})`;
        icon.style.backgroundPosition = item.backgroundPosition;
        icon.style.backgroundSize = item.backgroundSize;

        slot.append(icon);
        return slot;
    }
}

function formatBlockLabel(blockId: string): string {
    return blockId
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
