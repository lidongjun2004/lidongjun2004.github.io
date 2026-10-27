---
title: "ctype.h"
description: ""
date: 2024-05-09
---

- 测试函数

  - `isascii(char c)`

    - 若 c 为 ascii 字符则返回非 0 正整数，否则返回 0

  - `isalpha(char c)`

    - 若 c 为字母则返回非 0 正整数，否则返回 0

  - `isdigit(char c)`

    - 若 c 为数字则返回非 0 正整数，否则返回 0

  - `isxdigit(char c)`

    - 若 c 为十六进制数字（0-9、a-f、A-F）则返回非 0 正整数，否则返回 0

  - `isalnum(char c)`

    - 若 c 为字母或数字则返回非 0 正整数，否则返回 0

  - `isblank(char c)`

    - 若 c 为空格或 `\t` 则返回非 0 正整数，否则返回 0

  - `isspace(char c)`

    - 若 c 为空白字符（空格、`\t`、`\n`、`\v`、`\f`、`\r`）则返回非 0 正整数，否则返回 0

  - `isupper(char c)`

    - 若 c 为大写字母则返回非 0 正整数，否则返回 0

  - `islower(char c)`

    - 若 c 为小写字母则返回非 0 正整数，否则返回 0

  - `ispunct(char c)`

    - 若 c 为标点（可打印、非字母数字、非空格）则返回非 0 正整数，否则返回 0

  - `isprint(char c)`

    - 若 c 为可打印字符（含空格）则返回非 0 正整数，否则返回 0

  - `iscntrl(char c)`

    - 若 c 为控制字符则返回非 0 正整数，否则返回 0

- 映射函数

  - `toupper(char c)`

    - 若 c 是小写字母，返回 c 的大写字母

    - 若 c 是其他字符，则返回 c

  - `tolower(char c)`

    - 若 c 是大写字母，返回 c 的小写字母

    - 若 c 是其他字符，则返回 c
