---
title: "速成 · 基础物理学 A（2）"
description: "一条线串起热学、振动波动、波动光学、早期量子论与量子力学初步，并给出常见计算题的下手顺序。"
date: 2026-08-27
tags: ["速成"]
---

热学、振动与波、光学、量子物理放在同一学期，跨度确实很大。做题时反复用到的思想主要有三种：

1. **大量微粒取统计平均**：从分子运动得到温度、压强、分布和熵；
2. **线性波按振幅和相位叠加**：从振动走到机械波、干涉、衍射、偏振；
3. **边界条件筛选允许状态**：从驻波走到能级、波函数和原子量子数。

## 模块与题型

| 模块 | 核心问题 | 必会计算 |
|---|---|---|
| 热学 | 宏观状态为什么稳定、过程向哪走 | 状态方程、速率分布、热力学过程、循环、熵变 |
| 振动与波 | 一个局部振动怎样传播和叠加 | 简谐初值、相量、阻尼受迫、波函数、驻波、Doppler |
| 波动光学 | 光程差怎样变成明暗与偏振 | 双缝、薄膜、Newton 环、衍射、光栅、Malus |
| 早期量子论 | 经典物理在哪些实验上失败 | 黑体、光电、Compton、Bohr 能级 |
| 量子初步 | 怎样用概率幅描述微观状态 | de Broglie、不确定关系、归一化、势阱、量子数 |

## 热学：先分状态和路径

理想气体：

$$
pV=\nu RT=Nk_BT.
$$

动理论：

$$
p=\frac13nm\overline{v^2},
\qquad
\overline{\varepsilon_k}=\frac32k_BT.
$$

三个特征速率：

$$
v_p=\sqrt{\frac{2RT}{M}},
\quad
\bar v=\sqrt{\frac{8RT}{\pi M}},
\quad
v_{\mathrm{rms}}=\sqrt{\frac{3RT}{M}}.
$$

分布题牢记：函数值不是区间概率，面积才是。

平均自由程：

$$
\lambda=\frac{k_BT}{\sqrt2\pi d^2p}.
$$

黏性、热传导、扩散都可理解为“分子跨过截面，搬运某种量以削弱梯度”。

### 第一定律统一做题

本课程符号约定：

$$
Q=\Delta U+W,
\qquad
W=\int p\,\mathrm dV.
$$

对理想气体：

$$
\Delta U=\nu C_V\Delta T.
$$

| 过程 | 条件 | 功与热 |
|---|---|---|
| 等体 | $V$ 不变 | $W=0,\ Q=\Delta U$ |
| 等压 | $p$ 不变 | $W=\nu R\Delta T,\ Q=\nu C_p\Delta T$ |
| 等温 | $T$ 不变 | $\Delta U=0,\ W=Q=\nu RT\ln(V_2/V_1)$ |
| 可逆绝热 | $Q=0$ | $pV^\gamma=\text{常量},\ W=-\Delta U$ |

循环一周 $\Delta U=0$；$p$-$V$ 图围成面积是净功。

卡诺：

$$
\eta_C=1-\frac{T_C}{T_H}.
$$

第二定律：

$$
\oint\frac{\delta Q}{T}\le0,
\qquad
\Delta S_{\mathrm{isolated}}\ge0.
$$

熵是状态量。不可逆过程也要找连接同样初末态的可逆路径算熵变，不能把真实路径上的 $\delta Q/T$ 随手当 $\mathrm dS$。

## 振动与机械波：盯住相位

简谐振动：

$$
x=A\cos(\omega_0t+\varphi),
\qquad
\omega_0=\sqrt{\frac km}.
$$

由初值：

$$
A=\sqrt{x_0^2+\left(\frac{v_0}{\omega_0}\right)^2}.
$$

相位要根据 $x_0$ 和 $v_0$ 的符号判断象限。

受迫阻尼：

$$
m\ddot x+b\dot x+kx=F_0\cos\omega t.
$$

暂态会衰减，稳态与驱动同频；共振是供能节奏与系统响应匹配，不是“频率一相等就一定无限大”。

右行波：

$$
y=A\cos(\omega t-kx+\varphi_0).
$$

