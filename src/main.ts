// Initializes global HTML hooks and loading UI before bootstrapping.
import { loadingScreenMessage, htmlSetup } from "@/utils/helper";
import {
    gameParams,
    SCENE_INIT_CONFIG,
    SYSTEM_INIT_CONFIG,
} from "@/utils/config";
import { initScene } from "@/init/scene";
import { initSystem } from "@/init/system";
import { debug } from "@/utils/logger";

/** Initializes scene/system state, starts the render loop, and wires global UI hooks. */
async function bootstrap(): Promise<void> {
    debug("Bootstrapping game...");

    const { scene, renderer, camera, pointerControls } =
        initScene(SCENE_INIT_CONFIG);
    debug("Scene initialized", SCENE_INIT_CONFIG);

    const { system } = await initSystem({
        scene,
        camera,
        pointerControls,
        gameParams,
        options: SYSTEM_INIT_CONFIG,
    });
    debug("System initialized", { system });

    loadingScreenMessage.remove();

    globalThis.system = system;
    globalThis.scene = scene;

    renderer.setAnimationLoop((prevTime) => {
        system.animate(prevTime, renderer, scene, camera);
    });
    debug("Render loop started");

    htmlSetup(camera, renderer);
}

await bootstrap();
