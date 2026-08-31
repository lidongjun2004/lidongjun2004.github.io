---
title: "计算机组成实验 2：MIPS 汇编进阶"
description: "我在计算机组成实验 2 中提交的冒泡排序、回文串判断和汉诺塔三个 MIPS 汇编程序。"
date: 2026-08-27
tags: ["作业"]
---

> 我保留的实验目录中没有独立题目文件。课程介绍只把这一阶段称为“汇编进阶”；下面的三个任务名称和内容均根据我提交的文件还原，我不补写输入范围、输出格式或评测限制。

## 我提交的文件

- `冒泡排序.asm`
- `回文串判断.asm`
- `汉诺塔.asm`

<details class="exam-answer">
<summary>查看我提交的冒泡排序</summary>

```asm
.macro exit()
    li $v0, 10
    syscall
.end_macro

.macro dot()
    li $v0, 11
    li $a0, 44
    syscall
.end_macro

.macro print_int(%n)
    li $v0, 1
    move $a0, %n
    syscall
.end_macro

.macro read_int(%n)
    li $v0, 5
    syscall
    move %n, $v0
.end_macro

.macro print_char(%n)
    li $v0, 11
    move $a0, %n
    syscall
.end_macro

.macro bubble_sort(%arr, %len)
    li $t1, 0
loopi:
    bge $t1, %len, loopi_end
    li $t2, 0
    sub $t0, %len, $t1
loopj:
    bge $t2, $t0, loopj_end
    mul $t3, $t2, 4
    addi $t4, $t3, 4
    lw $t5, %arr($t3)
    lw $t6, %arr($t4)
    ble $t5, $t6, if_out
    move $t7, $t5
    move $t5, $t6
    move $t6, $t7
    sw $t5, %arr($t3)
    sw $t6, %arr($t4)
if_out:
    addi $t2, $t2, 1
    j loopj
loopj_end:
    addi $t1, $t1, 1
    j loopi
loopi_end:
.end_macro

.data
array: .space 4050

.text
    read_int($s0)
    addi $s1, $s0, -1
    li $t1, 0
loop1:
    bge $t1, $s0, loop1_end
    read_int($t2)
    mul $t3, $t1, 4
    sw $t2, array($t3)
    addi $t1, $t1, 1
    j loop1
loop1_end:
    bubble_sort(array, $s1)
    li $t1, 91
    print_char($t1)
    li $t1, 0
    lw $t3, array($t1)
    print_int($t3)
    addi $t1, $t1, 1
loop2:
    bge $t1, $s0, loop2_end
    mul $t2, $t1, 4
    lw $t3, array($t2)
    dot()
    print_int($t3)
    addi $t1, $t1, 1
    j loop2
loop2_end:
    li $t1, 93
    print_char($t1)
    exit()
```

</details>

<details class="exam-answer">
<summary>查看我提交的回文串判断</summary>

```asm
.macro exit()
    li $v0, 10
    syscall
.end_macro

.macro read_int(%n)
    li $v0, 5
    syscall
    move %n, $v0
.end_macro

.macro print_str(%n)
    li $v0, 4
    la $a0, %n
    syscall
.end_macro

.macro read_str(%n, %l)
    li $v0, 8
    la $a0, %n
    li $a1, %l
    syscall
.end_macro

.data
YES: .asciiz "YE5"
NO:  .asciiz "N0"
str: .space 105

.text
    read_int($t0)
    read_str(str, 105)
    addi $t2, $t0, -1

loop:
    bge $t1, $t2, yes
    lb $s1, str($t1)
    lb $s2, str($t2)
    bne $s1, $s2, no
    addi $t1, $t1, 1
    addi $t2, $t2, -1
    j loop
no:
    print_str(NO)
    exit()
yes:
    print_str(YES)
    exit()
```

</details>

<details class="exam-answer">
<summary>查看我提交的汉诺塔</summary>

```asm
.macro exit()
    li $v0, 10
    syscall
.end_macro

.macro endl()
    li $v0, 11
    li $a0, 10
    syscall
.end_macro

.macro read_int(%n)
    li $v0, 5
    syscall
    move %n, $v0
.end_macro

.macro print_str(%n)
    li $v0, 4
    la $a0, %n
    syscall
.end_macro

.macro print_reg_str(%n)
    li $v0, 4
    la $a0, (%n)
    syscall
.end_macro

.macro swap(%a, %b)
    move $s7, %a
    move %a, %b
    move %b, $s7
.end_macro

.macro print(%from, %to)
    print_reg_str(%from)
    print_str(arrow)
    print_reg_str(%to)
    endl()
.end_macro

.macro check(%num, %from, %to)
    bgt %num, 1, else
    print(%from, %to)
    jr $ra
else:
.end_macro

.macro hanoi(%num, %from, %via, %to)
    move $t0, %num
    move $t1, %from
    move $t2, %via
    move $t3, %to
    jal hanoi
    j end
hanoi:
    check($t0, $t1, $t3)
    addi $sp, $sp, -20
    sw $ra, 0($sp)
    sw $t0, 4($sp)
    sw $t1, 8($sp)
    sw $t2, 12($sp)
    sw $t3, 16($sp)
    swap($t2, $t3)
    addi $t0, $t0, -1
    jal hanoi
    lw $t0, 4($sp)
    lw $t1, 8($sp)
    lw $t2, 12($sp)
    lw $t3, 16($sp)
    print($t1, $t3)
    swap($t1, $t2)
    addi $t0, $t0, -1
    jal hanoi
    lw $ra, 0($sp)
    lw $t0, 4($sp)
    lw $t1, 8($sp)
    lw $t2, 12($sp)
    lw $t3, 16($sp)
    addi $sp, $sp, 20
    jr $ra
.end_macro

.data
A: .asciiz "A"
B: .asciiz "B"
C: .asciiz "C"
arrow: .asciiz "->"

.text
    read_int($s0)
    la $t1, A
    la $t2, B
    la $t3, C
    hanoi($s0, $t1, $t2, $t3)
end:
    exit()
```

</details>
