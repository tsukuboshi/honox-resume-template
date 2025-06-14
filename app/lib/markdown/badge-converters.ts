export function isAccountProfileUrl(url: string): boolean {
  const excludePatterns = [
    /github\.com\/[^\/]+\/[^\/]+/,
    /qiita\.com\/[^\/]+\/items/,
    /qiita\.com\/tags/,
    /zenn\.dev\/[^\/]+\/articles/,
    /zenn\.dev\/[^\/]+\/books/,
    /zenn\.dev\/topics/,
    /dev\.classmethod\.jp\/articles/,
    /speakerdeck\.com\/[^\/]+\/[^\/]+/,
    /x\.com\/[^\/]+\/status/,
    /x\.com\/search/,
    /docswell\.com\/slide/,
  ];

  if (excludePatterns.some((pattern) => pattern.test(url))) {
    return false;
  }

  const profilePatterns = [
    /https?:\/\/dev\.classmethod\.jp\/author\/[a-zA-Z0-9_-]+$/,
    /https?:\/\/github\.com\/[a-zA-Z0-9_-]+$/,
    /https?:\/\/zenn\.dev\/[a-zA-Z0-9_-]+$/,
    /https?:\/\/speakerdeck\.com\/[a-zA-Z0-9_-]+$/,
    /https?:\/\/x\.com\/[a-zA-Z0-9_-]+$/,
    /https?:\/\/qiita\.com\/[a-zA-Z0-9_-]+$/,
    /https?:\/\/www\.docswell\.com\/user\/[a-zA-Z0-9_-]+$/,
  ];

  return profilePatterns.some((pattern) => pattern.test(url));
}

export function hasAccountProfileUrls(content: string): boolean {
  const urlPattern = /\[([^\]]+)\]\(([^)]+)\)/g;
  let match;

  while ((match = urlPattern.exec(content)) !== null) {
    const url = match[2];
    if (isAccountProfileUrl(url)) {
      return true;
    }
  }

  return false;
}

export function convertAccountLinksToShieldsBadges(
  content: string,
  sectionTitle?: string
): string {
  if (!hasAccountProfileUrls(content)) {
    return content;
  }

  const serviceConfig = {
    "dev.classmethod.jp": {
      name: "DevelopersIO",
      logo: "amazonaws",
      color: "orange",
      usernameRegex: /dev\.classmethod\.jp\/author\/([^\/\s\)]+)/,
    },
    "github.com": {
      name: "GitHub",
      logo: "github",
      color: "black",
      usernameRegex: /github\.com\/([^\/\s\)]+)/,
    },
    "zenn.dev": {
      name: "Zenn",
      logo: "zenn",
      color: "blue",
      usernameRegex: /zenn\.dev\/([^\/\s\)]+)/,
    },
    "speakerdeck.com": {
      name: "Speaker--Deck",
      logo: "speakerdeck",
      color: "green",
      usernameRegex: /speakerdeck\.com\/([^\/\s\)]+)/,
    },
    "x.com": {
      name: "X",
      logo: "x",
      color: "black",
      usernameRegex: /x\.com\/([^\/\s\)]+)/,
    },
    "qiita.com": {
      name: "Qiita",
      logo: "qiita",
      color: "brightgreen",
      usernameRegex: /qiita\.com\/([^\/\s\)]+)/,
    },
    "www.docswell.com": {
      name: "Docswell",
      logo: "readthedocs",
      color: "blue",
      usernameRegex: /www\.docswell\.com\/user\/([^\/\s\)]+)/,
    },
  };

  let processedContent = content;

  Object.entries(serviceConfig).forEach(([domain, config]) => {
    const linkPattern = new RegExp(
      `\\[([^\\]]+)\\]\\(https?://${domain.replace(/\./g, "\\.")}[^\\)]*\\)`,
      "g"
    );

    processedContent = processedContent.replace(linkPattern, (match) => {
      try {
        const urlMatch = match.match(/\[([^\]]+)\]\(([^)]+)\)/);
        if (!urlMatch) return match;

        const originalUrl = urlMatch[2];

        if (!isAccountProfileUrl(originalUrl)) {
          return match;
        }

        const usernameMatch = match.match(config.usernameRegex);
        const username = usernameMatch ? usernameMatch[1] : "";

        if (username) {
          const badgeLabel = encodeURIComponent(`${config.name}-@${username}`);
          const logoParam = encodeURIComponent(config.logo);
          const colorParam = encodeURIComponent(config.color);
          const badgeUrl = `https://img.shields.io/badge/${badgeLabel}-${colorParam}?style=flat&logo=${logoParam}`;

          return `<a href="${originalUrl}" target="_blank" rel="noopener"><img src="${badgeUrl}" alt="${config.name}" /></a>`;
        } else {
          const badgeLabel = encodeURIComponent(config.name);
          const logoParam = encodeURIComponent(config.logo);
          const colorParam = encodeURIComponent(config.color);
          const badgeUrl = `https://img.shields.io/badge/${badgeLabel}-${colorParam}?style=flat&logo=${logoParam}`;

          return `<a href="${originalUrl}" target="_blank" rel="noopener"><img src="${badgeUrl}" alt="${config.name}" /></a>`;
        }
      } catch (error) {
        console.warn("Error converting account link:", error);
        return match;
      }
    });
  });

  return processedContent;
}
