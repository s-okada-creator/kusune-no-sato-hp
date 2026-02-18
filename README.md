# 楠根の里 - 高齢者介護施設ウェブサイト

## 概要
大阪府寝屋川市にある高齢者向け介護施設「楠根の里」のウェブサイトです。

## 技術スタック
- Next.js 15
- React 19
- TypeScript
- Tailwind CSS
- Vercel (デプロイ)

## 機能
- レスポンシブデザイン
- お問い合わせフォーム（メール送信機能）
- 定款表示ページ
- 画像カルーセル
- アクセシビリティ対応

## セットアップ

### 1. 依存関係のインストール
```bash
pnpm install
```

### 2. 開発サーバーの起動
```bash
pnpm dev
```

## Vercelでのデプロイ

### 環境変数の設定

Vercelのダッシュボードで以下の環境変数を設定してください：

#### 推奨: Resendを使用する場合
```
RESEND_API_KEY=re_xxxxxxxxxxxxx
RESEND_FROM_EMAIL=office@cosmos-welfare.net
```

#### SendGridを使用する場合
```
SENDGRID_API_KEY=SG.xxxxxxxxxxxxx
SENDGRID_FROM_EMAIL=office@cosmos-welfare.net
```

#### SMTPを使用する場合
```
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_USER=office@cosmos-welfare.net
SMTP_PASS=your_app_password
```

### メール送信サービスの選択

1. **Resend（推奨）**
   - 最も簡単で確実
   - 月10,000通まで無料
   - 設定: https://resend.com

2. **SendGrid**
   - 大手サービス、高信頼性
   - 月100通まで無料
   - 設定: https://sendgrid.com

3. **SMTP**
   - Gmailやその他のSMTPサーバーを使用
   - アプリパスワードが必要

### デプロイ手順

1. GitHubにリポジトリをプッシュ
2. Vercelにプロジェクトをインポート
3. 環境変数を設定
4. デプロイ

## お問い合わせフォーム

お問い合わせフォームは `office@cosmos-welfare.net` にメールが送信されます。

フォームの送信先は `/api/contact` エンドポイントで処理され、設定された環境変数に基づいてメール送信サービスが選択されます。

## ライセンス

このプロジェクトは私的使用のためのものです。
