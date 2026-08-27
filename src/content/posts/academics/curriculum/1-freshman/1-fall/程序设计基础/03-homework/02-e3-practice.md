---
title: "E3 练习赛提交记录（原题面缺失）"
description: "根据 E3 留存源代码整理位运算、进制与数值算法练习；原题面、样例和约束均不作猜测"
date: 2026-08-27
tags: ["作业"]
---

E3 只保留 A～H 的代码，没有原题与官方解析。B 有 `B.cpp`、`B2.cpp` 两个版本：后写的 `B2.cpp` 直接按位拼装，下面把它作为主要实现；早期 `B.cpp` 用循环计算 $2^i$ 后累加，未另算一道题。D 只有 `.cpp`，没有同目录下的 `.exe`，因此连“当时是否成功编译或通过”也不能从现有材料确认。

## A

`A.cpp` 反复读取有符号整数，并输出 32 个二进制字符。零单独处理；正数先输出 `0`，负数先输出 `1`，其余 31 位通过按位与和右移取得。

<details class="exam-answer">
<summary>查看当时的提交代码（A.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
int a[32];
int main()
{
   int n;
   while(scanf("%d",&n)!=EOF)
   {
         if(n==0)printf("00000000000000000000000000000000\n");
         else if(n>0)
         {
              printf("0");
              for(int i=31;i>=1;i--)
              {
                  a[i]=n&1;
                  n=n>>1;
         }
         for(int i=1;i<=31;i++)printf("%d",a[i]);
         printf("\n");
      }
      else
      {
           printf("1");
           for(int i=31;i>=1;i--)
              {
                  a[i]=n&1;
                  n=n>>1;
         }
         for(int i=1;i<=31;i++)printf("%d",a[i]);
         printf("\n");
      }
   }
   return 0;
}
```

</details>

## B

B 题读取 32 个 `0/1` 字符并把它们按位放入一个 `int`，最后按有符号十进制输出。主要实现为 `B2.cpp`；`B.cpp` 是同题较早的“计算权值再累加”版本。两版对最高位的有符号移位都依赖当时编译环境，不能当作可移植范例。

同题的 `B.cpp` 已核对但不重复展开：它用 `mi(i)` 循环求 $2^i$ 后累加，随后同样以 `%d` 输出。

<details class="exam-answer">
<summary>查看当时的提交代码（B2.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
int main()
{
   int ans=0,x;
   for(int i=31;i>=0;i--)
   {
         scanf("%1u",&x);
         ans=ans|(x<<i);
   }
   printf("%d",ans);
   return 0;
}
```

</details>

## C

`C.cpp` 读取两个无符号整数，依次输出 $a$、$b$、$a\mathbin{\&}b$、$a\mathbin{\oplus}b$ 和 `((a&b)<<1)+(a^b)` 的 32 位表示，最后输出该表达式的十进制值。

<details class="exam-answer">
<summary>查看当时的提交代码（C.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
int ans[32];
int main()
{
   unsigned int a,b,c,d,e,m;
   scanf("%u%u",&a,&b);
   c=a&b;
   d=a^b;
   e=(c<<1)+d;
   m=e;
   for(int i=31;i>=0;i--)
   {
         ans[i]=a&1;
         a=a>>1;
   }
   for(int i=0;i<32;i++)printf("%u",ans[i]);
   printf("\n");
   for(int i=31;i>=0;i--)
   {
         ans[i]=b&1;
         b=b>>1;
   }
   for(int i=0;i<32;i++)printf("%u",ans[i]);
   printf("\n");
   for(int i=31;i>=0;i--)
   {
         ans[i]=c&1;
         c=c>>1;
   }
   for(int i=0;i<32;i++)printf("%u",ans[i]);
   printf("\n");
   for(int i=31;i>=0;i--)
   {
         ans[i]=d&1;
         d=d>>1;
   }
   for(int i=0;i<32;i++)printf("%d",ans[i]);
   printf("\n");
   for(int i=31;i>=0;i--)
   {
         ans[i]=e&1;
         e=e>>1;
   }
   for(int i=0;i<32;i++)printf("%u",ans[i]);
   printf("\n");
   printf("%u",m);
   return 0;
}
```

</details>

## D

`D.cpp` 每人读取 10 个分项分数：统计把总分封顶到 100 后的平均分、原始总分至少 60 的人数、原始总分恰为 110 的人数，以及每个分项都未达到代码内对应满分阈值的人数。各指标的课程语义来自变量名，完整计分规则仍以丢失题面为准。

该文件没有配套可执行文件，下面只是留存源码，不宣称它通过过评测。

<details class="exam-answer">
<summary>查看当时的提交代码（D.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
int main()
{
   int n,AK=0,pass=0,NoneAC=0,a,b,c,d,e,f,g,h,i,j,score;
   double sum=0;
   scanf("%d",&n);
   for(int k=1;k<=n;k++)
   {
         scanf("%d%d%d%d%d%d%d%d%d%d",&a,&b,&c,&d,&e,&f,&g,&h,&i,&j);
         score=a+b+c+d+e+f+g+h+i+j;
         if(score>=100)sum+=100;
      else sum+=score;
         //printf("%d %lf\n",score,sum);
         if(score==110)AK++;
         if(score>=60)pass++;
         if(a<30&&b<20&&c<10&&d<10&&e<10&&f<10&&g<5&&h<5&&i<5&&j<5)NoneAC++;
   }
   sum/=(double)n;
   printf("%.2lf\n",sum);
   printf("%d\n%d\n%d\n",pass,AK,NoneAC);
   return 0;
}
```

