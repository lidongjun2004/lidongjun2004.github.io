---
title: "第 5 讲 · Pandas 与图像数组实践"
description: "理解 Series、DataFrame、索引对齐、缺失值、分组统计，并用梯度和光照重建手绘图。"
date: 2026-08-27
---

本讲实际上有两条线：先用 NumPy 数组做一个图像手绘效果，再学习 Pandas 的带标签表格。前者展示“图像也只是数组”，后者解决真实数据有列名、缺失值、分组和时间索引的问题。

## 图像为什么能当数组算

RGB 图像可看成形状为 `(高度, 宽度, 3)` 的数组，每个像素三个通道通常在 0 到 255 之间。转成灰度图后，只剩一个二维亮度数组。相邻像素亮度变化越大，越像物体边缘。

课程资源中的 `HandDrawPic.py` 采用下面的流程：

1. 用 PIL 打开图像并转灰度；
2. 用 `np.gradient` 计算两个方向的灰度梯度；
3. 把梯度当作虚拟表面的坡度，和竖直方向一起归一化为表面法向量；
4. 设定虚拟光源的俯视角和方位角；
5. 计算光线方向与法向量的点积，得到新的明暗；
6. 把结果裁剪到 0—255，转回 `uint8` 保存。

若缩放后的梯度为 $g_x,g_y$，法向量写成：

$$
\mathbf n=\frac{(g_x,g_y,1)}{\sqrt{g_x^2+g_y^2+1}}
$$

光照强度近似为：

$$
I=255\,\mathbf l^\top\mathbf n
$$

代码里 `depth` 控制凹凸感，光源俯视角和方位角控制阴影方向。这不是训练出来的 AI 模型，而是一次确定性的图像处理实践；它的价值是让我们熟悉数组、梯度、归一化和广播。

## Series 和 DataFrame

`Series` 是带索引的一维数据，`DataFrame` 是行列都有标签的二维表：

```python
import pandas as pd

score = pd.Series([86, 91, 78], index=["Lee", "Alice", "Bob"])
df = pd.DataFrame({
    "name": ["Lee", "Alice", "Bob"],
    "score": [86, 91, None],
    "group": ["A", "A", "B"],
})
```

`df.index` 是行标签，`df.columns` 是列标签，`df.values` 或更推荐的 `df.to_numpy()` 得到底层数组。`head`、`tail`、`describe` 和转置 `.T` 适合快速摸清数据。

## 标签索引和位置索引不要混

```python
df.loc[0:1, ["name", "score"]]  # 按标签，切片通常包含结尾
df.iloc[0:2, 0:2]                # 按整数位置，右端不包含
```

`loc` 认标签，`iloc` 认位置。筛选行时常用布尔条件：

```python
passed = df.loc[df["score"] >= 60, ["name", "score"]]
df.loc[df["group"] == "A", "score"] += 1
```

直接写链式索引再赋值可能触发 `SettingWithCopyWarning`，因为 Pandas 不确定你改的是原表还是临时副本。用一次 `.loc[行, 列]` 把意图说清楚。

## 索引对齐是一把双刃剑

两个 Series 运算时按标签对齐，不按当前位置硬凑：

```python
a = pd.Series([10, 20], index=["x", "y"])
b = pd.Series([1, 2], index=["y", "z"])
a + b
```

结果只在共同标签 `y` 上有值，其余位置是 `NaN`。这能避免不同行被误相加，但索引不一致时也会产生看似莫名其妙的缺失值。可先 `reindex`，或用带 `fill_value` 的运算方法。

## 缺失值不是零

```python
df.isna().sum()
df.dropna(subset=["score"])
df["score"] = df["score"].fillna(df["score"].median())
```

删除还是填补取决于缺失原因。用均值填补虽然方便，却会缩小方差并掩盖缺失机制，不能机械使用。`drop` 删除指定行列，`reindex` 则按新标签重排，并可能引入缺失值。

## 变换、排序与统计

```python
df["name_len"] = df["name"].str.len()
df["level"] = df["score"].apply(lambda x: "高" if x >= 85 else "普通")
df["group"].value_counts()
df.sort_values("score", ascending=False)
```

常见统计包括 `sum`、`mean`、`median`、`std`，累计统计包括 `cumsum`，滑动窗口用 `rolling`。协方差反映共同变化方向，相关系数再除以尺度，落在 $[-1,1]$；相关仍然不等于因果。

## 合并、分组和时间序列

纵向或横向拼接用 `pd.concat`，按键关联用 `merge`，按索引关联可用 `join`。旧代码中的 `DataFrame.append` 已不适合作为新写法，统一用 `concat`。

```python
summary = (
    df.groupby("group", as_index=False)
      .agg(mean_score=("score", "mean"), count=("name", "size"))
)
```

`groupby` 可以理解成“拆分—应用—合并”：先按组拆开，再对每组计算，最后拼回结果。时间字符串先用 `pd.to_datetime` 转换，设为索引后才能可靠地重采样和做滚动窗口。

## 读写和检查

```python
df = pd.read_csv("data.csv")
df.to_csv("cleaned.csv", index=False)
df.to_excel("cleaned.xlsx", index=False)
```

读入后先检查形状、列名、类型、缺失值和重复行，再开始建模。NumPy 解决“怎么算得快”，Pandas 解决“这列到底是什么、哪些记录需要清理”。第 6 讲会在这层数据准备之上进入机器学习共同框架。
