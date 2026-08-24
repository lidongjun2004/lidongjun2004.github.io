---
title: "自动控制基础 2025 秋 42 系期末考试"
description: "Lee 整理的 2025 秋期末题面，完整保留类似题标记、缺失条件和致谢，并在原文后附折叠参考解析"
date: 2026-08-23
tags: ["真题"]
---

<!-- markdownlint-disable MD024 MD025 MD033 MD045 -->

# 自动控制基础 2025秋42系期末考试

## 一、简答题（15分，每题3分）

1. 自动控制的“灵魂”是什么？可以从哪些维度评价一个控制系统的性能？

2. 对于一个二阶系统来说，最佳阻尼比是多少？为什么？

3. 频率特性的定义是什么？为何要用正弦函数为输入信号？

4. 在串联控制系统中，为什么采取滞后控制可以提高系统的相稳定裕度？

5. 系统状态反馈能够将极点配置到任意位置处的充要条件是什么？如果给定极点，那么系统可将极点配置到这些位置的条件可以放宽到什么？

## 二、计算题（15分，每题5分）

1. 设单位负反馈系统的开环传递函数为 $ G(s) = \frac { 4 } {s(s + 4)} $ ，求系统阶跃响应的自然频率 $ \omega_n $、阻尼比 $ \zeta $ 和超调量。

2. 设单位负反馈系统的开环传递函数为 $ G(s) = \frac { K(s+1) } {s(s+2)(s + 4)} $ ，若系统稳定，求K的取值范围。**（G(s)非原题，但类似）**

3. 设系统如图所示，确定 $ G_p(s) $ 的表达式，使得系统在单位斜坡信号 $ r(t) = t, t > 0 $ 下的稳态误差为零。（定义误差 $ e(t) = r(t) - c(t) $ ）

![alt text](/images/automatic-control/2025-exam-feedforward-block-diagram.png)

## 三、解答题（15分）

1. 某速度反馈系统如图所示，请按步骤画出 $ K $ 从 $ 0 $ 到正无穷变化时的根轨迹。（10分）

2. 当主导极点的阻尼比为 $ \zeta = 0.5 $ ，求 $ K $ 的大小。（5分）

![alt text](/images/automatic-control/2025-exam-root-locus-system.png)

## 四、解答题（15分）

如图所示为某单位负反馈系统的对数渐近幅频特性曲线，请回答下列问题：

1. 该系统的开环传递函数 $ G(s) $ 的表达式是什么？

2. 画出该系统的对数相频特性曲线，并利用对数相频判据判断系统的稳定性。

3. 计算系统的相稳定裕度和模稳定裕度。

![](/images/automatic-control/2025-exam-bode-asymptote.png)

## 五、解答题（10分）

设单位负反馈系统的开环传递函数为 $ G(s) = \frac { K } { s(s^2 + 6s + 9) } , K > 0 $ 。绘制Nyquist曲线，并计算系统稳定时 $ K $ 的取值范围。

## 六、解答题（20分）

已知单输入单输出系统的状态方程及输出方程如下：

$$
\dot{x}=\begin{bmatrix}-1 & 1\\
2 & 0
\end{bmatrix}x + \begin{bmatrix}0\\ 1\end{bmatrix}u, \quad y = \begin{bmatrix}? & ?\end{bmatrix}x
$$

1. 求状态转移矩阵 $ e^{At} $ ，并在 $x(0) = \begin{bmatrix}1\\ 2\end{bmatrix}$ 时，求解单位阶跃响应下的系统响应 $ x(t) $ 。

2. 判断系统是否渐近稳定（说明理由），判断系统是否BIBO稳定（说明理由）。

3. 判断系统是否可控，若可控，给出 $ \hat{x} = Px $ ，使得系统变为可控标准型，求出矩阵 $ P $ 并给出可控标准型。

4. 给定某极点，设置 $ k $ 进行状态反馈控制 $ u = v - kx $ ，判断是否可以将极点配置在 $ -2 \pm j2 $ 处。若可以，求 $ k $ 。**（极点并非原题，但类似）**

## 七、证明题（10分）

1. 已知系统状态方程： $ \dot{x} = Ax + bu $ , $ y = cx $ 。证明：可逆变换不影响可观测性。

