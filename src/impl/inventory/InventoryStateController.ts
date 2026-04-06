import type { BlockTextureSheet } from "@project-types";
import type { InventoryFilterResult } from "@/impl/inventory/InventoryGrid";
import { InventoryGrid } from "@/impl/inventory/InventoryGrid";
import { InventorySearch } from "@/impl/inventory/InventorySearch";
import { InventoryStatus } from "@/impl/inventory/InventoryStatus";

export class InventoryStateController {
    status: InventoryStatus;
    search: InventorySearch;
    grid: InventoryGrid;
    downloadButton: HTMLButtonElement | null;

    constructor({
        status,
        search,
        grid,
        downloadButton,
    }: {
        status: InventoryStatus;
        search: InventorySearch;
        grid: InventoryGrid;
        downloadButton: HTMLButtonElement | null;
    }) {
        this.status = status;
        this.search = search;
        this.grid = grid;
        this.downloadButton = downloadButton;
    }

    showLoading(message: string): void {
        this.resetUnavailableView(message, "default");
    }

    showError(message: string): void {
        this.resetUnavailableView(message, "error");
    }

    showTextureSheet(textureSheet: BlockTextureSheet): void {
        this.grid.setTextureSheet(textureSheet);
        this.status.setMessage(
            this.getLoadedMessage(textureSheet.items.length),
            "success",
        );
        this.search.setDisabled(false);
        this.downloadButton?.removeAttribute("disabled");
        this.search.clear();
    }

    showFilterResult({
        query,
        totalCount,
        visibleCount,
    }: InventoryFilterResult): void {
        this.status.setMessage(
            query
                ? `${visibleCount} of ${totalCount} blocks`
                : this.getLoadedMessage(totalCount),
        );
    }

    private resetUnavailableView(
        message: string,
        tone: "default" | "error",
    ): void {
        this.status.setMessage(message, tone);
        this.grid.hide();
        this.search.setDisabled(true);
        this.downloadButton?.setAttribute("disabled", "true");
    }

    private getLoadedMessage(blockCount: number): string {
        return `${blockCount} blocks loaded`;
    }
}
