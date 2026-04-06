import type {
    BlockTextureSheet,
    InventoryBlockTextureSheetParams,
} from "@project-types";
import { BaseUIModal } from "@lib/base/BaseUIModal";
import { InventoryGrid } from "@/impl/inventory/InventoryGrid";
import {
    InventorySearch,
    type InventoryQueryChangeDetail,
} from "@/impl/inventory/InventorySearch";
import { InventoryStateController } from "@/impl/inventory/InventoryStateController";
import { InventoryStatus } from "@/impl/inventory/InventoryStatus";

/** Represents the inventory UI modal, allowing players to view and interact with the block texture sheet, search for specific blocks, and download the texture sheet if the option is enabled. This class manages the state of the inventory UI, including loading states, error states, and filter results based on user input. It also integrates with the InventoryStateController to update the UI components accordingly. */
export class Inventory extends BaseUIModal {
    downloadFileName: string;
    textureSheet: BlockTextureSheet | null;
    statusComponent: InventoryStatus;
    headerElement: HTMLDivElement;
    actionsElement: HTMLDivElement;
    closeButton: HTMLButtonElement;
    downloadButton: HTMLButtonElement | null;
    searchComponent: InventorySearch;
    gridComponent: InventoryGrid;
    stateController: InventoryStateController;

    constructor(
        htmlElement: HTMLElement,
        options: InventoryBlockTextureSheetParams = {},
    ) {
        super(htmlElement);

        const {
            showDownloadButton = false,
            downloadFileName = "block-texture-sheet.png",
        } = options;

        this.downloadFileName = downloadFileName;
        this.textureSheet = null;

        this.headerElement = document.createElement("div");
        this.headerElement.className = "inventory-header";

        this.actionsElement = document.createElement("div");
        this.actionsElement.className = "inventory-actions";

        this.closeButton = document.createElement("button");
        this.closeButton.type = "button";
        this.closeButton.className =
            "inventory-action-button inventory-close-button";
        this.closeButton.setAttribute("aria-label", "Close inventory");
        // Attach an event listener to the close button to emit a "close-request" event when clicked, allowing the UI handler to manage the closing of the inventory modal and the associated pointer controls. This ensures that when the user clicks the close button, the inventory modal will be closed and the pointer controls will be locked again for gameplay.
        this.closeButton.addEventListener("click", () => {
            this.emit("close-request");
        });

        // Initialize the download button if the option is enabled in config, allowing players to download the block texture sheet directly from the inventory UI. The button will be disabled until the texture sheet is successfully loaded to prevent downloading an empty or invalid file.
        this.downloadButton = null;
        if (showDownloadButton) {
            this.downloadButton = document.createElement("button");
            this.downloadButton.type = "button";
            this.downloadButton.className = "inventory-action-button";
            this.downloadButton.textContent = "Download Texture Sheet";
            this.downloadButton.setAttribute(
                "aria-label",
                "Download block texture sheet",
            );
            this.downloadButton.disabled = true;
            this.downloadButton.addEventListener("click", () => {
                this.downloadTextureSheet();
            });
        }

        this.searchComponent = new InventorySearch();
        this.searchComponent.on("querychange", (event) => {
            if (!(event instanceof CustomEvent)) {
                return;
            }

            const detail = event.detail as
                | InventoryQueryChangeDetail
                | undefined;
            this.applyFilter(detail?.query ?? "");
        });

        this.gridComponent = new InventoryGrid();
        this.statusComponent = new InventoryStatus();
        this.stateController = new InventoryStateController({
            status: this.statusComponent,
            search: this.searchComponent,
            grid: this.gridComponent,
            downloadButton: this.downloadButton,
        });

        this.actionsElement.append(
            this.searchComponent.htmlElement,
            ...(this.downloadButton ? [this.downloadButton] : []),
        );

        this.headerElement.append(
            this.statusComponent.htmlElement,
            this.closeButton,
        );
        this.htmlElement.replaceChildren(
            this.headerElement,
            this.actionsElement,
            this.gridComponent.htmlElement,
        );

        this.setLoadingState("Loading block texture sheet...");
    }

    setLoadingState(message: string): void {
        this.textureSheet = null;
        this.stateController.showLoading(message);
    }

    setErrorState(message: string): void {
        this.textureSheet = null;
        this.stateController.showError(message);
    }

    /** Sets the block texture sheet for the inventory grid, updating the state controller and applying an initial filter. */
    setGridTextureSheet(textureSheet: BlockTextureSheet): void {
        this.textureSheet = textureSheet;
        this.stateController.showTextureSheet(textureSheet);
        this.applyFilter("");
    }

    /** Applies the specified filter query to the inventory grid, updating the displayed blocks based on the search input. This function is called whenever the search query changes, allowing players to quickly find specific blocks in the inventory by filtering the block texture sheet based on block names. The state controller is updated with the filter results to provide feedback on how many blocks are visible based on the current query. */
    applyFilter(query: string): void {
        const {
            query: normalizedQuery,
            totalCount,
            visibleCount,
        } = this.gridComponent.applyFilter(query);

        this.stateController.showFilterResult({
            query: normalizedQuery,
            totalCount,
            visibleCount,
        });
    }

    /** Initiates the download of the block texture sheet by creating a temporary anchor element and triggering a click event. This allows players to save the block texture sheet as an image file on their local device directly from the inventory UI. The download button is only enabled when a valid texture sheet is loaded, ensuring that players can only download the texture sheet when it's available. */
    downloadTextureSheet(): void {
        const textureSheetUrl = this.textureSheet?.textureSheetUrl;
        if (!textureSheetUrl) {
            return;
        }

        const link = document.createElement("a");
        link.href = textureSheetUrl;
        link.download = this.downloadFileName;
        document.body.append(link);
        link.click();
        link.remove();
    }
}
