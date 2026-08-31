---
title: "作业三：曲线曲面或网格处理"
description: "在 Bezier 曲线与曲面分支、Loop 网格细分分支中二选一完成几何建模任务"
date: 2026-08-27
tags: ["作业"]
---

## 题目

本次作业主要考核 Bezier 曲线、Bezier 曲面、网格表示、半边结构和网格细分。以下两个分支二选一。

### 分支 A：曲线曲面

1. 用一段或多段 Bezier 曲线表示一个圆，简述原理，并用 de Casteljau 算法绘制封闭曲线及控制点。（4 分）
2. 根据 teapot.py 给出的 32 个分块双三次 Bezier 曲面的控制点，渲染 Utah Teapot 曲面。（6 分）

### 分支 B：网格处理

读取 bunny.obj 三角网格并转为半边结构，完成两轮 Loop 细分，渲染细分前后网格，并把细分后网格保存为 OBJ 后提交。（10 分）

提交代码与报告，说明实现过程并给出渲染图像。

<details class="exam-answer">
<summary>查看所选分支与提交结果</summary>

我当时选择了**分支 A：曲线曲面**，没有提交 bunny 网格与 Loop 细分结果。

## 1. 分段 Bezier 近似圆

实现把圆分成四个象限，每个象限用三次 Bezier 曲线近似，并用 de Casteljau 的递归线性插值求点：

$$
\mathbf P_i^{(r)}
=(1-t)\mathbf P_i^{(r-1)}
+t\mathbf P_{i+1}^{(r-1)}.
$$

四段共用端点后形成封闭曲线：

![四段 Bezier 圆与控制点](/images/academics/computer-graphics/homework-3-bezier-circle.png)

源代码的中间控制坐标取 $0.5$。需要注意，三次 Bezier 不能精确表示圆；常见四分之一圆近似会取

$$
\kappa=\frac{4(\sqrt2-1)}{3}\approx0.55228475
$$

来减小径向误差。源结果属于可见上接近圆的近似，不是解析意义的精确圆。

## 2. Utah Teapot

程序把每个 patch 的 16 个控制点还原成 $4\times4$ 网格，按

$$
\mathbf S(u,v)
=
\sum_{i=0}^3\sum_{j=0}^3
B_i^3(u)B_j^3(v)\mathbf P_{ij}
$$

采样双三次 Bezier 曲面，再用 OpenGL 绘制 32 个 patch 的线框：

![Utah Teapot 双三次 Bezier 曲面](/images/academics/computer-graphics/homework-3-utah-teapot.png)

</details>
