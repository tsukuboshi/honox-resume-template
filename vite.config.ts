import build from "@hono/vite-build/cloudflare-workers";
import ssg from "@hono/vite-ssg";
import tailwindcss from "@tailwindcss/vite";
import honox from "honox/vite";
import { defineConfig } from "vite";

const entry = "./app/server.ts";
const repositoryName = "honox-resume";

export default defineConfig(({ mode, command }) => ({
  base: process.env.GITHUB_PAGES ? `/${repositoryName}/` : "",
  plugins: [
    honox({
      client: {
        input: ["/app/style.css"],
      },
    }),
    tailwindcss(),
    build(),
    ssg({ entry }),
  ],
  server: {
    port: 5173,
    strictPort: true,
  },
  preview: {
    port: 4173,
    strictPort: true,
  },
}));
