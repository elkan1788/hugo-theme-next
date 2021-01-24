![GitHub repo size](https://img.shields.io/github/repo-size/elkan1788/elkan1788.github.io)
![GitHub language count](https://img.shields.io/github/languages/count/elkan1788/elkan1788.github.io)
![GitHub branch checks state](https://img.shields.io/github/checks-status/elkan1788/elkan1788.github.io/main)
[![Build Status](https://api.travis-ci.com/elkan1788/elkan1788.github.io.svg?branch=hugo)](https://travis-ci.com/elkan1788/elkan1788.github.io)
![GitHub deployments](https://img.shields.io/github/deployments/elkan1788/elkan1788.github.io/github-pages)
![GitHub](https://img.shields.io/github/license/elkan1788/elkan1788.github.io)


![my-hugo-blog](http://myblog.lisenhui.cn/hugo-logo.png-noalias)


# Use Hugo framework rebuild my blog site.

I'm a Geek, so like try the new things which is better. But maybe it's my last way to change my blog site build engine, Hugo is faster and simpler, I like it and think you will too.


# Demo：

![my-hugo-blog](http://myblog.lisenhui.cn/my-hugo-blog.png-alias)


# Use qiniu Cloud storage

Download toolkit：[qshell](https://developer.qiniu.com/sdk#official-tool)

Follow by below steps:
```
# 1. set your account
qshell account ak sk

# 2. create new folder to save upload images
mkdir -p tools/qiniu

# 3. change the template file name and set your bluck namespace
mv tools/_qoniu.json.sample tools/_qiniu.json
vi tools/_qiniu.json 

# 4. execute the script then upload files
qupload.sh

```

Upload successful logs：

![my-hexo-blog2](http://myblog.lisenhui.cn/my-hexo-blog2.png-alias)

## License
The [MIT License](LICENSE).
