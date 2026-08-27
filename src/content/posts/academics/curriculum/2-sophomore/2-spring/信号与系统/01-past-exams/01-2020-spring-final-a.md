---
title: "2019–2020 学年第二学期期末真题（A 卷）"
description: "2020 年信号与系统期末 A 卷，含选择、填空与七道计算题的逐题折叠解析。"
date: 2026-08-27
tags: ["真题"]
---

原卷日期为 2020 年 6 月 19 日，满分 100 分。原卷不附答案；下面保留题目数据，并依据课程方法补全解析。

## 一、单项选择题（每空 2 分，共 20 分）

### 1. 系统性质

系统 $r(t)=3e'(t)+te(t)$ 是：

- A. 线性时不变系统
- B. 非线性时变系统
- C. 线性时变系统
- D. 非线性时不变系统

<details class="exam-answer">
<summary>展开解析</summary>

答案：**C**。微分、数乘和相加都保持线性，但显式系数 $t$ 会随绝对时间改变，所以系统时变。

</details>

### 2. 零初始 LTI 系统的齐次性

零初始连续 LTI 系统在输入 $e(t)$ 时全响应为 $r(t)$。输入改为 $2e(t)$ 时，全响应是：

- A. $r(t)$
- B. $r(t)/2$
- C. $2r(t)$
- D. 发生变化，但以上答案均不正确

<details class="exam-answer">
<summary>展开解析</summary>

答案：**C**。零初始时全响应就是零状态响应；由线性系统的齐次性，输入乘 2，响应也乘 2。

</details>

### 3. 冲激信号的抽样

计算

$$
\int_{-\infty}^{+\infty}(e^{-t}+t)\delta(t+2)\,dt.
$$

- A. $e^2$
- B. $e^2-2$
- C. $2$
- D. $e^2+2$

<details class="exam-answer">
<summary>展开解析</summary>

答案：**B**。$\delta(t+2)$ 在 $t=-2$ 处抽样，结果为 $e^{-(-2)}+(-2)=e^2-2$。

</details>

### 4. 余弦调制

若 $f(t)\leftrightarrow F(j\omega)$，则 $f(t)\cos\omega_0t$ 的傅里叶变换是：

- A. $\dfrac12\{F[j(\omega+\omega_0)]+F[j(\omega-\omega_0)]\}$
- B. $\dfrac12\{F[j(\omega+\omega_0)]-F[j(\omega-\omega_0)]\}$
- C. $\dfrac j2\{F[j(\omega+\omega_0)]-F[j(\omega-\omega_0)]\}$
- D. $\dfrac j2\{F[j(\omega+\omega_0)]+F[j(\omega-\omega_0)]\}$

<details class="exam-answer">
<summary>展开解析</summary>

答案：**A**。把余弦写成两个复指数之和，即得两份平移频谱的平均：

$$
\mathcal F\{f(t)\cos\omega_0t\}
=\frac12\left[F\bigl(j(\omega+\omega_0)\bigr)+F\bigl(j(\omega-\omega_0)\bigr)\right].
$$

</details>

### 5. 连续周期信号的频谱

连续周期信号的频谱具有：

- A. 连续性、周期性
- B. 连续性、非周期性
- C. 离散性、周期性
- D. 离散性、非周期性

<details class="exam-answer">
<summary>展开解析</summary>

答案：**D**。连续周期信号展开为离散谐波线谱；这些谱线一般不构成关于连续频率变量的周期函数。

</details>

### 6. 离散反馈系统的稳定范围

离散反馈系统

$$
H(z)=\frac{z}{z-2(1-k)}
$$

稳定时，$k$ 应满足：

- A. $0.5<k<1.5$
- B. $k>0.5$
- C. $k<1.5$
- D. $-\infty<k<+\infty$

<details class="exam-answer">
<summary>展开解析</summary>

答案：**A**。唯一极点为 $z=2(1-k)$，稳定要求

$$
|2(1-k)|<1
\quad\Longrightarrow\quad
0.5<k<1.5.
$$

</details>

### 7. 由对称性判断傅里叶级数

原卷图中的周期矩形波在 $(-T,-T/2)$ 与 $(0,T/2)$ 为正，在 $(-T/2,0)$ 与 $(T/2,T)$ 为负。它的傅里叶级数只包含：

