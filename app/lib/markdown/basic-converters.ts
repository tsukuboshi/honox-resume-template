// HTML文字列定数
const INLINE_CODE_CLASSES =
  "inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 text-blue-800 border border-blue-200 shadow-sm hover:bg-blue-200 transition-colors duration-200";
const NUMBERED_LIST_REGEX = /^\d+\.\s/;

// HTMLエスケープ処理
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

// リスト項目のHTML生成
function createListItem(content: string, marker: string): string {
  return `<li class="ml-4 mb-2 flex items-start"><span class="mr-2 text-blue-500">${marker}</span><span>${processContent(
    content
  )}</span></li>`;
}

export function convertBasicMarkdown(content: string): string {
  return (
    content
      // 太字 **text** → <strong>text</strong>
      .replace(/\*\*([^*]+)\*\*/g, '<strong class="font-bold">$1</strong>')
      // イタリック *text* → <em>text</em>
      .replace(/(?<!\*)\*([^*]+)\*(?!\*)/g, '<em class="italic">$1</em>')
      // インラインコード `code` → <code>code</code>
      .replace(/`([^`]+)`/g, `<code class="${INLINE_CODE_CLASSES}">$1</code>`)
  );
}

// 共通のコンテンツ処理関数（リンク変換 + 基本記法変換）
function processContent(content: string): string {
  return convertBasicMarkdown(
    content.replace(
      /\[([^\]]+)\]\(([^)]+)\)/g,
      '<a href="$2" class="text-blue-600 hover:underline" target="_blank" rel="noopener">$1</a>'
    )
  );
}

export function convertTableToHtml(content: string): string {
  const lines = content.trim().split("\n");
  let htmlContent = "";
  let i = 0;

  while (i < lines.length) {
    const currentLine = lines[i].trim();

    // 水平線
    if (currentLine === "---") {
      htmlContent += '<hr class="my-6 border-t border-gray-200">';
      i++;
      continue;
    }

    // コードブロック
    if (currentLine.startsWith("```")) {
      let codeContent = "";
      i++;

      while (i < lines.length) {
        const line = lines[i];
        if (line.trim() === "```" || line.trim().startsWith("```")) break;
        codeContent += line + "\n";
        i++;
      }

      const escapedCode = escapeHtml(codeContent.trim());
      htmlContent += `<div class="my-6 bg-white border border-gray-200 rounded-lg shadow-sm overflow-hidden"><pre class="p-4 overflow-x-auto bg-gray-50"><code class="text-sm text-gray-800 font-mono leading-6 whitespace-pre-wrap">${escapedCode}</code></pre></div>`;

      if (i < lines.length) i++;
      continue;
    }

    // 引用ブロック
    if (currentLine.startsWith("> ")) {
      let quoteContent = "";
      while (i < lines.length && lines[i].trim().startsWith("> ")) {
        quoteContent += lines[i].trim().substring(2) + " ";
        i++;
      }
      htmlContent += `<blockquote class="my-4 pl-4 border-l-4 border-blue-500 bg-blue-50 py-3 pr-4 rounded-r-lg"><p class="text-gray-700 italic">${processContent(
        quoteContent.trim()
      )}</p></blockquote>`;
      continue;
    }

    // 番号付きリスト
    if (NUMBERED_LIST_REGEX.test(currentLine)) {
      let listNumber = 1;
      while (i < lines.length && NUMBERED_LIST_REGEX.test(lines[i].trim())) {
        const listContent = lines[i].trim().replace(NUMBERED_LIST_REGEX, "");
        htmlContent += createListItem(listContent, `${listNumber}.`);
        listNumber++;
        i++;
      }
      continue;
    }

    // 箇条書きリスト
    if (currentLine.startsWith("- ")) {
      const listContent = currentLine.substring(2);
      htmlContent += createListItem(listContent, "•");
      i++;
      continue;
    }

    // テーブル
    if (currentLine.includes("|") && lines[i + 1]?.includes("---")) {
      const headerRow = currentLine
        .split("|")
        .map((cell) => cell.trim())
        .filter((cell) => cell);

      if (lines[i + 1].includes("---")) {
        htmlContent +=
          '<div class="overflow-x-auto my-4"><table class="min-w-full bg-white border border-gray-200 rounded-lg shadow-sm"><thead class="bg-gray-50"><tr>';

        // ヘッダー行
        headerRow.forEach((header) => {
          htmlContent += `<th class="px-4 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider border-b border-gray-200">${processContent(
            header
          )}</th>`;
        });

        htmlContent += '</tr></thead><tbody class="divide-y divide-gray-200">';
        i += 2;

        // データ行
        while (i < lines.length && lines[i].trim().includes("|")) {
          const dataRow = lines[i]
            .trim()
            .split("|")
            .map((cell) => cell.trim())
            .filter((cell) => cell);
          if (dataRow.length > 0) {
            htmlContent += '<tr class="hover:bg-gray-50">';
            dataRow.forEach((cell) => {
              htmlContent += `<td class="px-4 py-3 text-sm text-gray-900 border-b border-gray-200">${processContent(
                cell
              )}</td>`;
            });
            htmlContent += "</tr>";
          }
          i++;
        }
        htmlContent += "</tbody></table></div>";
        continue;
      }
    }

    // 通常の行
    if (currentLine) {
      htmlContent += processContent(currentLine) + "<br>";
    } else {
      htmlContent += "<br>";
    }
    i++;
  }

  return htmlContent;
}
