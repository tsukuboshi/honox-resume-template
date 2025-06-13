import build from "@hono/vite-build/cloudflare-workers";
import ssg from "@hono/vite-ssg";
import tailwindcss from "@tailwindcss/vite";
import honox from "honox/vite";
import { defineConfig } from "vite";
import { CONFIG } from "./config";

const entry = "./app/server.ts";

export default defineConfig(({ mode, command }) => ({
  base: mode === "production" && command === "build" ? CONFIG.BASE_PATH : "",
  plugins: [honox(), tailwindcss(), build(), ssg({ entry })],
  server: {
    port: 5173,
    strictPort: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
}));
