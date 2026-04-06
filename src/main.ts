import { gameParams, SCENE_INIT_CONFIG, SYSTEM_INIT_CONFIG } from "@/config.js";
import { htmlSetup } from "@/helper.js";
import { initScene } from "@/init/scene.js";
import { initSystem } from "@/init/system.js";
import { initWorldgen } from "@/init/worldgen.js";

async function bootstrap(): Promise<void> {
    const { scene, renderer, camera, pointerControls } =
        initScene(SCENE_INIT_CONFIG);

    const { system } = await initSystem({
        scene,
        camera,
        pointerControls,
        gameParams,
        options: SYSTEM_INIT_CONFIG,
    });

    globalThis.system = system;
    renderer.setAnimationLoop((prevTime) => {
        system.animate(prevTime, renderer, scene, camera);
    });

    htmlSetup(camera, renderer);
    initWorldgen({ scene, system });
}

await bootstrap();