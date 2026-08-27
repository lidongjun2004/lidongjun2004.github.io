---
title: 第 2 次作业 · 指针、结构与文件
description: 第二次作业的客观题，以及五子棋、文件和结构化记录处理提交。
date: 2026-08-27
tags: ["作业"]
---

客观题来自课程保存的答案 PDF。编程题只保存了提交代码与少量输入输出文件，独立题面缺失，故不补写未能确认的格式要求。

## 选择题

### 1. 与 `int *q[5];` 等价的定义是什么？

<details class="exam-answer"><summary>展开答案</summary>

`int *(q[5]);`，对应 C；`q` 是含 5 个 `int *` 的数组。

</details>

### 2. `int (*ptr)[M];` 中的 `ptr` 是什么？

<details class="exam-answer"><summary>展开答案</summary>

指向含 $M$ 个整型元素的一维数组的指针，对应 C。

</details>

### 3. 题给指针表达式中，哪一项的数值不为 3？

<details class="exam-answer"><summary>展开答案</summary>

`p1=x+2, *(p1++)`，对应 C。

</details>

### 4. 哪个指针数组说明语句正确？

<details class="exam-answer"><summary>展开答案</summary>

`int a[5], *num[5]={&a[0],&a[1],&a[2],&a[3],&a[4]};`，对应 B。

</details>

### 5. 已知 `int a,*p=&a;`，哪个 `printf` 调用错误？

<details class="exam-answer"><summary>展开答案</summary>

`printf("%d",p);`，对应 D；`%d` 与指针类型不匹配。

</details>

### 6. `fscanf` 的正确调用形式是什么？

<details class="exam-answer"><summary>展开答案</summary>

`fscanf(文件指针, 格式字符串, 输入表列)`，对应 D。

</details>

### 7. 结构变量按值传入函数并在函数内改形参，主程序输出什么？

<details class="exam-answer"><summary>展开答案</summary>

仍输出 `20041 703`，对应 D；被修改的是结构形参副本。

</details>

### 8. 题给结构指针表达式中，哪个值为 11？

<details class="exam-answer"><summary>展开答案</summary>

`++pt->x`，对应 C。

</details>

### 9. `typedef struct node {...} OLD;` 中，`OLD` 是什么？

<details class="exam-answer"><summary>展开答案</summary>

结构类型别名，对应 C。

</details>

### 10. 题给结构数组与指针中，哪个表达式值为 2？

<details class="exam-answer"><summary>展开答案</summary>

`*(++p)->m`，对应 D。

</details>

### 11. 怎样把嵌套结构中的生日设为 1988 年 5 月 10 日？

<details class="exam-answer"><summary>展开答案</summary>

依次给 `s.birth.year`、`s.birth.month`、`s.birth.day` 赋值，对应 D。

</details>

### 12. 题给结构数组中，哪个表达式得到第二个结点的 `age` 字段 1002？

<details class="exam-answer"><summary>展开答案</summary>

源答案为 `(*++p).age`，对应 D。

</details>

### 13. 哪种匿名结构与变量定义方式错误？

<details class="exam-answer"><summary>展开答案</summary>

先定义匿名结构变量 `student`，随后再写 `struct student std1;` 的方式错误，对应 D；前一步没有声明结构标记 `student`。

</details>

### 14. 对 `struct strutype {...} var;`，哪项叙述错误？

<details class="exam-answer"><summary>展开答案</summary>

“`var` 是用户定义的结构类型名”错误，对应 C；`var` 是结构变量。

</details>

### 15. 已知结构指针 `p=&std`，哪种成员引用不正确？

<details class="exam-answer"><summary>展开答案</summary>

`*p.age` 不正确，对应 D；应写 `p->age` 或 `(*p).age`。

</details>

## 填空题

### 1. 三次调用 `sub(x,y,&z)`，函数执行 `*z=y-x`，最终输出什么？

<details class="exam-answer"><summary>展开答案</summary>

`-5,-12,-7`。

</details>

### 2. `swap(int *p,int *q)` 只交换局部指针变量，主程序中的 `a`、`b` 是否交换？

<details class="exam-answer"><summary>展开答案</summary>

没有，输出 `a=10,b=20`。

</details>

### 3. `p=&a[2]` 后依次输出 `++*p` 和 `*--p`，结果是什么？

<details class="exam-answer"><summary>展开答案</summary>

`4 2`。

</details>

### 4. 手写字符串连接函数的循环赋值处填什么？

<details class="exam-answer"><summary>展开答案</summary>

源答案为 `*t`。每次把当前源字符赋给目标尾部，并在复制到 `\0` 后结束。

</details>

### 5. 结构数组指针执行 `printf("%c",*(++p)->y);` 输出什么？

<details class="exam-answer"><summary>展开答案</summary>

输出 `c`。

</details>

## 编程题提交

### 五子棋危险判断

<details class="exam-answer"><summary>查看提交实现</summary>

提交在二维棋盘上枚举起点，分别检查水平、竖直和两个对角方向连续四个同色棋子，并判断线段前后是否至少有一个空位，从而返回存在威胁的一方。

</details>

### 加密文件

<details class="exam-answer"><summary>查看提交实现</summary>

源目录保存 `encrypt.txt`、`output.txt` 和提交代码。实现逐字符读文件，按提交中规定的字符变换写出结果；独立题面与密钥规则未保存，因此这里不把代码中的规则扩写成教师原题。

</details>

### 通讯录整理

<details class="exam-answer"><summary>查看提交实现</summary>

提交从文件读取记录，按姓名比较并整理输出。它与“加密文件”保存在同一子目录，但代码任务彼此独立，故在本次作业中分别记录。

</details>

### 字符串替换（新）

<details class="exam-answer"><summary>查看提交实现</summary>

提交读取 `filein.txt`，查找目标字符串并生成替换后的 `fileout.txt`。源中同时有根目录 `.cpp` 和子目录 `.c` 版本；它们属于同一任务，这里去重为一项。

</details>

### 小型图书馆管理系统

<details class="exam-answer"><summary>查看提交实现</summary>

提交从 `books.txt` 读取图书记录，用结构数组保存并按关键字段排序，将整理结果写入 `ordered.txt`。任务展示了结构、文件与排序的组合使用。

</details>
