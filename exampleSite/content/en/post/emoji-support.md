+++
author = "Hugo Authors"
title = "Emoji Support"
date = "2019-03-05"
description = "Guide to emoji usage in Hugo"
tags = [
    "emoji",
]
+++

Emoji can be enabled in a Hugo project in a number of ways. 
<!--more-->
The [`emojify`](https://gohugo.io/functions/emojify/) function can be called directly in templates or [Inline Shortcodes](https://gohugo.io/templates/shortcode-templates/#inline-shortcodes). 

To enable emoji globally, set `enableEmoji` to `true` in your site's [configuration](https://gohugo.io/getting-started/configuration/) and then you can type emoji shorthand codes directly in content files; e.g.

### Monkey

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

### Number

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

### Building

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

The [Emoji cheat sheet](ttps://www.webfx.com/tools/emoji-cheat-sheet/) is a useful reference for emoji shorthand codes.

***

**N.B.** The above steps enable Unicode Standard emoji characters and sequences in Hugo, however the rendering of these glyphs depends on the browser and the platform. To style the emoji you can either use a third party emoji font or a font stack; e.g.

{{< highlight html >}}
.emoji {
  font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
}
{{< /highlight >}}

{{< css.inline >}}
<style>
.emojify {
	font-family: Apple Color Emoji, Segoe UI Emoji, NotoColorEmoji, Segoe UI Symbol, Android Emoji, EmojiSymbols;
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
