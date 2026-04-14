import type {
    BlockTextureAtlasParams,
    BlockTextureSheet,
    InventoryBlockSelectionDetail,
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
    textureSheetDownloadFileName: string;
    textureAtlasDownloadFileName: string;
    textureSheet: BlockTextureSheet | null;
    textureAtlasUrl: string | null;
    statusComponent: InventoryStatus;
    headerElement: HTMLDivElement;
    actionsElement: HTMLDivElement;
    closeButton: HTMLButtonElement;
    downloadButton: HTMLButtonElement | null;
    atlasDownloadButton: HTMLButtonElement | null;
    searchComponent: InventorySearch;
    gridComponent: InventoryGrid;
    stateController: InventoryStateController;

    constructor(
        htmlElement: HTMLElement,
        options: {
            textureSheet?: InventoryBlockTextureSheetParams;
            textureAtlas?: BlockTextureAtlasParams;
        } = {},
    ) {
        super(htmlElement);

        const {
            showDownloadButton = false,
            downloadFileName = "block-texture-sheet.png",
        } = options.textureSheet ?? {};
        const {
            showDownloadButton: showAtlasDownloadButton = false,
            downloadFileName: atlasDownloadFileName = "block-texture-atlas.png",
        } = options.textureAtlas ?? {};

        this.textureSheetDownloadFileName = downloadFileName;
        this.textureAtlasDownloadFileName = atlasDownloadFileName;
        this.textureSheet = null;
        this.textureAtlasUrl = null;

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

        this.atlasDownloadButton = null;
        if (showAtlasDownloadButton) {
            this.atlasDownloadButton = document.createElement("button");
            this.atlasDownloadButton.type = "button";
            this.atlasDownloadButton.className = "inventory-action-button";
            this.atlasDownloadButton.textContent = "Download Texture Atlas";
            this.atlasDownloadButton.setAttribute(
                "aria-label",
                "Download block texture atlas",
            );
            this.atlasDownloadButton.disabled = true;
            this.atlasDownloadButton.addEventListener("click", () => {
                this.downloadTextureAtlas();
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
        this.gridComponent.on("blockselect", (event) => {
            if (!(event instanceof CustomEvent)) {
                return;
            }

            const detail = event.detail as
                | InventoryBlockSelectionDetail
                | undefined;

            if (!detail) {
                return;
            }

            this.emit("blockselect", detail);
        });
        this.statusComponent = new InventoryStatus();
        this.stateController = new InventoryStateController({
            status: this.statusComponent,
            search: this.searchComponent,
            grid: this.gridComponent,
            downloadButtons: [
                this.downloadButton,
                this.atlasDownloadButton,
            ].filter((button): button is HTMLButtonElement => button !== null),
        });

        this.actionsElement.append(
            this.searchComponent.htmlElement,
            ...(this.downloadButton ? [this.downloadButton] : []),
            ...(this.atlasDownloadButton ? [this.atlasDownloadButton] : []),
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

    override close(): void {
        super.close();

        if (!this.textureSheet) {
            return;
        }

        this.stateController.resetToLoadedState(this.textureSheet);
    }

    /** Applies a loaded texture sheet to the grid and resets filtering. */
    setGridTextureSheet(textureSheet: BlockTextureSheet): void {
        this.textureSheet = textureSheet;
        this.stateController.showTextureSheet(textureSheet);
        this.applyFilter("");
    }

    setTextureAtlasDownloadUrl(textureAtlasUrl: string): void {
        this.textureAtlasUrl = textureAtlasUrl;
        this.atlasDownloadButton?.removeAttribute("disabled");
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

    showSelectionFeedback(message: string): void {
        this.stateController.showActionResult(message);
    }

    /** Triggers a browser download for the currently loaded texture-sheet image. */
    downloadTextureSheet(): void {
        const textureSheetUrl = this.textureSheet?.textureSheetUrl;
        if (!textureSheetUrl) {
            return;
        }

        this.downloadUrl(textureSheetUrl, this.textureSheetDownloadFileName);
    }

    downloadTextureAtlas(): void {
        if (!this.textureAtlasUrl) {
            return;
        }

        this.downloadUrl(
            this.textureAtlasUrl,
            this.textureAtlasDownloadFileName,
        );
    }

    private downloadUrl(url: string, fileName: string): void {
        const link = document.createElement("a");
        link.href = url;
        link.download = fileName;
        document.body.append(link);
        link.click();
        link.remove();
    }
}
