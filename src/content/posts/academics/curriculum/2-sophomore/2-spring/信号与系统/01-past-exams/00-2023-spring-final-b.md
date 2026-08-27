---
title: "2022–2023 学年第二学期期末真题（B 卷）"
description: "2023 年信号与系统期末 B 卷，含选择、填空与六道计算题的逐题折叠解析。"
date: 2026-08-27
tags: ["真题"]
---

原卷署名为“2022–2023 学年第二学期期末”，卷面日期为 2023 年 9 月 5 日，满分 100 分。原卷不附答案；下面的解析依据题面、课程课件与基本变换性质推导。

## 一、单项选择题（每空 2 分，共 20 分）

### 1. 系统性质

已知系统方程为 $r(t)=3e(t)$，则该系统是：

- A. 线性、时不变系统
- B. 线性、时变系统
- C. 非线性、时不变系统
- D. 非线性、时变系统

<details class="exam-answer">
<summary>展开解析</summary>

答案：**A**。常数倍映射满足叠加性；输入平移后，输出也只发生同样的平移，所以系统线性且时不变。

</details>

### 2. 零初始 LTI 系统的齐次性

某连续 LTI 系统初始状态为零，输入 $e(t)$ 时全响应为 $r(t)$。输入改为 $0.5e(t)$ 时，全响应是：

- A. $r(t)$
- B. $r(t)/2$
- C. $2r(t)$
- D. 发生变化，但以上答案均不正确

<details class="exam-answer">
<summary>展开解析</summary>

答案：**B**。零初始时全响应就是零状态响应；线性系统满足齐次性，输入缩小为一半，响应也缩小为一半。

</details>

### 3. 冲激信号的抽样

计算

$$
\int_{-\infty}^{+\infty}(e^t+1)\delta(t+1)\,dt.
$$

- A. $e-1$
- B. $e+1$
- C. $e^{-1}-1$
- D. $e^{-1}+1$

<details class="exam-answer">
<summary>展开解析</summary>

答案：**D**。$\delta(t+1)$ 在 $t=-1$ 处抽样，因此结果为 $e^{-1}+1$。

</details>

### 4. 正弦调制

若 $f(t)\leftrightarrow F(j\omega)$，则 $f(t)\sin(\omega_0t)$ 的傅里叶变换是：

- A. $\dfrac12\{F[j(\omega+\omega_0)]+F[j(\omega-\omega_0)]\}$
- B. $\dfrac12\{F[j(\omega+\omega_0)]-F[j(\omega-\omega_0)]\}$
- C. $\dfrac j2\{F[j(\omega+\omega_0)]-F[j(\omega-\omega_0)]\}$
- D. $\dfrac j2\{F[j(\omega+\omega_0)]+F[j(\omega-\omega_0)]\}$

<details class="exam-answer">
<summary>展开解析</summary>

答案：**C**。由

$$
\sin\omega_0t=\frac{e^{j\omega_0t}-e^{-j\omega_0t}}{2j},
$$

可得

$$
\mathcal F\{f(t)\sin\omega_0t\}
=\frac j2\left[F\bigl(j(\omega+\omega_0)\bigr)-F\bigl(j(\omega-\omega_0)\bigr)\right].
$$

</details>

### 5. 离散非周期信号的频谱

离散非周期信号的频谱具有：

- A. 连续性、周期性
- B. 连续性、非周期性
- C. 离散性、周期性
- D. 离散性、非周期性

<details class="exam-answer">
<summary>展开解析</summary>

答案：**A**。离散时间非周期信号的 DTFT 对 $\omega$ 连续，并以 $2\pi$ 为周期。

</details>

### 6. 离散反馈系统的稳定范围

离散反馈系统

$$
H(z)=\frac{z}{z-3(2-k)}
$$

稳定时，$k$ 应满足：

- A. $k>5/3$
- B. $k<7/3$
- C. $5/3<k<7/3$
- D. $-\infty<k<+\infty$

<details class="exam-answer">
<summary>展开解析</summary>

答案：**C**。唯一极点是 $z=6-3k$，稳定要求它在单位圆内：

$$
|6-3k|<1
\quad\Longrightarrow\quad
\frac53<k<\frac73.
$$

</details>

### 7. 尺度变换与时移

若 $f(t)\leftrightarrow F(\omega)$，则 $g(t)=f(2t-3)$ 的傅里叶变换是：

