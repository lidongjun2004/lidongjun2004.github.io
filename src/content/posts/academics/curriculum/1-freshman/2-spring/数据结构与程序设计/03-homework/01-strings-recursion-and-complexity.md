---
title: 第 1 次作业 · 字符串、递归与复杂度
description: 第一次作业的客观题，以及源目录中保存的七个编程提交。
date: 2026-08-27
tags: ["作业"]
---

本次作业的选择、填空题题面与答案保存在“数据结构七次作业选填题目答案”及提交截图中。编程题未保存独立题面，下面只按源文件名列出可确认的任务，并整理我提交的实现，不反推输入输出约束。

## 选择题

### 1. `char a[7]="abcdef", b[4]="ABC"; strcpy(a,b); printf("%c",a[1]);` 的运行结果是什么？

<details class="exam-answer"><summary>展开答案</summary>

输出 `B`，对应 D。

</details>

### 2. 以下给字符数组 `str` 定义和赋值正确的是哪一项？

<details class="exam-answer"><summary>展开答案</summary>

`char str[] = "China";`，对应 B。

</details>

### 3. `char c[]="\t\v\\\0will\n"; printf("%d",strlen(c));` 的结果是什么？

<details class="exam-answer"><summary>展开答案</summary>

结果为 `3`，对应 B。`strlen` 在字符串内部的 `\0` 处停止。

</details>

### 4. 关于 C 语言字符数组，哪项描述错误？

<details class="exam-answer"><summary>展开答案</summary>

“可以在赋值语句中用 `=` 对字符数组整体赋值”错误，对应 C。

</details>

### 5. 哪个操作能完成字符串赋值并保证以 `\0` 结尾？

<details class="exam-answer"><summary>展开答案</summary>

`char *s; s = "ABCDE";`，对应 C。

</details>

### 6. `char a[3], b[]="China"; a=b;` 随后输出 `a`，结果怎样？

<details class="exam-answer"><summary>展开答案</summary>

编译出错，对应 D。数组名不能作为赋值运算符左值。

</details>

### 7. 递归函数 `try(n)` 在 `n>0` 时返回 `n*try(n-2)`，否则返回 1；`try(5)` 是多少？

<details class="exam-answer"><summary>展开答案</summary>

$5\times3\times1\times1=15$，对应 A。

</details>

### 8. 删除字符串中全部字符 `c` 的程序，循环内应填什么？

<details class="exam-answer"><summary>展开答案</summary>

`s[j++] = s[i];`，对应 A；仅把不等于 `c` 的字符向前压紧。

</details>

### 9. 对 `char *language[]={"FORTRAN","BASIC","PASCAL","JAVA","C"};`，哪项叙述错误？

<details class="exam-answer"><summary>展开答案</summary>

“`language` 包含 5 个相同长度的数组”错误，对应 D；它是含 5 个字符指针的数组。

</details>

### 10. `x=2; while(x<n/2) x=2*x;` 的时间复杂度是什么？

<details class="exam-answer"><summary>展开答案</summary>

$O(\log_2 n)$，对应 A。

</details>

## 填空题

### 1. 把字符数组 `"600"` 逐位累积为整数，最终输出什么？

<details class="exam-answer"><summary>展开答案</summary>

`600`。

</details>

### 2. `func(n)` 在 `n<=1` 时返回 1，否则返回 `2+n*func(n-1)`；`func(4)` 是多少？

<details class="exam-answer"><summary>展开答案</summary>

`58`。

</details>

### 3. 递归 Fibonacci 程序计算 `fib(6)`，输出什么？

<details class="exam-answer"><summary>展开答案</summary>

`8`。

</details>

### 4. 原地逆置字符串的 `invert` 函数中，临时变量和尾下标分别填什么？

<details class="exam-answer"><summary>展开答案</summary>

临时变量为 `k`，尾下标写 `strlen(str)-1`，两空对应 `k`、`-1`。

</details>

### 5. 函数把局部数组地址赋给形参 `q`，主函数随后通过未初始化的 `p` 输出字符串；程序是否正确？

<details class="exam-answer"><summary>展开答案</summary>

不正确。形参指针按值传递，而且局部数组离开函数后也失效。

</details>

### 6. 子串查找函数内层循环条件和成功条件分别是什么？

<details class="exam-answer"><summary>展开答案</summary>

可写 `t[k]!='\0' && s[j]==t[k]`；循环后若 `t[k]=='\0'`，说明模式串全部匹配。

</details>

### 7. 删除字符串中所有指定字符的 `squeez` 函数，两空怎样填？

<details class="exam-answer"><summary>展开答案</summary>

循环条件 `s[i]!='\0'`，保留字符时执行 `s[j++]=s[i]`。

</details>

### 8. 十进制转十六进制函数中，余数大于 9 时的字符偏移和末尾语句是什么？

<details class="exam-answer"><summary>展开答案</summary>

偏移量为 `-10`，循环结束后写 `s[i]='\0'`。

</details>

### 9. 递归逆序输出字符串但不改变原串，两处选择是什么？

<details class="exam-answer"><summary>展开答案</summary>

选择 C、B：遇到 `*a=='\0'` 返回，递归回来后输出 `*a`。

</details>

### 10. 合并两个已递增排列字符串的三处选择是什么？

<details class="exam-answer"><summary>展开答案</summary>

选择 A、D、A。

</details>

## 编程题提交

以下任务只保存了提交代码，没有独立题面。

### 全排列数的生成

<details class="exam-answer"><summary>查看提交实现</summary>

提交用 `num[1..n]` 保存当前排列，用 `cnt[i]` 标记数字是否已经使用。递归层数 `len==n` 时输出；否则依次尝试每个未使用数字，递归返回后撤销标记。这是标准的“选择—递归—撤销”回溯过程。

</details>

### 小数形式与科学计数法转换（简）

<details class="exam-answer"><summary>查看提交实现</summary>

提交按字符串读取小数。小于 1 时统计小数点后前导零并输出负指数；大于等于 1 时把首位作为有效数字开头、移除原小数点，并根据原整数部分长度输出正指数。

源实现使用了 `gets`，没有处理零、符号和多种非规范输入；这里只忠实记录提交范围。

</details>

### 扩展字符 A

<details class="exam-answer"><summary>查看提交实现</summary>

提交扫描字符串中的 `-`。当前后字符同为递增的大写字母、小写字母或数字时，输出二者之间的字符；否则原样输出 `-`。

</details>

### 表达式计算

<details class="exam-answer"><summary>查看提交实现</summary>

提交先去掉空格，再按整数、乘除、加减三个层次扫描。变量 `sum` 累积当前乘除项，遇到 `+` 或 `-` 时把它并入总答案，因而实现了乘除优先于加减。

保存的实现没有括号处理，除法为整数除法。

</details>

### 超长正整数的减法

<details class="exam-answer"><summary>查看提交实现</summary>

提交用字符串长度和字典序判断大小，必要时输出负号；把两数逆置后从低位逐位相减，用 `flag` 记录借位，最后去掉高位前导零并逆序输出。

</details>

### 三个“多选题”试验程序

<details class="exam-answer"><summary>查看提交内容</summary>

三个小程序分别验证指针数组表达式、越界字符数组写入和含内部 `\0` 字符串的 `strlen` 结果。第二个试验声明 `char str[0]` 后继续写入，行为未定义，只能作为当时的试验代码，不能当作正确用法。

</details>
