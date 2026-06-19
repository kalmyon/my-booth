# My Booth

抽選販売機能付き創作向けECプラットフォーム

## 概要

my Boothは、創作物販売を想定したECプラットフォームです。

既存の創作系ECサイトで発生しやすい、

* 人気商品の瞬時売り切れ
* アクセス集中
* 購入機会の不公平

といった課題に対し、抽選販売機能による公平な購入体験を提供することを目的としています。

現在はMVP開発段階として、商品閲覧・商品作成機能を実装しています。

---

## 使用技術

### フロントエンド

* Next.js (App Router)
* React
* TypeScript
* Tailwind CSS

### バックエンド

* Next.js Server Components
* Supabase

### データベース

* PostgreSQL (Supabase)

### 通知

* react-hot-toast

### デプロイ予定

* Vercel

---

## 実装済み機能

### 商品一覧表示

トップページで商品一覧を取得・表示

#### 実装内容

* Supabaseから商品情報取得
* React Componentによる一覧表示
* Tailwind CSSによるカードUI

---

### 商品詳細表示

URL例

```text
/products/{id}
```

#### 実装内容

* Dynamic Route
* 単一商品取得
* 商品情報表示

---

### 商品作成

新規商品の登録

#### 入力項目

* 商品名
* 商品説明
* 価格

#### 実装内容

* React Form
* useStateによる状態管理
* Supabase INSERT
* 作成後トップページへ遷移

---

### 入力バリデーション

以下を検証

* 商品名未入力
* 商品説明未入力
* 価格が0以下

---

### ローディング表示

商品作成中は

```text
作成中...
```

を表示し、送信ボタンを無効化

---

### Toast通知

react-hot-toastを利用

#### 通知例

* 商品作成成功
* バリデーションエラー
* 商品作成失敗

---

## ディレクトリ構成

```text
project/
├── app/
│   ├── page.tsx
│   └── products/
│       ├── new/
│       │   └── page.tsx
│       └── [id]/
│           └── page.tsx
│
├── components/
│   └── ProductCard.tsx
│
├── lib/
│   ├── supabase.ts
│   └── supabase-client.ts
│
├── public/
│
├── .env.local
├── package.json
└── README.md
```

---

## データベース構成

### products

| Column      | Type    |
| ----------- | ------- |
| id          | UUID    |
| title       | text    |
| description | text    |
| price       | integer |

---

## 環境変数

`.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

リポジトリには含まれていません。

開発環境ごとに設定してください。

---

## セットアップ

### リポジトリ取得

```bash
git clone <repository-url>
```

### 依存関係インストール

```bash
npm install
```

### 環境変数設定

`.env.local`

```env
NEXT_PUBLIC_SUPABASE_URL=
NEXT_PUBLIC_SUPABASE_ANON_KEY=
```

### 開発サーバー起動

```bash
npm run dev
```

---

## 今後実装予定

### 認証機能

* Supabase Auth
* ログイン
* 会員登録

### 出品者機能

* 商品編集
* 商品削除

### 抽選販売機能

* 抽選応募
* 応募状況確認
* 抽選実行
* 当選結果表示

### その他

* お気に入り機能
* 検索機能
* Stripe決済
* メール通知

---

## 学習内容

本プロジェクトを通して以下を学習しています。

* React Component
* Props
* useState
* Form処理
* Dynamic Routing
* Supabase CRUD
* 非同期処理
* 入力バリデーション
* ローディング制御
* Toast通知
* TypeScriptによる型安全な実装

---

## 開発目的

* Next.js / React を用いたモダンWeb開発経験の獲得
* TypeScriptによる型安全な実装
* DB設計・認証・状態管理の学習
* 実サービスを想定した機能設計経験
* 抽選販売システムの設計・実装経験の獲得
