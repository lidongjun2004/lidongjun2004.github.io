---
title: "第 8 讲 · 支持向量机"
description: "从最大间隔推到对偶与 KKT，再理解软间隔、核函数和 RBF 参数。"
date: 2026-08-27
---

对线性可分的两类点，能分开的直线往往有很多条。SVM 不满足于“分开就行”，而是选择离两类最近样本都尽量远的边界。这个选择通常更稳健，因为边界附近留出了最大的安全通道。

![SVM 的决策边界、间隔与支持向量](/images/academics/freshman-ai-intro/svm-margin.svg)

## 从几何间隔到硬间隔问题

分类超平面为：

$$
w^\top x+b=0
$$

预测取 $\operatorname{sign}(w^\top x+b)$。样本 $(x_i,y_i)$ 到超平面的带符号距离为：

$$
\gamma_i=\frac{y_i(w^\top x_i+b)}{\lVert w\rVert}
$$

因为同时缩放 $w,b$ 不改变边界，可约定最近样本满足 $y_i(w^\top x_i+b)=1$。两条间隔边界间距离为 $2/\lVert w\rVert$，最大化它等价于：

$$
\min_{w,b}\frac12\lVert w\rVert^2
\quad\text{s.t.}\quad
y_i(w^\top x_i+b)\ge1
$$

这就是硬间隔 SVM，只适用于训练数据完全线性可分的情况。

## Lagrange 对偶：为何只有少数点起作用

为每个约束引入 $\alpha_i\ge0$：

$$
\mathcal L(w,b,\alpha)=\frac12\lVert w\rVert^2-
\sum_i\alpha_i[y_i(w^\top x_i+b)-1]
$$

对 $w,b$ 求驻点：

$$
w=\sum_i\alpha_i y_i x_i,\qquad
\sum_i\alpha_i y_i=0
$$

代回得到只含 $\alpha$ 的对偶问题：

$$
\max_\alpha\sum_i\alpha_i-\frac12\sum_{i,j}
\alpha_i\alpha_jy_iy_jx_i^\top x_j
$$

满足 $\alpha_i>0$ 的样本才会进入 $w$ 的表达式，它们就是支持向量。远离边界的样本通常 $\alpha_i=0$，移动一点也不改变边界。

## KKT 条件说了什么

硬间隔的 KKT 条件包括：

- 原始可行：$y_i(w^\top x_i+b)-1\ge0$；
- 对偶可行：$\alpha_i\ge0$；
- 驻点条件：对 $w,b$ 的梯度为零；
- 互补松弛：

$$
\alpha_i[y_i(w^\top x_i+b)-1]=0
$$

最后一条最关键：若样本严格在间隔外，括号大于零，只能有 $\alpha_i=0$；若 $\alpha_i>0$，样本必须落在间隔边界上。

## 软间隔：现实数据不可能总干净

为每个样本加入松弛变量 $\xi_i\ge0$：

$$
\min_{w,b,\xi}\frac12\lVert w\rVert^2+C\sum_i\xi_i
$$

$$
y_i(w^\top x_i+b)\ge1-\xi_i
$$

$C$ 是违规惩罚：

- $C$ 大：很不愿容错，训练边界更追随样本，可能过拟合；
- $C$ 小：允许更多越界，间隔更宽，可能欠拟合。

它也可写成正则项加 hinge loss：

$$
\frac12\lVert w\rVert^2+C\sum_i
\max(0,1-y_i(w^\top x_i+b))
$$

分对且在安全间隔外的样本损失为零，落入间隔或分错才被惩罚。

## 核函数：不显式画出高维坐标

异或数据在原平面中无法被一条直线分开，但映射到更高维后可能线性可分。对偶问题只需要样本内积，因此可直接用核函数替换：

$$
K(x_i,x_j)=\phi(x_i)^\top\phi(x_j)
$$

不必真的构造可能非常高维的 $\phi(x)$。RBF 核为：

$$
K(x,z)=\exp(-\gamma\lVert x-z\rVert^2)
$$

$\gamma$ 大时，每个样本只影响很小邻域，边界容易曲折；$\gamma$ 小时影响范围大，边界更平滑。`C` 和 `gamma` 要联合交叉验证，不能只在训练集上挑。

## scikit-learn 实践

```python
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import StandardScaler
from sklearn.svm import SVC

model = make_pipeline(
    StandardScaler(),
    SVC(kernel="rbf", C=1.0, gamma="scale"),
)
model.fit(X_train, y_train)
print(model.score(X_test, y_test))
```

SVM 依赖距离和内积，不同量纲会严重影响结果，因此通常先标准化。模型中的 `support_vectors_` 可查看支持向量。

课件最后给出人脸识别流程：先用 PCA 把高维脸部像素压缩，再以 RBF-SVC 分类，用网格搜索选择 `C` 和 `gamma`，最后看 classification report 与混淆矩阵。PCA 降维和 SVM 调参都必须只在训练折内完成，最好用 `Pipeline` 包在一起，避免先用全数据降维造成泄漏。

本讲的第二次作业将 SVM 用在鸢尾花三分类上。下一讲神经网络不再靠手工选核，而是用多层参数化变换一起学习表示和决策边界。
