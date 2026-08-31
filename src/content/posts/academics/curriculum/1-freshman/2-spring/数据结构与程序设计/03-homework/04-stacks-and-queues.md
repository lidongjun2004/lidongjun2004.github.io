---
title: 第 4 次作业 · 栈与队列
description: 第四次作业的栈队列客观题，以及括号、表达式、编辑器和排队模拟提交。
date: 2026-08-27
tags: ["作业"]
---

客观题来自课程答案 PDF；编程题只保存了我提交的代码，题面缺失处不扩写。

## 选择题

### 1. 栈和队列都属于什么结构？

<details class="exam-answer"><summary>展开答案</summary>

限制存取点的线性结构，对应 C。

</details>

### 2. 递归过程或函数调用保存参数和返回地址使用什么结构？

<details class="exam-answer"><summary>展开答案</summary>

栈，对应 C。

</details>

### 3. 给定栈入队组合产生出队序列 `e2,e4,e3,e6,e5,e1`，栈容量至少多少？

<details class="exam-answer"><summary>展开答案</summary>

3，对应 C。

</details>

### 4. 输入序列 `1,2,3,4,5` 的合法出栈序列是哪一个？

<details class="exam-answer"><summary>展开答案</summary>

`3,2,1,5,4`，对应 D。

</details>

### 5. 入栈序列 `a,b,c,d,e` 的不可能出栈序列是哪一个？

<details class="exam-answer"><summary>展开答案</summary>

`d,c,e,a,b`，对应 C。

</details>

### 6. 中缀表达式 `A-(B+C/D)*E` 的后缀形式是什么？

<details class="exam-answer"><summary>展开答案</summary>

`ABCD/+E*-`，对应 B。

</details>

### 7. 在非空双向循环链表的 `q` 前插入 `p`，最后一条链接语句是什么？

<details class="exam-answer"><summary>展开答案</summary>

在先设置 `p->rlink=q`、`p->llink=q->llink`、`q->llink=p` 后，执行 `p->llink->rlink=p`，对应 D。

</details>

### 8. 顺序存储的栈和队列，哪项说法正确？

<details class="exam-answer"><summary>展开答案</summary>

队列非空时可以出队，对应 C。

</details>

### 9. 主机与打印机之间的输出缓冲区应采用什么逻辑结构？

<details class="exam-answer"><summary>展开答案</summary>

队列，对应 B。

</details>

### 10. 循环队列数组为 `A[0..n-1]`，`front`、`rear` 分别指向队头和队尾，第一个元素要放在 `A[0]`，初值是什么？

<details class="exam-answer"><summary>展开答案</summary>

`front=0,rear=n-1`，对应 B。

</details>

### 11. 队列允许的基本操作是什么？

<details class="exam-answer"><summary>展开答案</summary>

删除队头元素，对应 D。

</details>

### 12. `a` 到 `h` 依次进栈，按 `d,f,e,c,h,g,b,a` 出栈，栈容量至少多少？

<details class="exam-answer"><summary>展开答案</summary>

3，对应 C。

</details>

### 13. 容量 6 的循环队列当前 `rear=0,front=3`，出队一次再入队两次，二者变成多少？

<details class="exam-answer"><summary>展开答案</summary>

`rear=2,front=4`，对应 B。

</details>

## 填空题

### 1. 补全判断字符串是否对称的函数

<details class="exam-answer"><summary>展开答案</summary>

形参可写 `char s[]` 或 `char *s`；求末尾时执行 `j++`；最后可返回 `j<=i ? 1 : 0`。

</details>

### 2. 入栈顺序 `1234`，要得到出栈顺序 `1342`，操作串是什么？

<details class="exam-answer"><summary>展开答案</summary>

`SXSSXSXX`，其中 `S` 入栈、`X` 出栈。

</details>

### 3. `1..30` 依次入栈，若第一个出栈元素为 30，第十个出栈元素是什么？

<details class="exam-answer"><summary>展开答案</summary>

21。

</details>

### 4. 对 `a,b,c,d,e` 执行 `PUSH,PUSH,POP,PUSH,POP,PUSH,PUSH`，已产生的出栈序列是什么？

<details class="exam-answer"><summary>展开答案</summary>

`b,c`。

</details>

### 5. `3+x*(2.4/5-6)` 的后缀表达式是什么？

<details class="exam-answer"><summary>展开答案</summary>

`3 x 2.4 5 / 6 - * +`。

</details>

### 6. 栈 `R` 从顶到底为 `{2,4,6,8,10}`，依次移入队列再移回栈，结果怎样？

<details class="exam-answer"><summary>展开答案</summary>

从顶到底为 `{10,8,6,4,2}`。

</details>

### 7. 课程题目采用的循环队列满时，队列中有多少个元素？

<details class="exam-answer"><summary>展开答案</summary>

源答案接受 `M` 或 `M-1`，说明题面没有在此处固定“是否牺牲一个单元”的实现约定；应以具体 `front/rear` 定义为准。

</details>

## 编程题提交

### C 程序括号匹配审查

<details class="exam-answer"><summary>查看提交实现</summary>

提交扫描 C 源程序，并用栈检查括号的嵌套与配对。源目录另有 `example.c` 作为输入样例，不是第二份答案。

</details>

### 文本编辑操作模拟（简）

<details class="exam-answer"><summary>查看提交实现</summary>

提交用线性缓冲区维护文本，并按操作序列完成插入、删除等编辑动作。独立题面未保存，具体命令格式不作补写。

</details>

### 栈操作（栈-基本题）

<details class="exam-answer"><summary>查看提交实现</summary>

提交用数组实现栈，按输入命令完成进栈、出栈和状态输出，并处理空栈条件。

</details>

### 计算器（后缀表达式实现，结果为浮点）

<details class="exam-answer"><summary>查看提交实现</summary>

提交先处理表达式记号，再用数值栈计算后缀表达式。遇到运算符时先弹右操作数、再弹左操作数，结果重新入栈；同时保留浮点除法。

</details>

### 银行排队模拟（生产者-消费者模拟）

<details class="exam-answer"><summary>查看提交实现</summary>

提交按客户类别维护等待队列，模拟到达、服务与离开过程。队列保证同一类别内按到达先后处理，分类规则由保存代码确定。

</details>
