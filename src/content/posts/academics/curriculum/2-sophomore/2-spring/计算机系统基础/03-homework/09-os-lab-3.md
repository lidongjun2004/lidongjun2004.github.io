---
title: "操作系统 Lab 3：进程、异常与调度"
description: "OS 2025 Lab 3 的实验要求与我当时的实验报告，涉及进程控制块、地址空间、ELF 装载、异常入口和调度。"
date: 2026-08-27
tags: ["作业"]
---

## 实验要求

实验指导书列出的实现任务为：

1. 完成 `env_init`、`map_segment`、`env_setup_vm` 与 `env_alloc`。
2. 完成 `load_icode_mapper`、`load_icode` 与 `env_create`，建立并装载用户进程。
3. 完成 `env_run`。
4. 补充 `kern/entry.S`、`kernel.lds` 与 `RESET_KCLOCK`。
5. 完成 `schedule`。

## Thinking 3.1：页目录自映射

解释：

```c
e->env_pgdir[PDX(UVPT)] =
    PADDR(e->env_pgdir) | PTE_V | PTE_PLV | PTE_C;
```

<details class="exam-answer">
<summary>查看我当时的实验报告</summary>

这行代码把页目录中虚拟地址 `UVPT` 对应的页目录项，设为当前进程页目录所在物理页的页号，并附加有效位与访问属性。这样程序可以通过固定虚拟地址读取二级页表和页目录。

</details>

## Thinking 3.2：`elf_load_seg` 的 `data`

`elf_load_seg` 以函数指针形式接收回调 `map_page`。找到 `data` 参数的来源，说明其作用，以及能否省略。

<details class="exam-answer">
<summary>查看我当时的实验报告</summary>

`data` 来自创建进程时取得的新进程控制块指针。它让 `load_icode_mapper` 得到当前进程控制块，不能省略，否则回调无法知道要把 ELF 内容映射到哪个进程。

</details>

## Thinking 3.3：段加载的边界情况

结合 `elf_load_seg` 的参数与实现，说明它需要处理哪些页面加载情况。

<details class="exam-answer">
<summary>查看我当时的实验报告</summary>

先处理传入起始地址到页面边界之间的非对齐部分；随后逐页读入文件内容；最后对文件内容之外、内存段范围之内的部分补零。

</details>

## Thinking 3.4：`env_tf.era` 中的地址

`env_tf.era` 保存的是物理地址还是虚拟地址？

<details class="exam-answer">
<summary>查看我当时的实验报告</summary>

虚拟地址。

</details>

## Thinking 3.5：异常处理函数

找出 0、1、4、11 号异常处理函数的实现位置。

<details class="exam-answer">
<summary>查看我当时的实验报告</summary>

0 号异常处理函数 `handle_int` 在 `genex.S` 中定义；1 号 `handle_tlb`、4 号 `handle_mod` 和 11 号 `handle_sys` 由 `genex.S` 中的 `BUILD_HANDLER` 宏生成。

</details>

## Thinking 3.6：时钟中断的开关

阅读 `entry.S`、`genex.S` 和 `env_asm.S`，说明时钟中断何时开启、何时关闭。

<details class="exam-answer">
<summary>查看我当时的实验报告</summary>

就这三段代码而言，只在执行 `ertn` 返回时重新开启，中断处理的其余过程保持关闭。

</details>

## Thinking 3.7：时钟中断如何切换进程

说明操作系统如何根据时钟中断切换进程。

<details class="exam-answer">
<summary>查看我当时的实验报告</summary>

时钟中断触发异常，异常入口保存现场并分发到时钟中断处理程序；处理程序进入调度函数，判断是否需要选择新进程、设置新的时间片计数，再由进程运行函数切换上下文并恢复现场。

</details>

## 我当时记录的难点与体会

<details class="exam-answer">
<summary>查看我当时的实验报告</summary>

我当时把难点概括为两条：一是中断与异常的完整链路——异常分发、处理与现场恢复；二是时钟中断或主动调度如何进入调度器、判断是否切换进程、重置计数并运行新进程。我第一次实现时很迷茫，熟悉完整流程后才逐渐能够把各段代码串起来。

</details>
