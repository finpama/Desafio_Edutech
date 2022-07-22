import { defineConfig } from "vite";

export default defineConfig({
    optimizeDeps: {
        exclude: ['./base.js']
    }
});