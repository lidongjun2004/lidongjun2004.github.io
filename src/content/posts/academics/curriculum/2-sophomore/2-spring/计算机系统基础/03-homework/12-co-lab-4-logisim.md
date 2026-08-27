---
title: "计算机组成实验 4：Logisim 课上电路"
description: "计算机组成实验 4 的提交记录，包含一个投票器和两个有限状态机电路。"
date: 2026-08-27
tags: ["作业"]
---

> 本目录只有 `test1.circ`、`exam2.circ`、`exam3.circ` 三个提交文件，文件名也没有保留原题名称。以下内容明确按提交还原，不补造平台题面。

## 根据提交文件还原的任务

- `test1.circ`：包含 `main` 与 `voter` 两层电路。
- `exam2.circ`：包含 `main`、`FSM`、`Change State`、`output`，可确认是把状态寄存、次态逻辑和输出逻辑拆开的有限状态机。
- `exam3.circ`：包含 `main`、`sold`、`change state`、`output`，接口标签包括 `INPUT`、`SOLD`、`CHARGE` 与 `STATE`。

<details class="exam-answer">
<summary>查看提交结构说明</summary>

| 文件 | 顶层可确认信息 | 子电路 |
| --- | --- | --- |
| `test1.circ` | 主信号宽度为 32 位 | `voter` |
| `exam2.circ` | 2 位 `state`、2 位 `input` | `FSM`、`Change State`、`output` |
| `exam3.circ` | 3 位 `INPUT`、`SOLD`，2 位 `CHARGE`，并维护 `STATE` | `sold`、`change state`、`output` |

这些是 `.circ` 文件本身保存的层级和端口信息。由于缺少原题，不能仅凭 `sold`、`charge` 等标签确定售货机价格、状态含义或输入编码，文章不作推测。

</details>
