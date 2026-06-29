---
title: "支持向量机 SVM"
description: "最大间隔、±1 标签的两个红利、规范化与基本型、拉格朗日对偶、KKT 与支持向量、软间隔与答题主线"
date: 2026-06-20
tags: ["模式识别", "SVM", "课程笔记", "复习"]
---

SVM 是判别式方法的代表，也是本课公式推导最长的一块。一条主线贯穿：**±1 标签 → 最大间隔 → 规范化 → 基本型 → 对偶 → KKT → 软间隔**。

## 一、动机：最大间隔

线性可分时，能分开两类的超平面有无数个。SVM 要的是**分类间隔（Margin）最大**的那个——离两类最近的点都尽量远。直觉：留白越宽，对噪声扰动的容忍越好，泛化越强（"两堵墙之间走正中央"）。

两个要点：定义一个所有分类面都能比较的距离指标；在该指标上取最优。

## 二、建模与记号

- 样本 $\{\mathbf{x}_n, t_n\}$，标签 $t_n \in \{+1, -1\}$（用 ±1 而非 0/1，是关键设计）；
- 线性模型 $y(\mathbf{x}) = \mathbf{w}^{\mathsf{T}}\mathbf{x} + b$，决策 $f(\mathbf{x}) = \mathrm{sgn}(y(\mathbf{x}))$；
- $\mathbf{w}$ 垂直于超平面（法向量），决定方向；$b$ 决定平移。

**±1 标签的第一个红利**——正确分类可统一写成一个式子：

$$t_n\, y(\mathbf{x}_n) > 0 \iff \text{第 } n \text{ 个样本分类正确}$$

因为正类（$t=+1$）落在 $y>0$ 一侧、负类（$t=-1$）落在 $y<0$ 一侧，乘积恒正。

## 三、点到超平面的距离

点 $\mathbf{x}_n$ 到超平面 $y(\mathbf{x}) = 0$ 的几何距离为 $\dfrac{|y(\mathbf{x}_n)|}{\|\mathbf{w}\|}$。对分对的点，$t_n y(\mathbf{x}_n) > 0$ 正好等于绝对值，于是去掉绝对值：

$$\text{距离} = \frac{t_n\, y(\mathbf{x}_n)}{\|\mathbf{w}\|} = \frac{t_n(\mathbf{w}^{\mathsf{T}}\mathbf{x}_n + b)}{\|\mathbf{w}\|}$$

这是 **±1 标签的第二个红利**。原始的最大间隔目标（最大化"最近点距离"）为：

$$\max_{\mathbf{w}, b}\ \frac{1}{\|\mathbf{w}\|} \min_n \left[ t_n(\mathbf{w}^{\mathsf{T}}\mathbf{x}_n + b) \right]$$

形式复杂（max 套 min），需化简。

## 四、规范化（Canonical Form）

关键观察：$(\mathbf{w}, b)$ 同乘常数 $k$ 表示同一超平面，尺度自由。于是规定离超平面最近的点满足：

$$t_n(\mathbf{w}^{\mathsf{T}}\mathbf{x}_n + b) = 1$$

则所有点满足 $t_n(\mathbf{w}^{\mathsf{T}}\mathbf{x}_n + b) \ge 1$，且最近点距离 $= \dfrac{1}{\|\mathbf{w}\|}$。

最大化 $\dfrac{1}{\|\mathbf{w}\|}$ 等价于最小化 $\dfrac{1}{2}\|\mathbf{w}\|^2$。

## 五、基本型（原问题）

$$\min_{\mathbf{w}, b}\ \frac{1}{2}\|\mathbf{w}\|^2 \quad \text{s.t.} \quad t_n(\mathbf{w}^{\mathsf{T}}\mathbf{x}_n + b) \ge 1,\ n = 1, \dots, N$$

这是**凸二次规划**：凸函数极小值即全局最小值；要么无解（线性不可分），要么唯一解。

## 六、拉格朗日与对偶问题

### 什么是对偶问题

对带约束的最小化，用拉格朗日乘子法给每条约束配乘子 $a_n \ge 0$，把约束揉进目标，再消去原变量，得到的**只含乘子的等价问题**就叫对偶问题；原来的叫原问题。

博弈视角：拉格朗日函数里你控制 $\mathbf{w}, b$ 想让它小、对手控制 $\mathbf{a}$ 想让它大。原问题是 $\min_{\mathbf{w},b}\max_{\mathbf{a}} L$（你先动），对偶是 $\max_{\mathbf{a}}\min_{\mathbf{w},b} L$（对手先动）。凸问题下两者最优值相等（**强对偶**），故可解更好算的对偶。

### 推导

$$L(\mathbf{w}, b, \mathbf{a}) = \frac{1}{2}\|\mathbf{w}\|^2 - \sum_{n=1}^{N} a_n \left[ t_n(\mathbf{w}^{\mathsf{T}}\mathbf{x}_n + b) - 1 \right]$$

对 $\mathbf{w}$、$b$ 求偏导置零：

$$\mathbf{w} = \sum_{n=1}^{N} a_n t_n \mathbf{x}_n$$

$$\sum_{n=1}^{N} a_n t_n = 0$$

代回消去 $\mathbf{w}, b$，得对偶问题：

