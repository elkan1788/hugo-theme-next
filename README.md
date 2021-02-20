# NexT For Hugo

A Hugo theme port from [NexT](https://github.com/iissnan/hexo-theme-next).

## Discription

NexT is a simple and animated theme. I port it from Hexo to [Hugo](https://gohugo.io/) and used in my blog site.

Thanks for [xtfly](https://github.com/xtfly), I had cloned his NetxT theme and modify by my own custom style. 

## Online Preview: 

[https://lisenhui.cn](https://lisenhui.cn)

![my-hugo-blog](http://myblog.lisenhui.cn/my-hugo-blog.png-alias)

## Usage

1. download theme file: `git clone git@github.com:elkan1788/hugo-theme-next.git next`

2. copy `next` directory to `themes` directory in your hugo site

3. move `config.toml` to the root directory in your hugo site, and modify it to the actual information for your site.

4. create some markdown files in directory(content/post), like https://github.com/elkan1788/hugo-theme-next/content

5. start hugo server in root directory: `hugo server --noHTTPCache`

6. open brower: http://localhost:1313/

## Notes

- **Some of the Hexo's styles are not work now** because of the difference between the Hugo template engine and the Hexo. I will update it constantly

- This theme has been tested only in my blog site. Maybe it's not suitable for your requirements, you can customizate it by your preferences.

- Test in Hugo verion: 0.74.2

- If you have any questions, please give feedback

## Markdown notes

1. every markdown start with like this:

    ```
    ---
    title: "Hello World"
    slug: hexo-hello-world
    date: "2020-09-11"
    tags: 
      - 测试
      - 学习
    categories:
      - Hugo
    toc: true
    ---
    ```

1. add `<!--more-->` tag in your markdown for [manual summary splitting](https://gohugo.io/content-management/summaries/#user-defined-manual-summary-splitting) .


## Todo

- [x] Sidebar menu
- [x] Sidebar links
- [x] Auto toc display
- [x] Support i18n
- [x] Local Search
- [x] Syntax Highlighter (thanks to [xulz](https://github.com/xtfly/hugo-theme-next/pull/6))
- [x] Support Latex 
- [x] Beautify for local search style
- [x] Add Valine & LiveRe comment component
- [x] Add article read times
- [x] Add public welfare 404 page
- [x] Add site analytics include baidu, google, cnzz etc
- [x] Create custom about page
- [x] Minimize Javascript & Css & use remote CDN import

## License
The [MIT License](LICENSE).