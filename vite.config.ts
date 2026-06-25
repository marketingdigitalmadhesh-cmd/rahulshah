import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { tanstackStart } from "@tanstack/react-start/plugin/vite";

import { cloudflare } from "@cloudflare/vite-plugin";

export default defineConfig({
  plugins: [tanstackStart(), react(), tailwindcss(), cloudflare({
    viteEnvironment: {
      name: "ssr"
    }
  })],
  resolve: {
    tsconfigPaths: true,
  },
});