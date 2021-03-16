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

### 参考記事

[絶対につまづかないNext.jsのはじめかた](https://zenn.dev/1101hiroki_n/articles/6caa4ab7b71cc2b7f629)
