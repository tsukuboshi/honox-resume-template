import type { MarkdownSection } from "./types";

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
        '<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'
      );

      currentSection = {
        title,
        content: "",
        level,
        id: `section-${++sectionCounter}`,
      };
    } else if (currentSection) {
      // コンテンツを現在のセクションに追加
      currentSection.content += line + "\n";
    } else {
      // 最初のヘッディング前のコンテンツ
      if (sections.length === 0) {
        currentSection = {
          title: "",
          content: line + "\n",
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
