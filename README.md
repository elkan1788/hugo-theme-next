[![Go Enviroment](https://img.shields.io/static/v1?label=GoLang&message=1.12.1&color=%2300ADD8&logo=Go)](https://studygolang.com/dl#go1.12.1)
[![Build Hugo Version](https://img.shields.io/static/v1?label=Hugo&message=0.87.0&color=%23FF4088&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.87.0)
![GitHub branch checks state](https://img.shields.io/github/checks-status/elkan1788/hugo-theme-next/main?label=Check%20State&logo=Checkmarx)
[![Build Status](https://img.shields.io/travis/com/elkan1788/hugo-theme-next/main?label=Building&logo=Travis%20CI)](https://travis-ci.com/elkan1788/hugo-theme-next)
[![GitHub deployments](https://img.shields.io/github/deployments/elkan1788/hugo-theme-next/github-pages?label=gh-pg&logo=GitHub)](https://github.com/elkan1788/hugo-theme-next/tree/gh-pg)
[![Repos Size](https://img.shields.io/github/repo-size/elkan1788/hugo-theme-next?color=%23FFBF3B&logo=Files)](https://github.com/elkan1788/hugo-theme-next/releases)
[![Release Version](https://img.shields.io/github/v/release/elkan1788/hugo-theme-next?color=%230082C9&label=Release&logo=Next.js)](https://github.com/elkan1788/hugo-theme-next/releases/latest)
![GitHub](https://img.shields.io/github/license/elkan1788/hugo-theme-next?label=License&logo=WebAuthn)


[中文](#) | [English](https://github.com/elkan1788/hugo-theme-next/blob/main/README.en.md)

# Hugo版本的NexT主题

本主题是在[xtfly](https://github.com/xtfly/hugo-theme-next)移植基础上，再次进行深度的优化和改造，维持了`NexT`原本简单朴素的基调，同时增添不少与博客生态相关的服务组件，让主题更加的完善和好用。主要的特性如下：

- 多种设备显示自适应
- 支持中英文双语切换
- 支持多种站点统计工具，如百度，谷歌，CNZZ，不蒜子
- 自动生成站点地图，加入百度链接推送SEO优化
- 集成多种评论插件
- 添加文章快速分享
- 支持文章访问统计
- 集成图片浏览器
- 自定义个人信息页面
- 在线聊天功能
- ......

耗费如此多精力去维护及升级，也是希望看到`NexT`主题能在`Hugo`引擎上继续发光发热。关于本主题的最新情况，可查看上方的构建状态和新版本发布，欢迎大家使用与反馈。

# 效果预览

同时兼容PC端和不同移动设备访问的自适应，效果如下：

![my-hugo-blog.png](https://lisenhui.gitee.io/imgs/blog/my-hugo-blog.png)

其中PC端测试兼容的部分浏览器有：

[![Coogle Chrome](https://img.shields.io/static/v1?label=Chrome&message=92.0.45%2B&color=%234285F4&logo=GoogleChrome)](#)
[![Firefox](https://img.shields.io/static/v1?label=Firefox&message=91.0.2%2B&color=%23FF7139&logo=Firefox)](#)
[![Safari](https://img.shields.io/static/v1?label=Safari&message=14.7.1%2B&color=%23212E50&logo=Safari)](#)
[![Microsoft Edge](https://img.shields.io/static/v1?label=Microsoft%20Edge&message=44.18362%2B&color=%230078D7&logo=Microsoft%20Edge)](#)
[![Internet Exporler](https://img.shields.io/static/v1?label=IE&message=11.356%2B&color=%230076D6&logo=Internet%20Explorer)](#)

> 也可访问鄙人的博客空间预览实际效果，欢迎点击[https://lisenhui.cn](https://lisenhui.cn)访问。

# 快速开始

1. 参考`Hugo`官方的部署文档[Installing](https://gohugo.io/getting-started/installing/)，在您的电脑上安装`Hugo`执行文件；

2. 参考`Git`官方的部署文档[安装 Git](https://git-scm.com/book/zh/v2/%E8%B5%B7%E6%AD%A5-%E5%AE%89%E8%A3%85-Git)，在您的电脑上安装`Git`执行文件；

3. 执行`hugo new site [站点名称]`命令来创建您自己的站点；

4. 执行`git init`命令初步化站点的所有文件；

5. 切换到站点的`themes`目录下，执行`git clone --recurse-submodules https://github.com/elkan1788/hugo-theme-next.git`命令克隆本主题
> 在国内可使用`Gitee`仓库地址： `git clone --recurse-submodules https://gitee.com/lisenhui/hugo-theme-next.git`

6. 拷贝`hugo-theme-next/exampleSite`目录下的两个文件夹内容`config`和`content`到站点根目录下面；

7. 执行`hugo server`生成站点服务；

8. 打开浏览器，在地址栏输入`http://localhost:1313/`访问查看效果。

[![Live Demo](https://asciinema.org/a/434226.svg)](https://asciinema.org/a/434226)

> 后续可参考`config`目录下文件里的配置参数，按需调整生成您自己个性化的站点。

# 文章标记

本主题默认是把中文文章放在`zh-CN`目录下的`post`文件夹，而英文文章放在`en`目录下的`post`文件夹，另外在`about`文件夹下只有一个`index.md`文件用于编辑个人信息。

1. 文章的开头模板参考:

```
---
title: "Hello World"
url: 2020/09/11/hexo-hello-world.html
date: "2020-09-11"
tags: 
  - 测试
  - 学习
categories:
  - Hugo
toc: true
math: true
type: about
---
```

参数作用说明：

- `title`: 文章标题
- `url`： 访问路径
- `date`： 发表日期
- `tags`： 文章标签
- `categories`： 文章分类
- `toc`： 是否开启目录导航
- `math`： 是否开启数学公式解析
- `type`： 页面显示类型

2. 关于首页显示的文章摘要内容可使用 `<!--more-->` 标签来手动干预，更多说明可详见官方文档：[Manual Summary Splitting](https://gohugo.io/content-management/summaries/#user-defined-manual-summary-splitting)。

# 许可证
[MIT License](LICENSE).

# 致谢

完善`Hugo NexT`主题原是个人的业余爱好，但没想到网友们这么的热情，感谢有你们的支持，就让我们一起来见证它的成长吧。

以下是捐助名单列表（按时间顺序）：

| 捐助时间 | 捐助者 | 捐助方式 | 捐助内容 |
| ------- | ------ | ------ | ---- |
| 2021.12.21 | z*y | 微信支付 | ¥18.88 |