import type { BlockTextureSheet, BlockTextureSheetItem } from "@project-types";
import { BaseUIComponent } from "@lib/base/BaseUIComponent";

export interface InventoryFilterResult {
    query: string;
    totalCount: number;
    visibleCount: number;
}

export class InventoryGrid extends BaseUIComponent {
    declare htmlElement: HTMLDivElement;
    slots: HTMLButtonElement[];

    constructor() {
        const gridElement = document.createElement("div");
        gridElement.className = "inventory-grid hidden";
        super(gridElement);

        this.slots = [];
    }

    setTextureSheet(textureSheet: BlockTextureSheet): void {
        this.slots = textureSheet.items.map((item) => this.createSlot(item));
        this.htmlElement.replaceChildren(...this.slots);
        this.show();
    }

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
