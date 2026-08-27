---
title: "第 12 周作业：线性微分方程组"
description: "线性齐次与非齐次方程组、矩阵指数、稳定性和指数型特解；题面按手写提交还原"
date: 2026-08-27
tags: ["作业"]
---

源文件是一份手写提交，没有单独附上印刷题面。下面凡标注“根据作答还原”的地方，只整理提交中能够唯一辨认的题目，不补猜缺失条件。

## 1. 三个齐次线性方程组（根据作答还原）

分别求解：

$$
\begin{cases}
x'=3x+4y,\\
y'=5x+2y;
\end{cases}
$$

$$
\begin{cases}
x'=\alpha x+\beta y,\\
y'=-\beta x+\alpha y;
\end{cases}
$$

$$
\boldsymbol X'=
\begin{pmatrix}
1&2&1\\
1&-1&1\\
2&0&1
\end{pmatrix}\boldsymbol X.
$$

<details class="exam-answer">
<summary>查看提交内容与整理</summary>

第一组的特征值为 $-2,7$，可取对应特征向量 $(4,-5)^\mathsf T$、$(1,1)^\mathsf T$，所以

$$
\binom{x}{y}
=C_1e^{-2t}\binom{4}{-5}
+C_2e^{7t}\binom{1}{1}.
$$

第二组的系数矩阵是“伸缩 $\alpha$ + 旋转 $\beta$”，故

$$
\binom{x}{y}
=e^{\alpha t}
\begin{pmatrix}
\cos\beta t&\sin\beta t\\
-\sin\beta t&\cos\beta t
\end{pmatrix}
\binom{C_1}{C_2}.
$$

第三组的特征值为 $-1$（二重）和 $3$。$-1$ 只有一个线性无关特征向量，可取

$$
v=(2,-1,-2)^\mathsf T,\qquad
w=(1,1,-2)^\mathsf T,\qquad
(A+I)w=v,
$$

而 $3$ 对应 $v_3=(2,1,2)^\mathsf T$。因此

$$
\boldsymbol X
=e^{-t}\left[C_1v+C_2(tv+w)\right]
+C_3e^{3t}v_3.
$$

</details>

## 2. 三阶非齐次初值问题（根据作答还原）

$$
\begin{cases}
x'=y,\\
y'=z,\\
z'=-6x-11y-6z+e^{-t},\\
x(0)=y(0)=z(0)=0.
\end{cases}
$$

<details class="exam-answer">
<summary>查看提交内容与整理</summary>

消去 $y,z$ 得

$$
x'''+6x''+11x'+6x=e^{-t}.
$$

由于 $-1$ 是特征根，特解要乘 $t$。结合三个零初值可得

$$
x=-\frac34e^{-t}+e^{-2t}-\frac14e^{-3t}+\frac12te^{-t},
$$

再由 $y=x'$、$z=x''$ 得到其余两个分量。这个写法比直接展开三个长式子更容易检查：依次求导并代回即可。

</details>

## 3. 带初值的非齐次方程组（根据作答还原）

$$
\begin{cases}
x'=2x+y-2z+2-t,\\
y'=-x,\\
z'=x+y-z+1+t,\\
x(0)=-1,\quad y(0)=0,\quad z(0)=1.
\end{cases}
$$

<details class="exam-answer">
<summary>查看提交内容与整理</summary>

用 $x=-y'$ 消元，可化成

$$
y'''-y''+y'-y=1+3t.
$$

代入初值后，提交中的结果可整理为

$$
\begin{aligned}
x(t)&=-3e^t+\sin t-\cos t+3,\\
y(t)&=3e^t+\cos t+\sin t-3t-4,\\
z(t)&=2-2t-\cos t+\sin t.
\end{aligned}
$$

在 $t=0$ 时确有 $(x,y,z)=(-1,0,1)$。

</details>

## 4. 常系数齐次系统的渐近稳定性（根据作答还原）

证明 $\boldsymbol X'=A\boldsymbol X$ 的所有解都满足 $\boldsymbol X(t)\to0$，当且仅当 $A$ 的全部特征值实部都小于零。

<details class="exam-answer">
<summary>查看提交内容与整理</summary>

把 $A$ 化到 Jordan 标准形后，每个解分量都是

$$
t^k e^{\lambda t}
$$

的线性组合。若所有 $\operatorname{Re}\lambda<0$，指数衰减压过任意有限次多项式增长，所以每项都趋于零。

反过来，若存在 $\operatorname{Re}\lambda>0$，沿对应（广义）特征向量就能构造发散解；若 $\operatorname{Re}\lambda=0$，相应项至少不会趋于零。于是“所有解趋零”迫使所有特征值实部严格为负。

</details>

## 5. 矩阵指数（根据作答还原）

证明 $e^{At}$ 是 $\boldsymbol X'=A\boldsymbol X$ 满足 $X(0)=I$ 的基解矩阵，并证明

$$
e^{At}e^{As}=e^{A(t+s)}.
$$

<details class="exam-answer">
<summary>查看提交内容与整理</summary>

由幂级数定义逐项求导，

$$
\frac{d}{dt}e^{At}=Ae^{At},\qquad e^{A\cdot0}=I.
$$

所以它正是标准基解矩阵。对固定的 $s$，$e^{At}e^{As}$ 与 $e^{A(t+s)}$ 都满足同一个矩阵初值问题

$$
X'=AX,\qquad X(0)=e^{As}.
$$

由解的唯一性，两者相等。

</details>

## 6. 指数型非齐次项（根据作答还原）

设 $m$ 不是 $A$ 的特征值。证明

$$
\boldsymbol X'=A\boldsymbol X+\boldsymbol c e^{mt}
$$

有形如 $\boldsymbol p e^{mt}$ 的特解。

<details class="exam-answer">
<summary>查看提交内容与整理</summary>

代入 $\boldsymbol X_p=\boldsymbol p e^{mt}$，约去 $e^{mt}$ 后得到

$$
(mI-A)\boldsymbol p=\boldsymbol c.
$$

因为 $m$ 不是特征值，$mI-A$ 可逆，故

$$
\boldsymbol p=(mI-A)^{-1}\boldsymbol c.
$$

</details>
