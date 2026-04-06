import type {
    BlockTextureSheet,
    InventoryBlockTextureSheetParams,
} from "@project-types";
import { BaseUIModal } from "@lib/base/BaseUIModal.js";
import { InventoryGrid } from "@/impl/inventory/InventoryGrid.js";
import {
    InventorySearch,
    type InventoryQueryChangeDetail,
} from "@/impl/inventory/InventorySearch.js";

export class Inventory extends BaseUIModal {
    downloadFileName: string;
    textureSheet: BlockTextureSheet | null;
    statusElement: HTMLParagraphElement;
    headerElement: HTMLDivElement;
    actionsElement: HTMLDivElement;
    closeButton: HTMLButtonElement;
    downloadButton: HTMLButtonElement | null;
    searchComponent: InventorySearch;
    gridComponent: InventoryGrid;

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

        this.statusElement = document.createElement("p");
        this.statusElement.className = "inventory-status";

        this.headerElement = document.createElement("div");
        this.headerElement.className = "inventory-header";

        this.actionsElement = document.createElement("div");
        this.actionsElement.className = "inventory-actions";

        this.closeButton = document.createElement("button");
        this.closeButton.type = "button";
        this.closeButton.className =
            "inventory-action-button inventory-close-button";
        this.closeButton.setAttribute("aria-label", "Close inventory");
        this.closeButton.addEventListener("click", () => {
            this.emit("close-request");
        });

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

        this.actionsElement.append(
            this.searchComponent.htmlElement,
            ...(this.downloadButton ? [this.downloadButton] : []),
        );

        this.headerElement.append(this.statusElement, this.closeButton);
        this.htmlElement.replaceChildren(
            this.headerElement,
            this.actionsElement,
            this.gridComponent.htmlElement,
        );

        this.setLoadingState("Loading block texture sheet...");
    }

    setLoadingState(message: string): void {
        this.textureSheet = null;
        this.statusElement.textContent = message;
        this.gridComponent.hide();
        this.searchComponent.setDisabled(true);
        this.downloadButton?.setAttribute("disabled", "true");
    }

    setErrorState(message: string): void {
        this.textureSheet = null;
        this.statusElement.textContent = message;
        this.gridComponent.hide();
        this.searchComponent.setDisabled(true);
        this.downloadButton?.setAttribute("disabled", "true");
        this.statusElement.classList.add("error");
        this.statusElement.classList.remove("success");
    }

    setGridTextureSheet(textureSheet: BlockTextureSheet): void {
        this.textureSheet = textureSheet;
        this.gridComponent.setTextureSheet(textureSheet);
        this.statusElement.textContent = `${textureSheet.items.length} blocks loaded`;
        this.statusElement.classList.add("success");
        this.statusElement.classList.remove("error");
        this.searchComponent.setDisabled(false);
        this.downloadButton?.removeAttribute("disabled");
        this.searchComponent.clear();
        this.applyFilter("");
    }

    applyFilter(query: string): void {
        const {
            query: normalizedQuery,
            totalCount,
            visibleCount,
        } = this.gridComponent.applyFilter(query);

        this.statusElement.textContent = normalizedQuery
            ? `${visibleCount} of ${totalCount} blocks`
            : `${totalCount} blocks loaded`;
    }

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
