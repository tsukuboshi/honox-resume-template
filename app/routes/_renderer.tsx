import { jsxRenderer } from 'hono/jsx-renderer'
import { Link, Script } from 'honox/server'
import { CONFIG } from '../../config'

export default jsxRenderer(({ children }) => {
  // 環境に応じてCSSファイルのパスを設定
  const isDev = import.meta.env.DEV
  // 本番ビルド時は常にGitHub Pages形式のパスを使用
  const isProduction = import.meta.env.PROD

  // CSSファイルのパスを環境に応じて設定
  const cssPath = isDev ? '/app/style.css' : isProduction ? `${CONFIG.BASE_PATH}static/style.css` : '/static/style.css'

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
