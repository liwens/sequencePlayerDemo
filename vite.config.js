import { defineConfig } from "vite";

export default defineConfig({
    base: "/dist/",
    build: {
        outDir: "dist",
        assetsDir: "assets",
        cssCodeSplit: true,
        minify: "terser",
    },
});  