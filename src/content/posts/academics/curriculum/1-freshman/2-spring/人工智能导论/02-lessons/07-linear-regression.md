---
title: "第 7 讲 · 线性回归"
description: "从最小二乘推导线性回归，并理解基函数、正则化、逻辑回归与 scikit-learn 流程。"
date: 2026-08-27
---

线性回归是最容易完整走一遍“模型—损失—求解—评估”的算法。它不只是拟合直线：只要把原始特征先映射成一组基函数，模型对参数仍然可以保持线性。

## 一元和多元是同一个模型

一元线性回归：

$$
\hat y=wx+b
$$

多元线性回归：

$$
\hat y=w_1x_1+\cdots+w_dx_d+b=w^\top x+b
$$

这里“线性”指对参数 $w,b$ 线性，不是说输入输出图像只能是一条直线。把常数项并入特征后，可写成矩阵形式 $\hat y=X\theta$。

最小二乘损失为：

$$
J(\theta)=\frac{1}{2n}\lVert X\theta-y\rVert_2^2
$$

前面的 $1/2$ 只是让求导后的 2 消掉，不改变最优解。

## 两种求解路线

### 梯度下降

$$
\nabla_\theta J=\frac1nX^\top(X\theta-y)
$$

反复执行 $\theta\leftarrow\theta-\eta\nabla J$。它适合样本多、特征多或之后扩展到没有闭式解的模型。不同特征尺度相差很大时，先标准化能减少迭代路径的扭曲。

### 正规方程

令梯度为零：

$$
X^\top X\theta=X^\top y
$$

若 $X^\top X$ 可逆：

$$
\hat\theta=(X^\top X)^{-1}X^\top y
$$

实际数值计算通常用 QR、SVD 或伪逆，不要手工求逆。若特征线性相关、样本不足，矩阵可能奇异；正则化既能控制过拟合，也能改善求解稳定性。

## 从概率角度看最小二乘

假设观测满足：

$$
y_i=w^\top x_i+b+\varepsilon_i,\qquad
\varepsilon_i\sim\mathcal N(0,\sigma^2)
$$

在独立同分布高斯噪声下，最大化所有样本的似然，等价于最小化平方误差。于是“最小二乘”不是凭空选出来的，它暗含了对噪声分布的假设。

## 基函数让线性模型拟合曲线

先把输入变成：

$$
\phi(x)=[\phi_0(x),\phi_1(x),\ldots,\phi_m(x)]^\top
$$

再做：

$$
\hat y=w^\top\phi(x)
$$

多项式基可以取 $1,x,x^2,\ldots$，高斯基以若干中心附近的局部响应为特征，sigmoid 基提供平滑阶跃。模型对 $x$ 可以高度非线性，但对参数 $w$ 仍然线性。

阶数过高时，训练点几乎全穿过，区间之间却剧烈摆动，这就是过拟合。

另一种变换是先改变响应变量。例如 $\log y=w^\top x+b$ 对应 $y=\exp(w^\top x+b)$，参数仍在线性预测器中相加，原尺度上却是乘性关系。更一般的广义线性模型通过链接函数把条件均值和线性预测器连接起来；逻辑回归正是其中用于二分类的一种。

## Ridge 和 Lasso

Ridge 在平方误差后加 $L_2$ 惩罚：

$$
J_{\text{ridge}}=\lVert Xw-y\rVert_2^2+\lambda\lVert w\rVert_2^2
$$

它让参数整体缩小，但通常不会精确变成零。Lasso 加 $L_1$：

$$
J_{\text{lasso}}=\lVert Xw-y\rVert_2^2+\lambda\lVert w\rVert_1
$$

$L_1$ 的尖角几何更容易让一部分参数恰好为零，因此兼具特征选择效果。$\lambda$ 越大，模型越简单，但过大也会欠拟合。正则化强度应在验证集或交叉验证上选择。

## 逻辑回归为什么叫“回归”却做分类

线性打分 $z=w^\top x+b$ 可以通过 sigmoid 压到 0—1：

$$
P(y=1\mid x)=\sigma(z)=\frac{1}{1+e^{-z}}
$$

再按阈值分类。最大似然推导得到交叉熵损失：

$$
-\sum_i\left[y_i\log p_i+(1-y_i)\log(1-p_i)\right]
$$

它学的是对数几率与特征的线性关系。逻辑回归在第 10 讲还会作为文本分类基线出现。

## scikit-learn 的统一流程

```python
from sklearn.compose import TransformedTargetRegressor
from sklearn.linear_model import LinearRegression, Ridge
from sklearn.metrics import mean_squared_error, r2_score
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.preprocessing import PolynomialFeatures, StandardScaler

X_train, X_test, y_train, y_test = train_test_split(
    X, y, test_size=0.2, random_state=42
)

model = make_pipeline(
    PolynomialFeatures(degree=2, include_bias=False),
    StandardScaler(),
    Ridge(alpha=1.0),
)
model.fit(X_train, y_train)
pred = model.predict(X_test)
print(mean_squared_error(y_test, pred), r2_score(y_test, pred))
```

把多项式扩展、标准化和模型放进 `Pipeline`，可以保证每一步只在训练数据上拟合，减少泄漏。课件还以桥梁人流数据为例展示：先检查时间、天气等变量，再建模和解释系数。系数只说明控制现有特征后的统计关联，不能自动解释因果。

线性回归通过“所有点的平均平方误差”决定参数。下一讲 SVM 换一种几何标准：只让最靠近分类边界的样本决定安全间隔。
