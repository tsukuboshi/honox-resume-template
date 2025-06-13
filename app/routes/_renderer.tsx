import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, Script } from 'honox/server'
import { CONFIG } from '../../config'

export default jsxRenderer(({ children }) => {
  // 環境に応じてCSSパスを設定
  const isDev = import.meta.env.DEV
  const isGitHubPages = process.env.GITHUB_PAGES

  // すべての環境でHonoXのLinkコンポーネントを使用
  // これにより、ハッシュ付きファイル名も自動的に解決される
  const faviconPath = isGitHubPages ? `/${CONFIG.REPOSITORY_NAME}/favicon.ico` : '/favicon.ico'

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href={faviconPath} />
        <Link href="/app/style.css" rel="stylesheet" />
        <Script src="/app/client.ts" async />
      </head>
      <body>{children}</body>
    </html>
  )
})
