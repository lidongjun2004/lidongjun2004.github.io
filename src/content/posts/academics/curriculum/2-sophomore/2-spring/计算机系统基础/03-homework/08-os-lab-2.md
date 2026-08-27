---
title: "操作系统 Lab 2：物理内存、页表与 TLB"
description: "OS 2025 Lab 2 的实验要求与原实验报告，涉及页控制块、链表、两级页表、ASID 和软件管理 TLB。"
date: 2026-08-27
tags: ["作业"]
---

## 实验要求

实验指导书列出的实现任务为：

1. 完成 `la32r_detect_memory`。
2. 完成链表宏 `LIST_INSERT_AFTER`。
3. 完成 `page_init`、`page_alloc` 和 `page_free`。
4. 完成 `pgdir_walk` 与 `page_insert`。
5. 完成 `tlb_invalidate`、`tlb_miss_entry` 和 `do_tlb_invalid`。

## Thinking 2.1：程序中的地址是什么地址

C 指针中保存的地址，以及 LA32R 的 `ld.*`、`st.*` 指令使用的地址，是虚拟地址还是物理地址？

<details class="exam-answer">
<summary>查看原实验报告</summary>

两者都是虚拟地址。

</details>

## Thinking 2.2：链表宏与三类链表

1. 从可重用性角度说明用宏实现链表的好处。
2. 比较单向链表、循环链表与本实验双向链表的插入和删除性能。

<details class="exam-answer">
<summary>查看原实验报告</summary>

宏可以封装链表操作，减少重复代码并提高可读性。

- 单向链表：删除元素、在元素前插入通常需要遍历；在已知元素之后插入可直接完成。
- 循环链表：可以直接在尾部插入，其余性质与单向链表相近。
- 双向链表：已知元素时可直接在它前后插入或删除，但该实现访问尾元素仍需遍历。

</details>

## Thinking 2.3：`Page_list` 的展开结构

阅读 `include/queue.h` 与 `include/pmap.h`，选择 `Page_list` 的正确展开结构。

<details class="exam-answer">
<summary>查看原实验报告</summary>

选择 C。

</details>

## Thinking 2.4：ASID

1. 从虚拟内存实现角度说明 ASID 的必要性。
2. 根据 LA32R ASID 字段位数，说明最多能容纳多少个不同地址空间。

<details class="exam-answer">
<summary>查看原实验报告</summary>

不同进程拥有不同页表。同一个虚拟地址在不同进程中可能映射到不同物理地址；若没有 ASID，TLB 项可能被错误复用。

ASID 占 10 位，最多区分 1024 个地址空间。

</details>

## Thinking 2.5：`tlb_invalidate`

用一句话概括 `tlb_invalidate` 的作用，并逐行解释其中的汇编代码。

<details class="exam-answer">
<summary>查看原实验报告</summary>

它在页表内容改变后，使对应 TLB 项及时失效。

```asm
LEAF(tlb_invalidate)
    invtlb 0x6, a0, a1  # 使虚拟地址与 ASID 对应的 TLB 项失效
    jr ra               # 返回调用者
END(tlb_invalidate)
```

</details>

## Thinking 2.6：x86 与 LA32R 内存管理

简述 x86 内存管理，并比较 x86 与 LA32R。

<details class="exam-answer">
<summary>查看原实验报告</summary>

x86 传统上把分段和分页结合起来：段选择子经 GDT/LDT 把逻辑地址变为线性地址，再由多级页表把线性地址转换成物理地址；现代系统主要依赖分页，并由硬件遍历页表、TLB 加速转换。

LA32R 主要依赖分页，不使用 x86 式分段。实验中的页表和地址空间布局更精简，TLB 未命中由软件处理，操作系统负责页表遍历与 TLB 填充。

</details>

## 原报告的难点与体会

<details class="exam-answer">
<summary>查看原实验报告</summary>

主要难点是理解实验代码的封装关系，以及真正建立页式管理的完整图景。完成实验后，对物理页管理、两级页表和 TLB 的联系有了明显更具体的认识。

</details>
