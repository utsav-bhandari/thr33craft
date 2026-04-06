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

    /** Registers an event handler for the specified event name. Returns a function to unregister the handler. */
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

    /** Unregisters an event handler for the specified event name. */
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

    /** Emits a custom event with the specified name and optional detail data. Returns true if the event was not canceled, false otherwise. */
    emit(eventName: string, detail?: unknown): boolean {
        return this.events.dispatchEvent(
            new CustomEvent(eventName, { detail }),
        );
    }
}
