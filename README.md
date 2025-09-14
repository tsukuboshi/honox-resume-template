# HonoX Resume Template

HonoXを使用した職務経歴書Webアプリケーションのテンプレートです。

## 特徴

- **HonoX**: Honoベースのフルスタックフレームワークを使用
- **静的サイト生成**: 高速/軽量/モダンなUIを持つWebサイトを自動生成
- **Markdown管理**: 職務経歴書をMarkdownで内容管理
- **PDF出力対応**: 職務経歴書をMarkdwon/PDFとしてダウンロード可能
- **インタラクティブ**: セクション表示/非表示の切り替え機能

## 技術スタック

- **フレームワーク**: HonoX
- **ビルドツール**: Vite
- **スタイリング**: TailwindCSS
- **PDF生成**: md-to-pdf
- **デプロイ**: GitHub Pages

## セットアップ

```bash
# パッケージのインストール
npm install

# HTML/CSS/JS生成
npm run build

# PDF生成
npm run build:pdf

# プレビューサーバーの起動
npm run preview
```

## 使い方

1. `public/README.md`に職務経歴書の内容を記載
2. 開発サーバーを起動してプレビュー確認
3. ビルドして静的サイトを生成
4. 必要に応じてPDFを生成

## デプロイ

mainブランチで`public/README.md`をコミットすると、GitHub Actionsの`.github/workflows/deploy.yml`が発火し、自動的にGitHub Pagesにデプロイされます。

## ディレクトリ構造

```text
├── app/                    # アプリケーションコード
│   ├── components/         # UIコンポーネント
│   ├── hooks/              # カスタムフック
│   ├── islands/            # インタラクティブコンポーネント
│   ├── lib/                # ユーティリティ
│   └── routes/             # ページルーティング
├── public/                 # 静的ファイル
│   └── README.md           # 職務経歴書コンテンツ
└── dist/                   # ビルド出力
```

## カスタマイズ

- `public/README.md`: 職務経歴書の内容
- `app/style.css`: スタイル調整
- `app/components/`: UIコンポーネントの修正
- `vite.config.ts`: ビルド設定
