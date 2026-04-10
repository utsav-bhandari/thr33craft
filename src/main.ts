// FOR NOW JUST IMPORT HELPER AT TOP TO SEE LOADING SCREEN, CAN REFACTOR LATER
import { loadingScreenMessage, htmlSetup } from "@utils/helper";
import {
    gameParams,
    SCENE_INIT_CONFIG,
    SYSTEM_INIT_CONFIG,
} from "@utils/config";
import { initScene } from "@/init/scene";
import { initSystem } from "@/init/system";
import { initWorldgen } from "@/init/worldgen";
import { debug } from "@utils/logger";

/**
 * Bootstraps the application by initializing the scene, system, and world generation, and starts the animation loop for rendering the scene. This function is responsible for setting up the core components of the application and ensuring that everything is ready for the game to run smoothly.
 */
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
    renderer.setAnimationLoop((prevTime) => {
        system.animate(prevTime, renderer, scene, camera);
    });
    debug("Render loop started");

    htmlSetup(camera, renderer);
    initWorldgen({ scene, system });
}

await bootstrap();