2. 已知状态观测器方程： $ \dot{\hat{x}} = (A - Hc)\hat{x} + bu + Hy $ 。证明：若系统可观测，则 $ A-Hc $ 可以将极点配置到任意位置处。

<div align="right">
  
  *L.D.J 回忆版*
  *特别鸣谢：raregas、dzx*

</div>

<!-- markdownlint-enable MD024 MD025 MD033 MD045 -->

## 参考解析

以下解析根据回忆题、课程课件和控制理论公式整理，不是课程组公布的标准答案。题面缺失的输出矩阵等条件不会擅自补造；能确定的部分给出完整推导。

### 一、简答题

#### 1. 自动控制的“灵魂”与性能评价

<details class="exam-answer">
<summary>查看答案与解析</summary>

自动控制的“灵魂”是**反馈**：测量输出、与期望比较得到误差，再根据误差修正输入，使系统在模型不准或有扰动时仍能接近期望行为。

课程里最常用的三个维度是：

- **稳**：系统受扰后能否回到平衡，是否具有足够稳定裕度；
- **准**：稳态误差是否足够小；
- **快**：上升时间、调节时间是否足够短。

实际设计还会考虑超调、振荡、鲁棒性、控制能量、噪声放大和执行器饱和等约束。

</details>

#### 2. 二阶系统的最佳阻尼比

<details class="exam-answer">
<summary>查看答案与解析</summary>

常用工程折中是

$$
\zeta=\frac{1}{\sqrt2}\approx0.707.
$$

阻尼太小会产生明显振荡和超调，阻尼太大又使响应变慢。$\zeta\approx0.707$ 兼顾快速性与平稳性，并对应频域中的 Butterworth 型平坦幅频特性。它不是所有指标下都唯一最优，而是经典二阶设计中常用的折中值。

</details>

#### 3. 频率特性及为何使用正弦输入

<details class="exam-answer">
<summary>查看答案与解析</summary>

对稳定线性定常系统输入正弦信号

$$
r(t)=A\sin\omega t,
$$

稳态输出仍是同频正弦，只改变幅值和相位：

$$
c_{ss}(t)=A|G(j\omega)|\sin\bigl(\omega t+\angle G(j\omega)\bigr).
$$

因此 $G(j\omega)$ 随频率的变化就是系统的频率特性。之所以选正弦，是因为复指数是 LTI 系统的特征函数；此外，一般信号可以通过 Fourier 分解表示成不同频率正弦的叠加。

</details>

#### 4. 滞后校正为何能提高相稳定裕度

<details class="exam-answer">
<summary>查看答案与解析</summary>

滞后网络本身会引入少量负相位，所以它不是靠“直接加正相位”提高裕度。它保持低频增益、衰减中高频增益，使增益交叉频率 $\omega_c$ 向低频移动；对象在较低频率处通常相位滞后更小，因此新的相位裕度反而增大。

代价是带宽下降、响应变慢。若需要明显加快系统并增加相位裕度，通常采用超前校正。

</details>

#### 5. 状态反馈的极点配置条件

<details class="exam-answer">
<summary>查看答案与解析</summary>

对单输入系统

$$
\dot x=Ax+bu,
$$

存在状态反馈 $u=v-kx$ 把全部闭环极点任意配置的充要条件是 $(A,b)$ **完全可控**，即

$$
\operatorname{rank}[b,Ab,\ldots,A^{n-1}b]=n.
$$

若只要求配置到一组给定极点，条件可以放宽：所有不可控模态不能被状态反馈移动，因此它们必须已经位于目标极点集合中，并满足相应代数重数；其余需要移动的模态必须可控。

</details>

### 二、计算题

#### 1. 二阶系统指标

单位负反馈系统开环传递函数为

$$
G(s)=\frac{4}{s(s+4)}.
$$

求阶跃响应的自然频率、阻尼比和超调量。

<details class="exam-answer">
<summary>查看计算过程</summary>

闭环传递函数为

$$
\Phi(s)=\frac{G(s)}{1+G(s)}
=\frac{4}{s^2+4s+4}.
$$

与标准二阶形式

$$
\frac{\omega_n^2}{s^2+2\zeta\omega_ns+\omega_n^2}
$$

比较得到 $\omega_n=2$、$\zeta=1$。系统临界阻尼，不产生峰值超调，因此