- A. $\dfrac12F(\omega)e^{-j3\omega/2}$
- B. $\dfrac12F(\omega/2)e^{-j3\omega/2}$
- C. $\dfrac12F(\omega)e^{-j3\omega}$
- D. $\dfrac12F(\omega/2)e^{-j3\omega}$

<details class="exam-answer">
<summary>展开解析</summary>

答案：**B**。把 $2t-3$ 写成 $2(t-3/2)$，先压缩再右移：

$$
G(\omega)=\frac12F\left(\frac\omega2\right)e^{-j3\omega/2}.
$$

</details>

### 8. 拉普拉斯变换的尺度与复频移位

若 $f(t)\leftrightarrow F(s)$，则 $g(t)=e^{-t/a}f(at)$（$a>0$）的拉普拉斯变换是：

- A. $\dfrac1aF\left(\dfrac sa+\dfrac1{a^2}\right)$
- B. $\dfrac1aF\left(\dfrac{s}{a^2}+\dfrac1{a^2}\right)$
- C. $aF(as+a^2)$
- D. $aF(a^2s+a^2)$

<details class="exam-answer">
<summary>展开解析</summary>

答案：**A**。时间尺度给出 $\mathcal L\{f(at)\}=F(s/a)/a$；再乘 $e^{-t/a}$，就是把其中的 $s$ 换成 $s+1/a$：

$$
G(s)=\frac1aF\left(\frac{s}{a}+\frac1{a^2}\right).
$$

</details>

### 9. 傅里叶变换与图像处理

下列说法中不正确的是：

- A. 图像去噪可通过低通滤波器滤除高频噪声
- B. 图像增强可通过加强低频分量增强原始图像边缘
- C. 直流分量表示图像的平均灰度
- D. 相位决定了图像灰度的位置信息

<details class="exam-answer">
<summary>展开解析</summary>

答案：**B**。边缘和细节对应图像中的快速变化，主要落在高频；增强低频会突出缓慢变化的主体，而不是增强边缘。

</details>

### 10. 数字滤波器

下面关于数字滤波器的说法中错误的是：

- A. 数字滤波器的频率响应都以 $2\pi$ 为周期
- B. IIR 滤波器设计方法包括窗函数法、频率采样法等
- C. 若要求 FIR 滤波器具有线性相位，则 $h(n)$ 必须满足奇对称或偶对称条件
- D. IIR 滤波器有极点和零点，可借用模拟滤波器设计方法进行设计

<details class="exam-answer">
<summary>展开解析</summary>

答案：**B**。窗函数法和频率采样法是典型的 FIR 设计方法；IIR 常由模拟原型经冲激响应不变法或双线性变换等方法得到。

</details>

## 二、填空题（每空 2 分，共 20 分）

### 1. 函数集的正交性

函数集 $\{1,t,t^2,t^3\}$ 在 $(0,1)$ 上是____（正交/非正交）的。

<details class="exam-answer">
<summary>展开解析</summary>

答案：**非正交**。例如

$$
\int_0^1 1\cdot t\,dt=\frac12\ne0,
$$

已有一对函数内积不为零。

</details>

### 2. 人类视觉系统的频率敏感度

人类视觉系统对____（低频/高频）信号的敏感程度更低。

<details class="exam-answer">
<summary>展开解析</summary>

答案：**高频**。视觉系统整体上对缓慢变化的低频结构更敏感，对很细的高频变化相对不敏感。

</details>

### 3. 离散 LTI 系统的渐近稳定性

离散时间 LTI 系统渐近稳定时，系统函数的极点都应位于 z 平面的____。

<details class="exam-answer">
<summary>展开解析</summary>

答案：**单位圆内**。因果有理系统的自然模态只有在全部极点满足 $|p_i|<1$ 时才会随 $n$ 衰减。

</details>

### 4. 有限长序列的线性卷积长度

长度分别为 4 和 6 的两个有限长序列作线性卷积，结果长度为____。

<details class="exam-answer">
<summary>展开解析</summary>

答案：**9**。有限长线性卷积长度为 $L_1+L_2-1=4+6-1$。

</details>

### 5. 自由响应与受迫响应

若全响应为

$$
r(t)=(4e^{-t}-3e^{-2t})u(t),
$$

则自由响应为____，受迫响应为____。

