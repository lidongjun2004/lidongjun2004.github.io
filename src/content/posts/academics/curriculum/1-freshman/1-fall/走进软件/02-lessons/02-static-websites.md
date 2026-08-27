---
title: "第 2 讲 · 用 HTML 和 CSS 组织静态网站"
description: "根据个人网站和小组网站作品，理解网页结构、语义化标签、样式复用与相对路径"
date: 2026-08-27
---

> 本讲从现存的个人网站和小组网站代码归纳；源目录中没有对应教师课件。

## 一个页面有三层

```text
HTML        结构：这是标题、这是导航、这是一张图
CSS         表现：它们在哪里、多大、什么颜色
JavaScript  行为：点击、输入或数据变化后发生什么
```

分层的直接好处是：如果要统一修改三个页面的导航颜色，只需改共享 CSS，不用逐页重写。

## 从骨架开始

```html
<!doctype html>
<html lang="zh-CN">
  <head>
    <meta charset="utf-8">
    <title>页面标题</title>
    <link rel="stylesheet" href="css/style.css">
  </head>
  <body>
    <header>
      <nav><a href="index.html">首页</a></nav>
    </header>
    <main>
      <h1>页面主标题</h1>
    </main>
  </body>
</html>
```

`head` 放页面元数据和资源链接，`body` 放真正显示的内容。`header`、`nav`、`main` 不是为了默认样式，而是告诉阅读者每块内容的职责。

## 多页站点靠链接组起来

个人站点中的首页、人物页和图片页是三个 HTML 文件。它们之间通过相对路径连接：

```html
<a href="renwu.html">人物介绍</a>
<img src="images/banner1.jpg" alt="首页横幅">
```

如果页面与 `renwu.html` 在同一目录，可以直接写文件名；图片在 `images` 子目录，所以需要先进入该目录。网页换机器后图片失效，经常是因为代码写了本机绝对路径。

## CSS 的最小心智模型

```css
.site-nav a {
  color: #222;
  text-decoration: none;
}
```

这条规则分为两部分：

- `.site-nav a` 是选择器，表示“`site-nav` 容器内的所有链接”；
- 花括号内是声明，对选中的元素设定颜色并去掉下划线。

当多条规则同时命中一个元素时，浏览器依据来源顺序、选择器优先级和是否继承决定结果。调样式时不要盲目加新规则，先在浏览器开发者工具里看实际命中了哪条。

## 表单的类型就是输入约束

```html
<form>
  <input type="password">
  <label><input type="checkbox" checked> 记住选项</label>
</form>
```

`password` 会隐藏用户屏幕上的输入，但这不等于它已经加密；真正传输密码还需要 HTTPS 和服务端的安全处理。`checked` 是布尔属性，存在时表示初始选中。

## 自查清单

- 断网后本地打开，CSS 和图片是否仍能加载；
- 每个页面的导航是否能来回跳转；
- 标题层级是否按 `h1` 到 `h2` 递进；
- 图片是否有能表达内容的 `alt`；
- 共享样式是否放在 CSS 文件，而不是复制到每个页面。
