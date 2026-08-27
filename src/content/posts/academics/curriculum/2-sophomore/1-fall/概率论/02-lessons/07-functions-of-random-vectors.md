---
title: "第 8 讲 · 随机向量的函数分布"
description: "掌握和、极值、卷积与二维变量变换，能够计算随机向量函数的分布并判断变换后独立性"
date: 2026-08-27
---

这一讲的任务是：已知 $(X,Y)$ 的联合分布，求 $Z=g(X,Y)$ 或 $(U,V)=T(X,Y)$ 的分布。共同原则仍是把原支持域映到新坐标，再把所有通向同一结果的概率加起来。

## 1. 离散型函数

若 $(X,Y)$ 离散，$Z=g(X,Y)$ 的分布为

$$
P(Z=z)=\sum_{(x_i,y_j):g(x_i,y_j)=z}
P(X=x_i,Y=y_j).
$$

最稳的方法是给联合表每个格子标上 $g(x_i,y_j)$，再合并同值格子的概率。若 $X,Y$ 独立，联合概率可写成边际概率乘积；不独立时必须用原联合表。

## 2. 最大值和最小值

设 $M=\max(X,Y)$、$N=\min(X,Y)$。

最大值不超过 $z$ 等价于两者都不超过 $z$：

$$
F_M(z)=P(X\le z,Y\le z)=F_{X,Y}(z,z).
$$

若 $X,Y$ 独立，

$$
F_M(z)=F_X(z)F_Y(z).
$$

最小值超过 $z$ 等价于两者都超过 $z$：

$$
P(N>z)=P(X>z,Y>z).
$$

独立时

$$
F_N(z)=1-[1-F_X(z)][1-F_Y(z)].
$$

对独立同分布的 $X_1,\ldots,X_n$：

$$
F_{X_{(n)}}(x)=F(x)^n,
$$

$$
F_{X_{(1)}}(x)=1-[1-F(x)]^n.
$$

若 $X_i\sim U(0,\theta)$，最大值和最小值的期望分别为

$$
E(X_{(n)})=\frac{n\theta}{n+1},
\qquad
E(X_{(1)})=\frac{\theta}{n+1}.
$$

## 3. 和的分布：卷积

### 离散型卷积

若 $X,Y$ 独立，$Z=X+Y$，则

$$
P(Z=z)=\sum_xP(X=x)P(Y=z-x).
$$

### 连续型卷积

若 $X,Y$ 独立且有密度，

$$
f_Z(z)=\int_{-\infty}^{\infty}
f_X(x)f_Y(z-x)\,dx.
$$

等价地也可对 $y$ 积分：

$$
f_Z(z)=\int_{-\infty}^{\infty}
f_X(z-y)f_Y(y)\,dy.
$$

实际积分范围由 $x$ 同时落在 $X$ 的支持集、$z-x$ 落在 $Y$ 的支持集确定。

![卷积中固定 z 的水平线与支持域边界决定 x 的积分范围](/images/academics/probability/lessons/convolution-support-lines.webp)

### 例：两个均匀变量之和

$X,Y\overset{\text{iid}}\sim U(0,1)$。对 $0<z<1$，可取 $0<x<z$；对 $1\le z<2$，可取 $z-1<x<1$。因此

$$
f_{X+Y}(z)=
\begin{cases}
z,&0<z<1,\\
2-z,&1\le z<2,\\
0,&\text{其他}.
\end{cases}
$$

三角形密度的两个分段来自支持域形状，而不是积分技巧。

## 4. 可加性结论

独立变量在以下条件下封闭：

$$
B(n_1,p)+B(n_2,p)=B(n_1+n_2,p),
$$

$$
P(\lambda_1)+P(\lambda_2)=P(\lambda_1+\lambda_2),
$$

$$
N(\mu_1,\sigma_1^2)+N(\mu_2,\sigma_2^2)
=N(\mu_1+\mu_2,\sigma_1^2+\sigma_2^2),
$$

$$
Ga(\alpha_1,\lambda)+Ga(\alpha_2,\lambda)
=Ga(\alpha_1+\alpha_2,\lambda).
$$

二项要求相同成功概率，Gamma 要求相同率参数。正态差也仍正态：若独立，$X-Y$ 的方差是 $\sigma_X^2+\sigma_Y^2$，不是相减。

## 5. 二维变量变换与 Jacobian

设

$$
U=g_1(X,Y),\qquad V=g_2(X,Y).
$$

若变换一一对应，反变换为

$$
X=x(u,v),\qquad Y=y(u,v),
$$

则

$$
f_{U,V}(u,v)=
f_{X,Y}(x(u,v),y(u,v))
\left|
\frac{\partial(x,y)}{\partial(u,v)}
\right|.
$$

Jacobian 绝对值修正面积伸缩。若变换不是一一对应，应把每个反解分支的贡献相加。

固定流程：

1. 解出反变换；
2. 把原支持域翻译成 $(u,v)$ 的值域；
3. 算 Jacobian 的绝对值；
4. 代入联合密度；
5. 若只要 $U$，再对 $v$ 积分。

## 6. 例：指数变量的和与比例

若 $X,Y$ 独立且都服从 $Exp(1)$，令

$$
U=X+Y,\qquad V=\frac{X}{X+Y}.
$$

反变换为

$$
X=UV,\qquad Y=U(1-V),
$$

支持域为 $u>0$、$0<v<1$。Jacobian 为

$$
\left|\frac{\partial(x,y)}{\partial(u,v)}\right|=u.
$$

于是

$$
f_{U,V}(u,v)=e^{-uv}e^{-u(1-v)}u=ue^{-u}.
$$

它可拆成

$$
f_U(u)=ue^{-u},\qquad f_V(v)=1,
$$

所以 $U\sim Ga(2,1)$，$V\sim U(0,1)$，且 $U,V$ 独立。

## 7. 乘积与比值

### 乘积 $Z=XY$

取变换 $U=XY,V=Y$，反变换 $X=U/V,Y=V$，Jacobian 为 $1/|v|$。独立时

$$
f_{XY}(u)=\int_{-\infty}^{\infty}
f_X\left(\frac uv\right)f_Y(v)
\frac{dv}{|v|}.
$$

### 比值 $Z=X/Y$

取 $U=X/Y,V=Y$，反变换 $X=UV,Y=V$，Jacobian 为 $|v|$：

$$
f_{X/Y}(u)=\int_{-\infty}^{\infty}
|v|f_X(uv)f_Y(v)\,dv.
$$

若 $X,Y$ 独立标准正态，则 $X/Y$ 服从标准 Cauchy 分布。

## 8. 圆盘上的极坐标

若 $(X,Y)$ 在单位圆盘上均匀，联合密度为 $1/\pi$。令

$$
X=R\cos\Theta,\qquad Y=R\sin\Theta.
$$

Jacobian 为 $r$，所以

$$
f_{R,\Theta}(r,\theta)=\frac r\pi,
\qquad 0<r<1, 0\le\theta<2\pi.
$$

边际为 $f_R(r)=2r$、$f_\Theta(\theta)=1/(2\pi)$，联合密度等于边际乘积，因此半径与方向独立。但原直角坐标 $X,Y$ 不独立，因为圆盘支持域不是矩形。

## 9. 检查清单

- 极值先把事件改写成“全部小于”或“全部大于”。
- 卷积积分范围由两个支持集的交集决定。
- 认分布时核对二项的 $p$、Gamma 的率参数是否相同。
- 二维变换必须同时写反变换、值域和 Jacobian。
- 多对一变换不能只保留一条反解。
- 联合密度可分解并且支持域为直积，才能判断独立。
