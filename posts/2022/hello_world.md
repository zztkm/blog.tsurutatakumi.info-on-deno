---
title: Hello world!
publish_date: 2022-08-19
---

このブログは自分の学習記録を残すために deno を用いて再作成したものです([以前のブログ](https://blog-tsurutatakumi-info.pages.dev/))。

以下のような構成で作られています。

- [Deno - A modern runtime for JavaScript and TypeScript](https://deno.land/)
- [Deno Blog](https://github.com/denoland/deno_blog)
- [Deno Deploy](https://deno.com/deploy)
- [Cloudflare DNS](https://www.cloudflare.com/ja-jp/dns/)

まずは Deno Blog の README の通りに実装してみて GA の設定とカスタムドメインの設定を行うところまでは完了しました。

Cloudflare DNS を用いたカスタムドメインの設定については一瞬わからんなと思いましたがやってみれば簡単でした。手順を以下に残しておきます。

1. Deno Deploy の Domains に 使いたいカスタムドメイン名を入力する
    - 例: blog.tsurutatakumi.info
    - https://deno.com/deploy/docs/projects#domains
1. `Needs setup` バッジが表示されるのでクリック
1. 表示されたDNSレコード設定内容を Cloudflare DNS のレコードに追加する
    - このとき、プロキシステータスをオフにする
1. Deno Deploy 側で `Validated` クリック
1. あとはお好みで