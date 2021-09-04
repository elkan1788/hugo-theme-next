[![Go Enviroment](https://img.shields.io/static/v1?label=GoLang&message=1.12.1&color=informational&logo=Go)](https://studygolang.com/dl#go1.12.1)
[![Build Hugo Version](https://img.shields.io/static/v1?label=Hugo&message=0.87.0&color=blue&logo=hugo)](https://github.com/gohugoio/hugo/releases/tag/v0.87.0)
[![Build Status](https://api.travis-ci.com/elkan1788/hugo-theme-next.svg?branch=master)](https://travis-ci.com/elkan1788/hugo-theme-next)
[![GitHub deployments](https://img.shields.io/github/deployments/elkan1788/hugo-theme-next/github-pages)](https://github.com/elkan1788/hugo-theme-next/tree/gh-pg)
[![Repos Size](https://img.shields.io/github/repo-size/elkan1788/hugo-theme-next?color=%2353A318)](https://github.com/elkan1788/hugo-theme-next/releases)
[![Release Version](https://img.shields.io/github/v/release/elkan1788/hugo-theme-next?color=%230082C9&label=Release&logo=Next.js)](https://github.com/elkan1788/hugo-theme-next/releases/latest)


[中文](README.md) | [English](README.en.md)

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

![my-hugo-blog.png](images/screenshot.png)

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

6. 拷贝`hugo-theme-next`目录下的两个目录`config`和`content`到站点根目录下面；

> 参考`content`目录下的布局，开始编写您自己的博客文章。需要注意的是，`about`目录下的结构和文件名称不要变动，只修改里面的Markdown内容。

7. 执行`hugo server`生成站点服务；

8. 打开浏览器，在地址栏输入`http://127.0.0.1:1313/`访问查看效果。

> 后续可参考`config`目录下的配置参数，按需调整生成您自己个性化的站点。

## 许可证
[MIT License](LICENSE).