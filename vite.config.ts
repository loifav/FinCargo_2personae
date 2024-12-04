import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@assets": fileURLToPath(new URL("./src/assets", import.meta.url)),
      "@components": fileURLToPath(
        new URL("./src/components", import.meta.url)
      ),
      "@contexts": fileURLToPath(new URL("./src/contexts", import.meta.url)),
      "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
      // "@stores": fileURLToPath(new URL("./src/stores", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@modules": fileURLToPath(new URL("./src/modules", import.meta.url)),
      // "@models": fileURLToPath(new URL("./src/models", import.meta.url)),
      "@mokes": fileURLToPath(new URL("./src/mocks", import.meta.url)),
    },
    extensions: [".js", ".jsx", ".ts", ".tsx"],
  },
  plugins: [react()],
  server: {
    host: "localhost",
    port: 3000,
    strictPort: true,
    open: true,
    proxy: {
      "/api": {
        target: "https://fastapi-app-180162974123.europe-west6.run.app",
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/api/, ""),
      },
    },
  },
});
