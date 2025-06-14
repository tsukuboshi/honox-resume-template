// 型定義をエクスポート
export type { MarkdownSection, SectionItem } from "./types";

// 各モジュールの関数をエクスポート
export {
  convertAccountLinksToShieldsBadges,
  hasAccountProfileUrls,
  isAccountProfileUrl,
} from "./badge-converters";
export { convertBasicMarkdown, convertTableToHtml } from "./basic-converters";
export {
  convertBlogURLToHatenaCard,
  convertSlideToEmbed,
  convertYouTubeEmbedToIframe,
} from "./embed-converters";
export { parseMarkdownSimple } from "./parser";

// メイン関数をインポート
import { convertAccountLinksToShieldsBadges } from "./badge-converters";
import { convertBasicMarkdown, convertTableToHtml } from "./basic-converters";
import {
  convertBlogURLToHatenaCard,
  convertSlideToEmbed,
  convertYouTubeEmbedToIframe,
} from "./embed-converters";

export function renderMarkdownContent(
  content: string,
  sectionTitle?: string
): string {
  if (!content.trim()) return "";

  // 追加: YouTube埋め込み変換
  let processedContent = convertYouTubeEmbedToIframe(content);

  // スライド共有サービスをiframe埋め込みに変換
  processedContent = convertSlideToEmbed(processedContent);

  // ブログ記事をはてなブログカードに変換
  processedContent = convertBlogURLToHatenaCard(processedContent);

  // アカウントリンクをshields.ioバッジに変換（URLパターン判定）
  processedContent = convertAccountLinksToShieldsBadges(
    processedContent,
    sectionTitle
  );

  // 先にブロック要素（コードブロック、テーブル等）を処理
  processedContent = convertTableToHtml(processedContent);

  // その後にインライン要素（太字、イタリック等）を処理
  return convertBasicMarkdown(processedContent);
}
