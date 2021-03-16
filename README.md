## 環境構築

nextをインストール

```bash
$ npx create-next-app myblog
```

typescriptと型定義をインストール

```bash
$ yarn add -D typescript @types/node @types/react
```

tsconfig.jsonを作成

```bash
$ touch tsconfig.json
```

srcディレクトリーを作成する

```bash
$ mkdir src && mv pages src
```

サーバーを立てる

- サーバーを立てるとtsconfigの中身が生成されます。

```bash
$ yarn dev
```
