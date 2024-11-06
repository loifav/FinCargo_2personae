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
      "@layouts": fileURLToPath(new URL("./src/layouts", import.meta.url)),
      // "@stores": fileURLToPath(new URL("./src/stores", import.meta.url)),
      "@utils": fileURLToPath(new URL("./src/utils", import.meta.url)),
      "@modules": fileURLToPath(new URL("./src/modules", import.meta.url)),
      // "@models": fileURLToPath(new URL("./src/models", import.meta.url)),
      "@mokes": fileURLToPath(new URL("./src/mocks", import.meta.url)),
    },
  },
  plugins: [react()],
});