- A. 正弦分量的奇次谐波
- B. 正弦分量的偶次谐波
- C. 余弦分量的奇次谐波
- D. 余弦分量的偶次谐波

<details class="exam-answer">
<summary>展开解析</summary>

答案：**C**。该波形关于 $t=0$ 偶对称，因此只含余弦；又满足半波反对称，因此只保留奇次谐波。

</details>

### 8. 拉普拉斯变换的尺度与复频移位

若 $f(t)\leftrightarrow F(s)$，则 $g(t)=e^{-at}f(t/a)$（$a>0$）的拉普拉斯变换是：

- A. $aF(as+1)$
- B. $aF(a^2s+a^2)$
- C. $aF(as+a^2)$
- D. $\dfrac1aF\left(\dfrac sa+1\right)$

<details class="exam-answer">
<summary>展开解析</summary>

答案：**C**。先用时间尺度性质 $\mathcal L\{f(t/a)\}=aF(as)$，再由乘 $e^{-at}$ 对应 $s\mapsto s+a$：

$$
G(s)=aF\bigl(a(s+a)\bigr)=aF(as+a^2).
$$

</details>

### 9. z 变换收敛域

序列

$$
x_3[n]=\begin{cases}a^n,&n\ge0,\\b^n,&n<0,
\end{cases}\qquad 0<a<b
$$

的 z 变换收敛域是：

- A. $a<|z|<b$
- B. $|z|>a$
- C. $|z|<b$
- D. $|z|>a$ 或 $|z|<b$

<details class="exam-answer">
<summary>展开解析</summary>

答案：**A**。右边序列 $a^n u[n]$ 要求 $|z|>a$；左边序列 $b^n$ 要求 $|z|<b$。两部分同时存在时取交集 $a<|z|<b$。

</details>

### 10. 二维 DFT 与图像信息

下列关于图像二维离散傅里叶变换的说法中不正确的是：

- A. 直流分量表示图像的平均灰度
- B. 低频分量表示缓慢变化部分
- C. 高频分量表示边缘、细节等
- D. 振幅表示图像灰度的位置信息

<details class="exam-answer">
<summary>展开解析</summary>

答案：**D**。频谱振幅说明各空间频率分量的强弱；图像结构的位置关系主要由相位承载。

</details>

## 二、填空题（每空 2 分，共 20 分）

### 1. 拉普拉斯逆变换

已知

$$
F(s)=\frac{2s+3}{(s+2)(s+3)},
$$

则 $f(t)=$____。

<details class="exam-answer">
<summary>展开解析</summary>

答案：

$$
f(t)=(-e^{-2t}+3e^{-3t})u(t).
$$

因为

$$
F(s)=-\frac1{s+2}+\frac3{s+3}.
$$

</details>

### 2. 冲激信号的傅里叶变换

计算

$$
\int_{-\infty}^{+\infty}e^{-j\omega t}[\delta(t)-\delta(t-t_0)]\,dt.
$$

<details class="exam-answer">
<summary>展开解析</summary>

答案：$1-e^{-j\omega t_0}$。第一项在 $t=0$ 抽样，第二项在 $t=t_0$ 抽样，并保留题目中的负号。

</details>

### 3. 连续与离散 LTI 系统的渐近稳定条件

连续时间 LTI 系统渐近稳定时，系统函数的极点位于 s 平面的____；离散时间 LTI 系统渐近稳定时，系统函数的极点位于 z 平面的____。

<details class="exam-answer">
<summary>展开解析</summary>

答案：分别为 **左半平面** 和 **单位圆内**。两种条件都在保证系统自然模态随时间衰减。

</details>

### 4. 由框图写差分方程

原卷框图等价于

$$
y[n]=\frac52x[n]+\frac32x[n-1]+\frac12x[n-2]-\frac12y[n-1].
$$

将它写成标准差分方程。

<details class="exam-answer">
<summary>展开解析</summary>

答案：

$$
y[n]+\frac12y[n-1]
=\frac52x[n]+\frac32x[n-1]+\frac12x[n-2].
$$

只需把反馈项 $-y[n-1]/2$ 移到等号左边。

</details>

### 5. 由阶跃响应求冲激响应

系统的单位阶跃响应为 $g(t)=e^{-t}u(t)$，则单位冲激响应 $h(t)=$____。

