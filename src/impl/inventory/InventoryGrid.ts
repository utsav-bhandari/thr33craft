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
    private tooltipElement: HTMLDivElement;

    constructor() {
        const gridElement = document.createElement("div");
        gridElement.className = "inventory-grid hidden";
        super(gridElement);

        this.slots = [];
        this.tooltipElement = document.createElement("div");
        this.tooltipElement.className =
            "inventory-tooltip inventory-tooltip-hidden tooltip-corners";
        const root = document.body ?? document.documentElement;
        root.appendChild(this.tooltipElement);
    }

    override hide(): void {
        this.hideTooltip();
        super.hide();
    }

    hideTooltip(): void {
        this.tooltipElement.classList.remove("inventory-tooltip-visible");
        this.tooltipElement.classList.add("inventory-tooltip-hidden");
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

        slot.setAttribute("aria-label", label);
        slot.dataset.name = label.toLowerCase();
        slot.dataset.blockId = item.id;

        const showTooltip = (event: MouseEvent | PointerEvent): void => {
            this.tooltipElement.textContent = label;
            this.tooltipElement.classList.remove("inventory-tooltip-hidden");
            this.tooltipElement.classList.add("inventory-tooltip-visible");
            this.positionTooltip(event);
        };

        slot.addEventListener("mouseenter", showTooltip);
        slot.addEventListener("pointermove", showTooltip);
        slot.addEventListener("mouseleave", () => this.hideTooltip());
        slot.addEventListener("blur", () => this.hideTooltip());
        slot.addEventListener("click", () => {
            this.hideTooltip();
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

    private positionTooltip(event: MouseEvent | PointerEvent): void {
        const tooltip = this.tooltipElement;
        const buffer = 14;

        const viewportWidth = window.innerWidth;
        const viewportHeight = window.innerHeight;
        const tooltipRect = tooltip.getBoundingClientRect();

        let left = event.clientX + buffer;
        let top = event.clientY - tooltipRect.height - buffer;

        if (left + tooltipRect.width + buffer > viewportWidth) {
            left = Math.max(buffer, event.clientX - tooltipRect.width - buffer);
        }

        if (top < buffer) {
            top = event.clientY + buffer;
        }

        if (top + tooltipRect.height + buffer > viewportHeight) {
            top = Math.max(
                buffer,
                viewportHeight - tooltipRect.height - buffer,
            );
        }

        if (left + tooltipRect.width + buffer > viewportWidth) {
            left = Math.max(buffer, viewportWidth - tooltipRect.width - buffer);
        }

        tooltip.style.left = `${left}px`;
        tooltip.style.top = `${top}px`;
    }
}

export function formatBlockLabel(blockId: string): string {
    return blockId
        .split("_")
        .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
        .join(" ");
}
