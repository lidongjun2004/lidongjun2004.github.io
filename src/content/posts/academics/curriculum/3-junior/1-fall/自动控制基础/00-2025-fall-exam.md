---
title: "期末真题与回忆题（2022—2025）"
description: "汇总自动控制基础 2022 原卷与 2025 秋回忆题，附折叠解析、题面说明和完整推导"
date: 2026-08-23
tags: ["自动控制基础", "控制理论", "真题"]
---

本篇先放 2025 秋考后回忆题，再收录源目录中的 2022—2023 第一学期期末原卷。2025 题面明确标出若干“参数类似但并非原题”的位置，状态空间题的输出矩阵也没有回忆完整。下文只对能够由现有题面确定的部分给出数值答案；缺条件的地方给出一般结论，不补造原卷数据。

建议先独立计算，再展开解析。折叠内容不是课程组公布的标准答案，而是根据回忆题、课件和控制理论公式整理的参考解。

## 一、简答题

### 1. 自动控制的“灵魂”与性能评价

<details class="exam-answer">
<summary>查看答案与解析</summary>

自动控制的“灵魂”是**反馈**：测量输出、与期望比较得到误差，再根据误差修正输入，使系统在模型不准或有扰动时仍能接近期望行为。

课程里最常用的三个维度是：

- **稳**：系统受扰后能否回到平衡，是否具有足够稳定裕度；
- **准**：稳态误差是否足够小；
- **快**：上升时间、调节时间是否足够短。

实际设计还会考虑超调、振荡、鲁棒性、控制能量、噪声放大和执行器饱和等约束。

</details>

### 2. 二阶系统的最佳阻尼比

<details class="exam-answer">
<summary>查看答案与解析</summary>

常用工程折中是

$$
\zeta=\frac{1}{\sqrt2}\approx0.707.
$$

阻尼太小会产生明显振荡和超调，阻尼太大又使响应变慢。$\zeta\approx0.707$ 兼顾快速性与平稳性，并对应频域中的 Butterworth 型平坦幅频特性。它不是所有指标下都唯一最优，而是经典二阶设计中常用的折中值。

</details>

### 3. 频率特性及为何使用正弦输入

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

### 4. 滞后校正为何能提高相稳定裕度

<details class="exam-answer">
<summary>查看答案与解析</summary>

滞后网络本身会引入少量负相位，所以它不是靠“直接加正相位”提高裕度。它保持低频增益、衰减中高频增益，使增益交叉频率 $\omega_c$ 向低频移动；对象在较低频率处通常相位滞后更小，因此新的相位裕度反而增大。

代价是带宽下降、响应变慢。若需要明显加快系统并增加相位裕度，通常采用超前校正。

</details>

### 5. 状态反馈的极点配置条件

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

## 二、计算题

### 1. 二阶系统指标

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

### 2. Routh 判据求稳定增益范围

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

### 3. 前馈补偿与斜坡稳态误差

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

## 三、根轨迹题

![速度反馈系统](/images/automatic-control/2025-exam-root-locus-system.png)

### 1. 绘制 $K:0\to+\infty$ 时的根轨迹

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

### 2. 主导极点阻尼比为 $\zeta=0.5$ 时求 $K$

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

## 四、Bode 图与稳定裕度

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

## 五、Nyquist 题

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

## 六、状态空间综合题

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

### 1. 状态转移矩阵与单位阶跃响应

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

### 2. 渐近稳定与 BIBO 稳定

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

### 3. 可控性与可控标准形

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

### 4. 配置到 $-2\pm j2$

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

## 七、证明题

### 1. 可逆变换不影响可观测性

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

### 2. 可观系统的观测器极点可任意配置

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

## 复习提示

- 结构图题先给每个中间变量命名，再列代数方程，比盯着方框硬化简更稳。
- 根轨迹、Bode、Nyquist 和 Routh 不是四套互不相关的方法，它们都在回答闭环特征方程的根如何随参数变化。
- 状态空间题先分清内部稳定、BIBO 稳定、可控和可观，它们不是同一个概念。

## 2022—2023 第一学期期末原卷

原卷共七道大题，经典控制五题、现代控制两题。题面截图如下，后面逐题解析。

![2022 自控期末卷第 2 页](/images/automatic-control/2022-exam-page-2.png)

