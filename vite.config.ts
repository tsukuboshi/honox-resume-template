import build from "@hono/vite-build/cloudflare-workers";
import ssg from "@hono/vite-ssg";
import tailwindcss from "@tailwindcss/vite";
import honox from "honox/vite";
import { defineConfig } from "vite";

const entry = "./app/server.ts";

export default defineConfig(({ mode }) => ({
  base: mode === "production" ? "/honox-resume/" : "",
  plugins: [honox(), tailwindcss(), build(), ssg({ entry })],
  server: {
    port: 5173,
    strictPort: true,
  },
}));
