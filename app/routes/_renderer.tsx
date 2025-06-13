import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, Script } from 'honox/server'
import { CONFIG } from '../../config'

export default jsxRenderer(({ children }) => {
  // 環境に応じてCSSファイルのパスを設定
  const isDev = import.meta.env.DEV

  // CSSファイルのパスを環境に応じて設定
  let cssPath: string

  if (process.env.GITHUB_PAGES) {
    // GitHub Pages本番環境
    cssPath = `/${CONFIG.REPOSITORY_NAME}/static/style.css`
  } else if (isDev) {
    // 開発環境（localhost:5173）
    cssPath = '/app/style.css'
  } else {
    // Viteプレビューサーバー（localhost:4173）環境、その他の環境
    cssPath = '/static/style.css'
  }

  return (
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
        <link rel="stylesheet" href={cssPath} />
        <Script src="/app/client.ts" async />
      </head>
      <body>{children}</body>
    </html>
  )
})
