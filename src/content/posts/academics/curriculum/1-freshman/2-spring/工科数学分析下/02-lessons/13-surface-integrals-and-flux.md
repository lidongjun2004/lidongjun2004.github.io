---
title: "第 13 讲：曲面积分与通量"
description: "分清对面积和对坐标的曲面积分，掌握参数化、投影公式和有向曲面的通量计算。"
date: 2026-08-27
---

曲面积分与曲线积分完全平行：第一类把标量按面积累加，不依赖方向；第二类计算向量场穿过有向曲面的通量，翻转法向后变号。

## 第一类：对面积的曲面积分

设曲面 $\Sigma$ 上的面密度为 $f(x,y,z)$，积分为

$$
\iint_\Sigma f\,dS.
$$

若参数化 $\mathbf r(u,v)$，则两个切向量张成的小平行四边形面积为

$$
dS=\|\mathbf r_u\times\mathbf r_v\|du\,dv,
$$

所以

$$
\iint_\Sigma f\,dS
=\iint_\Delta f(\mathbf r(u,v))
\|\mathbf r_u\times\mathbf r_v\|du\,dv.
$$

若曲面是 $z=z(x,y)$，投影到 $xy$ 平面：

$$
dS=\sqrt{1+z_x^2+z_y^2}\,dx\,dy.
$$

曲面分成几片时分别选最方便的投影再相加。

## 有向曲面

曲面每一点选定连续变化的单位法向量 $\mathbf n$ 后，才成为有向曲面。闭曲面通常约定外侧；开曲面则按题意指定上侧、下侧、朝向某点或与边界方向匹配。

并非所有曲面都能全局定向，Möbius 带就是单侧曲面的典型例子。课程常见的光滑图形曲面和闭曲面通常可定向。

对 $z=z(x,y)$，上侧的非单位法向面积向量可取

$$
\mathbf n\,dS=(-z_x,-z_y,1)\,dx\,dy,
$$

下侧取相反数。这个写法把方向和面积伸缩一次性包含进去。

## 第二类：通量积分

向量场 $\mathbf F=(P,Q,R)$ 穿过有向曲面 $\Sigma$ 的通量为

$$
\iint_\Sigma\mathbf F\cdot\mathbf n\,dS.
$$

传统坐标写法是

$$
\iint_\Sigma P\,dy\,dz+Q\,dz\,dx+R\,dx\,dy.
$$

其中 $dy\,dz, dz\,dx, dx\,dy$ 带有投影方向信息，不是普通无向面积。向量形式更不容易记错。

参数化后，若 $\mathbf r_u\times\mathbf r_v$ 与指定方向一致，

$$
\iint_\Sigma\mathbf F\cdot\mathbf n\,dS
=\iint_\Delta
\mathbf F(\mathbf r(u,v))
\cdot(\mathbf r_u\times\mathbf r_v)\,du\,dv.
$$

若叉积方向相反，整体加负号或交换 $u,v$ 顺序。

### 图形曲面的投影公式

对上侧 $z=z(x,y)$：

$$
\iint_\Sigma\mathbf F\cdot\mathbf n\,dS
=\iint_D
\bigl[-Pz_x-Qz_y+R\bigr]dx\,dy.
$$

这里 $P,Q,R$ 都要把 $z$ 替换成 $z(x,y)$。下侧结果取负。

## 第一类与第二类的联系

若单位法向量的方向余弦为

$$
\mathbf n=(\cos\alpha,\cos\beta,\cos\gamma),
$$

则

$$
\mathbf F\cdot\mathbf n\,dS
=(P\cos\alpha+Q\cos\beta+R\cos\gamma)dS.
$$

第二类因此可以化为第一类，但必须知道法向方向；第一类本身不随方向改变。

## 对称性和补面

闭曲面或对称曲面上的通量常可用对称性消项。开曲面若直接积分复杂，可以补一个简单曲面成为闭曲面，先用 Gauss 公式求总通量，再减去补面的通量。

补面时要特别核对方向：闭曲面统一取外法向，而原曲面题设方向可能与闭曲面外侧相同或相反。

## 计算模板

1. 识别第一类还是通量；
2. 选参数化或投影坐标面；
3. 通量题先画法向，确定叉积或投影法向的符号；
4. 把曲面方程代入被积函数；
5. 把曲面上的积分化为参数域或投影域的二重积分；
6. 用对称性、正负号和单位做检查。

最常见的错误是把 $dS$ 直接写成 $dx\,dy$，或在通量题里只算 $R\,dx\,dy$ 而漏掉曲面的倾斜和 $P,Q$ 分量。