<details class="exam-answer">
<summary>展开解析</summary>

仅凭题面给出的全响应，**无法唯一拆出自由响应和受迫响应**：还需要知道系统的固有模态，或者输入信号的形式。

若另有条件说明系统固有极点为 $-2$、输入含 $e^{-t}u(t)$，才可写成

$$
r_{\mathrm f}(t)=-3e^{-2t}u(t),\qquad
r_{\mathrm p}(t)=4e^{-t}u(t).
$$

现存试卷没有给出这项条件，因此不能把上面的条件化结果当作唯一答案。

</details>

### 6. 拉普拉斯变换初值定理

已知

$$
X(s)=\frac{s^2+2s+1}{(s+1)(s+2)(s+3)},
$$

原信号的初值为____。

<details class="exam-answer">
<summary>展开解析</summary>

答案：**1**。由初值定理

$$
x(0^+)=\lim_{s\to\infty}sX(s)=1.
$$

</details>

### 7. 由微分方程求系统函数

系统方程为 $r''(t)+3r'(t)+r(t)=2e(t)$，系统函数为____。

<details class="exam-answer">
<summary>展开解析</summary>

答案：

$$
H(s)=\frac{R(s)}{E(s)}=\frac{2}{s^2+3s+1}.
$$

系统函数按零初始条件定义，变换微分方程后直接取输出与输入之比。

</details>

### 8. 离散系统的稳定性

离散系统特征方程 $D(z)=z^2-0.75z+0.125$，则系统是____（稳定/不稳定）的。

<details class="exam-answer">
<summary>展开解析</summary>

答案：**稳定**。因为

$$
D(z)=(z-0.5)(z-0.25),
$$

两个极点都在单位圆内。

</details>

### 9. 由 z 变换收敛域判断序列方向

对

$$
X(z)=\frac{-3z^{-1}}{2-5z^{-1}+2z^{-2}},
$$

若收敛域为 $|z|<0.5$，则对应____（左边序列/右边序列/双边序列）。

<details class="exam-answer">
<summary>展开解析</summary>

答案：**左边序列**。分母的两个极点为 $0.5$ 与 $2$；收敛域在最内层极点以内，意味着各分量都取左边序列。

</details>

## 三、第 1 题：傅里叶变换（8 分）

已知 $\mathcal F[f(t)]=F(\omega)$，求：

1. $f(2t+1)$；
2. $t\dfrac{df(t)}{dt}$。

<details class="exam-answer">
<summary>展开解析</summary>

第一小题把 $2t+1$ 写成 $2(t+1/2)$：

$$
\mathcal F\{f(2t+1)\}
=\frac12F\left(\frac\omega2\right)e^{j\omega/2}.
$$

第二小题先用时域微分，再用时域乘 $t$ 对应频域求导：

$$
\mathcal F\left\{t\frac{df}{dt}\right\}
=j\frac{d}{d\omega}[j\omega F(\omega)]
=-F(\omega)-\omega F'(\omega).
$$

</details>

## 四、第 2 题：离散系统的零极点（10 分）

某离散 LTI 因果系统有两个零点 $0,-4$，两个极点 $-1,-7$，且 $H(\infty)=2$。求系统函数、差分方程和单位样值响应。

<details class="exam-answer">
<summary>展开解析</summary>

由零极点直接写出

$$
H(z)=\frac{2z(z+4)}{(z+1)(z+7)}
=\frac{2+8z^{-1}}{1+8z^{-1}+7z^{-2}}.
$$

因此差分方程为

$$
y[n]+8y[n-1]+7y[n-2]=2x[n]+8x[n-1].
$$

部分分式为

$$
H(z)=\frac{z}{z+1}+\frac{z}{z+7}.
$$

因系统因果，收敛域在最外极点之外，故

$$
h[n]=\bigl[(-1)^n+(-7)^n\bigr]u[n].
$$

</details>

## 五、第 3 题：反馈系统稳定性（12 分）

已知

$$
H(s)=\frac{Ks}{s^2+(4-K)s+4}.
$$

1. $K=4$ 时判断稳定性并求 $h(t)$；
2. $K=-1$ 时判断稳定性并求 $h(t)$；
3. $K=-1$、输入 $x(t)=u(t)$ 时，求零状态响应。

<details class="exam-answer">
<summary>展开解析</summary>

当 $K=4$ 时，

