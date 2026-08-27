---
title: "第 3 讲：Maxwell–Boltzmann 分布与能量均分"
description: "读懂概率密度、麦克斯韦速率分布、玻尔兹曼因子和能量按自由度均分，并由此估算理想气体热容。"
date: 2026-08-27
---

动理论给出了 $\overline{v^2}$，但气体里并不是每个分子都以同一速率运动。统计分布回答的是：某一小段速率区间里，大约有多少分子。

![麦克斯韦速率分布与三个特征速率](/images/academics/basic-physics-a2/maxwell-speeds.svg)

## 概率密度怎样读

连续随机变量的概率密度 $f(x)$ 满足

$$
\int_{-\infty}^{+\infty}f(x)\,\mathrm dx=1.
$$

$f(x)$ 本身不是“取到恰好 $x$ 的概率”；区间概率才是面积：

$$
P(a<x<b)=\int_a^b f(x)\,\mathrm dx.
$$

若系统有 $N$ 个分子，区间内的平均粒子数为 $N$ 乘这个概率。

## 速度分布与速率分布

速度 $\vec v=(v_x,v_y,v_z)$ 是三维矢量，麦克斯韦速度分布为

$$
f(\vec v)=
\left(\frac{m}{2\pi k_BT}\right)^{3/2}
\exp\left(-\frac{mv^2}{2k_BT}\right).
$$

速率 $v=|\vec v|$ 只取非负值。把速度空间中半径 $v$、厚度 $\mathrm dv$ 的球壳体积 $4\pi v^2\mathrm dv$ 算进去，得到

$$
f(v)=4\pi
\left(\frac{m}{2\pi k_BT}\right)^{3/2}
v^2\exp\left(-\frac{mv^2}{2k_BT}\right).
$$

前面的 $v^2$ 来自速度空间壳层的“状态数”，不是凭空多出的动力学因子。

## 三个特征速率

$$
v_p=\sqrt{\frac{2k_BT}{m}},
\qquad
\bar v=\sqrt{\frac{8k_BT}{\pi m}},
\qquad
v_{\mathrm{rms}}=\sqrt{\frac{3k_BT}{m}}.
$$

同一气体、同一温度下：

$$
v_p<\bar v<v_{\mathrm{rms}}.
$$

$v_p$ 是曲线峰的位置；$\bar v$ 是按分布加权的平均；$v_{\mathrm{rms}}$ 对大速率赋予平方权重，所以最大。

升温后分布曲线右移、变宽、峰变低，但曲线下面积仍为 1。

## Boltzmann 因子

在保守力场中，能量更高的微观状态出现概率更小，其基本权重为

$$
\exp\left(-\frac{\varepsilon}{k_BT}\right).
$$

若只有重力势能 $\varepsilon_p=mgh$，等温气体的数密度随高度近似满足

$$
n(h)=n_0\exp\left(-\frac{mgh}{k_BT}\right).
$$

温度越高，粒子越容易“爬到”高势能位置；粒子越重，高度分布下降越快。

Maxwell–Boltzmann 分布把动能与势能合起来：

$$
F(\vec r,\vec v)\propto
\exp\left[-\frac{\varepsilon_k+\varepsilon_p}{k_BT}\right].
$$

## 能量按自由度均分

在经典平衡统计的适用范围内，能量表达式中每个独立二次项平均贡献

$$
\frac12k_BT.
$$

一个自由单原子分子有三个平动二次项，因此平均能量为 $3k_BT/2$。

若分子有 $i$ 个被激发的二次自由度，则每摩尔理想气体

$$
U=\frac i2RT,
\qquad
C_V=\frac i2R,
\qquad
C_p=C_V+R.
$$

### 自由度怎样数

- 单原子刚性分子：3 个平动；
- 双原子刚性分子：通常 3 平动 + 2 转动；
- 非线性多原子刚性分子：3 平动 + 3 转动；
- 振动模式同时含动能和势能两个二次项，每个振动模式贡献 $k_BT$。

实际热容会随温度变化，因为转动、振动能级是量子化的；温度不够时，某些自由度“冻住”，经典均分并不成立。

## 做分布题的固定动作

1. 先确认题目给的是速度还是速率分布；
2. 用归一化求未知常数；
3. 区间比例用积分，不用函数值相减；
4. 平均量按 $\langle g(v)\rangle=\int g(v)f(v)\mathrm dv$；
5. 检查量纲和积分范围；
6. 特征速率不要互相替代。
