import type { PerspectiveCamera, WebGLRenderer } from "three";

export function htmlSetup(
    camera: PerspectiveCamera,
    renderer: WebGLRenderer,
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