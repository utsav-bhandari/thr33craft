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

    /** Updates the inventory UI to display the loaded block texture sheet, enabling interactions with the search component and download button. This function is called when the block texture sheet is successfully loaded, allowing players to view the available blocks in the inventory and use the search functionality to filter blocks based on their names. The status message is also updated to reflect the number of blocks loaded, providing feedback to the player about the current state of the inventory. */
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

    /** Resets the inventory UI to an unavailable state, displaying a message and disabling interactions with the search component and download button. This is used when the block texture sheet is loading or if there was an error loading the texture sheet, ensuring that the user is informed of the current state and preventing interactions that would not function properly without a loaded texture sheet. The tone parameter allows for styling the status message appropriately based on whether it's a loading state or an error state. */
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
