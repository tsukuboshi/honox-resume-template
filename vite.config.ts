import build from "@hono/vite-build/cloudflare-workers";
import ssg from "@hono/vite-ssg";
import tailwindcss from "@tailwindcss/vite";
import honox from "honox/vite";
import { defineConfig } from "vite";

const repositoryName = process.env.REPOSITORY_NAME;
const basePath = repositoryName ? `/${repositoryName}/` : "";

export default defineConfig(() => ({
  base: basePath,
  define: {
    __BASE_PATH__: JSON.stringify(basePath),
  },
  plugins: [
    honox({
      client: {
        input: ["/app/style.css"],
      },
    }),
    tailwindcss(),
    build(),
    ssg({
      entry: "./app/server.ts",
    }),
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
