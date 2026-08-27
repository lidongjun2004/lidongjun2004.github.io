---
title: "E2 练习赛提交记录（原题面缺失）"
description: "根据 E2 留存源代码整理可确认的输入输出行为与考点；不补造已经丢失的题面、样例和数据范围"
date: 2026-08-27
tags: ["作业"]
---

源目录只留下 A～F、H、I 以及一个名为 `qwq.cpp` 的源文件，没有题面、官方答案或评测记录。所以下面的“任务轮廓”只说代码确实做了什么；它不等于原题的完整表述，也不能据此恢复数据范围。`qwq.cpp` 无法仅凭文件名可靠对应到缺失的 G 题，单独列在最后。

## A

`A.cpp` 读入两个浮点数 $r,x$，输出 $r\cos x$ 与 $r\sin x$，各保留一位小数。可确认考点是极坐标到直角坐标的直接计算；角度单位和输入范围无法从代码确认。

<details class="exam-answer">
<summary>查看当时的提交代码（A.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
int main()
{
   double r,x;
   scanf("%lf%lf",&r,&x);
   printf("%.1lf %.1lf",r*cos(x),r*sin(x));
   return 0;
}
```

</details>

## B

`B.cpp` 逐字符读到 EOF：字符在 `B`～`Z` 时向前移动一个字母，其余字符（包括 `A`、小写字母、空白和标点）原样输出。

<details class="exam-answer">
<summary>查看当时的提交代码（B.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
int main()
{
   char ch;
   while(scanf("%c",&ch)!=EOF)
   {
         if(ch>'A'&&ch<='Z')printf("%c",ch-1);
         else printf("%c",ch);
   }
   return 0;
}
```

</details>

## C

`C.cpp` 读入整数 $n$，逐行输出第 $i$ 行的 `i*j=i*j`，其中 $1\le j\le i\le n$。这是一个下三角形乘法表；原题对空格与行尾格式的要求未保留。

<details class="exam-answer">
<summary>查看当时的提交代码（C.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
int main()
{
   int n;
   scanf("%d",&n);
   for(int i=1;i<=n;i++)
   {
         for(int j=1;j<=i;j++)
         printf("%d*%d=%d ",i,j,i*j);
      printf("\n");
   }
   return 0;
}
```

</details>

## D

`D.cpp` 对每组 $n$ 分别计算两个有限和：Leibniz 级数的前 $n$ 项乘 4，以及奇数倒数平方和的前 $n$ 项乘 8 后开方；输出两者差的绝对值，保留六位小数。

<details class="exam-answer">
<summary>查看当时的提交代码（D.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
int main()
{
   long long n,T;
   scanf("%lld",&T);
   for(int m=1;m<=T;m++)
   {
         double pi1=0,pi2=0;
      scanf("%lld",&n);
         for(double i=0;i<n;i++)
         {
              if((int)i%2==0)pi1+=1/(2*i+1);
              else pi1-=1/(2*i+1);
      }
      pi1*=4;
      for(double i=0;i<n;i++)
         {
              double k=1;
              k/=2*i+1;
              k/=2*i+1;
              pi2+=k;
      }
      pi2*=8;
      pi2=sqrt(pi2);
      if(pi1>=pi2)printf("%.6lf\n",pi1-pi2);
      else printf("%.6lf\n",pi2-pi1);
   }
   return 0;
}
```

</details>

## E

`E.cpp` 每组读取 6 个整数，依次累加，但在第 $k$ 步把累计值截到至多 $48k$；最终达到 288 时输出源码中的 `Sucess`，否则输出 `Failure` 和距离 288 的差。这个业务背景无法从代码恢复。

<details class="exam-answer">
<summary>查看当时的提交代码（E.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
int main()
{
   int n;
   scanf("%d",&n);
   for(int i=1;i<=n;i++)
   {
         int sum=0,a;
         scanf("%d",&a);
         if(sum+a>=48)sum=48;
         else sum+=a;
         scanf("%d",&a);
         if(sum+a>=96)sum=96;
         else sum+=a;
         scanf("%d",&a);
         if(sum+a>=144)sum=144;
         else sum+=a;
         scanf("%d",&a);
         if(sum+a>=192)sum=192;
         else sum+=a;
         scanf("%d",&a);
         if(sum+a>=240)sum=240;
         else sum+=a;
         scanf("%d",&a);
         if(sum+a>=288)sum=288;
         else sum+=a;
         if(sum==288)printf("Sucess\n");
         else printf("Failure %d\n",288-sum);
   }
   return 0;
}
```

</details>

## F

`F.cpp` 读入两个整数后把二者各加 1，再读取相应数量的数据；它反复找到当前严格大于 6 的最大值并替换为 6，最后输出数组总和。为什么输入数量要加 1、要处理多少轮，只能按代码记录，不能反推题意。

<details class="exam-answer">
<summary>查看当时的提交代码（F.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
int a[3000005];
int main()
{
   int n,m,M=6,sign=0;
   long long sum=0;
   scanf("%d%d",&n,&m);
   n++;m++;
   for(int i=1;i<=n;i++)
   {
         scanf("%d",&a[i]);
         if(a[i]>M)
      {
         M=a[i];
         sign=i;
      }
   }
   a[sign]=6;
   for(int i=1;i<=m-1;i++)
   {
         M=6;sign=0;
      for(int j=1;j<=n;j++)
      {
           if(a[j]>M)
         {
            M=a[j];
            sign=j;
         }
      }
      a[sign]=6;
   }
   for(int i=1;i<=n;i++)sum+=a[i];
   printf("%lld",sum);
   return 0;
}
```

