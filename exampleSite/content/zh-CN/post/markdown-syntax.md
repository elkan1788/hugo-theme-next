+++
author = "Hugo Authors"
title = "Markdown语法手册"
date = "2019-03-11"
description = "Sample article showcasing basic Markdown syntax and formatting for HTML elements."
tags = [
    "markdown",
    "css",
    "html",
]
categories = [
    "themes",
    "syntax",
]
series = ["Themes Guide"]
aliases = ["migrate-from-jekyl"]
+++

本文提供了一个可以在 Hugo 内容文件中使用的基本Markdown语法示例，还展示了基本 HTML 元素在 Hugo 主题中是否使用 CSS 装饰。
<!--more-->

# 标题

下面的 HTML 代码`<h1>`—`<h6>` 元素表示六个级别的节标题。 
`<h1>`是最高的节级别，`<h6>`是最低的节级别。

# H1
## H2
### H3
#### H4
##### H5
###### H6

# 段落

Xerum, quo qui aut unt expliquam qui dolut labo. Aque venitatiusda cum, voluptionse latur sitiae dolessi aut parist aut dollo enim qui voluptate ma dolestendit peritin re plis aut quas inctum laceat est volestemque commosa as cus endigna tectur, offic to cor sequas etum rerum idem sintibus eiur? Quianimin porecus evelectur, cum que nis nust voloribus ratem aut omnimi, sitatur? Quiatem. Nam, omnis sum am facea corem alique molestrunt et eos evelece arcillit ut aut eos eos nus, sin conecerem erum fuga. Ri oditatquam, ad quibus unda veliamenimin cusam et facea ipsamus es exerum sitate dolores editium rerore eost, temped molorro ratiae volorro te reribus dolorer sperchicium faceata tiustia prat.

伊塔图？厨房里有很多东西，我不知道他们喜欢吃什么，或者他们喜欢吃什么。

# 引用

blockquote元素表示从另一个来源引用的内容，可选的引用必须在`footer`或`cite`元素内，也可选的内嵌更改，如注释和缩写。

#### 引用没有归属

> Tiam, ad mint andaepu dandae nostion secatur sequo quae.
> **注意** 可以在块引用中使用 *Markdown* 语法。

#### 带归属的引用

> 不要通过分享记忆来交流，通过交流来分享记忆。<br>
> — <cite>罗布·派克[^1]</cite>

