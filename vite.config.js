import { defineConfig } from "vite";

export default defineConfig({
    base: "",
    build: {
        outDir: "dist",
        assetsDir: "assets",
        cssCodeSplit: true,
        minify: "terser",
    },
});  