<details class="exam-answer">
<summary>展开解析</summary>

答案：

$$
h(t)=g'(t)=\delta(t)-e^{-t}u(t).
$$

求导时不能漏掉 $u(t)$ 在原点产生的冲激项。

</details>

### 6. 稳定因果系统冲激响应的终值

因果连续 LTI 系统 $H(s)$ 的全部极点均位于 s 左半平面，则 $\lim_{t\to\infty}h(t)=$____。

<details class="exam-answer">
<summary>展开解析</summary>

答案：**0**。左半平面的极点对应随时间指数衰减的自然模态。

</details>

### 7. z 逆变换

已知

$$
X(z)=\frac{10z}{(z-1)(z+1)},\qquad |z|>1,
$$

则 $x[n]=$____。

<details class="exam-answer">
<summary>展开解析</summary>

答案：

$$
x[n]=5[1-(-1)^n]u[n].
$$

部分分式为

$$
X(z)=5\frac{z}{z-1}-5\frac{z}{z+1},
$$

收敛域在最外极点之外，所以两项都取右边序列。

</details>

### 8. 由微分方程求系统函数

连续时间系统满足

$$
r''(t)+6r'(t)+7r(t)=3e'(t)+9e(t),
$$

则系统函数为____。

<details class="exam-answer">
<summary>展开解析</summary>

答案：

$$
H(s)=\frac{R(s)}{E(s)}
=\frac{3s+9}{s^2+6s+7}
=\frac{3(s+3)}{s^2+6s+7}.
$$

系统函数按零初始条件定义。

</details>

### 9. 周期序列的卷积和

周期分别为 3 和 5 的两个离散序列作卷积和，结果周期为____。

<details class="exam-answer">
<summary>展开解析</summary>

卷面预期答案：**15**。这里采用课程里周期卷积的常用结论，取两个周期的最小公倍数

$$
\operatorname{lcm}(3,5)=15.
$$

严格地说，结果的基本周期只保证整除 $15$，特殊序列可能出现更小的基本周期；对普通双无限序列的卷积，还要先说明求和收敛。考试题省略了这些退化情形和定义条件，因此按课程约定填写 $15$。

</details>

## 三、第 1 题：傅里叶变换（12 分）

已知 $\mathcal F[f(t)]=F(\omega)$，求 $f(2t-5)$、$tf(2t)$、$t\,df(t)/dt$ 的傅里叶变换。

<details class="exam-answer">
<summary>展开解析</summary>

$$
\mathcal F\{f(2t-5)\}
=\frac12F\left(\frac\omega2\right)e^{-j5\omega/2},
$$

$$
\mathcal F\{tf(2t)\}
=j\frac{d}{d\omega}\left[\frac12F\left(\frac\omega2\right)\right]
=\frac j4F'\left(\frac\omega2\right),
$$

$$
\mathcal F\left\{t\frac{df}{dt}\right\}
=-F(\omega)-\omega F'(\omega).
$$

</details>

## 四、第 2 题：稳定性判断（6 分）

判断下列系统的稳定性并说明原因：

1. 连续系统极点为 $-2$、$3+4j$；
2. 连续系统特征方程 $D(s)=2s^4+s^2+5s+1$；
3. 离散系统特征方程 $D(z)=z^2-z+0.25$。

<details class="exam-answer">
<summary>展开解析</summary>

1. **不稳定**。极点 $3+4j$ 位于右半平面。
2. **不稳定**。Routh 表首列可用一个很小的 $\varepsilon>0$ 代替缺失的 $s^3$ 项，符号依次为正、正、负、正、正，发生两次变号，说明有两个右半平面根。
3. **稳定**。$D(z)=(z-0.5)^2$，重极点仍严格位于单位圆内。

</details>

## 五、第 3 题：拉普拉斯变换（6 分）

求 $(t-1)e^{-at}u(t-1)$ 的拉普拉斯变换。

<details class="exam-answer">
<summary>展开解析</summary>

令 $\tau=t-1$，则

$$
(t-1)e^{-at}u(t-1)=e^{-a}\tau e^{-a\tau}u(\tau).
$$

再使用延时性质：

$$
X(s)=\frac{e^{-(s+a)}}{(s+a)^2},\qquad \Re(s)>-a.
$$