$$
M_p=0.
$$

</details>

#### 2. Routh 判据求稳定增益范围

回忆版给出的类似开环传递函数为

$$
G(s)=\frac{K(s+1)}{s(s+2)(s+4)}.
$$

<details class="exam-answer">
<summary>查看计算过程</summary>

闭环特征方程为

$$
s(s+2)(s+4)+K(s+1)=0,
$$

即

$$
s^3+6s^2+(8+K)s+K=0.
$$

三阶 Routh 表第一列要求

$$
1>0,\qquad 6>0,\qquad
\frac{6(8+K)-K}{6}>0,\qquad K>0.
$$

第三项为 $(48+5K)/6$。因此对于这个“类似题”中的传递函数，稳定范围是

$$
K>0.
$$

$K=0$ 时存在原点极点，只是临界情形，不是渐近稳定。

</details>

#### 3. 前馈补偿与斜坡稳态误差

![含前馈补偿的多回路控制系统](/images/automatic-control/2025-exam-feedforward-block-diagram.png)

要求选择 $G_p(s)$，使单位斜坡输入下 $e(t)=r(t)-c(t)$ 的稳态误差为零。

<details class="exam-answer">
<summary>查看结构化简与答案</summary>

记 $2/s$ 后、$1/s$ 前的信号为 $X(s)$。由图可得

$$
X=\frac{2}{s}\left[5\left(\frac{K}{s+1}E-X\right)+G_pR\right],
\qquad C=\frac{X}{s}.
$$

整理为

$$
C=A(s)(R-C)+B(s)R,
$$

其中

$$
A(s)=\frac{10K}{s(s+10)(s+1)},\qquad
B(s)=\frac{2G_p(s)}{s(s+10)}.
$$

于是

$$
\frac{E}{R}=\frac{1-B(s)}{1+A(s)}.
$$

对单位斜坡 $R(s)=1/s^2$，由终值定理

$$
e_{ss}=\lim_{s\to0}\frac{1-B(s)}{s[1+A(s)]}.
$$

当 $K>0$ 时，$s[1+A(s)]\to K$。要令误差为零，只需 $B(0)=1$，也就是

$$
\lim_{s\to0}\frac{G_p(s)}{s}=5.
$$

最简单的选择是

$$
\boxed{G_p(s)=5s}.
$$

更一般地，任何满足上述低频极限的补偿器都能消除斜坡稳态误差。

</details>

### 三、根轨迹题

![速度反馈系统](/images/automatic-control/2025-exam-root-locus-system.png)

#### 1. 绘制 $K:0\to+\infty$ 时的根轨迹

<details class="exam-answer">
<summary>查看化简与根轨迹</summary>

先化简内速度反馈。从外环误差 $E$ 到输出 $C$ 的等效前向通道为

$$
G_{eq}(s)=\frac{10}{s(10s+1+10K)}.
$$

外环闭环特征方程为

$$
1+G_{eq}(s)=0,
$$

即

$$
10s^2+(1+10K)s+10=0
$$

或

$$
s^2+(K+0.1)s+1=0.
$$

- $K=0$ 时，极点为 $-0.05\pm j0.9987$。
- $0<K<1.9$ 时，两极点为共轭复数。因为根的乘积始终为 1，它们沿单位圆左半部分向 $-1$ 靠近。
- $K=1.9$ 时，在 $s=-1$ 形成二重根。
- $K>1.9$ 时，两支沿负实轴分开：一支趋向 $0^-$，另一支趋向 $-\infty$。

整个过程中极点都在左半平面，但 $K$ 很大时有一支逼近原点，响应会变慢。

</details>

#### 2. 主导极点阻尼比为 $\zeta=0.5$ 时求 $K$

<details class="exam-answer">
<summary>查看计算过程</summary>

与标准二阶特征多项式

$$
s^2+2\zeta\omega_ns+\omega_n^2
$$

比较。由常数项得 $\omega_n=1$，再由一次项得

$$
K+0.1=2\zeta\omega_n=1.
$$

所以

$$
\boxed{K=0.9}.
$$

</details>

### 四、Bode 图与稳定裕度

回忆版给出的对数渐近幅频曲线如下：

![对数渐近幅频特性](/images/automatic-control/2025-exam-bode-asymptote.png)

