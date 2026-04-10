import * as THREE from "three";

export const loadingScreenMessage = createLoadingScreenMessage();
document.body.appendChild(loadingScreenMessage);

export function htmlSetup(
    camera: THREE.PerspectiveCamera,
    renderer: THREE.WebGLRenderer,
): void {
    const init = (): void => {
        const width = window.innerWidth;
        const height = window.innerHeight;

        camera.aspect = width / height;
        camera.updateProjectionMatrix();

        renderer.setSize(width, height);
    };

    window.addEventListener("resize", debounce(init, 300));

    document.body.style.margin = "0";
    document.body.appendChild(renderer.domElement);

    init();
}

function debounce(callback: () => void, delay: number): () => void {
    let timer: number | undefined;

    return () => {
        if (timer !== undefined) {
            window.clearTimeout(timer);
        }

        timer = window.setTimeout(() => {
            callback();
        }, delay);
    };
}

function createLoadingScreenMessage(): HTMLElement {
    const message = document.createElement("div");
    message.classList.add("loading-world-message");
    message.classList.add("pixel-corners");
    message.textContent = "Please wait, Loading World...";
    return message;
}
