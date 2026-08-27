---
title: "第 13 讲：电介质、电位移与静电能"
description: "从分子极化理解束缚电荷，建立 D、E、P 的关系、边界条件和电场能量。"
date: 2026-08-27
---

电介质中没有能在材料内长距离自由移动的载流子，但它不是“对电场没有反应”。外场会让分子的正负电荷中心相对偏移，或让原本取向杂乱的固有电偶极矩部分转向，这两种过程统称极化。

## 从分子电偶极子到极化强度

取一个很小但仍包含大量分子的体积元 $\Delta V$，定义极化强度

$$
\mathbf P
=\lim_{\Delta V\to0}
\frac{\sum\mathbf p_i}{\Delta V}.
$$

$\mathbf P$ 是单位体积的电偶极矩，单位为 $\mathrm{C/m^2}$。电介质极化后，不能自由移动的束缚电荷密度满足

$$
\rho_{\mathrm b}=-\nabla\cdot\mathbf P,
$$

$$
\sigma_{\mathrm b}=\mathbf P\cdot\hat{\mathbf n},
$$

其中 $\hat{\mathbf n}$ 是从电介质指向外部的法线。第二式会自动给出表面束缚电荷的正负号。若均匀介质中 $\mathbf P$ 为常矢量，则体内 $\rho_{\mathrm b}=0$，但表面仍可以有 $\sigma_{\mathrm b}$。

## 线性各向同性电介质

课程的主要模型是外场不太强时的线性各向同性介质：

$$
\mathbf P=\varepsilon_0\chi_{\mathrm e}\mathbf E,
$$

其中 $\chi_{\mathrm e}$ 为电极化率。引入电位移矢量

$$
\mathbf D=\varepsilon_0\mathbf E+\mathbf P.
$$

在上述介质中，

$$
\mathbf D
=\varepsilon_0(1+\chi_{\mathrm e})\mathbf E
=\varepsilon_0\varepsilon_{\mathrm r}\mathbf E
=\varepsilon\mathbf E,
$$

其中 $\varepsilon_{\mathrm r}=1+\chi_{\mathrm e}$。在各向异性、非线性或强场条件下，$\mathbf D$ 与 $\mathbf E$ 不一定平行，也不一定成比例。

## 有介质时的高斯定理

把束缚电荷的效果收进 $\mathbf D$ 后，

$$
\oiint_S\mathbf D\cdot d\mathbf S
=Q_{\mathrm{free,in}}.
$$

右边只数自由电荷。这个方程没有消灭极化效应，只是把它隐藏在 $\mathbf D=\varepsilon_0\mathbf E+\mathbf P$ 中。求解时仍要知道介质的极化规律。

对充满均匀线性介质的平行板电容器，自由电荷面密度为 $\pm\sigma_{\mathrm f}$，

$$
D=\sigma_{\mathrm f},
\qquad
E=\frac{\sigma_{\mathrm f}}{\varepsilon},
\qquad
C=\frac{\varepsilon S}{d}
=\varepsilon_{\mathrm r}C_0.
$$

这里 $E=E_0/\varepsilon_{\mathrm r}$ 有条件：自由电荷不变、介质充满原电场区域且对称性保持。电容器与电源相连而电压固定时，插入介质后自由电荷会改变，不能同时假设 $Q$ 不变。

## 电场的边界条件

两种介质分界面上，取法线 $\hat{\mathbf n}$ 由介质 1 指向介质 2。由 $\mathbf D$ 的高斯定理，

$$
(\mathbf D_2-\mathbf D_1)\cdot\hat{\mathbf n}
=\sigma_{\mathrm f}.
$$

由静电场环路定理，

$$
\hat{\mathbf n}\times(\mathbf E_2-\mathbf E_1)=0.
$$

因此，界面无自由面电荷时 $D_n$ 连续，而 $E_t$ 总是连续的；不同介质的 $E_n$ 通常不连续。记“$E$ 连续”或“$D$ 连续”都太粗糙，必须分法向和切向。

## 分层介质电容器

若不同介质沿电场方向分层，每层流管截面相同，无自由界面电荷时 $D_n$ 相同，各层电压相加，等效为串联：

$$
\frac1C
=\sum_i\frac{d_i}{\varepsilon_iS}.
$$

若不同介质并排占据不同极板面积，它们的板间距离与电压相同，等效为并联：

$$
C=\sum_i\frac{\varepsilon_iS_i}{d}.
$$

这两条不需要死记：看电场线是“先后穿过”各介质，还是“分流穿过”各介质即可。

## 击穿不是理想介质模型的小修正

当电场过强，束缚电荷可能获得足够能量而变成自由载流子，电介质从“近似绝缘”转为导电，称为击穿。每种材料的击穿场强有限，所以电容器不仅有电容值，还有额定耐压。

## 带电体系与电场能量

把一组点电荷从无穷远依次搬到给定位置，建立电荷系所需的功为

$$
W_{\mathrm e}
=\frac12\sum_iq_iU_i,
$$

其中 $U_i$ 由除 $q_i$ 自身以外的其他电荷产生，$1/2$ 用来消除每对相互作用的重复计数。

电容器的能量有三个等价形式：

$$
W_{\mathrm e}
=\frac12QU
=\frac{Q^2}{2C}
=\frac12CU^2.
$$

选哪一个形式取决于过程中什么量保持不变：断开电源后通常是 $Q$ 不变，始终连接理想电源时是 $U$ 不变。后一种情况还有电源与电容器交换能量，不能只用电容器能量变化代替外力做功。

在线性电介质中，电场能量密度为

$$
w_{\mathrm e}
=\frac12\mathbf E\cdot\mathbf D.
$$

真空中化为 $w_{\mathrm e}=\varepsilon_0E^2/2$，总能量是

$$
W_{\mathrm e}=\iiint w_{\mathrm e}\,dV.
$$

这一表达突出课件的现代观点：能量不只是“存在电荷身上”，也可以看成分布在电场所占的空间中。

## 三个常见误区

- 不要把 $\mathbf D$ 当成另一种会直接对电荷施力的“电场”，受力仍由 $\mathbf E$ 决定；
- $\mathbf D=\varepsilon\mathbf E$ 只对线性各向同性介质简单成立，而 $\mathbf D=\varepsilon_0\mathbf E+\mathbf P$ 是定义；
- 界面上要分别讨论 $D_n$ 和 $E_t$，不能一句话说“场连续”。