![2022 自控期末卷第 3 页](/images/automatic-control/2022-exam-page-3.png)

### 一、复杂结构图传递函数

<details class="exam-answer">
<summary>查看方程法推导</summary>

给结构图中三个综合点后的信号依次命名。设 $q$ 为 $G_2$ 的输入，则

$$
C=G_2q.
$$

第二个综合点的输出为

$$
z=(1+G_3)R-H_2C-H_1q.
$$

第三个综合点还减去外反馈 $H_3C$：

$$
q=G_1z-H_3C.
$$

代入 $C=G_2q$：

$$
q\left(1+G_1H_1+G_1G_2H_2+G_2H_3\right)
=G_1(1+G_3)R.
$$

所以

$$
\boxed{
\frac{C(s)}{R(s)}=
\frac{G_1G_2(1+G_3)}
{1+G_1H_1+G_1G_2H_2+G_2H_3}
}.
$$

这类多回路题用中间变量列信号方程，通常比连续移动综合点更不容易漏传递函数。

</details>

### 二、Routh 判据、左移稳定区域与稳态误差

开环传递函数为

$$
G(s)=\frac{K}{s(s/3+1)(s/6+1)}
=\frac{18K}{s(s+3)(s+6)}.
$$

<details class="exam-answer">
<summary>查看三问答案</summary>

闭环特征多项式：

$$
D(s)=s^3+9s^2+18s+18K.
$$

对三阶多项式列 Routh 表，稳定条件为系数为正且

$$
9\times18>18K.
$$

所以

$$
\boxed{0<K<9}.
$$

若要求所有根实部小于 $-1$，令

$$
s=z-1.
$$

要求关于 $z$ 的新多项式 Hurwitz：

$$
D(z-1)=z^3+6z^2+3z+(18K-10).
$$

Routh 条件为

$$
18K-10>0,
$$

$$
6\times3>18K-10.
$$

因此

$$
\boxed{\frac59<K<\frac{14}{9}}.
$$

$K=3$ 时系统为 I 型，速度误差系数

$$
K_v=\lim_{s\to0}sG(s)=K=3.
$$

单位斜坡稳态误差

$$
\boxed{e_{ss}=\frac1{K_v}=\frac13}.
$$

</details>

### 三、三极点系统根轨迹

$$
G(s)=\frac{K^*}{s(s+1)(s+2)}.
$$

<details class="exam-answer">
<summary>查看根轨迹数据与调节时间</summary>

开环极点为 $0,-1,-2$，无零点。根轨迹数据：

- 实轴段：$(-\infty,-2]$ 与 $[-1,0]$；
- 三条无穷远渐近线重心：

$$
\sigma_a=\frac{0-1-2}{3}=-1;
$$

- 渐近线角度：$60^\circ,180^\circ,300^\circ$；
- 分离点候选

$$
s=-1\pm\frac1{\sqrt3},
$$

其中只有

$$
s=-1+\frac1{\sqrt3}\approx-0.423
$$

位于合法实轴段；

- Routh 表给出稳定范围 $0<K^*<6$；$K^*=6$ 时轨迹穿过 $\pm j\sqrt2$。

当 $\zeta=0.707\approx1/\sqrt2$ 时，主导极点在 45° 阻尼线上。设

$$
s=-x\pm jx.
$$

代入特征方程

$$
s^3+3s^2+2s+K^*=0
$$

的虚部，合法交点满足

$$
x=\frac{3-\sqrt5}{2}\approx0.382.
$$

因为 $\zeta\omega_n=x$，2% 调节时间二阶近似为

$$
\boxed{t_s\approx\frac4x\approx10.47\text{ s}}.
$$

第三极点约在 $-2.236$，比主导极点更靠左，二阶近似具有一定合理性。

</details>

### 四、Bode 图与相位裕度

$$
G(s)=\frac{20(s+1)}{s(0.2s+1)}.
$$

<details class="exam-answer">
<summary>查看渐近线与裕度</summary>

组成环节：比例 20、积分环节、转折频率 1 rad/s 的零点、转折频率 5 rad/s 的极点。

渐近幅频斜率依次为：

- $\omega<1$：$-20$ dB/dec；
- $1<\omega<5$：0 dB/dec；
- $\omega>5$：$-20$ dB/dec。