$$
H(s)=\frac{4s}{s^2+4},\qquad h(t)=4\cos(2t)u(t).
$$

极点在 $\pm j2$，冲激响应不绝对可积，所以系统不是 BIBO 稳定系统；若课程采用“临界稳定”分类，它处于临界稳定状态。

当 $K=-1$ 时，

$$
H(s)=\frac{-s}{(s+1)(s+4)}
=\frac{1/3}{s+1}-\frac{4/3}{s+4},
$$

两极点都在左半平面，系统稳定，并且

$$
h(t)=\left(\frac13e^{-t}-\frac43e^{-4t}\right)u(t).
$$

阶跃输入时

$$
Y(s)=\frac{H(s)}s=-\frac1{(s+1)(s+4)},
$$

所以

$$
y(t)=\frac13(e^{-4t}-e^{-t})u(t).
$$

</details>

## 六、第 4 题：零输入与零状态响应（12 分）

连续系统满足

$$
r''(t)+4r'(t)+3r(t)=2e(t),
$$

输入 $e(t)=u(t)$，初始状态 $r(0^-)=2$、$r'(0^-)=0$。求零输入响应、零状态响应和全响应。

<details class="exam-answer">
<summary>展开解析</summary>

零输入响应满足齐次方程，设

$$
r_{zi}(t)=Ae^{-t}+Be^{-3t}.
$$

代入 $A+B=2$、$-A-3B=0$，得

$$
r_{zi}(t)=(3e^{-t}-e^{-3t})u(t).
$$

零状态传递关系为

$$
R_{zs}(s)=\frac{2}{s(s+1)(s+3)}
=\frac{2/3}{s}-\frac1{s+1}+\frac{1/3}{s+3},
$$

故

$$
r_{zs}(t)=\left(\frac23-e^{-t}+\frac13e^{-3t}\right)u(t).
$$

两者相加：

$$
r(t)=\left(\frac23+2e^{-t}-\frac23e^{-3t}\right)u(t).
$$

</details>

## 七、第 5 题：卷积（10 分）

1. 设

   $$
   x[n]=\delta[n]+2\delta[n-1]-\delta[n-3],
   $$

   $$
   h[n]=2\delta[n+1]+2\delta[n-1],
   $$

   求 $x[n]*h[n]$。
2. $f_1(t)$ 是区间 $[0,1]$ 上高度为 1 的矩形脉冲，$f_2(t)$ 是区间 $[-3,-1]$ 上高度为 2 的矩形脉冲。求二者卷积并画出大致图像。

<details class="exam-answer">
<summary>展开解析</summary>

冲激移位逐项相加得

$$
x*h=2\delta[n+1]+4\delta[n]+2\delta[n-1]
+2\delta[n-2]-2\delta[n-4].
$$

连续卷积等于“重叠长度乘以高度 2”。令 $y=f_1*f_2$，则

$$
y(t)=
\begin{cases}
2(t+3),&-3\le t<-2,\\
2,&-2\le t<-1,\\
-2t,&-1\le t\le0,\\
0,&\text{其他}.
\end{cases}
$$

图像是在 $[-3,-2]$ 从 0 线性升到 2，在 $[-2,-1]$ 保持 2，再在 $[-1,0]$ 线性降到 0 的梯形。

</details>

## 八、第 6 题：傅里叶与拉普拉斯的关系（8 分）

简述连续傅里叶变换和拉普拉斯变换的物理意义及二者关系。

<details class="exam-answer">
<summary>展开解析</summary>

- 傅里叶变换把信号分解为不同角频率的复指数，$X(j\omega)$ 给出各频率分量的幅度与相位；对 LTI 系统，它把卷积变成频域乘法。
- 拉普拉斯变换使用 $e^{st}=e^{\sigma t}e^{j\omega t}$ 作为基函数，在振荡之外加入指数增长或衰减，因而能处理更多不满足傅里叶绝对可积条件的信号，也能把带初值的微分方程化成代数方程。
- 双边拉普拉斯变换

  $$
  X(s)=\int_{-\infty}^{\infty}x(t)e^{-st}\,dt
  $$

  在收敛域包含虚轴时，令 $s=j\omega$ 就得到傅里叶变换。也就是说，傅里叶变换是拉普拉斯变换沿虚轴的一条截面；是否能取这条截面，要看收敛域。

</details>
