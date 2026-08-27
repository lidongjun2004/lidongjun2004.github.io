---
title: "计算机组成实验 6：Logisim Cache"
description: "计算机组成实验 6 的提交记录，梳理四路组相联 Cache、RAM、LRU 与调试输入。"
date: 2026-08-27
tags: ["作业"]
---

> 本目录只有电路提交和调试说明，没有独立原题。课程介绍把这一阶段称为“Cache 模拟”；下面只采用 `.circ` 文件与同目录说明能够确认的结构。

## 根据提交文件还原的任务

- `Cache.circ`：主 Cache 电路。
- `RAM.circ`：主存模拟。
- `LRU.circ`：替换状态电路。
- `Cache入门&Debug文件/`：调试电路、测试数据转换脚本和操作说明。

<details class="exam-answer">
<summary>查看提交内容与实现结构</summary>

`Cache.circ` 保存了以下电路层级：

| 电路 | 文件中可确认的结构 |
| --- | --- |
| `Cache` | 顶层，接口含 `Address`、`DataRead`、`MemRead`、`MemWrite`、`hit`、`stop`、`Reset`、`clk` |
| `CacheGroup` | 一个组的控制与数据选择 |
| `Block` | Cache 行 |
| `RAM` | 后备存储器 |
| `LRU` | 四路命中与替换选择 |
| `Counter` | LRU 使用的计数状态 |
| `MuxGroup` | 组选择 |

同目录学习记录明确写到：一个 `CacheGroup` 内有 4 个 `Block`，即四路组相联；读命中时由对应块输出数据，读缺失时由 LRU 选择替换块；写操作会修改 RAM，命中时同步修改 Cache；`stop` 用于暂停 LRU 和计数器等状态更新。

调试说明给出的 32 位控制字格式为：

| 位段 | 含义 |
| --- | --- |
| 31 | `Reset` |
| 30:14 | `Data_in` |
| 13 | `MemRead` |
| 12 | `MemWrite` |
| 11:6 | Tag |
| 5:4 | 组地址 |
| 3:2 | 块内地址 |
| 1:0 | 补零字节 |

调试流程是：用十进制填写 `data.csv`，运行 `convert.py` 生成 ROM 使用的 `func.hex`，再在 `debug.circ` 中载入自己的 `Cache.circ` 和该 ROM 运行时钟。

</details>
