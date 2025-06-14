※本ページは[tsukuboshi/honox-resume-template](https://github.com/tsukuboshi/honox-resume-template)を用いてデプロイした職務経歴書テンプレートのサンプルになります。自身の経歴に合わせてpublic/README.mdを編集してください。  

## 基本情報

### プロフィール

|項目|値|
|---|---|
|ハンドルネーム|つくぼし|
|最終学歴|早稲田大学 商学部卒|
|経験職種|ソリューションアーキテクト/バックエンドエンジニア/プロジェクトマネージャー|

### アカウント

- [DevelopersIO](https://dev.classmethod.jp/author/tsukuboshi)
- [Zenn](https://zenn.dev/tsukuboshi)
- [Qiita](https://qiita.com/kuraboshi)
- [Github](https://github.com/tsukuboshi)
- [SpeakerDeck](https://speakerdeck.com/tsukuboshi)
- [Docswell](https://www.docswell.com/user/tsukuboshi)
- [X](https://x.com/tsukuboshi0755)

## 業務スキル

### クラウドアーキテクチャ設計

```txt
現在は AWS を業務で一番用いています。  
モノリシック、静的ウェブサイトホスティング、マイクロサービス、CICD パイプライン、マルチアカウント、サーバレスといった様々なアーキテクチャの設計・構築経験があります。  
AWS アーキテクチャを構築するにあたり、CloudFormation、Terraform、CDK といった IaC の開発経験も多数あります。
```

## 技術スキル

実業務で使用した技術のみ列挙します。

### AWS

`IAM` `VPC` `ELB(ALB・NLB)` `EC2` `EFS` `RDS(MySQL・Aurora)` `ElastiCache(Redis)` `S3` `CloudFront` `Route 53` `ACM` `WAF` `ECS(Fargate)` `App Runner` `ECR` `API Gateway` `Lambda(Node.js・Python)` `DynamoDB` `Step Functions` `CodeCommit` `CodeBuild` `CodeDeploy` `CodePipeline` `SQS` `SNS` `Data Firehose` `EventBridge` `CloudWatch (Alarm・Logs)` `Security Hub` `GuardDuty` `Control Tower` `Organizations` `Identity Center` `Service Catalog` `DevOps Guru` `Bedrock` `Kendra`

## 保有称号

### 資格

|資格名|取得日|
|---|---|
|AWS DOP|2023/6/15|
|AWS SOA|2023/2/15|
|AWS SAP|2022/8/3|
|AWS DVA|2022/3/24|
|AWS SAA|2021/11/11|
|AWS CLF|2021/7/21|

## 経歴

### クラスメソッド株式会社（2022/3 - 2025/6）

主にソリューションアーキテクトとして、AWS アーキテクチャの/設計/構築を担当しました。

以下では参画したプロジェクトの内、主要なもののみを記載します。

#### AIチャットボット設計構築 （2024/9 - 2025/3)

**概要**

生成 AI を活用したチャットボットアプリを構築。

**担当**

1. プリセールス
2. 顧客折衝
3. システム設計
4. システム構築
5. システム運用保守

**業務内容**

1. 設計書作成
2. 構築作業
3. 動作確認試験

**使用技術**

- AWS サービス：`WAF` `DynamoDB` `Secrets Manager` `Lambda(Node.js)` `Bedrock` `Kendra` `S3`
- IaC： `CDK(Typescript)`

### 兼松エレクトロニクス株式会社（2019/4 - 2022/2)

インフラエンジニアとして、主にオンプレミスにおける Linux サーバの設計/構築を担当しました。  

以下では参画したプロジェクトの内、主要なもののみを記載します。

#### 社内コンテナ検証チーム活動 (2020/6 - 2022/1)

**概要**

DX 推進に関連した新ビジネスを確立するべく、コンテナ技術の検証を実施。自身はコンテナ検証/環境構築を担当

**担当**

1. コンテナ基盤 構築

**業務内容**

1. 検証
2. 構築作業

**使用技術**

- ミドルウェア： `Docker` `Kubernetes` `Openshift`

## 業務外活動

### 個人開発

以下では開発した自作リポジトリの内、主要なものを記載します。

|リポジトリ名|言語|概要|
|---|---|---|
|[dotfiles](https://github.com/tsukuboshi/dotfiles)|`Bash`|自身の PC セットアップ用の dotfiles|
|[sam-notify-aws-billing](https://github.com/tsukuboshi/sam-notify-aws-billing)|`SAM` `Python`|AWS 利用料金を通知するサーバレスシステムコード|
|[sam-ai-cloud-engineer](https://github.com/tsukuboshi/sam-ai-cloud-engineer)|`SAM` `Python`|Amazon Bedrock を活用し構成図を CloudFormation テンプレートとパラメータシートに変換するサーバレスシステムコード|

### ブログ投稿

以下では投稿したブログの内、主要なものを記載します。  

#### DevelopersIO

2022/3から2025/6までに、100本以上の記事を作成していました。代表的な記事は以下の通りです。

- [AWS入門ブログリレー2024〜Amazon Bedrock編〜](https://dev.classmethod.jp/articles/introduction-2024-aws-bedrock/)
- [CloudFormation一撃で作るAWS料金通知ツール(Email/Slack/LINE対応)](https://dev.classmethod.jp/articles/notify-aws-billing-for-cloudformaiton/)
- [Knowledge Bases for Amazon Bedrock (with OpenSearch Serverless\)をSAMで実装してみた](https://dev.classmethod.jp/articles/sam-knowledge-base-for-bedrock-with-oss/)
-

#### Zenn

2023/5から現在まで投稿している主要のブログサイトになります。代表的な記事は以下の通りです。

- [Macの環境をdotfilesでセットアップしてみた改](https://zenn.dev/tsukuboshi/articles/6e82aef942d9af)
- [Google Calenderの予定をTypeScriptを用いて色別で工数集計してみた](https://zenn.dev/tsukuboshi/articles/31c95d863d8896)
- [MCP Serverを呼び出すAIエージェントをMastra、Next.js、AWS CDKで実装してみた](https://zenn.dev/tsukuboshi/articles/nextjs-mastra-mcp-with-aws)

#### Qiita

以前学習のメモや技術の整理を目的に投稿していたブログサイトになります。代表的な記事は以下の通りです。

- [【備忘録】Kubernetesの仕組みを整理する #kubernetes - Qiita](https://qiita.com/kuraboshi/items/036ba1b5cf67cb8a6dcd)

### イベント登壇

以下では登壇したイベントの内、主要な資料及び動画を記載します。

#### [DevelopersIO 2023](https://event.classmethod.jp/developers-io/2023)：AWSとGitHubを用いたパターン別CI/CD構成解説

**資料**

- [AWSとGitHubを用いたパターン別CI/CD構成解説](https://speakerdeck.com/player/13ed26fb607a41d598f64b0b899dd0da)

**動画**

- [AWS基盤でのCI/CD構成を徹底解説！CodeシリーズとGitHubの使い分けも解消 - YouTube](https://www.youtube.com/embed/nJ-eEgfbjG8?si=CiEVatkJa5fNdYqC)
