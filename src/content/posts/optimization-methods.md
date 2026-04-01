---
title: "最优化方法入门"
description: "从基础概念到梯度下降，理解优化算法的核心思想"
date: 2026-01-10
section: "academics"
category:
  - "Mathematics"
  - "Optimization"
tags: ["math", "optimization", "gradient-descent"]
---

最优化方法是数学与工程的交汇点，也是机器学习的基石。本文梳理最优化方法的基础概念和核心算法。

## 基础概念

### 数学模型

一般的最优化问题可以表示为：

$$\min f(\mathbf{x})$$

$$\text{s.t. } \mathbf{x} \in \Omega$$

其中 $f(\mathbf{x})$ 是**目标函数**，$\Omega$ 是**可行域**。

### 分类

- **线性规划**：目标函数与约束函数都是线性的
- **非线性规划**：含有非线性函数
- **凸优化**：目标函数为凸函数，可行域为凸集

## 梯度下降法

梯度下降是最基础也是最重要的优化算法。其核心思想是沿着目标函数的负梯度方向逐步迭代：

$$\mathbf{x}_{k+1} = \mathbf{x}_k - \alpha_k \nabla f(\mathbf{x}_k)$$

其中 $\alpha_k > 0$ 是**步长**（学习率）。

### 步长选择

步长的选择对收敛速度至关重要：

- **固定步长**：简单但可能不收敛或收敛很慢
- **精确线搜索**：$\alpha_k = \arg\min_{\alpha > 0} f(\mathbf{x}_k - \alpha \nabla f(\mathbf{x}_k))$
- **Armijo 条件**：$f(\mathbf{x}_k - \alpha \nabla f) \leq f(\mathbf{x}_k) - c \alpha \|\nabla f\|^2$

### 收敛性

对于 $L$-光滑的凸函数，取步长 $\alpha = \frac{1}{L}$，梯度下降的收敛速率为：

$$f(\mathbf{x}_k) - f(\mathbf{x}^*) \leq \frac{L \|\mathbf{x}_0 - \mathbf{x}^*\|^2}{2k}$$

这是 $O(1/k)$ 的收敛速率。

## 牛顿法

牛顿法利用二阶信息（Hessian 矩阵）加速收敛：

$$\mathbf{x}_{k+1} = \mathbf{x}_k - [\nabla^2 f(\mathbf{x}_k)]^{-1} \nabla f(\mathbf{x}_k)$$

牛顿法在最优解附近具有**二次收敛**速率，但代价是需要计算和求逆 Hessian 矩阵。

## 总结

| 方法 | 收敛速率 | 每步代价 |
|------|---------|---------|
| 梯度下降 | $O(1/k)$ | $O(n)$ |
| 牛顿法 | 二次 | $O(n^3)$ |
| 拟牛顿法 | 超线性 | $O(n^2)$ |

选择哪种方法，取决于问题的规模、结构和精度要求。
