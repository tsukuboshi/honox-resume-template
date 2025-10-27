# HonoX Resume Template

HonoXを使用した職務経歴書Webアプリケーションのテンプレートです。

## 機能

- **静的サイト生成**: Vite + HonoX を使用した高速で軽量なWebサイトを自動生成
- **Markdown管理**: `public/README.md`でテンプレート形式の職務経歴書をMarkdownとして管理・編集可能
- **階層別インタラクティブ表示**: Markdownの見出しレベル（H1-H4）に応じたセクション折り畳み機能
- **変換拡張機能**: 特定URLに応じてYouTube埋め込み、スライド埋め込み、はてなブログカード、shields.ioバッジの自動変換
- **マルチフォーマットダウンロード**: Markdown形式とPDF形式での職務経歴書ダウンロード

## 技術スタック

- **フレームワーク**: HonoX
- **ビルドツール**: Vite
- **スタイリング**: TailwindCSS
- **PDF生成**: md-to-pdf
- **サイト公開**: GitHub Pages

## デプロイ手順

以下手順で職務経歴書サイトを公開できます。  

1. `Use this Template`の`Create a new repository`をクリック
2. `Include all branches`にチェックを入れた上で、任意のリポジトリ名を入力しPublicリポジトリとして作成
3. mainブランチで`public/README.md`の内容を更新しコミット・プッシュすると、GitHub ActionsによりGitHub Pagesへの自動デプロイが開始される
4. GitHub Actionsのデプロイが成功すると、`https://<ユーザー名>.github.io/<リポジトリ名>`のURLより職務経歴書サイトにアクセス可能  

## ローカル検証手順

ローカル環境で検証したい場合は、以下の手順を実施してください。  

1. 事前に以下コマンドでパッケージをインストール

```bash
npm install
```

2. 以下コマンドでWebサイトをプレビュー表示可能

```bash
# HTML/CSS/JS生成
npm run build

# プレビューサーバーの起動
npm run preview
```

3. 以下コマンドでPDFファイルを生成可能

```bash
# PDF生成
npm run build:pdf

# 圧縮版PDF生成
npm run build:pdf:compact
```

## テンプレートリポジトリ追従手順

テンプレートリポジトリの更新をfork後も取り込みたい場合は、以下手順を実施してください。  

1. 事前にfork後リポジトリをクローンし移動した後、テンプレートリポジトリをリモートブランチとして追加

```bash
git clone <fork後のリポジトリURL>
cd <fork後のリポジトリ>
git remote add upstream https://github.com/tsukuboshi/honox-resume-template.git
```

2. テンプレートリポジトリが更新された際に、以下コマンドでfork後のリポジトリに更新後コミットを取り込み可能

```bash
git fetch upstream
git checkout main
git merge upstream/main
```

※fork後リポジトリで`public/README.md`以外のファイルを変更しコミットした後にこの手順を実施すると、コンフリクトが発生する恐れがあるためご注意ください。  
