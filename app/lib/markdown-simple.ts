export interface MarkdownSection {
  title: string;
  content: string;
  level: number;
  id: string;
}

// コンポーネント間で共有するセクションアイテムの型定義
export interface SectionItem {
  id: string;
  title: string;
  content: string;
  level: number;
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

// 基本的なMarkdown記法をHTMLに変換する関数
function convertBasicMarkdown(content: string): string {
  return (
    content
      // 太字 **text** → <strong>text</strong>
      .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold">$1</strong>')
      // イタリック *text* → <em>text</em>
      .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em class="italic">$1</em>')
      // インラインコード `code` → <code>code</code> (技術バッジスタイル)
      .replace(
        /`([^`]+)`/g,
        '<code class="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200 shadow-sm hover:bg-blue-200 transition-colors duration-200">$1</code>'
      )
  );
}

// テーブル記法を検出してHTMLテーブルに変換する関数
function convertTableToHtml(content: string): string {
  const lines = content.trim().split("\n");
  let htmlContent = "";
  let i = 0;

  while (i < lines.length) {
    const currentLine = lines[i].trim();

    // 水平線をチェック（---のみの行）
    if (currentLine === "---") {
      htmlContent += '<hr class="my-6 border-t border-gray-200">';
      i++;
      continue;
    }

    // 行の先頭が`- `で始まる場合（箇条書き）
    if (currentLine.startsWith("- ")) {
      const listContent = currentLine.substring(2); // "- "を削除
      // リスト項目内のMarkdownリンクをHTMLリンクに変換
      let processedListContent = listContent.replace(
        /\[([^\]]+)\]\(([^)]+)\)/g,
        '<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'
      );
      // 基本的なMarkdown記法も変換
      processedListContent = convertBasicMarkdown(processedListContent);
      htmlContent += `<li class="ml-4 mb-2 flex items-start"><span class="mr-2 text-blue-500">•</span><span>${processedListContent}</span></li>`;
      i++;
      continue;
    }

    // テーブル行を検出（| で区切られている）
    if (
      currentLine.includes("|") &&
      lines[i + 1] &&
      lines[i + 1].includes("---")
    ) {
      // テーブルの開始を検出
      const headerRow = currentLine
        .split("|")
        .map((cell) => cell.trim())
        .filter((cell) => cell);
      const separatorRow = lines[i + 1];

      if (separatorRow.includes("---")) {
        // テーブル開始
        htmlContent +=
          '<div class="overflow-x-auto my-4"><table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm"><thead class="bg-gray-50"><tr>';

        // ヘッダー行を追加
        headerRow.forEach((header) => {
          // ヘッダー内のMarkdownリンクをHTMLリンクに変換
          let processedHeader = header.replace(
            /\[([^\]]+)\]\(([^)]+)\)/g,
            '<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'
          );
          // 基本的なMarkdown記法も変換
          processedHeader = convertBasicMarkdown(processedHeader);
          htmlContent += `<th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">${processedHeader}</th>`;
        });

        htmlContent += '</tr></thead><tbody class="divide-y divide-gray-200">';

        // セパレーター行をスキップ
        i += 2;

        // データ行を処理
        while (i < lines.length && lines[i].trim().includes("|")) {
          const dataRow = lines[i]
            .trim()
            .split("|")
            .map((cell) => cell.trim())
            .filter((cell) => cell);
          if (dataRow.length > 0) {
            htmlContent += '<tr class="hover:bg-gray-50">';
            dataRow.forEach((cell) => {
              // セル内のMarkdownリンクをHTMLリンクに変換
              let processedCell = cell.replace(
                /\[([^\]]+)\]\(([^)]+)\)/g,
                '<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'
              );
              // 基本的なMarkdown記法も変換
              processedCell = convertBasicMarkdown(processedCell);
              htmlContent += `<td class="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">${processedCell}</td>`;
            });
            htmlContent += "</tr>";
          }
          i++;
        }

        htmlContent += "</tbody></table></div>";
        i--; // 次のループで正しく進むように調整
      } else {
        // 通常の行として処理
        let processedLine = currentLine.replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'
        );
        processedLine = convertBasicMarkdown(processedLine);
        htmlContent += processedLine + "<br>";
      }
    } else {
      // 通常の行として処理
      if (currentLine) {
        let processedLine = currentLine.replace(
          /\[([^\]]+)\]\(([^)]+)\)/g,
          '<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'
        );
        processedLine = convertBasicMarkdown(processedLine);
        htmlContent += processedLine + "<br>";
      } else {
        htmlContent += "<br>";
      }
    }

    i++;
  }

  return htmlContent;
}

// スライド共有サービスのリンクをiframe埋め込みに変換する関数
function convertSlideToEmbed(content: string): string {
  // スライド共有サービスのリンクパターンを検出:
  // "- [タイトル](https://speakerdeck.com/player/SLIDE_ID)"
  // "- [タイトル](https://www.docswell.com/slide/SLIDE_ID/embed#?)"
  const slidePattern =
    /- \[([^\]]+)\]\((https:\/\/(?:speakerdeck\.com\/player\/|www\.docswell\.com\/slide\/[^/]+\/embed?)[^)]+)\)/g;

  return content.replace(slidePattern, (match, title, url) => {
    let cleanTitle = title;
    let className = "";

    // SpeakerDeckかDocswellかを判定してタイトルクリーンアップとクラス名を決定
    if (url.includes("speakerdeck.com")) {
      cleanTitle = title.replace(/\s*\\?\s*-\s*Speaker\s*Deck\s*$/i, "");
      className = "speakerdeck-iframe";
    } else if (url.includes("docswell.com")) {
      cleanTitle = title.replace(/\s*\|\s*ドクセル\s*$/i, "");
      className = "docswell-iframe";
    }

    return `<iframe class="${className}" frameborder="0" src="${url}" title="${cleanTitle}" allowfullscreen="true" style="border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px; width: 100%; height: auto; aspect-ratio: 560 / 315;" data-ratio="1.7777777777777777"></iframe>`;
  });
}

// ブログ記事リンクをはてなブログカードに変換する関数
function convertBlogURLToHatenaCard(content: string): string {
  // ブログ記事のリンクパターンを検出:
  // "- [タイトル](https://dev.classmethod.jp/articles/...)"
  // "- [タイトル](https://qiita.com/...)" (投稿以外のページを除外)
  // "- [タイトル](https://zenn.dev/.../articles/...)" (記事のみ)
  const blogPattern =
    /- \[([^\]]+)\]\((https:\/\/(?:dev\.classmethod\.jp\/articles\/[^)]+|qiita\.com\/[^\/]+\/items\/[^)]+|zenn\.dev\/[^\/]+\/articles\/[^)]+))\)/g;

  return content.replace(blogPattern, (match, title, url) => {
    return `<iframe class="hatenablogcard" style="width:100%;height:155px;max-width:680px;" title="${title}" src="https://hatenablog-parts.com/embed?url=${encodeURIComponent(
      url
    )}" width="300" height="150" frameborder="0" scrolling="no"></iframe>`;
  });
}

export function renderMarkdownContent(content: string): string {
  if (!content.trim()) return "";

  // スライド共有サービスをiframe埋め込みに変換
  let processedContent = convertSlideToEmbed(content);

  // ブログ記事をはてなブログカードに変換
  processedContent = convertBlogURLToHatenaCard(processedContent);

  // 基本的なMarkdown記法を変換
  processedContent = convertBasicMarkdown(processedContent);

  return convertTableToHtml(processedContent);
}
