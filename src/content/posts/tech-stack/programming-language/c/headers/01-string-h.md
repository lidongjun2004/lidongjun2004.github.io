---
title: "string.h"
description: ""
date: 2024-05-09
---

- `strlen(char *s)`

  - 返回 s 的长度，不含结尾的 `\0`

- `strcpy(char *dst, char *src)`

  - 把 src 连同 `\0` 拷到 dst，dst 要够大

- `strncpy(char *dst, char *src, int n)`

  - 最多拷 n 个字符，src 长度 ≥ n 时不会补 `\0`，要自己补

- `strcat(char *dst, char *src)`

  - 把 src 接到 dst 末尾

- `strcmp(char *s1, char *s2)`

  - 按字典序逐字节比较，相等返回 0，s1 小返回负数，s1 大返回正数

  - 字符串不能用 `==` 比，比的是地址

- `strncmp(char *s1, char *s2, int n)`

  - 只比较前 n 个字符

- `strchr(char *s, char c)`

  - 返回 c 在 s 中第一次出现的位置

  - 若 s 中不存在 c，则返回 NULL

- `strrchr(char *s, char c)`

  - 返回 c 在 s 中最后一次出现的位置，不存在返回 NULL

- `strstr(char *s, char *sub_str)`

  - 返回子串 sub_str 在 s 中第一次出现的位置

  - 若 s 中不存在 sub_str，则返回 NULL

- `memset(void *p, int c, int n)`

  - 从 p 开始按字节填 n 个 c

  - int 数组只有填 0 和 -1 是对的，填 1 得到的是 `0x01010101`

- `memcpy(void *dst, void *src, int n)`

  - 拷 n 个字节，两段区域重叠时用 `memmove`

- `memcmp(void *p1, void *p2, int n)`

  - 按字节比较前 n 个字节，返回值含义同 `strcmp`