[^1]: 以上引文摘自Rob Pike在2015年11月18日Gopherfest上的[演讲](https://www.youtube.com/watch?v=PAAkCSZUG1c)。

# 表格

表不是Markdown核心规范的一部分，但是Hugo支持开箱即用。

   Name | Age
--------|------
    Bob | 27
  Alice | 23

#### 表格内使用Markdown语法

| Italics   | Bold     | Code   |
| --------  | -------- | ------ |
| *italics* | **bold** | `code` |

# 图像

```html
![图像描述](图像地址)
```

## 示例

![screenshot.png](//siteimgs.cn-sh2.ufileos.com/my-hugo-blog.png)

<svg role="img" with="24" height="24" fill="#4285F4" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Google Chrome</title><path d="M12 0C8.21 0 4.831 1.757 2.632 4.501l3.953 6.848A5.454 5.454 0 0 1 12 6.545h10.691A12 12 0 0 0 12 0zM1.931 5.47A11.943 11.943 0 0 0 0 12c0 6.012 4.42 10.991 10.189 11.864l3.953-6.847a5.45 5.45 0 0 1-6.865-2.29zm13.342 2.166a5.446 5.446 0 0 1 1.45 7.09l.002.001h-.002l-5.344 9.257c.206.01.413.016.621.016 6.627 0 12-5.373 12-12 0-1.54-.29-3.011-.818-4.364zM12 16.364a4.364 4.364 0 1 1 0-8.728 4.364 4.364 0 0 1 0 8.728Z"/></svg>
<svg role="img" with="24" height="24" fill="#FF7139" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><title>Firefox Browser</title><path d="M8.824 7.287c.008 0 .004 0 0 0zm-2.8-1.4c.006 0 .003 0 0 0zm16.754 2.161c-.505-1.215-1.53-2.528-2.333-2.943.654 1.283 1.033 2.57 1.177 3.53l.002.02c-1.314-3.278-3.544-4.6-5.366-7.477-.091-.147-.184-.292-.273-.446a3.545 3.545 0 01-.13-.24 2.118 2.118 0 01-.172-.46.03.03 0 00-.027-.03.038.038 0 00-.021 0l-.006.001a.037.037 0 00-.01.005L15.624 0c-2.585 1.515-3.657 4.168-3.932 5.856a6.197 6.197 0 00-2.305.587.297.297 0 00-.147.37c.057.162.24.24.396.17a5.622 5.622 0 012.008-.523l.067-.005a5.847 5.847 0 011.957.222l.095.03a5.816 5.816 0 01.616.228c.08.036.16.073.238.112l.107.055a5.835 5.835 0 01.368.211 5.953 5.953 0 012.034 2.104c-.62-.437-1.733-.868-2.803-.681 4.183 2.09 3.06 9.292-2.737 9.02a5.164 5.164 0 01-1.513-.292 4.42 4.42 0 01-.538-.232c-1.42-.735-2.593-2.121-2.74-3.806 0 0 .537-2 3.845-2 .357 0 1.38-.998 1.398-1.287-.005-.095-2.029-.9-2.817-1.677-.422-.416-.622-.616-.8-.767a3.47 3.47 0 00-.301-.227 5.388 5.388 0 01-.032-2.842c-1.195.544-2.124 1.403-2.8 2.163h-.006c-.46-.584-.428-2.51-.402-2.913-.006-.025-.343.176-.389.206-.406.29-.787.616-1.136.974-.397.403-.76.839-1.085 1.303a9.816 9.816 0 00-1.562 3.52c-.003.013-.11.487-.19 1.073-.013.09-.026.181-.037.272a7.8 7.8 0 00-.069.667l-.002.034-.023.387-.001.06C.386 18.795 5.593 24 12.016 24c5.752 0 10.527-4.176 11.463-9.661.02-.149.035-.298.052-.448.232-1.994-.025-4.09-.753-5.844z"/></svg>


[![Coogle Chrome](https://img.shields.io/static/v1?label=Chrome&message=92.0.45%2B&color=%234285F4&logo=GoogleChrome)](#)
[![Firefox](https://img.shields.io/static/v1?label=Firefox&message=91.0.2%2B&color=%23FF7139&logo=Firefox)](#)
[![Safari](https://img.shields.io/static/v1?label=Safari&message=14.7.1%2B&color=%23212E50&logo=Safari)](#)
[![Microsoft Edge](https://img.shields.io/static/v1?label=Microsoft%20Edge&message=44.18362%2B&color=%230078D7&logo=Microsoft%20Edge)](#)
[![Internet Exporler](https://img.shields.io/static/v1?label=IE&message=11.356%2B&color=%230076D6&logo=Internet%20Explorer)](#)

> 点击图像可以打开图像浏览器，快试试吧。

# 代码块

## 带有引号的代码块

```html
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
```

## 用四个空格缩进的代码块

    <!doctype html>
    <html lang="en">
    <head>
      <meta charset="utf-8">
      <title>Example HTML5 Document</title>
    </head>
    <body>
      <p>Test</p>
    </body>
    </html>

## 代码块引用Hugo的内部高亮短代码
{{< highlight html >}}
<!doctype html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <title>Example HTML5 Document</title>
</head>
<body>
  <p>Test</p>
</body>
</html>
{{< /highlight >}}

# 列表类型

## 有序列表

1. First item
2. Second item
3. Third item

## 无序列表

* List item
* Another item
* And another item

## 嵌套列表

* Fruit
  * Apple
  * Orange
  * Banana
* Dairy
  * Milk
  * Cheese

## 其他元素 — abbr, sub, sup, kbd, mark

<abbr title="Graphics Interchange Format">GIF</abbr> 是位图图像格式。

H<sub>2</sub>O

X<sup>n</sup> + Y<sup>n</sup> = Z<sup>n</sup>

按 <kbd><kbd>CTRL</kbd>+<kbd>ALT</kbd>+<kbd>Delete</kbd></kbd> 组合键结束会话。

大多数<mark>蝾螈</mark>在夜间活动，捕食昆虫、蠕虫和其他小动物。