</details>

## E

`E.cpp` 对输入整数按奇偶、是否为 2 的幂以及最低有效置位做分支：1 输出 3，其他奇数输出 1，2 的幂输出 $x+1$，其余偶数输出搜索到的某个 2 的幂。原题要求的数学性质无法仅由这个构造唯一确定。

<details class="exam-answer">
<summary>查看当时的提交代码（E.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
int scan(long long x)
{
   for(long long i=2;i<=1073741824;i*=2)
      if(x==i)return 1;
   return 0;
}
int main()
{
   int T;long long x,y;
   scanf("%d",&T);
   while(T--)
   {
         scanf("%lld",&x);
         y=2;
         if(x==1)printf("3\n");
         else if(x%2)printf("1\n");
         else if(scan(x))printf("%lld\n",x+1);
      else
         {
         int flag1=0,flag2=0;
         while(1)
         {
             flag1=0;flag2=0;
            if(x&y)flag1=1;
            if(x^y)flag2=1;
            if(flag1&&flag2)break;
            y*=2;
         }
         printf("%lld\n",y);
      }
   }
   return 0;
}
```

</details>

## F

`F.cpp` 把三个最多六位的十进制外观数字拆成数位，并尝试从“最大数位加一”到 16 的进制；把三串数位按该进制解释，输出第一个满足 $A\times B=C$ 的进制，找不到时保留初值 0。

<details class="exam-answer">
<summary>查看当时的提交代码（F.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
int a[7],b[7],c[7];
int main()
{
   long long A,B,C,a1,b1,c1;
   int flag=0,ans=0,num=0;
   scanf("%lld%lld%lld",&a1,&b1,&c1);
   for(int i=1;i<=6;i++)
   {
         a[i]=a1%10;a1/=10;
         if(a[i]>num)num=a[i];
         b[i]=b1%10;b1/=10;
      if(b[i]>num)num=b[i];
         c[i]=c1%10;c1/=10;
         if(c[i]>num)num=c[i];
   }
   for(int i=num+1;i<=16;i++)
   {
         A=0;B=0;C=0;
         for(int j=6;j>0;j--)
         {

              A*=i;
              A+=a[j];
      }
      for(int j=6;j>0;j--)
         {
              B*=i;
         B+=b[j];

      }
      for(int j=6;j>0;j--)
         {
              C*=i;
         C+=c[j];
      }
      if(A*B==C)
      {
           ans=i;
         break;
      }
   }
   printf("%d",ans);
   return 0;
}
```

</details>

## G

`G.cpp` 对每组长度为奇数的整数序列求全部元素的异或并输出；长度为偶数时只读完输入，输出固定祝贺语。代码显然利用了异或消去成对元素，但“序列一定由成对元素加一个单例组成”等前提未保留。

<details class="exam-answer">
<summary>查看当时的提交代码（G.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
int main()
{
   int n,m,num,ans,i;
   scanf("%d",&n);
   while(n--)
   {
         scanf("%d",&m);
         if(m%2)
      {
         ans=0;
            for(i=1;i<=m;i++)
            {
                 scanf("%d",&num);
                 ans=ans^num;
         }
         printf("Single Dog! %d\n",ans);
      }
         else
         {
         for(i=1;i<=m;i++)scanf("%d",&num);
         printf("Congratulations!\n");
      }
   }
   return 0;
}
```

</details>

## H

`H.cpp` 用前缀和检查是否存在长度至少为 $m$、平均值不小于候选值的连续子段，并在 20 到 20000 间搜索阈值，最后四舍五入为整数输出。源码把二分端点声明为 `double` 却以 `l!=r` 终止，这种写法数值上脆弱，应视为历史提交而非标准模板。

<details class="exam-answer">
<summary>查看当时的提交代码（H.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
double a[500005];
int n,m;
double sum[500005];
int check(double x)
{
   for(int i=1;i<=n;i++)sum[i]=sum[i-1]+a[i]-x;
   double inf=0;
   for(int i=m;i<=n;i++)
   {
         if(inf>sum[i-m])inf=sum[i-m];
         if(sum[i]-inf>=0)return 1;
   }
   return 0;
}
int main()
{
   scanf("%d%d",&n,&m);
   for(int i=1;i<=n;i++)scanf("%lf",&a[i]);
   double l=20,r=20000,mid;
   while(l!=r)
   {
         mid=(l+r+1)/2;
      if(check(mid))l=mid;
      else r=mid-1;
   }
   printf("%d",int(l+0.5));
   return 0;
}
```

</details>

这份记录的边界到此为止：它保存的是现有源代码能够证明的内容，不等价于原题、官方解析或通过证明。
