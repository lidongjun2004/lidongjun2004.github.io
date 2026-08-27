---
title: "速成 · 工科高等代数"
description: "把空间解析几何、线性方程、矩阵、特征理论和二次型串成一条考前主线。"
date: 2026-08-27
tags: ["速成"]
---

高等代数的题目从行列式一路变到二次型，但动手时总会落回三个问题：

1. **解方程**：约束之间有没有矛盾，有多少个自由方向？
2. **换坐标**：能不能选一组更好的基，把复杂变换看成简单伸缩？
3. **读几何**：内积、正交和二次型在说什么长度、角度与正负性？

考前应先把这条主线接起来，再练计算。

## 三个问题怎样串起来

| 模块 | 先问什么 | 统一工具 | 最终要会什么 |
|---|---|---|---|
| 空间解析几何 | 点、方向、法向在哪？ | 点积、叉积、混合积 | 平面/直线方程、夹角、距离 |
| 线性方程 | 约束是否相容？ | 增广矩阵和高斯消元 | 唯一/无穷多/无解、通解 |
| 向量与线性空间 | 有多少个独立方向？ | 线性相关和秩 | 基、坐标、维数、子空间 |
| 行列式与矩阵 | 变换有没有压扁空间？ | 初等变换 | 行列式、秩、逆、分块 |
| 内积与正交 | 最近的向量在哪？ | Gram-Schmidt 和投影 | 正交基、正交补、距离 |
| 特征理论 | 哪些方向在变换下不转向？ | $\det(\lambda I-A)=0$ | 相似、对角化、高次幂 |
| 二次型 | 每个主方向上是正还是负？ | 实对称矩阵正交对角化 | 标准形、惯性、正定 |
| Jordan 形 | 特征向量不够怎么办？ | 广义特征向量链 | 读 Jordan 块、降低矩阵函数难度 |

## 必须立即反应的等价链

对 $n$ 阶方阵 $A$：

$$
\begin{aligned}
A\text{ 可逆}
&\Longleftrightarrow \det A\ne0\\
&\Longleftrightarrow \operatorname{rank}(A)=n\\
&\Longleftrightarrow A\boldsymbol x=0\text{ 只有零解}\\
&\Longleftrightarrow A\boldsymbol x=\boldsymbol b
\text{ 对每个 }\boldsymbol b\text{ 有唯一解}.
\end{aligned}
$$

对 $m\times n$ 矩阵 $A$，不能用行列式，只能用秩：

$$
\dim N(A)=n-\operatorname{rank}(A).
$$

对非齐次方程：

$$
\begin{cases}
\operatorname{rank}(A)<\operatorname{rank}([A\mid\boldsymbol b]) & \text{无解},\\
\operatorname{rank}(A)=\operatorname{rank}([A\mid\boldsymbol b])=n & \text{唯一解},\\
\operatorname{rank}(A)=\operatorname{rank}([A\mid\boldsymbol b])<n & \text{无穷多解}.
\end{cases}
$$

## 四类大题的固定流程

### 1. 带参数方程组

1. 写增广矩阵；
2. 优先用常数主元消元，不要过早除以含参数的式子；
3. 根据最后的「参数因子×未知量 = 参数常数」分情况；
4. 每种情况比较系数秩与增广秩；
5. 有无穷多解时，明确选自由变量并写向量形通解。

### 2. 特征值与对角化

1. 求 $\det(\lambda I-A)=0$；
2. 对每个 $\lambda$ 解 $(A-\lambda I)\boldsymbol v=0$；
3. 数一共得到多少个独立特征向量；
4. 足 $n$ 个则按列排成 $P$，并让 $D$ 中特征值顺序与列对应；
5. 若 $A$ 实对称，对每个特征子空间正交化、归一化，得 $Q^TAQ=D$。

### 3. 二次型

1. 把 $x_ix_j$ 的系数平分到 $a_{ij},a_{ji}$，写出实对称矩阵 $A$；
2. 要求正交变换就对 $A$ 正交对角化；未要求时也可配方；
3. 写清变换 $\boldsymbol x=Q\boldsymbol y$ 或具体换元；
4. 用特征值、惯性指数或顺序主子式判定正定性。

### 4. 空间直线和平面

1. 从已知条件取一个点；
2. 把平行/垂直/相交翻译成方向向量与法向量的关系；
3. 需要同时垂直于两个方向时用叉积；
4. 代入点法式或参数式；
5. 最后用原条件回代检查。

## 高频公式，但要知道来源

### 几何

$$
\operatorname{proj}_{\boldsymbol b}\boldsymbol a
=\frac{\boldsymbol a\cdot\boldsymbol b}
{\boldsymbol b\cdot\boldsymbol b}\boldsymbol b,
$$

$$
d(P,L)=
\frac{\lVert\overrightarrow{P_0P}\times\boldsymbol s\rVert}
{\lVert\boldsymbol s\rVert},
$$

$$
d(P,\Pi)=
\frac{|Ax_P+By_P+Cz_P+D|}
{\sqrt{A^2+B^2+C^2}}.
$$

它们分别来自投影、平行四边形面积除底和法向投影。

### 行列式与矩阵

$$
\det(AB)=\det A\det B,
\qquad
\det(kA)=k^n\det A,
$$

$$
(AB)^{-1}=B^{-1}A^{-1},
\qquad
(AB)^T=B^TA^T.
$$

遇到逆或转置，乘法顺序要反过来。

### 正交与特征理论

$$
Q^TQ=I
\Longrightarrow
Q^{-1}=Q^T,
$$

$$
A=PDP^{-1}
\Longrightarrow
A^n=PD^nP^{-1}.
$$

对实对称矩阵，$Q$ 可以选为正交矩阵。

## 判断题最常设的坑

- $\det A>0$ **不能**单独保证 $A$ 正定；必须检查全部特征值或全部顺序主子式。
- $AB=0$ **不能**推出 $A=0$ 或 $B=0$，也只能推出 $\operatorname{rank}(A)+\operatorname{rank}(B)\le n$，不是一定等于 $n$。
- 两个对称矩阵的积**不一定**对称；还要求两者可交换。
- 线性无关的特征向量数足 $n$ 才可对角化；「有 $n$ 个特征值，计重数」不够。
- $m<n$ 可保证 $m\times n$ 齐次方程有非零解，但不保证非齐次方程有解。
- 非齐次解集通常不是子空间，它是「一个特解 + 齐次解空间」。

## 三天复习顺序

### 第一天：把基础计算练成肌肉记忆

- 高斯消元、带参数解的分类；
- 行列式化三角、余子展开；
- 矩阵求逆、秩和分块运算；
- 点积、叉积、直线与平面。

### 第二天：把空间语言接上计算

- 线性相关、基、坐标变换、秩；
- 子空间的和与交、直和；
- Gram-Schmidt、正交补和最短距离；
- 特征值、特征向量和对角化。

### 第三天：真题闭环

- 独立做一份期中卷，检查解析几何和方程组；
- 独立做一份近年期末卷，标准时间内不翻答案；
- 对错题不只记答案，而是标注「没看出条件」「方法不会」「计算失误」三类原因；
- 最后用上面的等价链和判断题陷阱做一次闭眼复述。

如果只有很少时间，优先保住「高斯消元→秩→解的结构」、「特征值→对角化→二次型」这两条链。它们连接的题型最多，也最容易通过练习稳定得分。
