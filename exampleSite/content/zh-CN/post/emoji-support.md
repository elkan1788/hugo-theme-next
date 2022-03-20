+++
author = "Hugo Authors"
title = "支持Emoji表情符号"
date = "2019-03-05"
description = "Guide to emoji usage in Hugo"
tags = [
    "emoji",
]
+++

`Emoji` 表情符号可以通过多种方式在 `Hugo` 项目中启用。 

<!--more-->

使用 `Emoji` 表情符号可以在模板中可以直接调用 [`emojify`](https://gohugo.io/functions/emojify/) 函数或是通过 [内联短代码](https://gohugo.io/templates/shortcode-templates/#inline-shortcodes) 来实现。

如果要全局启用 `Emoji` 表情符号，请在网站[配置](https://gohugo.io/getting-started/configuration/)文件中将 `enableEmoji` 参数值设置为 `true`，然后可以直接在内容文件中输入表情符号简写代码，参考如下：

### 猴子表情

<p>
    <span class="nowrap">
        <span class="emojify"> 🙈 </span> 
        <code>:see_no_evil:</code>
    </span>  
    <span class="nowrap">
        <span class="emojify"> 🙉 </span> 
        <code>:hear_no_evil:</code>
    </span> 
    <span class="nowrap">
        <span class="emojify"> 🙊 </span> 
        <code>:speak_no_evil:</code>
    </span>
</p>

---

### 数字符号

<p>
    <span class="nowrap">
        <span class="emojify"> 1️⃣ </span> 
        <code>:one:</code>
    </span>
    <span class="nowrap">
        <span class="emojify"> 2️⃣  </span> 
        <code>:two:</code>
    </span>
    <span class="nowrap">
        <span class="emojify"> 3️⃣ </span> 
        <code>:three:</code>
    </span>
</p>

---

### 建筑物

<p>
    <span class="nowrap">
        <span class="emojify"> 🏡 </span> 
        <code>:house_with_garden:</code>
    </span>
    <span class="nowrap">
        <span class="emojify"> 🏣 </span> 
        <code>:post_office:</code>
    </span>
    <span class="nowrap">
        <span class="emojify"> 🏥 </span> 
        <code>:hospital:</code>
    </span>
</p>

更多的 `Emoji` 表情符号代码可参考[`Emoji` 配对目录](https://www.webfx.com/tools/emoji-cheat-sheet/)。

***

**注意:** 以上步骤在 `Hugo` 中启用 `Unicode` 标准表情符号和序列，但是这些符号的呈现取决于浏览器和平台，要设置表情符号的样式，您可以使用第三方表情符号字体或字体。例如：

{{< highlight html >}}
.emoji {
font-family: Apple Color Emoji,Segoe UI Emoji,NotoColorEmoji,Segoe UI Symbol,Android Emoji,EmojiSymbols;
}
{{< /highlight >}}

{{< css.inline >}}
<style>
.emojify {
    font-family: Apple Color Emoji,Segoe UI Emoji,NotoColorEmoji,Segoe UI Symbol,Android Emoji,EmojiSymbols;
    font-size: 2rem;
    vertical-align: middle;
}
@media screen and (max-width:650px) {
    .nowrap {
    display: block;
    margin: 25px 0;
    }
}
</style>
{{< /css.inline >}}