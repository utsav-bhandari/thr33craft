import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

// @ts-ignore
import { resolve } from "node:path";

export default defineConfig({
    plugins: [tsconfigPaths()],
    build: {
        chunkSizeWarningLimit: 5000,
        rollupOptions: {
            input: {
                // @ts-ignore
                main: resolve(__dirname, "index.html"),
                // @ts-ignore
                landing: resolve(__dirname, "landing.html"),
            },
        },
    },
    appType: "mpa",
});
