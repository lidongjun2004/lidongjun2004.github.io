---
title: "计算机组成实验 5：Logisim 单周期 CPU"
description: "我在计算机组成实验 5 中提交的单周期 CPU 电路、子模块和调试材料。"
date: 2026-08-27
tags: ["作业"]
---

> 我保留的实验材料中没有单独题目文档。课程介绍把对应阶段描述为“完成支持 7 条指令的单周期 CPU 设计”；我的具体提交以 `单周期CPU.circ` 为准，我不根据测试工具反推额外指令要求。

## 实验要求

根据课程介绍中能够确认的要求：在 Logisim 中完成一个支持 7 条指令的单周期 CPU。源目录还保存了寄存器堆、两组汇编测试、机器码文件和第三方评测工具。

<details class="exam-answer">
<summary>查看我提交的内容与实现结构</summary>

我提交的主文件 `单周期CPU.circ` 包含以下电路：

| 子电路 | 文件中可确认的职责或接口 |
| --- | --- |
| `IFU` | 指令取得与 PC；接口包含 `instr`、`pc`、`pc4` |
| `NPC` | 下一条 PC；接口包含 `npc`、`jump`、`Branch` |
| `IS` | 指令字段拆分 |
| `GRF` | 通用寄存器堆；接口包含读数据、写地址与 `RegWrite` |
| `DM` | 数据存储器；接口包含 `MemAddr`、`MemWriteData`、`MemRead` |
| `ALU` | 32 位运算；接口包含 `aluop`、`result`、`equal` |
| `EXT` | 16 位立即数扩展至 32 位；接口包含 `imm16`、`extop` |
| `Controller` | 由 `opcode`、`func` 产生控制信号 |
| `OPCODE_AND`、`FUNC_AND`、`OR` | 控制器内部组合逻辑 |

同目录还包含：

- `GRF/GRF.circ`
- `CPU调试用/TestForCPU1.asm`、`TestForCPU2.asm`
- `func.hex`、`wheadfun1.hex`、`wheadfun2.hex`
- 一套外部 `P3_judge` 调试工具

评测工具 README 标明其用途是导出 Logisim 结果、对拍电路输出，以及把汇编交给 MARS 作为参考模型。该工具不是我提交的 CPU 主文件的一部分，我没有把它的功能算作实验要求。

</details>
