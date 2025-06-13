import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, Script } from 'honox/server'
import { CONFIG } from '../../config'

export default jsxRenderer(({ children }) => {
  // 環境に応じてCSSファイルのパスを設定
  const isDev = import.meta.env.DEV
  const baseUrl = import.meta.env.BASE_URL || ''

  // CSSファイルのパスを環境に応じて設定
  let cssPath: string

  if (isDev) {
    // 開発環境
    cssPath = '/app/style.css'
  } else if (baseUrl === CONFIG.BASE_PATH) {
    // GitHub Pages本番環境（baseUrlがCONFIG.BASE_PATHと一致する場合）
    cssPath = `${CONFIG.BASE_PATH}static/style.css`
  } else {
    // Viteプレビューサーバーやその他の環境
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
