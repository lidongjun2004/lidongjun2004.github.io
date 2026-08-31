---
title: "2007 年线性代数真题（整理稿）"
description: "源文件标为 2007 年线性代数试题，含整理者给出的参考答案。"
date: 2026-08-27
tags: ["真题"]
---

> 这不是官方卷面扫描，而是源目录中署有“380104 整理”的试题与参考答案文档。本文保留这一证据边界：题目按整理稿转写，答案默认折叠；其中三处参考答案可由题面直接判定为错误，已在对应折叠块里给出勘误。

## 一、单项选择题

### 1. 数量矩阵

设 $A$ 为 $n$ 阶方阵，$B$ 为 $n$ 阶数量矩阵，则下列各式不成立的是（　　）。

A. $AB\ne BA$

B. $AB=BA$

C. $(AB)^k=A^kB^k$，$k$ 为正整数

D. $(A+B)(A-B)=(A-B)(A+B)$

<details class="exam-answer"><summary>查看参考答案</summary>选 A。</details>

### 2. 矩阵幂的行列式

设 $A$ 为二阶方阵，且 $|A|=2$，则 $|(-2A)^3|=$（　　）。

A. $-512$　B. $512$　C. $-64$　D. $64$

<details class="exam-answer"><summary>查看参考答案</summary>选 B。</details>

### 3. 初等矩阵

设

$$
A=
\begin{pmatrix}
a_1&a_2&a_3\\
b_1&b_2&b_3\\
c_1&c_2&c_3
\end{pmatrix},\qquad
B=
\begin{pmatrix}
a_3&a_2&a_1\\
3b_3&3b_2&3b_1\\
c_3&c_2&c_1
\end{pmatrix},
$$

以及

$$
P=
\begin{pmatrix}
0&0&1\\
0&1&0\\
1&0&0
\end{pmatrix},\qquad
Q=
\begin{pmatrix}
1&0&0\\
0&3&0\\
0&0&1
\end{pmatrix}.
$$

其中 $a_i\ne0,b_i\ne0$（$i=1,2,3$），则 $B=$（　　）。

A. $AP$　B. $QA$　C. $PAQ$　D. $QAP$

<details class="exam-answer"><summary>查看参考答案</summary>选 D。</details>

### 4. 线性无关

下列向量组中线性无关的是（　　）。

A. $(1,2,3),(4,5,6),(0,0,0)$

B. $(1,2),(3,4),(5,6)$

C. $(1,2,1,0,0),(3,4,0,1,0),(5,6,0,0,1)$

D. $(a,b,c),(a+b,b+c,c+a),(2a,2b,2c)$，其中 $a,b,c$ 为任意实数

<details class="exam-answer"><summary>查看参考答案</summary>选 C。</details>

### 5. 不同特征值的特征向量

设 $\lambda_1,\lambda_2$ 为 $n$ 阶方阵 $A$ 的两个互异特征值（$n>2$），对应特征向量为 $X_1,X_2$，则下列结论正确的是（　　）。

A. $2X_1+3X_2$ 不是 $A$ 的特征向量

B. $2X_1+3X_2$ 是 $A$ 的特征向量

C. $2X_1,3X_2$ 线性相关

D. $A$ 与对角阵相似

<details class="exam-answer"><summary>查看参考答案</summary>选 A。</details>

### 6. 基础解系的向量个数

设 $A$ 为 $n$ 阶降秩矩阵，且 $|A|$ 中有一元素 $a_{ij}$ 的代数余子式 $A_{ij}\ne0$，则齐次线性方程组 $AX=0$ 的基础解系所含解向量个数是（　　）。

A. $i$ 个　B. $j$ 个　C. $n$ 个　D. $1$ 个

<details class="exam-answer"><summary>查看参考答案</summary>选 D。</details>

### 7. 半正定二次型

设 $A$ 为 $m\times n$ 阶实矩阵，且 $R(A)<n$，则二次型 $X^T(A^TA)X$ 是（　　）。

A. 正定二次型　B. 负定二次型　C. 半正定二次型　D. 半负定二次型

<details class="exam-answer"><summary>查看参考答案</summary>选 C。</details>

### 8. 相似矩阵的函数

$A,B$ 均为三阶方阵，且 $A\sim B$。$A$ 的特征值为 $2,3,4$，则 $(3B)^{-1}+E$ 的特征值是（　　）。

