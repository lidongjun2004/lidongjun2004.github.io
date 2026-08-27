---
title: "第 3 讲 · Python 基础"
description: "围绕对象、容器、控制流和函数建立后续数据分析代码所需的 Python 基础。"
date: 2026-08-27
---

从这一讲开始，课程暂时从“人工智能是什么”转向“怎样把算法写出来”。Python 的语法不难，真正值得理解的是它的对象模型：变量不是盒子，而是指向对象的名字。这个细节会直接影响列表复制、函数参数和 NumPy/Pandas 的修改行为。

## 先认识一段最小程序

```python
name = input("你的名字：")
score = 86

if score >= 60:
    print(f"{name}：通过，成绩 {score}")
else:
    print(f"{name}：未通过")
```

Python 用缩进表示代码块，不用大括号。标识符可以包含字母、数字和下划线，但不能以数字开头，也不能使用关键字。`#` 后是单行注释。格式化字符串 `f"...{变量}..."` 比手工拼接更清楚。

## 变量、对象与可变性

每个对象都有身份、类型和值。赋值只是让新名字指向同一个对象：

```python
a = [1, 2, 3]
b = a
b.append(4)
print(a)  # [1, 2, 3, 4]
```

`a` 和 `b` 指向同一个列表，因此从任何一个名字修改，另一个都能看到。如果只想复制外层列表：

```python
b = a.copy()
# 或 b = a[:]
```

浅复制仍会共享内部嵌套对象；嵌套结构要完全独立时，用 `copy.deepcopy`。数字、字符串、元组通常视为不可变对象，列表、字典和集合是可变对象。

`==` 比较值，`is` 比较是不是同一个对象。判断空值应写 `x is None`，不要写 `x == None`。

## 常见数据类型

布尔值只有 `True`、`False`。整数可任意精度，浮点数遵循有限精度表示。`+ - * / // % **` 分别对应加减乘、真除法、整除、取余和乘方。

序列都支持从 0 开始的索引和切片：

```python
items = [10, 20, 30, 40, 50]
items[0]      # 10
items[-1]     # 50
items[1:4]    # [20, 30, 40]
items[::2]    # [10, 30, 50]
items[::-1]   # 反转
```

切片遵循左闭右开 `[start, stop)`。列表可修改；元组适合表示不应变化的记录；字符串是字符序列但不可变。字典用键查值：

```python
student = {"name": "Lee", "score": 86}
student["score"] += 4
for key, value in student.items():
    print(key, value)
```

访问可能不存在的键时，`student.get("rank")` 会返回 `None`，比直接索引更稳妥。

## 控制流：选择与重复

```python
for number in range(1, 11):
    if number % 2 == 0:
        continue
    if number > 7:
        break
    print(number)
```

`continue` 跳过本轮剩余语句，`break` 直接结束循环。`while` 适合“不知道要循环几次，只知道停止条件”的问题，例如猜数字：

```python
secret = 7
while True:
    guess = int(input("猜一个整数："))
    if guess == secret:
        print("猜中了")
        break
    print("太小" if guess < secret else "太大")
```

外部输入先是字符串，做数值运算前要显式转换，并考虑非法输入。

## 函数：把输入到输出的规则封装起来

```python
def mean(values, *, digits=2):
    """计算序列均值，并保留指定小数位。"""
    if not values:
        raise ValueError("values 不能为空")
    result = sum(values) / len(values)
    return round(result, digits)
```

位置参数按顺序传入，关键字参数按名字传入。上例中的 `*` 让 `digits` 必须写成关键字，调用意图更清楚。函数没有显式 `return` 时返回 `None`。

参数传递仍然是“把对象绑定给局部名字”。如果函数修改传入的可变对象，调用者能看到变化；若在函数内部重新赋值局部名字，调用者的名字不受影响。

## 模块与标准库

模块就是可导入的 Python 文件。推荐：

```python
import math
from pathlib import Path

radius = 3
area = math.pi * radius**2
data_path = Path("data") / "iris.csv"
```

避免 `from module import *`，因为来源不清、容易重名。标准库已经提供文件路径、CSV、JSON、随机数、日期等工具，写代码前先查是否已有实现。

## 写得能复现，比写得短重要

课程后续作业会用 Jupyter Notebook。一个能复现的 Notebook 至少要做到：从头到尾按顺序运行不报错；数据路径说明清楚；随机过程固定种子；关键中间结果有解释；不要依赖“之前偷偷运行过、后来删掉”的变量。

好的命名和空行不是形式主义。`test_size` 比 `a` 更能防错，短函数比一大段连续代码更容易验证。下一讲的 NumPy 会把 Python 的对象和切片规则扩展到多维数组。