高频渐近式给出增益截止频率约

$$
\omega_c\approx100\text{ rad/s}.
$$

相位为

$$
\phi(\omega)=
-90^\circ+\arctan\omega-\arctan(0.2\omega).
$$

代入 $\omega_c\approx100$：

$$
\gamma=180^\circ+\phi(\omega_c)
\approx92.3^\circ.
$$

精确截止频率约 99.88 rad/s，与渐近估计非常接近。

</details>

### 五、Nyquist 判据求增益范围

$$
G(s)=\frac{K}{s(s^2+2s+4)},
\qquad K>0.
$$

<details class="exam-answer">
<summary>查看稳定范围</summary>

闭环特征多项式为

$$
s^3+2s^2+4s+K.
$$

Nyquist 的临界边界也可由令 $s=j\omega$ 求出。虚部为

$$
-\omega^3+4\omega=0,
$$

非零解 $\omega=2$；实部条件给

$$
-2\omega^2+K=0
\Longrightarrow K=8.
$$

开环没有右半平面极点，$K$ 从正值增大到 8 时闭环首次到达虚轴。因此

$$
\boxed{0<K<8}.
$$

$K=8$ 为临界稳定，闭环含 $\pm j2$ 极点。用 Routh 表也得到同一范围，可作为复核。

</details>

### 六、可控、可观、两种稳定性与极点配置

$$
A=
\begin{bmatrix}
0&1&0\\
0&0&1\\
6&-1&-4
\end{bmatrix},
\quad
B=
\begin{bmatrix}0\\0\\1\end{bmatrix},
\quad
C=
\begin{bmatrix}-1&1&0\end{bmatrix}.
$$

<details class="exam-answer">
<summary>查看四问答案</summary>

这是可控标准形，或直接计算可控矩阵可得满秩 3，因此 $(A,B)$ 可控。

可观矩阵为

$$
\mathcal O=
\begin{bmatrix}
-1&1&0\\
0&-1&1\\
6&-1&-5
\end{bmatrix}.
$$

其秩为 2，所以系统不可观。

$A$ 的特征多项式：

$$
s^3+4s^2+s-6
=(s-1)(s+2)(s+3).
$$

存在右半平面特征值 1，故内部不渐近稳定。

传递函数：

$$
G(s)=\frac{s-1}{(s-1)(s+2)(s+3)}
=\frac1{(s+2)(s+3)}.
$$

约分后极点都在左半平面，所以 BIBO 稳定。不稳定模式 $s=1$ 因不可观而被对消。

系统可控，可以把闭环极点配置为 $-1,-2,-3$。期望多项式为

$$
(s+1)(s+2)(s+3)=s^3+6s^2+11s+6.
$$

令 $K=[k_1,k_2,k_3]$，比较 $A-BK$ 的特征多项式系数，得到

$$
\boxed{K=\begin{bmatrix}12&10&2\end{bmatrix}}.
$$

</details>

### 七、证明观测器反馈组合系统不可控

<details class="exam-answer">
<summary>查看证明</summary>

定义观测误差

$$
\tilde x=x-\hat x.
$$

使用

$$
u=v-K\hat x=v-Kx+K\tilde x
$$

后，对象和误差方程为

$$
\dot x=(A-BK)x+BK\tilde x+Bv,
$$

$$
\dot{\tilde x}=(A-HC)\tilde x.
$$

因此以 $[x^T,\tilde x^T]^T$ 为增广状态：

$$
\begin{bmatrix}\dot x\\\dot{\tilde x}\end{bmatrix}
=
\begin{bmatrix}
A-BK&BK\\
0&A-HC
\end{bmatrix}
\begin{bmatrix}x\\\tilde x\end{bmatrix}
+
\begin{bmatrix}B\\0\end{bmatrix}v.
$$

外部输入 $v$ 对观测误差子系统的输入块恒为 0；$\tilde x$ 的初态无法由 $v$ 任意驱动。因此这个 $2n$ 维增广实现至少有 $n$ 维不可控子空间，整体不可控。

这不与原对象 $(A,B)$ 可控矛盾：不可控的是把观测器误差也纳入后的冗余增广实现。分离原理仍保证闭环极点由 $A-BK$ 和 $A-HC$ 两组极点组成。

</details>
