---
title: WIP Web 初心者のための vss 概要
publish_date: 2022-12-12
tags:
    - "vss"
    - "web"
---

表題の通り、Web 初心者に向けて vss の概要説明を試みるドキュメントです。

わかりにくいところなどあればフィードバックください。

文中に出てきた用語については極力説明を行いますが、説明されていない事柄でわからない単語があれば
各自で検索してください。大抵は Wikipedia の説明を読めば今は十分です。

## vss とは

静的サイトジェネレーターです。

あなたの書いた Markdown ファイルを HTML に変換して静的な Web サイトを生成します。

## 静的サイトジェネレーターとは

Cloudflare の説明がわかりやすかったのでリンクを貼っておきます。

[静的サイトジェネレーターとは？ | Cloudflare](https://www.cloudflare.com/ja-jp/learning/performance/static-site-generator/)

### Markdown とは

簡単な構文のテキストから HTML を生成するための言語です。
実際の変換は以下のようになります (全てが以下のようになるわけではありません) 。

変換前の Markdown
```md
# vss

A static site generator

- [GitHub](https://github.com/vssio/vss)

## Pages

- [about page](./about.md)
- post
  - [first](./post/first.md)
```

変換後の HTML (見やすいように整形しています)
```html
<h1>vss</h1>
<p>A static site generator</p>
<ul>
    <li><a href="https://github.com/zztkm">GitHub</a></li>
</ul>
<h2>Pages</h2>
<ul>
    <li><a href="./about.html">about page</a></li>
    <li>post<ul>
            <li><a href="./post/first.html">first</a></li>
        </ul>
    </li>
</ul>
```

このようにちょっと複雑そうな HTML も Markdown であれば簡単に書くことができます。

この利点を活かして、vss では Markdown でコンテンツ (サイトの中身) を書いて、HTML に vss が変換するといった手法を採用しています。
(自分で HTML を書くことも可能です) 