<details class="exam-answer">
<summary>查看传递函数、相频曲线与稳定裕度</summary>

低频斜率为 $-40\ \mathrm{dB/dec}$，说明有两个原点极点；在 $\omega=0.2$ 处斜率增加 $20\ \mathrm{dB/dec}$，说明有一个零点；在 $\omega=1$ 处斜率减少 $20\ \mathrm{dB/dec}$，说明有一个极点。因此

$$
G(s)=\frac{K(1+s/0.2)}{s^2(1+s)}.
$$

渐近线在 $\omega=5$ 处穿过 $0\ \mathrm{dB}$。代入高频渐近式可得 $K=5$，所以

$$
\boxed{G(s)=\frac{5(1+5s)}{s^2(1+s)}
=\frac{25(s+0.2)}{s^2(s+1)}}.
$$

相频特性为

$$
\phi(\omega)=-180^\circ+\arctan(5\omega)-\arctan\omega.
$$

按渐近图取 $\omega_c\approx5$，有

$$
\phi(5)\approx-170.98^\circ,
\qquad \gamma=180^\circ+\phi(5)\approx9.0^\circ.
$$

精确幅值下的交叉频率略小于 5，结论基本不变。相位对有限 $\omega$ 始终大于 $-180^\circ$，只在无穷远渐近 $-180^\circ$，因此没有有限相位交叉频率，增益裕度为无穷大。闭环特征多项式为

$$
s^3+s^2+25s+5,
$$

Routh 第一列均为正，闭环稳定，但相位裕度较小。

</details>

### 五、Nyquist 题

单位负反馈系统开环传递函数为

$$
G(s)=\frac{K}{s(s^2+6s+9)}
=\frac{K}{s(s+3)^2},\qquad K>0.
$$

<details class="exam-answer">
<summary>查看 Nyquist 关键点与稳定范围</summary>

令 $s=j\omega$，分母为

$$
j\omega(3+j\omega)^2
=-6\omega^2+j\omega(9-\omega^2).
$$

Nyquist 曲线穿过实轴时 $\omega(9-\omega^2)=0$。取正频率交点 $\omega=3$：

$$
G(j3)=-\frac{K}{54}.
$$

开环没有右半平面极点，但有一个原点极点，绘制 Nyquist 围线时要用小半圆绕开。稳定边界发生在曲线通过 $-1$，即 $K=54$。

也可用闭环特征方程验证：

$$
s^3+6s^2+9s+K=0.
$$

Routh 条件给出

$$
K>0,\qquad 6\times9>K.
$$

所以渐近稳定范围为

$$
\boxed{0<K<54}.
$$

$K=54$ 时有一对极点位于 $\pm j3$，系统临界稳定。

</details>

### 六、状态空间综合题

已知

$$
\dot x=Ax+bu,
\quad
A=\begin{bmatrix}-1&1\\2&0\end{bmatrix},
\quad
b=\begin{bmatrix}0\\1\end{bmatrix},
\quad
y=cx.
$$

回忆版没有保留下输出矩阵 $c$ 的具体数值。

#### 1. 状态转移矩阵与单位阶跃响应

<details class="exam-answer">
<summary>查看完整计算</summary>

$A$ 的特征值为 $1$ 和 $-2$。利用谱分解可得

$$
e^{At}=\frac{e^t(A+2I)-e^{-2t}(A-I)}{3},
$$

即

$$
e^{At}=\frac13
\begin{bmatrix}
e^t+2e^{-2t}&e^t-e^{-2t}\\
2e^t-2e^{-2t}&2e^t+e^{-2t}
\end{bmatrix}.
$$

当 $x(0)=[1,2]^{\mathsf T}$、$u(t)=1$ 时，

$$
x(t)=e^{At}x(0)+\int_0^t e^{A(t-\tau)}b\,d\tau.
$$

计算得到

$$
x(t)=\frac16
\begin{bmatrix}
8e^t+e^{-2t}-3\\
16e^t-e^{-2t}-3
\end{bmatrix}.
$$

代入 $t=0$ 可恢复初值 $[1,2]^{\mathsf T}$，这是一个快速自检。

</details>

#### 2. 渐近稳定与 BIBO 稳定