A. $7,10,13$

B. $\dfrac76,\dfrac{10}9,\dfrac{13}{12}$

C. $\dfrac52,2,\dfrac74$

D. $\dfrac53,2,\dfrac73$

<details class="exam-answer"><summary>查看参考答案</summary>选 B。</details>

## 二、填空题

### 1. Vandermonde 型行列式

$$
\begin{vmatrix}
a_1&a_1^2&a_1^3&a_1^4\\
a_2&a_2^2&a_2^3&a_2^4\\
a_3&a_3^2&a_3^3&a_3^4\\
a_4&a_4^2&a_4^3&a_4^4
\end{vmatrix}=\text{______}.
$$

<details class="exam-answer"><summary>查看参考答案</summary>$a_1a_2a_3a_4\displaystyle\prod_{1\le j<i\le4}(a_i-a_j)$。</details>

### 2. 矩阵多项式

设 $A$ 为 $n$ 阶方阵，且满足 $A^2+3A-5E=0$，则 $(A+E)^{-1}=$ ______。

<details class="exam-answer">
<summary>查看参考答案与勘误</summary>

整理稿写成 $\dfrac13(A+2E)$。但

$$
(A+E)(A+2E)=A^2+3A+2E=7E,
$$

所以正确结果是 $\dfrac17(A+2E)$。

</details>

### 3. 相似变换与矩阵幂

已知

$$
P^{-1}AP=
\begin{pmatrix}
4&0\\
0&2
\end{pmatrix},\qquad
P=
\begin{pmatrix}
1&2\\
1&3
\end{pmatrix},
$$

则 $(A-3E)^7=$ ______。

<details class="exam-answer">
<summary>查看参考答案与勘误</summary>

整理稿直接写成 $\operatorname{diag}(1,-1)$，漏掉了换回原基。应为

$$
P
\begin{pmatrix}
1&0\\
0&-1
\end{pmatrix}
P^{-1}
=
\begin{pmatrix}
5&-4\\
6&-5
\end{pmatrix}.
$$

</details>

### 4. 矩阵乘积的秩

设 $A$ 为三阶方阵，$R(A)=2$，且

$$
B=
\begin{pmatrix}
1&0&1\\
0&1&2\\
1&0&3
\end{pmatrix},
$$

则 $R(AB)=$ ______。

<details class="exam-answer"><summary>查看参考答案</summary>$2$。</details>

### 5. 向量组相关性

设

$$
\begin{aligned}
\alpha_1&=(1,0,-2,1),&
\alpha_2&=(-1,2,0,1),\\
\alpha_3&=(2,0,-1,4),&
\alpha_4&=(1,-2,3,1),
\end{aligned}
$$

则向量组 $\alpha_1,\alpha_2,\alpha_3,\alpha_4$ 线性 ______。

<details class="exam-answer"><summary>查看参考答案</summary>线性相关。</details>

### 6. 正定二次型

当

$$
f(x_1,x_2,x_3)=2x_1^2+x_2^2+x_3^2-2t x_1x_2+2x_1x_3
$$

正定时，$t$ 应满足 ______。

<details class="exam-answer"><summary>查看参考答案</summary>$-1<t<1$。</details>

### 7. 实对称矩阵的特征向量

设 $A$ 是三阶实对称矩阵，特征值为 $1,1,3$。与 $1$ 对应的两个特征向量为

$$
\alpha_1=(1,2,3)^T,\qquad
\alpha_2=(1,5,6)^T,
$$

则与 $3$ 对应的特征向量 $\alpha_3=$ ______。

<details class="exam-answer">
<summary>查看参考答案与勘误</summary>

整理稿写成 $(1,-1,1)^T$，但它与 $\alpha_1,\alpha_2$ 都不正交。实对称矩阵不同特征值的特征向量正交，可取

$$
\alpha_3=(1,1,-1)^T.
$$

</details>

### 8. 基下坐标

$\alpha_1=(1,1,0)^T,\alpha_2=(1,0,1)^T,\alpha_3=(0,1,1)^T$ 为 $\mathbb R^3$ 的一组基，$\beta=(2,0,0)^T$ 在该基下的坐标为 ______。