$$\max_{\mathbf{a}}\ \tilde{L}(\mathbf{a}) = \sum_{n=1}^{N} a_n - \frac{1}{2}\sum_{n=1}^{N}\sum_{m=1}^{N} a_n a_m t_n t_m \mathbf{x}_n^{\mathsf{T}}\mathbf{x}_m$$

约束 $a_n \ge 0$，$\sum_n a_n t_n = 0$。

对偶的两个好处：样本只以**内积** $\mathbf{x}_n^{\mathsf{T}}\mathbf{x}_m$ 出现（为核技巧留接口）；解出来大部分 $a_n = 0$（**稀疏**，引出支持向量）。

## 七、KKT 条件与支持向量

KKT 互补条件（核心三条）：

$$a_n \ge 0$$

$$t_n\, y(\mathbf{x}_n) - 1 \ge 0$$

$$a_n \left( t_n\, y(\mathbf{x}_n) - 1 \right) = 0$$

第三条（**互补松弛**）是灵魂：对每个点，要么 $a_n = 0$（对 $\mathbf{w}$ 无贡献），要么 $t_n y(\mathbf{x}_n) = 1$（点恰在间隔边界上）。

因此：

- 严格分对、在间隔外（$t_n y > 1$）的点：$a_n = 0$，无关紧要；
- 恰在间隔边界（$t_n y = 1$）的点：$a_n > 0$，称为**支持向量**。

由 $\mathbf{w} = \sum_n a_n t_n \mathbf{x}_n$，只有支持向量贡献，故超平面完全由少数支持向量决定，删掉其余点不影响结果——这就是 SVM 名字由来。

偏置 $b$ 由任一支持向量（$t_n y(\mathbf{x}_n) = 1$）反解，通常对所有支持向量取平均。

## 八、手算例子

两点：正类 $\mathbf{x}_1 = (1,1)$、$t_1 = +1$；负类 $\mathbf{x}_2 = (0,0)$、$t_2 = -1$。两点都是支持向量。

由 $\sum_n a_n t_n = 0$ 得 $a_1 = a_2 = a$。则 $\mathbf{w} = a(1,1) - a(0,0) = (a, a)$。

代入 $t_n(\mathbf{w}^{\mathsf{T}}\mathbf{x}_n + b) = 1$：

- 对 $\mathbf{x}_1$：$2a + b = 1$；
- 对 $\mathbf{x}_2$：$-b = 1$，即 $b = -1$。

解得 $a = 1$，$\mathbf{w} = (1, 1)$，$b = -1$。分界线 $x_1 + x_2 - 1 = 0$，过中点 $(0.5, 0.5)$，垂直平分两点连线，间隔 $= 1/\sqrt{2}$。

**手算套路**：用 $\sum_n a_n t_n = 0$ 减少未知数 → 写 $\mathbf{w} = \sum_n a_n t_n \mathbf{x}_n$ → 对每个支持向量列 $t_n(\mathbf{w}^{\mathsf{T}}\mathbf{x}_n + b) = 1$ → 解方程组。

## 九、软间隔（处理噪声与线性不可分）

硬间隔的问题：线性不可分时无解；对离群点敏感。引入**松弛变量** $\xi_n \ge 0$，把约束松绑：

$$t_n\, y(\mathbf{x}_n) \ge 1 - \xi_n$$

$\xi_n$ 三档：$\xi_n = 0$（没违规）；$0 < \xi_n \le 1$（进入间隔但仍正确侧）；$\xi_n > 1$（被分错）。

目标加惩罚项：

$$\min_{\mathbf{w}, b, \xi}\ \frac{1}{2}\|\mathbf{w}\|^2 + C \sum_{n=1}^{N} \xi_n \quad \text{s.t.}\quad t_n\, y(\mathbf{x}_n) \ge 1 - \xi_n,\ \xi_n \ge 0$$

$C$ 是正则参数（旋钮）：$C$ 大则重罚违规、趋近硬间隔、准但易过拟合；$C$ 小则容忍违规、间隔更胖、泛化更好。本质是**准确性与泛化性的权衡**。

软间隔对偶与硬间隔几乎相同，仅 $a_n$ 多了上界：

$$0 \le a_n \le C, \qquad \sum_{n=1}^{N} a_n t_n = 0$$

软间隔支持向量分两类：$0 < a_n < C$ 对应 $\xi_n = 0$（恰在边界）；$a_n = C$ 对应 $\xi_n > 0$（越界或被错分）。口诀：**只有 $a_n = C$ 的点才越界**。

## 本节考点清单

- ±1 标签的两个红利（统一正确判别式 + 去绝对值的距离）。
- 规范化如何把 max-min 化成 $\min \frac{1}{2}\|\mathbf{w}\|^2$，写出基本型（凸二次规划）。
- **对偶推导**：$\mathbf{w} = \sum_n a_n t_n \mathbf{x}_n$、$\sum_n a_n t_n = 0$、对偶目标，以及"只剩内积 + 稀疏"两个好处。
- **KKT 互补松弛**怎么推出支持向量；超平面只由支持向量决定。
- 两点**手算例子**全流程。
- 软间隔：松弛变量、惩罚 $C$ 的权衡、$0 \le a_n \le C$、$a_n = C$ 才越界。