检验传播方向的方法：固定相位，算 $\mathrm dx/\mathrm dt$ 的符号。

两相干波在观察点的总相位差：

$$
\Delta\varphi
=\Delta\varphi_0-\frac{2\pi}{\lambda}(r_2-r_1).
$$

不要在源反相时仍套“整数波长相长”。

驻波：

$$
y=2A\cos kx\cos\omega t.
$$

相邻波节 $\lambda/2$，波节到波腹 $\lambda/4$。固定端是位移波节，自由端是位移波腹。

Doppler 先做方向判断：靠近应升频，远离应降频，再代

$$
\nu'=\nu\frac{u+v_o}{u-v_s}.
$$

## 波动光学：把所有题还原成光程差

光程 $L=nr$，相位差

$$
\Delta\varphi=\frac{2\pi}{\lambda_0}\delta
+\Delta\varphi_{\mathrm{extra}}.
$$

Young 双缝：

$$
\delta\approx\frac{dx}{D},
\qquad
\Delta x=\frac{\lambda D}{d}.
$$

薄膜反射光：

$$
\delta_{\mathrm{geo}}=2ne\cos r.
$$

再逐个界面判断是否只有一次从低折射率到高折射率的反射；若是，加半波损失 $\lambda_0/2$。反射明暗条件不能脱离介质顺序死背。

Newton 暗环：

$$
r_k^2=k\lambda R.
$$

Michelson 镜面移动：

$$
2\Delta d=N\lambda.
$$

单缝暗纹：

$$
a\sin\theta=k\lambda.
$$

光栅主极大：

$$
d\sin\theta=k\lambda.
$$

单缝暗纹与光栅主极大同时满足就缺级。

偏振：

$$
I=I_0\cos^2\theta,
\qquad
\tan i_B=\frac{n_2}{n_1}.
$$

波片题把光分成快、慢轴两个正交分量，再看振幅比和相位差。

## 量子：每个公式都对应一次经典失败

黑体：

$$
E=\sigma T^4,
\qquad
\lambda_mT=b,
\qquad
\varepsilon=h\nu.
$$

光电效应：

$$
h\nu=A+eU_s.
$$

频率决定单光子能量和最大初动能，光强主要决定电子数和电流。

Compton：

$$
\Delta\lambda=
\frac{h}{m_ec}(1-\cos\theta).
$$

Bohr 氢原子：

$$
E_n=-\frac{13.6\ \mathrm{eV}}{n^2},
\qquad
h\nu=E_i-E_f.
$$

向低能级跃迁发光；负能量表示束缚态。

## 量子力学：从波长到概率

de Broglie：

$$
\lambda=\frac hp.
$$

不确定关系：

$$
\Delta x\,\Delta p_x\ge\frac{\hbar}{2}.
$$

波函数：

$$
\rho=|\psi|^2,
\qquad
\int|\psi|^2\,\mathrm dV=1.
$$

含时薛定谔方程：

$$
i\hbar\frac{\partial\psi}{\partial t}
=\hat H\psi.
$$

无限深势阱：

$$
\psi_n=\sqrt{\frac2a}\sin\frac{n\pi x}{a},
\qquad
E_n=\frac{n^2\pi^2\hbar^2}{2ma^2}.
$$

概率题对 $|\psi|^2$ 积分，不对 $\psi$ 直接积分。

氢原子四个量子数：

$$
n,\quad
l=0,\ldots,n-1,\quad
m_l=-l,\ldots,l,\quad
m_s=\pm\frac12.
$$

Pauli 原理给出每个轨道最多两个自旋相反电子，一层最多 $2n^2$ 个。

## 最后十分钟检查

- 热力学符号约定是否前后一致；
- 温度是否用 K；
- 状态量和过程量是否混淆；
- 波函数中的正负号是否真对应传播方向；
- 干涉是否漏了初相和半波损失；
- 衍射题问的是暗纹、主极大还是分辨率；
- 光电题是否把光强和频率作用写反；
- 跃迁能量是否取初能量减末能量的正值；
- 概率是否用 $|\psi|^2$；
- 量子数取值范围和简并数是否数全。
