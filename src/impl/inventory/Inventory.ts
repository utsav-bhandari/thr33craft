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

/** Inventory modal that manages search, status, grid, and optional sheet download. */
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
        // Delegate close behavior to UIHandler so pointer/UI state stays centralized.
        this.closeButton.addEventListener("click", () => {
            this.emit("close-request");
        });

        // Download stays disabled until a valid texture sheet has loaded.
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

    /** Applies a loaded texture sheet to the grid and resets filtering. */
    setGridTextureSheet(textureSheet: BlockTextureSheet): void {
        this.textureSheet = textureSheet;
        this.stateController.showTextureSheet(textureSheet);
        this.applyFilter("");
    }

    /** Filters visible slots and updates the status line with result counts. */
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

    /** Triggers a browser download for the currently loaded texture-sheet image. */
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
