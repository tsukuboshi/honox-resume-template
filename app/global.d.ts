import type {} from "hono";

declare module "hono" {
	interface Env {
		Variables: Record<string, never>;
		Bindings: Record<string, never>;
	}
}

// Viteのdefineで定義されるグローバル変数の型定義
declare global {
	const __BASE_PATH__: string;
}
