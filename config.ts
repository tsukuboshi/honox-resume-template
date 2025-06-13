/**
 * プロジェクト共通設定
 *
 * REPOSITORY_NAMEを変更する際は、以下のファイルも合わせて更新してください：
 * - wrangler.jsonc の "name" フィールド（必要に応じて）
 * - package.json の "name" フィールド（必要に応じて）
 */
export const CONFIG = {
  /**
   * GitHub Pagesのリポジトリ名（サブパス）
   * GitHub Pagesでデプロイする際のサブパスになります
   * 例: https://username.github.io/REPOSITORY_NAME/
   */
  REPOSITORY_NAME: "honox-resume",

  /**
   * GitHub Pagesのベースパス
   * 先頭と末尾にスラッシュが付いた形式
   */
  get BASE_PATH(): string {
    return `/${this.REPOSITORY_NAME}/`;
  },

  /**
   * 現在の環境がGitHub Pagesかどうかを判定
   */
  isGitHubPages(env: ImportMeta["env"]): boolean {
    return env.PROD && env.BASE_URL === this.BASE_PATH;
  },
};
