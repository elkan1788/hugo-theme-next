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