</details>

## H

`H.cpp` 每次读取恰好 4 个小写字符，把每个字符的 `ch-'a'+1` 作为两位“数字”拼成整数键，判断此前是否出现过，并输出两种固定提示语。

<details class="exam-answer">
<summary>查看当时的提交代码（H.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
int vis[30000000];
int main()
{
   int n,num;
   char ch;
   scanf("%d",&n);getchar();
   for(int i=1;i<=n;i++)
   {
         num=0;
      scanf("%c",&ch);
      num=num*100+(int)(ch-96);
      scanf("%c",&ch);
      num=num*100+(int)(ch-96);
      scanf("%c",&ch);
      num=num*100+(int)(ch-96);
      scanf("%c",&ch);
      num=num*100+(int)(ch-96);
      getchar();
      if(vis[num]>0)printf("Moca has already memorized this word!\n");
      else printf("Moca memorized a new word!\n");
      vis[num]++;
   }
   return 0;
}
```

</details>

## I

`I.cpp` 从三个平面点求三边、海伦面积和外接圆半径，再由两条弦得到圆心角，并用浮点版欧几里得过程寻找共同角步长，最后输出由该步长得到的多边形周长表达式。退化三角形等边界条件未在代码中处理。

<details class="exam-answer">
<summary>查看当时的提交代码（I.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
#define PI acos(-1)
double dist(double a1,double b1,double a2,double b2)
{
   return sqrt((a1-a2)*(a1-a2)+(b1-b2)*(b1-b2));
}
double helen(double x,double y,double z)
{
   double p=(x+y+z)/2;
   return sqrt(p*(p-x)*(p-y)*(p-z));
}
double gcd(double x,double y)
{
   if(y>=x)return gcd(y,x);
   if(x-y<=1e-6)return x;
   return gcd(y,fmod(x,y));
}
int main()
{
   double x1,y1,x2,y2,x3,y3;
   scanf("%lf%lf%lf%lf%lf%lf",&x1,&y1,&x2,&y2,&x3,&y3);
   double a,b,c,s,r,ans;
   a=dist(x1,y1,x2,y2);
   b=dist(x3,y3,x2,y2);
   c=dist(x1,y1,x3,y3);
   s=helen(a,b,c);
   r=a*b*c/(4*s);
   if(a>c)
   {
         double m=a;
         a=c;c=m;
   }
   if(b>c)
   {
         double m=b;
         b=c;c=m;
   }
   double A=asin(a/(2*r));
   double B=asin(b/(2*r));
   double D=gcd(A,B);
   ans=(2*PI/D)*r*sin(D);
   printf("%lf",ans);
   return 0;
}
```

</details>

## 未标号留存文件：qwq.cpp

这个文件没有字母题号。代码对每组 `m,a,b` 先构造 `l=m-a` 与 `r=m-a/4+a%4`，再检查若干与模 3 步进和区间 $[2i,6i]$ 有关的条件，输出 `Yes` 或 `No`。缺少题面时，无法负责任地给它补上故事背景或认定它就是 G 题。

<details class="exam-answer">
<summary>查看当时的提交代码（qwq.cpp）</summary>

```cpp
#include <stdio.h>
#include <string.h>
int main()
{
    int n;
    scanf("%d",&n);
    while(n--)
    {
        int m,a,b;
        scanf("%d%d%d",&m,&a,&b);
        int l=m-a,r=m-a/4+a%4;
        if(l<0) l=(l%3+3)%3;
        int ok=0;
        if(l<=20)
        {
            for (int i=l;i<=20&&i<=r;i+=3)
            {
                if(i==1)
                {
                    if (b==2||b==3||b==5||b==6)
                    {puts("Yes");ok=1;break;}
                } else if (2*i<=b&&6*i>=b)
                    {puts("Yes");ok=1;break;}
            }
            if(r<=20&&!ok) {puts("No");continue;}
        }
        if(ok) continue;
        if(l<=20) l=21;
        if(l>r) {puts("No");continue;}
        int L=2*l,R=6*r;
        if(L<=b&&b<=R) puts("Yes");
        else puts("No");
    }
    return 0;
}
```

</details>

这份记录的边界到此为止：它保存的是现有源代码能够证明的内容，不等价于原题、官方解析或通过证明。
