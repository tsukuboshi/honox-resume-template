export function convertSlideToEmbed(content: string): string {
  // スライド共有サービスのリンクパターンを検出:
  // "- [タイトル](https://speakerdeck.com/player/SLIDE_ID)"
  // "- [タイトル](https://www.docswell.com/slide/SLIDE_ID/embed?)"
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

// YouTube埋め込みリンクをiframeに変換する関数
export function convertYouTubeEmbedToIframe(content: string): string {
  const youtubePattern =
    /- \[([^\]]+)\]\((https:\/\/www\.youtube\.com\/embed\/[^\)]+)\)/g;
  const youtubeLinkPattern =
    /\[([^\]]+)\]\((https:\/\/www\.youtube\.com\/embed\/[^\)]+)\)/g;

  // SpeakerDeckと同じstyle
  const style =
    "width: 100%; height: auto; aspect-ratio: 560 / 315; border: 0px; background: padding-box padding-box rgba(0, 0, 0, 0.1); margin: 0px; padding: 0px; border-radius: 6px; box-shadow: rgba(0, 0, 0, 0.2) 0px 5px 40px;";

  let processed = content.replace(youtubePattern, (match, title, url) => {
    return `<iframe style="${style}" src="${url}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  });

  processed = processed.replace(youtubeLinkPattern, (match, title, url) => {
    return `<iframe style="${style}" src="${url}" title="${title}" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>`;
  });

  return processed;
}

// ブログ記事リンクをはてなブログカードに変換する関数
export function convertBlogURLToHatenaCard(content: string): string {
  // ブログ記事のリンクパターンを検出:
  // "- [タイトル](https://dev.classmethod.jp/articles/...)"
  // "- [タイトル](https://qiita.com/...)" (投稿以外のページを除外)
  // "- [タイトル](https://zenn.dev/.../articles/...)" (記事のみ)
  const blogPattern =
    /- \[([^\]]+)\]\((https:\/\/(?:dev\.classmethod\.jp\/articles\/[^)]+|qiita\.com\/[^\/]+\/items\/[^)]+|zenn\.dev\/[^\/]+\/articles\/[^)]+))\)/g;

  return content.replace(blogPattern, (match, title, url) => {
    return `<iframe class="hatenablogcard" style="width:100%;height:155px;" title="${title}" src="https://hatenablog-parts.com/embed?url=${encodeURIComponent(
      url
    )}" width="300" height="150" frameborder="0" scrolling="no"></iframe>`;
  });
}
