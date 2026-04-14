import type { BlockTextureSheet } from "@project-types";
import type { InventoryFilterResult } from "@/impl/inventory/InventoryGrid";
import { InventoryGrid } from "@/impl/inventory/InventoryGrid";
import { InventorySearch } from "@/impl/inventory/InventorySearch";
import { InventoryStatus } from "@/impl/inventory/InventoryStatus";

export class InventoryStateController {
    status: InventoryStatus;
    search: InventorySearch;
    grid: InventoryGrid;
    downloadButtons: HTMLButtonElement[];

    constructor({
        status,
        search,
        grid,
        downloadButtons,
    }: {
        status: InventoryStatus;
        search: InventorySearch;
        grid: InventoryGrid;
        downloadButtons: HTMLButtonElement[];
    }) {
        this.status = status;
        this.search = search;
        this.grid = grid;
        this.downloadButtons = downloadButtons;
    }

    showLoading(message: string): void {
        this.resetUnavailableView(message, "default");
    }

    showError(message: string): void {
        this.resetUnavailableView(message, "error");
    }

    /** Transitions the inventory to loaded state and enables controls. */
    showTextureSheet(textureSheet: BlockTextureSheet): void {
        this.grid.setTextureSheet(textureSheet);
        this.status.setMessage(
            this.getLoadedMessage(textureSheet.items.length),
            "success",
        );
        this.search.setDisabled(false);
        this.setDownloadButtonsDisabled(false);
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
            "success",
        );
    }

    showActionResult(message: string): void {
        this.status.setMessage(message, "success");
    }

    resetToLoadedState(textureSheet: BlockTextureSheet): void {
        this.grid.setTextureSheet(textureSheet);
        this.search.clear();
        this.search.setDisabled(false);
        this.setDownloadButtonsDisabled(false);
        this.status.setMessage(
            this.getLoadedMessage(textureSheet.items.length),
            "success",
        );
    }

    /** Applies a non-interactive inventory state (loading/error). */
    private resetUnavailableView(
        message: string,
        tone: "default" | "error",
    ): void {
        this.status.setMessage(message, tone);
        this.grid.hide();
        this.search.setDisabled(true);
        this.setDownloadButtonsDisabled(true);
    }

    private setDownloadButtonsDisabled(disabled: boolean): void {
        this.downloadButtons.forEach((button) => {
            if (disabled) {
                button.setAttribute("disabled", "true");
                return;
            }

            button.removeAttribute("disabled");
        });
    }

    private getLoadedMessage(blockCount: number): string {
        return `${blockCount} blocks loaded`;
    }
}
