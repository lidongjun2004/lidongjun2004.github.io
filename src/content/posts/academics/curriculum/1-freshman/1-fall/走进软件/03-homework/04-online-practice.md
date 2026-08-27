---
title: "作业 4 · 网课综合练习"
description: "从现存提交恢复的 HTML 表单、语义化结构和数组去重练习"
date: 2026-08-27
tags: ["作业"]
---

源目录名为“网课考试”，但没有完整试卷，只保留了程序、HTML 和运行截图。下面按现存文件恢复为一组综合练习，不补写原平台未保留的限制条件。

## 练习一：不同类型的输入框

根据提交文件，要在表单中创建密码输入框和默认选中的复选框。

<details class="exam-answer">
<summary>查看提交代码</summary>

```html
<form>
  <input type="password" value="nowcoder">
  <input type="checkbox" checked>
</form>
```

</details>

## 练习二：语义化页头与导航

根据文件名和提交代码，要使用语义化标签创建页头，其中包含导航链接。

<details class="exam-answer">
<summary>查看提交代码</summary>

```html
<header>
  <nav>
    <a href="http://www.ibiquge.cc/">Biquge</a>
  </nav>
</header>
```

</details>

## 练习三：数组去重

根据 JavaScript 提交，输入数组为

```js
[22, 17, 22, 44, 44, 66, 17, 66, 7]
```

要保留元素首次出现的顺序，删去重复值。

<details class="exam-answer">
<summary>查看提交代码</summary>

```js
const a = [22, 17, 22, 44, 44, 66, 17, 66, 7];
const b = [a[0]];

for (let i = 0; i < a.length; i++) {
  let flag = true;
  for (let j = 0; j < b.length; j++) {
    if (a[i] == b[j]) {
      flag = false;
      break;
    }
  }
  if (flag == true) b.push(a[i]);
}

console.log(b);
```

输出为：

```text
[22, 17, 44, 66, 7]
```

</details>
