---
title: "stdio.h"
description: ""
date: 2024-05-09
---

- `sprintf(char *s, char *fmt, ...)`

  - 按格式写进字符串 s 而不是输出，返回写入的字符数

  - 常用来把数字转字符串

- `snprintf(char *s, int n, char *fmt, ...)`

  - 最多写 n - 1 个字符并补 `\0`，比 `sprintf` 安全

- `sscanf(char *s, char *fmt, ...)`

  - 从字符串 s 里按格式读，返回成功读到的项数

  - 常用来把字符串转数字或按格式拆字段

- `fgets(char *s, int n, FILE *f)`

  - 读一行，最多 n - 1 个字符，会把 `\n` 一起读进来

  - `gets` 已废弃，不要用

- `getchar()` / `putchar(int c)`

  - 返回值和参数都是 int，读到结尾返回 `EOF`（-1）

- `freopen("in.txt", "r", stdin)`

  - 把标准输入重定向到文件，本地调试用

- `printf` 返回输出的字符数，`%*d` 可以用变量指定宽度
