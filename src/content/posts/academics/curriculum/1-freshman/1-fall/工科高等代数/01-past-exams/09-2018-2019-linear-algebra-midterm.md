---
title: "2018–2019 学年线性代数期中真题"
description: "源文件标为 2018–2019 学年线性代数期中考试，覆盖空间解析几何与行列式。"
date: 2026-08-27
tags: ["真题"]
---

> 源目录保存了三份文件名不同、SHA-256 完全相同的扫描件，我只收录一次。扫描件未附答案，也没有拍到卷面日期；以下按四页题面转写，不补造解析。

## 一、判断题（每题 2 分，共 10 分）

1. 对于两个向量 $\alpha,\beta$，若 $\alpha\cdot\beta=0$，则 $\alpha=0$ 或 $\beta=0$。（　　）
2. 设 $\alpha,\beta,\gamma$ 是非零向量，则 $(\alpha\times\beta)\times\gamma=\alpha\times(\beta\times\gamma)$。（　　）
3. 方程

   $$
   (A_1x+B_1y+C_1z+D_1)^2+(A_2x+B_2y+C_2z+D_2)^2=0
   $$

   表示一条空间直线。（　　）
4. 对两个三阶行列式，逐项相加后所得行列式等于原来两个行列式之和。（　　）
5. 行列式

   $$
   \begin{vmatrix}
   0&2&3\\
   -2&0&4\\
   -3&-4&0
   \end{vmatrix}=0.
   $$

   （　　）

## 二、填空题（每题 4 分，共 24 分）

### 1. 方向角

设点 $M_1(4,\sqrt2,1)$ 和点 $M_2(3,0,2)$，则 $\overrightarrow{M_1M_2}$ 的三个方向角分别为 ______。

### 2. 平面方程

过点 $A(3,0,0)$ 和点 $B(0,0,1)$，且与 $XOY$ 面成 $60^\circ$ 角的平面方程为 ______。

### 3. 三角形面积

已知

$$
\overrightarrow{OA}=2\boldsymbol i+6\boldsymbol k,\qquad
\overrightarrow{OB}=2\boldsymbol j+6\boldsymbol k,
$$

则三角形 $\triangle OAB$ 的面积为 ______。

### 4. 旋转面

直线

$$
\frac{x-1}{0}=\frac y1=\frac z1
$$

绕 $z$ 轴旋转生成的旋转面方程为 ______。

### 5. 逆序数

排列 $a_1a_2a_3a_4a_5$ 的逆序数等于 $4$，则 $a_5a_4a_3a_2a_1$ 的逆序数为 ______。

### 6. 四阶行列式

行列式

$$
\begin{vmatrix}
3&-3&7&1\\
1&-1&3&1\\
4&-5&10&3\\
2&-4&5&2
\end{vmatrix}
$$

的值为 ______。

## 三、选择题（每题 4 分，共 24 分）

### 1. 向量关系

设 $\gamma=(\beta\times\alpha)-\beta$，其中 $\alpha\ne0,\beta\ne0$，则（　　）。

A. $\alpha\perp(\beta+\gamma)$

B. $\alpha\parallel(\beta+\gamma)$

C. $\beta\perp\gamma$

D. $\beta\parallel\gamma$

### 2. 直线与平面的位置关系

设直线 $l$ 为两平面的交线：

$$
\begin{cases}
x+3y+2z+1=0,\\
2x-y-10z+3=0,
\end{cases}
$$

平面 $\pi:4x-2y+z-2=0$，则 $l$（　　）。

A. 垂直于 $\pi$　B. 平行于 $\pi$　C. 在 $\pi$ 上　D. 与 $\pi$ 斜交

### 3. 双曲抛物面

设 $a>b>0$。若方程

$$
(a-k)x^2+(b-k)y^2=z
$$

表示双曲抛物面，则必有（　　）。

A. $k>a$　B. $k<b$　C. $k=a$ 或 $k=b$　D. $b<k<a$

### 4. 平面的位置

平面 $\pi:x-y=0$（　　）。

A. 平行于 $x$ 轴　B. 平行于 $y$ 轴　C. 平行于 $z$ 轴　D. 过 $z$ 轴

### 5. 参数方程组

若齐次线性方程组

$$
\begin{cases}
\lambda x_1+x_2+x_3=0,\\
x_1+\lambda x_2+x_3=0,\\
x_1+x_2+\lambda x_3=0
\end{cases}
$$

有非零解，则 $\lambda=$（　　）。

A. $-2$　B. $1$　C. $-2$ 或 $1$　D. 任意值

### 6. 代数余子式

设

$$
D=
\begin{vmatrix}
1&2&4&8\\
2&4&8&1\\
4&8&1&2\\
8&1&2&4
\end{vmatrix},
$$

$A_{i4}$ 为 $D$ 中元素 $a_{i4}$（$i=1,2,3,4$）的代数余子式，则

$$
A_{14}+2A_{24}+4A_{34}+8A_{44}=\text{（　　）}.
$$

A. $0$　B. $1$　C. $2$　D. $4$

## 四、向量组（8 分）

设向量

$$
\alpha=(-1,3,2),\qquad
\beta=(2,-3,-4),\qquad
\gamma=(-3,12,6).
$$

证明 $\alpha,\beta,\gamma$ 共面，并用 $\alpha,\beta$ 线性表示 $\gamma$。

## 五、解答题（8 分）

给定点 $A(1,0,3)$ 和 $B(0,2,5)$，直线

$$
l:\frac{x-1}{2}=\frac{y+1}{1}=\frac z3.
$$

设 $A',B'$ 分别为 $A,B$ 在直线 $l$ 上的垂足，求 $|A'B'|$。

## 六、解答题（8 分）

求经过直线

$$
L:\begin{cases}
x+5y+z=0,\\
x-z+4=0
\end{cases}
$$

且与平面 $\pi:4y-8z=8$ 夹角为 $\dfrac\pi4$ 的平面方程。

## 七、解答题（8 分）

计算行列式

$$
\begin{vmatrix}
1+x&1&1&1\\
1&1-x&1&1\\
1&1&1+y&1\\
1&1&1&1-y
\end{vmatrix}.
$$

## 八、证明题（10 分）

证明：

$$
\begin{vmatrix}
1&1&1&1\\
a&b&c&d\\
a^3&b^3&c^3&d^3\\
a^4&b^4&c^4&d^4
\end{vmatrix}
=(ab+ac+ad+bc+bd+cd)
(d-a)(d-b)(d-c)(c-a)(c-b)(b-a).
$$
