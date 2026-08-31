---
title: "第 3 次作业 · 垃圾短信分类"
description: "按原题整理垃圾短信识别任务，并折叠收录 TF-IDF、逻辑回归和留存预测结果。"
date: 2026-08-27
tags: ["作业"]
---

## 原始要求

以下要求来自课程的两项实验作业 PPT：

> 在 TODO 位置填写代码，实现垃圾短信识别：输入不同短信，输出垃圾短信或非垃圾短信。提交可复现报告，包含代码、说明和预测结果。5 月 26 日前交到第三次作业目录，命名方式同作业一。

课件给出的 `SMSSpamCollection` 数据共有约 5574 条记录，标签为 `spam` 或 `ham`。源目录中保留了数据集和我提交的 `垃圾短信分类.ipynb`，没有发现单独的报告文件，因此这里只能按 Notebook 还原实现与输出。

<details class="exam-answer">
<summary>查看我的 Notebook 实现、输出与复盘</summary>

## 实现

Notebook 用 TF-IDF 把英文短信向量化，再训练逻辑回归：

```python
import pandas as pd
from sklearn import linear_model
from sklearn.feature_extraction.text import TfidfVectorizer

df = pd.read_csv(
    "SMSSpamCollection.txt",
    delimiter="\t",
    header=None,
)
y, text = df[0], df[1]

vectorizer = TfidfVectorizer()
X = vectorizer.fit_transform(text)

clf = linear_model.LogisticRegression(
    max_iter=200,
    solver="liblinear",
)
clf.fit(X, y)
```

随后对两条带“中奖、领取奖品、拨打电话”等模式的短信预测，原 Notebook 输出：

```text
['spam' 'spam']
```

## 自制 40 条测试语句

提交稿又手工写了四组各 10 条的语句：明显垃圾、明显正常、看似垃圾但注释为正常、看似正常但注释为垃圾。留存输出依次为：

```text
['spam' 'spam' 'ham' 'ham' 'spam' 'ham' 'ham' 'ham' 'ham' 'ham'
 'ham' 'ham' 'ham' 'ham' 'ham' 'ham' 'ham' 'ham' 'ham' 'ham'
 'spam' 'spam' 'ham' 'spam' 'ham' 'ham' 'spam' 'ham' 'spam' 'ham'
 'spam' 'spam' 'ham' 'ham' 'ham' 'spam' 'ham' 'ham' 'ham' 'ham']
```

按 Notebook 注释中人为指定的四组标签回算，共 21/40 条相符，即 52.5%。这个百分比是整理时根据留存预测和注释计算的，**不是原 Notebook 打印的评估指标**。

## 复盘：这份实现完成了预测，但没有完成泛化评估

原 Notebook 用全部 `SMSSpamCollection` 同时拟合向量器和分类器，没有拆分训练集与测试集。因此它能对新输入调用 `predict`，却没有客观估计模型在同分布未见数据上的准确率、Precision 或 Recall。

手写 40 条短信也不是从同一数据分布独立抽样，且“看起来像 ham 的 spam”之类标签是我预先主观设定的，只适合做挑战样例，不能替代标准测试集。很多诈骗短信和正规营销短信在词面上本来就非常相似，单靠词袋特征很难稳定识别来源真实性。

若今天重做，应先分层切分数据，再只用训练集拟合 TF-IDF：

```python
from sklearn.model_selection import train_test_split
from sklearn.pipeline import make_pipeline
from sklearn.metrics import classification_report

x_train, x_test, y_train, y_test = train_test_split(
    text,
    y,
    test_size=0.2,
    random_state=42,
    stratify=y,
)

model = make_pipeline(
    TfidfVectorizer(),
    linear_model.LogisticRegression(
        max_iter=200,
        solver="liblinear",
    ),
)
model.fit(x_train, y_train)
print(classification_report(y_test, model.predict(x_test)))
```

这段是复盘方案，不属于当年的原提交。

</details>
