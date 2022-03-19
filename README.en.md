[![Go Enviroment](https://img.shields.io/static/v1?label=GoLang&message=1.12.1&color=%2300ADD8&logo=Go)](https://studygolang.com/dl#go1.12.1)
[![Build Hugo Version](https://img.shields.io/static/v1?label=Hugo&message=0.87.0&color=%23FF4088&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.87.0)
![GitHub branch checks state](https://img.shields.io/github/checks-status/elkan1788/hugo-theme-next/main?label=Check%20State&logo=Checkmarx)
[![Build Status](https://img.shields.io/travis/com/elkan1788/hugo-theme-next/main?label=Building&logo=Travis%20CI)](https://travis-ci.com/elkan1788/hugo-theme-next)
[![GitHub deployments](https://img.shields.io/github/deployments/elkan1788/hugo-theme-next/github-pages?label=gh-pg&logo=GitHub)](https://github.com/elkan1788/hugo-theme-next/tree/gh-pg)
[![Repos Size](https://img.shields.io/github/repo-size/elkan1788/hugo-theme-next?color=%23FFBF3B&logo=Files)](https://github.com/elkan1788/hugo-theme-next/releases)
[![Release Version](https://img.shields.io/github/v/release/elkan1788/hugo-theme-next?color=%230082C9&label=Release&logo=Next.js)](https://github.com/elkan1788/hugo-theme-next/releases/latest)
![GitHub](https://img.shields.io/github/license/elkan1788/hugo-theme-next?label=License&logo=WebAuthn)


[中文](https://github.com/elkan1788/hugo-theme-next/blob/main/README.md) | [English](#)

# NexT for Hugo

This theme is base on [xtfly](https://github.com/xtfly/hugo-theme-next) who port it from `Hexo` engine, then I had do more depth optimization and renovation. With the origin `NexT` theme's is simple and animated, I had add many blogs ecological related servcie components, make it more perfect and easy to use. The main features as folows:

- Multiple devices display adaptive
- Support Chinese and English
- Support a variety of site statistics tools, such as Baidu, Google, CNZZ, Busuanzi etc
- Automatically generate site map, with Baidu link push SEO optimization
- Integrate multiple comment plug-ins
- Add plug-ins for articles to share quickly
- Support article access statistics
- Integrated Picture viewer
- Custom profile page
- Online chat IM
- ......

With all the maintenance and upgrades, we want to see the 'NexT' theme continue to shine on the 'Hugo' engine.For the latest information about this theme, you can check the build status and new release above. Welcome to use and feedback.

# Previw

The adaptability compatible with PC and different mobile devices is as follows:

![my-hugo-blog.png](https://lisenhui.gitee.io/imgs/blog/my-hugo-blog.png)

Some browsers compatible with PC tests are as follows:

[![Coogle Chrome](https://img.shields.io/static/v1?label=Chrome&message=92.0.45%2B&color=%234285F4&logo=GoogleChrome)](#)
[![Firefox](https://img.shields.io/static/v1?label=Firefox&message=91.0.2%2B&color=%23FF7139&logo=Firefox)](#)
[![Safari](https://img.shields.io/static/v1?label=Safari&message=14.7.1%2B&color=%23212E50&logo=Safari)](#)
[![Microsoft Edge](https://img.shields.io/static/v1?label=Microsoft%20Edge&message=44.18362%2B&color=%230078D7&logo=Microsoft%20Edge)](#)
[![Internet Exporler](https://img.shields.io/static/v1?label=IE&message=11.356%2B&color=%230076D6&logo=Internet%20Explorer)](#)

> You can also visit my blog space to preview the actual effect, please click on [https://lisenhui.cn](https://lisenhui.cn) to visit.

# QuickStart

1. Refere to `Hugo` official deployment document [Installing] (https://gohugo.io/getting-started/installing/), and installed `Hugo` command on your computer;

2. Refer to the official Git deployment documentation [Install Git](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git) to install the `Git` command on your computer;

3. Execute the 'Hugo new site' command to create your own site;

4. Run the 'git init' command to initialize all the files on the site;

5. Switch to the site of `themes` directory, execute `git clone - recurse - submodules https://github.com/elkan1788/hugo-theme-next.git` command to clone this theme;

Recommended use `Gitee` repository in China: `git clone --recurse-submodules https://gitee.com/lisenhui/hugo-theme-next.git`

6. Copy the two directories `config` and `content` from `hugo-theme-next/exampleSite` to the root directory of the site;

7. Execute `hugo server` to generate site services;

8. Open your browser and enter `http://localhost:1313/` in the address bar to view the effect.

[![Live Demo](https://asciinema.org/a/434226.svg)](https://asciinema.org/a/434226)

> Later, you can refer to the configuration parameters in the file in the `config` directory to adjust as needed to generate your own personalized site.

# Markdown syntax

The default for this theme is to place Chinese articles in the `post` folder under `zh-CN` and English articles in the `post` folder under `en`. In addition, there is only one `index.md` file under the `about` folder for editing personal information.

1. The template reference for the beginning of the article:

```
---
title: "Hello World"
url: 2020/09/11/hexo-hello-world.html
date: "2020-09-11"
tags: 
  - testing
  - learn
categories:
  - Hugo
toc: true
math: true
type: about
---
```

Parameter description:

- `title`: title of artilce
- `url`： visit link of article
- `date`： push date of article
- `tags`： tag of article
- `categories`： category of article
- `toc`： to enable directory navigation
- `math`： to enable mathematical formula parsing
- `type`： Page display type

2. For the Summary content displayed on the home page, Manual intervention can be done by using the `<!--more-->` label. For more information, please refer to the official document: [Manual Summary Splitting](https://gohugo.io/content-management/summaries/#user-defined-manual-summary-splitting)。

# License
[MIT License](LICENSE).

# Thanks

That was my personal hobby to improve and perfect the theme of Hugo's `NexT`,  but I didn't expect people to be so enthusiastic. Thanks all for your support, let's witness its growth together.

The list of donors (in date order):

| Donation time | Donors | Donation mode | Donation content |
| ------- | ------ | ------ | ---- |
| 2021.12.21 | z*y | wechat pay | RMB18.88 |