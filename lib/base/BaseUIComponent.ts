export class BaseUIComponent {
    htmlElement: HTMLElement;
    events: EventTarget;

    constructor(htmlElement: HTMLElement) {
        this.htmlElement = htmlElement;
        this.events = new EventTarget();
    }

    show(): void {
        this.htmlElement.classList.remove("hidden");
    }

    hide(): void {
        this.htmlElement.classList.add("hidden");
    }

    on(
        eventName: string,
        handler?: EventListenerOrEventListenerObject | null,
        options?: AddEventListenerOptions | boolean,
    ): () => void {
        if (typeof handler !== "function") {
            return () => {};
        }

        this.events.addEventListener(eventName, handler, options);

        return () => {
            this.events.removeEventListener(eventName, handler, options);
        };
    }

    off(
        eventName: string,
        handler?: EventListenerOrEventListenerObject | null,
        options?: EventListenerOptions | boolean,
    ): void {
        if (typeof handler !== "function") {
            return;
        }

        this.events.removeEventListener(eventName, handler, options);
    }

    emit(eventName: string, detail?: unknown): boolean {
        return this.events.dispatchEvent(
            new CustomEvent(eventName, { detail }),
        );
    }
}
