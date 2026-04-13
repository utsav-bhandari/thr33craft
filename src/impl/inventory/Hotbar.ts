import type { HotbarItem, HotbarSnapshot } from "@project-types";
import { BaseUIComponent } from "@lib/base/BaseUIComponent";

export class Hotbar extends BaseUIComponent {
    declare htmlElement: HTMLDivElement;
    selectedBlockLabel: HTMLDivElement;
    slots: HTMLDivElement[];
    icons: HTMLSpanElement[];
    numberBadges: HTMLSpanElement[];

    constructor(slotCount: number) {
        const hotbarElement = document.createElement("div");
        hotbarElement.className = "hotbar-overlay";
        hotbarElement.setAttribute("aria-label", "Player hotbar");
        super(hotbarElement);

        this.selectedBlockLabel = document.createElement("div");
        this.selectedBlockLabel.className = "hotbar-selected-block hidden";

        this.slots = [];
        this.icons = [];
        this.numberBadges = [];

        for (let index = 0; index < slotCount; index += 1) {
            const slot = document.createElement("div");
            slot.className = "hotbar-slot";
            slot.setAttribute("role", "listitem");

            const numberBadge = document.createElement("span");
            numberBadge.className = "hotbar-slot-number";
            numberBadge.textContent = String(index + 1);

            const icon = document.createElement("span");
            icon.className = "hotbar-icon hotbar-icon-empty";
            icon.setAttribute("aria-hidden", "true");

            slot.append(icon, numberBadge);

            this.slots.push(slot);
            this.icons.push(icon);
            this.numberBadges.push(numberBadge);
        }

        this.htmlElement.setAttribute("role", "list");
        this.htmlElement.replaceChildren(
            this.selectedBlockLabel,
            ...this.slots,
        );
    }

    render(snapshot: HotbarSnapshot): void {
        const activeItem = snapshot.slots[snapshot.activeSlotIndex];
        if (activeItem) {
            this.selectedBlockLabel.textContent = activeItem.label;
            this.selectedBlockLabel.classList.remove("hidden");
        } else {
            this.selectedBlockLabel.textContent = "";
            this.selectedBlockLabel.classList.add("hidden");
        }

        snapshot.slots.forEach((item, index) => {
            this.renderSlot(index, item, index === snapshot.activeSlotIndex);
        });
    }

    private renderSlot(
        index: number,
        item: HotbarItem | null,
        isActive: boolean,
    ): void {
        const slot = this.slots[index];
        const icon = this.icons[index];

        slot.classList.toggle("hotbar-slot-active", isActive);

        if (!item) {
            icon.classList.add("hotbar-icon-empty");
            icon.style.backgroundImage = "";
            icon.style.backgroundPosition = "";
            icon.style.backgroundSize = "";
            slot.title = `Slot ${index + 1}`;
            slot.setAttribute("aria-label", `Slot ${index + 1}, empty`);
            return;
        }

        icon.classList.remove("hotbar-icon-empty");
        icon.style.backgroundImage = `url(${item.textureSheetUrl})`;
        icon.style.backgroundPosition = item.backgroundPosition;
        icon.style.backgroundSize = item.backgroundSize;
        slot.title = item.label;
        slot.setAttribute(
            "aria-label",
            `Slot ${index + 1}, ${item.label}${isActive ? ", selected" : ""}`,
        );
    }
}