<details class="exam-answer"><summary>查看参考答案</summary>$(1,1,-1)^T$。</details>

## 三、矩阵方程

已知 $AX=B+X$，其中

$$
A=
\begin{pmatrix}
2&1&-1\\
-1&4&-1\\
1&-1&2
\end{pmatrix},\qquad
B=
\begin{pmatrix}
1&0\\
0&2\\
1&3
\end{pmatrix},
$$

求矩阵 $X$。

<details class="exam-answer"><summary>查看参考答案</summary>

$$
X=
\begin{pmatrix}
1&\frac32\\
\frac12&\frac52\\
\frac12&4
\end{pmatrix}.
$$

</details>

## 四、含参数线性方程组

设方程组

$$
\begin{cases}
x_1+x_2+x_3-x_4=2,\\
3x_1+4x_2+x_3-8x_4=9,\\
5x_1+7x_2+a x_3-13x_4=b+14,\\
10x_1+13x_2+4x_3-(a-28)x_4=29.
\end{cases}
$$

1. 问 $a,b$ 取何值时，方程组有唯一解、无解或无穷多解；
2. 当方程组有无穷多解时，求其通解。

<details class="exam-answer"><summary>查看参考答案</summary>

- $a\ne1$ 时有唯一解；
- $a=1,b\ne2$ 时无解；
- $a=1,b=2$ 时有无穷多解，通解为

$$
X=
\begin{pmatrix}-1\\3\\0\\0\end{pmatrix}
+k_1\begin{pmatrix}-3\\2\\1\\0\end{pmatrix}
+k_2\begin{pmatrix}4\\-1\\0\\1\end{pmatrix},
\qquad k_1,k_2\in\mathbb R.
$$

</details>

## 五、二次型

设

$$
f(x_1,x_2,x_3)=7x_1^2+7x_2^2+6x_3^2-2x_1x_2.
$$

1. 写出此二次型对应的矩阵 $A$；
2. 求矩阵 $A$ 的特征值及特征向量；
3. 用正交变换化二次型为标准型，并写出所用的正交变换矩阵。

<details class="exam-answer"><summary>查看参考答案</summary>

$$
A=
\begin{pmatrix}
7&-1&0\\
-1&7&0\\
0&0&6
\end{pmatrix}.
$$

特征值为 $6,8$。$\lambda=6$ 的特征子空间可由 $(1,1,0)^T,(0,0,1)^T$ 张成，$\lambda=8$ 的特征向量可取 $(1,-1,0)^T$。

一种正交矩阵为

$$
Q=
\begin{pmatrix}
\frac1{\sqrt2}&0&\frac1{\sqrt2}\\
\frac1{\sqrt2}&0&-\frac1{\sqrt2}\\
0&1&0
\end{pmatrix},
$$

于是标准形为 $6y_1^2+6y_2^2+8y_3^2$。

</details>

## 六、证明题

### 1. 幂向量组

设 $A$ 为 $n$ 阶非零矩阵，$\alpha$ 为 $n$ 维非零列向量，$S$ 为正整数且 $S>3$。若

$$
A^{S-1}\alpha\ne0,\qquad A^S\alpha=0,
$$

证明 $\alpha,A\alpha,A^2\alpha,\ldots,A^{S-1}\alpha$ 线性无关。

<details class="exam-answer"><summary>查看参考证明</summary>

设

$$
k_1\alpha+k_2A\alpha+\cdots+k_SA^{S-1}\alpha=0.
$$

两边左乘 $A^{S-1}$，利用 $A^S\alpha=0$，得 $k_1A^{S-1}\alpha=0$，故 $k_1=0$。再依次左乘 $A^{S-2},A^{S-3},\ldots,A$，可逐个得到 $k_2=k_3=\cdots=k_S=0$，因此该向量组线性无关。

</details>

### 2. $A^TA$ 的正定性

设 $A$ 为 $n$ 阶可逆实矩阵，证明 $A^TA$ 为正定矩阵。

<details class="exam-answer"><summary>查看参考证明</summary>

$A^TA$ 是实对称矩阵。对任意非零向量 $x$，由于 $A$ 可逆，所以 $Ax\ne0$，并且

$$
x^TA^TAx=(Ax)^T(Ax)=\lVert Ax\rVert^2>0.
$$

故 $A^TA$ 正定。

</details>
