import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig({
    base: "/thr33craft",
    plugins: [tsconfigPaths()],
    build: {
        chunkSizeWarningLimit: 5000,
    },
});
