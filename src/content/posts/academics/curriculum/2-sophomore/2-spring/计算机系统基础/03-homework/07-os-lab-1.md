---
title: "操作系统 Lab 1：内核启动与 printk"
description: "OS 2025 Lab 1 的实验要求与我当时的实验报告，涉及 ELF、链接脚本、内核入口、启动汇编和 printk。"
date: 2026-08-27
tags: ["作业"]
---

## 实验要求

实验指导书列出的实现任务为：

1. 补全 `tools/readelf/readelf.c`，输出 ELF 文件全部节头的地址。
2. 补全 `kernel.lds` 中 `.text`、`.data`、`.bss` 的布局。
3. 补全 `init/start.S`：设置栈指针并跳转到 `la32r_init`。
4. 补全 `lib/print.c` 中 `vprintfmt` 的两处缺失代码，实现格式字符串解析与字符输出。

## Thinking 1.1：原生与交叉工具链

分别使用 x86 原生工具链和 LA32R 交叉工具链重复编译、链接与反汇编，比较结果并解释 `objdump` 参数。

<details class="exam-answer">
<summary>查看我当时的实验报告</summary>

我在报告中观察到：无论是 x86 还是 LA32R 工具链，编译但未链接时的反汇编结果中，`printf` 地址都为 0；链接后，二者的 `printf` 都得到地址，但数值不同。

- `-D`：反汇编所有 section。
- `-S`：反汇编代码段时把反汇编结果与源代码交替显示。

</details>

## Thinking 1.2：为何自制 readelf 不能解析自身

使用自己编写的 `readelf` 解析内核 ELF，再比较系统 `readelf -h` 的输出。为什么自制程序不能解析 `readelf` 自身，而系统工具可以？

<details class="exam-answer">
<summary>查看我当时的实验报告</summary>

内核 `mos` 和测试程序 `hello` 与自制 `readelf` 的系统架构、文件类型和 ELF 类别不同。自制 `readelf` 只处理 32 位 ELF，而 `readelf` 可执行文件本身是 64 位 ELF，所以无法解析自身。

</details>

## Thinking 1.3：内核入口为什么能正确跳转

LA32R 上电入口为 `0x1C000000`，实验内核入口却按内存布局放在别处。为什么仍能正确跳转？

<details class="exam-answer">
<summary>查看我当时的实验报告</summary>

启动分为两个阶段：QEMU 先加载 ELF 格式内核，再跳转到 ELF 给出的入口。`kernel.lds` 指定 `.text`、`.data`、`.bss` 的位置，并通过 `ENTRY(_start)` 指定入口，因此 QEMU 可以把控制流转到正确位置。

</details>

## 我当时记录的难点与体会

<details class="exam-answer">
<summary>查看我当时的实验报告</summary>

我当时认为，主要难点是内核启动过程的抽象性，以及在陌生语法环境中实现 `printk` 对 C 语言能力的要求。完成 Lab 1 后，我对操作系统启动流程和 ELF 基本格式形成了更系统的认识，也第一次面对明显增加的内核代码阅读量。

</details>
