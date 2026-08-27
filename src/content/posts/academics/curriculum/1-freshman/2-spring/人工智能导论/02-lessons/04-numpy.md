---
title: "第 4 讲 · NumPy 入门"
description: "掌握 ndarray 的形状、索引、广播、统计运算和常用文件读写。"
date: 2026-08-27
---

机器学习数据经常是“很多样本 × 很多特征”的矩阵。Python 列表能表达这种结构，但逐元素循环慢、类型又不统一。NumPy 的 `ndarray` 用同一种数据类型连续组织元素，并把常见运算下沉到高效底层实现。

## 一维、二维和更高维

```python
import numpy as np

a = np.array([[1, 2, 3], [4, 5, 6]], dtype=np.float64)
print(a.ndim)      # 2
print(a.shape)     # (2, 3)
print(a.size)      # 6
print(a.dtype)     # float64
print(a.itemsize)  # 每个元素占 8 字节
```

`shape=(2,3)` 表示 2 行 3 列，不要把 `size` 误当成形状。机器学习里常把第 0 维设为样本，第 1 维设为特征。

常用创建方式：

```python
np.arange(0, 10, 2)          # [0, 2, 4, 6, 8]
np.linspace(0, 1, 5)         # 包含端点的 5 个等间隔数
np.zeros((2, 3))
np.ones((2, 3))
np.full((2, 3), 7)
np.eye(3)
rng = np.random.default_rng(42)
rng.normal(0, 1, size=(2, 3))
```

`arange` 更像带步长的 `range`，浮点端点可能受精度影响；明确要“几个等间隔点”时优先 `linspace`。

## 改形状不等于改数据

```python
x = np.arange(12)
y = x.reshape(3, 4)
z = y.T
flat_copy = y.flatten()
flat_view = y.ravel()
```

`reshape` 在元素总数不变时重排形状；`resize` 可能直接修改原数组；`swapaxes` 交换轴；`astype` 转类型；`tolist` 回到 Python 列表。`flatten` 总会复制，`ravel` 尽量返回视图，因此修改后者可能影响原数组。是否共享内存不能靠猜，关键代码可用 `np.shares_memory` 检查。

## 索引、切片与视图

```python
a = np.arange(12).reshape(3, 4)
a[1, 2]       # 第 2 行第 3 列
a[:, 1]       # 所有行的第 2 列
a[0:2, 1:3]   # 前两行、中间两列
a[a % 2 == 0] # 布尔索引
```

基础切片通常返回视图，花式索引和布尔索引通常返回副本。这和 Python 列表切片不同，是 NumPy 中最容易出现“为什么原数组也变了”的地方。

## 向量化与广播

```python
a = np.array([[1, 2, 3], [4, 5, 6]])
a * 10
a + np.array([10, 20, 30])
```

第二个加法没有手写循环。NumPy 从最后一维向前比较形状：两个维度相等，或其中一个为 1，就能广播。`(2,3)` 与 `(3,)` 兼容，后者被理解为每一行都加同一向量；`(2,3)` 与 `(2,)` 不兼容。

常见的一元函数有 `sqrt`、`exp`、`log`、`sin`；二元函数有 `maximum`、`minimum`。`*` 是逐元素乘法，矩阵乘法写 `@` 或 `np.matmul`：

```python
A @ B
```

## 聚合与 axis

```python
a.sum()
a.mean(axis=0)  # 每列均值
a.mean(axis=1)  # 每行均值
a.std(axis=0)
a.var(axis=0)
np.median(a, axis=0)
a.min(axis=0)
a.argmax(axis=1)
```

`average` 还可传权重，和简单 `mean` 不同。`argmin/argmax` 返回极值位置，不是极值本身。累计计算可用 `cumsum`、`cumprod`；离散梯度可用 `np.gradient`，第 5 讲的图像手绘效果正会用到它。

## 文件读写要同时保存“解释方式”

文本 CSV 便于查看：

```python
np.savetxt("data.csv", a, delimiter=",")
b = np.loadtxt("data.csv", delimiter=",")
```

`tofile/fromfile` 直接保存原始字节，文件本身不记录形状和数据类型，读取时必须准确知道 `dtype` 和 `shape`，否则同一串字节会被误解。更稳妥的是：

```python
np.save("array.npy", a)
loaded = np.load("array.npy")
np.savez("arrays.npz", train=a, test=b)
```

`.npy/.npz` 会保存数组元信息。表格带列名、缺失值和混合类型时，交给下一讲的 Pandas 更合适。
