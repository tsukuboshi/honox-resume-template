import { convertAccountLinksToShieldsBadges } from "@/app/lib/markdown/badge-converters";
import {
	convertBasicMarkdown,
	convertTableToHtml,
} from "@/app/lib/markdown/basic-converters";
import {
	convertBlogURLToHatenaCard,
	convertSlideToEmbed,
	convertYouTubeEmbedToIframe,
} from "@/app/lib/markdown/embed-converters";
import type { MarkdownSection } from "@/types";

export function renderMarkdownContent(
	content: string,
	sectionTitle?: string,
): string {
	if (!content.trim()) return "";

	// 動画リンクをYouTube埋め込みに変換
	let processedContent = convertYouTubeEmbedToIframe(content);

	// スライド共有サービスをiframe埋め込みに変換
	processedContent = convertSlideToEmbed(processedContent);

	// ブログ記事をはてなブログカードに変換
	processedContent = convertBlogURLToHatenaCard(processedContent);

	// アカウントリンクをshields.ioバッジに変換（URLパターン判定）
	processedContent = convertAccountLinksToShieldsBadges(
		processedContent,
		sectionTitle,
	);

	// 先にブロック要素（コードブロック、テーブル等）を処理
	processedContent = convertTableToHtml(processedContent);

	// その後にインライン要素（太字、イタリック等）を処理
	return convertBasicMarkdown(processedContent);
}

export function parseMarkdownSimple(markdown: string): MarkdownSection[] {
	const lines = markdown.split("\n");
	const sections: MarkdownSection[] = [];
	let currentSection: MarkdownSection | null = null;
	let sectionCounter = 0;

	for (const line of lines) {
		const headingMatch = line.match(/^(#+)\s+(.+)/);

		if (headingMatch) {
			// 現在のセクションがあれば配列に追加
			if (currentSection) {
				sections.push(currentSection);
			}

			// 新しいセクションを作成
			const level = headingMatch[1].length;
			let title = headingMatch[2];

			// タイトル内のリンクマークダウンをHTMLに変換
			title = title.replace(
				/\[([^\]]+)\]\(([^)]+)\)/g,
				'<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>',
			);

			currentSection = {
				title,
				content: "",
				level,
				id: `section-${++sectionCounter}`,
			};
		} else if (currentSection) {
			// コンテンツを現在のセクションに追加
			currentSection.content += `${line}\n`;
		} else {
			// 最初のヘッディング前のコンテンツ
			if (sections.length === 0) {
				currentSection = {
					title: "",
					content: `${line}\n`,
					level: 0,
					id: "intro",
				};
			}
		}
	}

	// 最後のセクションを追加
	if (currentSection) {
		sections.push(currentSection);
	}

	return sections;
}
