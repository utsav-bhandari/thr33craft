import { gameParams, SCENE_INIT_CONFIG, SYSTEM_INIT_CONFIG } from "@/config";
import { htmlSetup } from "@/helper";
import { initScene } from "@/init/scene";
import { initSystem } from "@/init/system";
import { initWorldgen } from "@/init/worldgen";

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