</details>

## 六、第 4 题：离散卷积（10 分）

原卷图中两序列的非零样值为：

| $k$ | 0 | 1 | 2 | 3 | 4 |
|---|---:|---:|---:|---:|---:|
| $f[k]$ | 0.4 | 0.3 | 0.2 | 0.1 | 0 |
| $h[k]$ | 0.3 | 0.2 | 0.2 | 0.2 | 0.1 |

求 $f[k]*h[k]$。

<details class="exam-answer">
<summary>展开解析</summary>

逐项滑动相乘，$n=0,1,\ldots,7$ 的结果为

$$
[0.12,\ 0.17,\ 0.20,\ 0.21,\ 0.16,\ 0.09,\ 0.04,\ 0.01].
$$

例如 $n=3$ 时

$$
y[3]=0.4\times0.2+0.3\times0.2+0.2\times0.2+0.1\times0.3=0.21.
$$

</details>

## 七、第 5 题：连续系统响应（8 分）

系统满足

$$
r''(t)+3r'(t)+2r(t)=2e'(t)+6e(t),
$$

且 $e(t)=u(t)$、$r(0^-)=2$、$r'(0^-)=1$。求自由响应与零状态响应。

<details class="exam-answer">
<summary>展开解析</summary>

在 $t=0$ 附近，输入导数产生 $2\delta(t)$，使 $r'(0^+)=3$，而 $r(0^+)=2$。$t>0$ 时特解为 3，因此全响应为

$$
r(t)=[3+e^{-t}-2e^{-2t}]u(t).
$$

其中自由响应是齐次部分

$$
r_f(t)=(e^{-t}-2e^{-2t})u(t).
$$

零状态时

$$
R_{zs}(s)=\frac{2(s+3)}{s(s+1)(s+2)}
=\frac3s-\frac4{s+1}+\frac1{s+2},
$$

所以

$$
r_{zs}(t)=(3-4e^{-t}+e^{-2t})u(t).
$$

</details>

## 八、第 6 题：离散系统（12 分）

已知

$$
y[n]-\frac34y[n-1]+\frac18y[n-2]=x[n]+x[n-1],
$$

输入 $x[n]=u[n]$，初值 $y[-1]=1$、$y[-2]=0$。求系统函数、单位样值响应与零状态响应。

<details class="exam-answer">
<summary>展开解析</summary>

零初始 $z$ 变换给出

$$
H(z)=\frac{1+z^{-1}}{1-\frac34z^{-1}+\frac18z^{-2}}.
$$

分母极点为 $1/2$ 与 $1/4$。因果部分分式为

$$
H(z)=6\frac{z}{z-1/2}-5\frac{z}{z-1/4},
$$

故

$$
h[n]=\left[6\left(\frac12\right)^n-5\left(\frac14\right)^n\right]u[n].
$$

与 $u[n]$ 卷积，或对 $H(z)z/(z-1)$ 分解，得到

$$
y_{zs}[n]=\left[\frac{16}{3}-6\left(\frac12\right)^n
+\frac53\left(\frac14\right)^n\right]u[n].
$$

</details>

## 九、第 7 题：状态方程转移函数（6 分）

系统状态方程与输出方程为

$$
\begin{cases}
\lambda_1'(t)=-5\lambda_1(t)-\lambda_2(t)+2e(t),\\
\lambda_2'(t)=3\lambda_1(t)-\lambda_2(t)+5e(t),
\end{cases}
$$

$$
r(t)=\lambda_1(t)+\lambda_2(t).
$$

求转移函数 $H(s)$。

<details class="exam-answer">
<summary>展开解析</summary>

写成 $\dot\lambda=A\lambda+Be$、$r=C\lambda$，其中

$$
A=\begin{bmatrix}-5&-1\\3&-1\end{bmatrix},\quad
B=\begin{bmatrix}2\\5\end{bmatrix},\quad
C=\begin{bmatrix}1&1\end{bmatrix}.
$$

于是

$$
H(s)=C(sI-A)^{-1}B
=\frac{7s+28}{s^2+6s+8}
=\frac7{s+2}.
$$

最后一步的约分说明 $s=-4$ 对输入输出通道不可见；它仍可能存在于内部状态中。

</details>
