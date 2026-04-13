import type {
    BlockTextureSheet,
    BlockTextureSheetItem,
    InventoryBlockSelectionDetail,
} from "@project-types";
import { BaseUIComponent } from "@lib/base/BaseUIComponent";
import { AIR_BLOCK_NAME } from "@/init/block-registry";

export interface InventoryFilterResult {
    query: string;
    totalCount: number;
    visibleCount: number;
}

/** Grid view for texture-sheet items, with text-based slot filtering. */
export class InventoryGrid extends BaseUIComponent {
    declare htmlElement: HTMLDivElement;
    slots: HTMLButtonElement[];

    constructor() {
        const gridElement = document.createElement("div");
        gridElement.className = "inventory-grid hidden";
        super(gridElement);

        this.slots = [];
    }

    /** Rebuilds slot elements from a texture sheet and shows the grid. */
    setTextureSheet(textureSheet: BlockTextureSheet): void {
        this.slots = textureSheet.items
            .filter((item) => item.id !== AIR_BLOCK_NAME)
            .map((item) => this.createSlot(item));
        this.htmlElement.replaceChildren(...this.slots);
        this.show();
    }

    /** Hides non-matching slots and returns summary counts for the current query. */
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

    /** Builds one slot button for a sheet item with its icon background mapping. */
    createSlot(item: BlockTextureSheetItem): HTMLButtonElement {
        const slot = document.createElement("button");
        slot.type = "button";
        slot.className = "inventory-slot";

        const label = formatBlockLabel(item.id);
        const selectionDetail: InventoryBlockSelectionDetail = {
            id: item.id,
            label,
            textureSheetUrl: item.textureSheetUrl,
            backgroundPosition: item.backgroundPosition,
            backgroundSize: item.backgroundSize,
        };

        slot.title = label;
        slot.setAttribute("aria-label", label);
        slot.dataset.name = label.toLowerCase();
        slot.dataset.blockId = item.id;
        slot.addEventListener("click", () => {
            this.emit("blockselect", selectionDetail);
        });

        const icon = document.createElement("span");
        icon.className = "inventory-icon";
        icon.style.backgroundImage = `url(${item.textureSheetUrl})`;
        icon.style.backgroundPosition = item.backgroundPosition;
        icon.style.backgroundSize = item.backgroundSize;

        slot.append(icon);
        return slot;
    }
}

export function formatBlockLabel(blockId: string): string {
    return blockId
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
