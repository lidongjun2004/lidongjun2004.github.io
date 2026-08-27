---
title: "作业 2 · 个人主题网站"
description: "根据完整网站文件恢复的鬼灭之刃主题静态网站作业"
date: 2026-08-27
tags: ["作业"]
---

源目录没有独立题面，但保留了完整的 HTML、CSS 和图片文件。从作品可以确认，任务是完成一个个人主题的多页静态网站。

作品主题为《鬼灭之刃》，包含：

- 首页：故事背景和剧情简介；
- 人物页：角色介绍；
- 图片页：图片鉴赏；
- 三页共用导航、CSS 样式和本地图片资源。

<details class="exam-answer">
<summary>查看提交内容与实现</summary>

网站以 `index.html` 为入口，通过链接跳转到 `renwu.html` 和 `tupian.html`。三个页面都使用同一份 `css/css.css`，图片放在 `images/` 目录。

```text
个人网站/
├── index.html
├── renwu.html
├── tupian.html
├── css/
│   └── css.css
└── images/
```

以首页为例，页面使用 `<header>` 组织站点名和导航，主要内容用二级标题区分“故事背景”与“剧情简介”。这个作品展示了一个最小多页站点的几个核心部件：入口页、页间链接、共享样式和本地资源。

</details>