<details class="exam-answer">
<summary>查看答案与题面缺失说明</summary>

$A$ 有特征值 $+1$，所以系统**不是内部渐近稳定的**。

BIBO 稳定性还取决于输出矩阵 $c=[c_1,c_2]$。传递函数为

$$
G(s)=c(sI-A)^{-1}b
=\frac{c_1+c_2(s+1)}{(s-1)(s+2)}.
$$

若 $c_1+2c_2=0$，不稳定极点 $s=1$ 被不可观测零点抵消，输入输出传递函数只剩稳定极点，系统可以 BIBO 稳定；否则不稳定。由于回忆版缺少 $c$，不能唯一判断这一问的数值答案。

这也说明：**内部稳定比 BIBO 稳定更强**。传递函数可能因为不可控或不可观模态对消而“看不见”内部不稳定状态。

</details>

#### 3. 可控性与可控标准形

<details class="exam-answer">
<summary>查看变换矩阵与标准形</summary>

可控性矩阵为

$$
S=[b,Ab]
=\begin{bmatrix}0&1\\1&0\end{bmatrix},
$$

满秩，因此系统可控。

取

$$
\hat x=Px,
\qquad
P=\begin{bmatrix}1&0\\-1&1\end{bmatrix},
$$

则

$$
\hat A=PAP^{-1}
=\begin{bmatrix}0&1\\2&-1\end{bmatrix},
\qquad
\hat b=Pb
=\begin{bmatrix}0\\1\end{bmatrix}.
$$

这就是与特征多项式 $s^2+s-2$ 对应的一种可控标准形。若教材采用转置的 companion 约定，矩阵外观会不同，但两者相似且结论一致。

</details>

#### 4. 配置到 $-2\pm j2$

<details class="exam-answer">
<summary>查看状态反馈增益</summary>

设

$$
u=v-kx,
\qquad k=[k_1,k_2].
$$

闭环矩阵 $A-bk$ 的特征多项式为

$$
s^2+(k_2+1)s+(k_1+k_2-2).
$$

目标极点 $-2\pm j2$ 对应

$$
(s+2-j2)(s+2+j2)=s^2+4s+8.
$$

比较系数得

$$
k_2=3,\qquad k_1=7.
$$

因此

$$
\boxed{k=[7,3]}.
$$

</details>

### 七、证明题

#### 1. 可逆变换不影响可观测性

<details class="exam-answer">
<summary>查看证明</summary>

令 $x=Pz$，其中 $P$ 可逆。变换后

$$
\bar A=P^{-1}AP,
\qquad
\bar c=cP.
$$

原系统和新系统的可观测矩阵分别为

$$
V=\begin{bmatrix}c\\cA\\\vdots\\cA^{n-1}\end{bmatrix},
\qquad
\bar V=\begin{bmatrix}\bar c\\\bar c\bar A\\\vdots\\\bar c\bar A^{n-1}\end{bmatrix}.
$$

逐项代入可得

$$
\bar V=VP.
$$

右乘可逆矩阵不改变秩，所以 $\operatorname{rank}\bar V=\operatorname{rank}V$。因此可逆状态坐标变换不改变可观测性。

</details>

#### 2. 可观系统的观测器极点可任意配置

<details class="exam-answer">
<summary>查看对偶性证明</summary>

系统 $(A,c)$ 可观，当且仅当对偶系统 $(A^{\mathsf T},c^{\mathsf T})$ 可控。由可控系统的状态反馈极点配置定理，对任意目标特征多项式，都存在反馈增益 $H^{\mathsf T}$，使

$$
A^{\mathsf T}-c^{\mathsf T}H^{\mathsf T}
$$

具有指定极点。转置后得到

$$
A-Hc,
$$

而矩阵与其转置具有相同特征值。因此，只要系统可观，就可以选择观测器增益 $H$，把误差系统 $\dot e=(A-Hc)e$ 的极点配置到任意期望位置。

</details>

### 复习提示

- 结构图题先给每个中间变量命名，再列代数方程，比盯着方框硬化简更稳。
- 根轨迹、Bode、Nyquist 和 Routh 不是四套互不相关的方法，它们都在回答闭环特征方程的根如何随参数变化。
- 状态空间题先分清内部稳定、BIBO 稳定、可控和可观，它们不是同一个概念。
