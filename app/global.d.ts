import type {} from "hono";

declare module "hono" {
  interface Env {
    Variables: {};
    Bindings: {};
  }
}

// Viteのdefineで定義されるグローバル変数の型定義
declare global {
  const __BASE_PATH__: string;
}
