---
title: "操作系统 Lab 0：Linux、Git、Makefile 与 Shell"
description: "OS 2025 Lab 0 的实验要求与我当时的实验报告，内容包括命令行、Git、Makefile、Shell 和基础 C 程序。"
date: 2026-08-27
tags: ["作业"]
---

## 实验要求

根据实验指导书，Lab 0 的实战部分包括四组任务：

1. 补全 `palindrome.c` 判断 1 到 10000 的整数是否为回文数；补全 Makefile；补全 `hello_os.sh`，抽取输入文件第 8、32、128、512、1024 行；按规定目录提交。
2. 补全 `changefile.sh`：删除 `file71` 至 `file100`，把 `file41` 至 `file70` 重命名为 `newfile41` 至 `newfile70`。
3. 补全 `search.sh`：找出文件中包含指定字符串的所有行号并写入结果文件，匹配区分大小写。
4. 补全 `modify.sh` 替换源文件中的字符串；修改两级 Makefile，使 `make` 能编译斐波那契程序、`make clean` 只删除目标文件。

## 我在报告中回答的思考题

### Thinking 0.1：Git 文件状态

执行 `cat Untracked.txt`、`cat Stage.txt` 和 `cat Modified.txt`，比较 `README.txt` 所处位置，并说明最后的状态与第一次 `git add` 前是否相同。

<details class="exam-answer">
<summary>查看我当时的实验报告</summary>

`Untracked.txt` 中显示 `README.txt` 是未跟踪文件，说明它位于工作区，尚未进入暂存区。`Stage.txt` 中显示它是要提交的变更，说明文件已经暂存但尚未提交。`Modified.txt` 中显示它是尚未暂存的变更，说明文件已被跟踪但修改尚未暂存。

最后的状态与第一次执行 `git add` 之前不同，区别在于文件是否已被跟踪：最开始是 Untracked，最后是 Modified。

</details>

### Thinking 0.2：Git 状态图中的命令

状态图中 `add the file`、`stage the file` 和 `commit` 分别对应哪些 Git 命令？

<details class="exam-answer">
<summary>查看我当时的实验报告</summary>

- `add the file`：`git add [filename]`
- `stage the file`：`git add [filename]`
- `commit`：`git commit -m [comment]`

</details>

### Thinking 0.3：恢复和移出暂存区

1. `print.c` 被错误删除时，如何恢复？
2. 删除后又执行了 `git rm print.c`，如何恢复？
3. `hello.txt` 已加入暂存区，如何在不删除文件的情况下把它移出暂存区？

<details class="exam-answer">
<summary>查看我当时的实验报告</summary>

```bash
git checkout -- print.c
git reset HEAD print.c
git rm --cached hello.txt
```

</details>

### Thinking 0.4：版本回退

依次执行 `git reset --hard HEAD^`、回到提交说明为 1 的提交、再回到提交说明为 3 的提交，观察 `git log`。

<details class="exam-answer">
<summary>查看我当时的实验报告</summary>

- 第一次回退后，`git log` 中有说明为 1 和 2 的两条提交记录。
- 回到说明为 1 的提交后，只剩说明为 1 的记录。
- 再回到说明为 3 的提交后，记录恢复为 1、2、3 三条。

</details>

### Thinking 0.5：输出重定向

依次执行：

```bash
echo first
echo second > output.txt
echo third > output.txt
echo forth >> output.txt
```

<details class="exam-answer">
<summary>查看我当时的实验报告</summary>

第一次命令直接输出 `first`。`second` 被写入文件；随后单个 `>` 用 `third` 覆盖原内容；最后 `>>` 把 `forth` 追加到文件末尾。因此最终文件是：

```text
third
forth
```

</details>

### Thinking 0.6：批处理与转义

使用重定向创建名为 `test` 的批处理文件，把创建命令写入 `command`，运行 `test` 并把结果写入 `result`。解释结果，并比较带引号和不带引号的 `echo` 命令。

<details class="exam-answer">
<summary>查看我当时的实验报告</summary>

我当时在报告中写的脚本先令 `a=1`、`b=2`、`c=a+b=3`，再依次把 `c`、`b`、`a` 写入三个文件，最后合并到 `file4` 并输出到 `result`，结果为：

```text
3
2
1
```

我在报告中记录：`echo echo Shell Start` 与 `echo 'echo Shell Start'` 效果相同；`echo echo \$c>file1` 与 `echo 'echo \$c>file1'` 效果不同，前者把 `echo $c` 写入 `file1`，后者在屏幕输出带重定向符号的文本。

</details>

## 我当时记录的难点与体会

<details class="exam-answer">
<summary>查看我当时的实验报告</summary>

我在报告中把 Lab 0 概括为 Linux 基础与进阶操作、Git、Makefile 和 Shell 脚本。当时我对 Linux 基础文件操作和 Git 较熟悉；更复杂的文件操作、Makefile 的执行逻辑和 Shell 的符号匹配是主要困难。

Lab 0 的目的主要是熟悉后续实验会用到的工具。知识点较零散，需要靠练习巩固，也让人直观感受到从计算机底层走向软件抽象需要掌握大量实践技巧。

</details>
