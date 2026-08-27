---
title: "E6 练习赛提交记录（原题面缺失）"
description: "根据 E6 留存代码整理表达式、字符串、编码与算法练习；试验文件和重复尝试单独交代"
date: 2026-08-27
tags: ["作业"]
---

E6 留下 A、B、C、D、E、F、G、H、J，未见 I。E 有两个版本：较晚的 `E.cpp` 修正了 `E.c` 从 `ch[++tot]` 开始导致跳过首字符的问题，下面以前者为主要实现。`try.cpp` 只打印若干基础类型的 `sizeof`，时间也早于最终 B 题代码，属于本地试验，不当作题目提交。

## A

`A.cpp` 读取一个起始整数，随后交替读取 `+/-`、整数，直到运算符为 `=`，按从左到右的顺序完成只含加减的表达式求值。

<details class="exam-answer">
<summary>查看当时的提交代码（A.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
#include<stdlib.h>
int max(int a,int b)
{
   if(a>b)return a;
   return b;
}
int min(int a,int b)
{
   if(a<b)return a;
   return b;
}
int gcd(int a,int b)
{
   if(b==0)return a;
   return gcd(b,a%b);
}
int main()
{
   int sum,n=0;
   char ch;
   scanf("%d %c",&sum,&ch);
   while(ch!='=')
   {
         scanf("%d",&n);
         if(ch=='-')sum-=n;
         if(ch=='+')sum+=n;
         scanf(" %c",&ch);
   }
   printf("%d",sum);
   return 0;
}
```

</details>

## B

`B.cpp` 每轮读取一个类型名称字符串和数量 $n$，对 `char`、`short`、`int`、`long`、`long long` 输出 `sizeof(类型)*n`，其他字符串输出固定错误提示。结果依赖编译平台；源码还使用了已经废弃且不安全的 `gets`。

`try.cpp` 只是打印五种类型大小的本地探查程序，已核对并排除。

<details class="exam-answer">
<summary>查看当时的提交代码（B.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
#include<stdlib.h>
int max(int a,int b)
{
   if(a>b)return a;
   return b;
}
int min(int a,int b)
{
   if(a<b)return a;
   return b;
}
int gcd(int a,int b)
{
   if(b==0)return a;
   return gcd(b,a%b);
}
int main()
{
   char s[32],s1[32]="long long",s2[32]="long",s3[32]="int",s4[32]="short",s5[32]="char";
   int n;
   while(gets(s)!=NULL)
   {
      scanf("%d",&n);
      getchar();
      if(!strcmp(s,s1))printf("%d\n",sizeof(long long)*n);
      else if(!strcmp(s,s2))printf("%d\n",sizeof(long)*n);
         else if(!strcmp(s,s3))printf("%d\n",sizeof(int)*n);
         else if(!strcmp(s,s5))printf("%d\n",sizeof(char)*n);
         else if(!strcmp(s,s4))printf("%d\n",sizeof(short)*n);
         else printf("Err0r!\n");
   }
   return 0;
}
```

</details>

## C

`C.cpp` 读取一个 $n\times n$ 小矩阵和一个 $m\times m$ 大矩阵，在每个合法偏移上逐元素相乘求和，输出二维滑动相关结果；代码没有翻转小矩阵，因此严格说是相关而不是数学卷积。

<details class="exam-answer">
<summary>查看当时的提交代码（C.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
#include<stdlib.h>
int max(int a,int b)
{
   if(a>b)return a;
   return b;
}
int min(int a,int b)
{
   if(a<b)return a;
   return b;
}
int gcd(int a,int b)
{
   if(b==0)return a;
   return gcd(b,a%b);
}
int a[40][40],b[40][40];
int n,m;
int work(int x,int y)
{
   int sum=0;
   for(int i=0;i<n;i++)
      for(int j=0;j<n;j++)sum+=a[i][j]*b[i+x][j+y];
   return sum;
}
int main()
{
   scanf("%d%d",&n,&m);
   for(int i=0;i<n;i++)
      for(int j=0;j<n;j++)scanf("%d",&a[i][j]);
   for(int i=0;i<m;i++)
      for(int j=0;j<m;j++)scanf("%d",&b[i][j]);
   for(int i=0;i<=m-n;i++)
   {
         for(int j=0;j<=m-n;j++)printf("%d ",work(i,j));
         printf("\n");
   }
   return 0;
}
```

</details>

## D

`D.cpp` 解析只含 `H/C/N/O` 与十进制下标的分子式，按原子量 1、12、14、16 累加相对分子质量。括号、其他元素和系数等语法没有实现。

<details class="exam-answer">
<summary>查看当时的提交代码（D.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
#include<stdlib.h>
int max(int a,int b)
{
   if(a>b)return a;
   return b;
}
int min(int a,int b)
{
   if(a<b)return a;
   return b;
}
int gcd(int a,int b)
{
   if(b==0)return a;
   return gcd(b,a%b);
}
int main()
{
   char ch1,ch2,chem;
   ch1=getchar();chem=ch1;
   int sum=0,cal=0;
   while(scanf("%c",&ch2)!=EOF)
   {
         if(ch2>='A'&&ch2<='Z')
         {
              if(ch1>='A'&&ch1<='Z')
              {
                  if(ch1=='H')sum+=1;
                  if(ch1=='C')sum+=12;
                  if(ch1=='N')sum+=14;
                  if(ch1=='O')sum+=16;
                  cal=0;
                  chem=ch2;
         }
         else
         {
             if(chem=='H')sum+=1*cal;
                  if(chem=='C')sum+=12*cal;
                  if(chem=='N')sum+=14*cal;
                  if(chem=='O')sum+=16*cal;
                  cal=0;
                  chem=ch2;
         }
      }
      else if(ch2>='0'&&ch2<='9')cal=cal*10+(int)(ch2-48);
      else break;

      ch1=ch2;
   }
   if(ch1>='A'&&ch1<='Z')
         {
               if(ch1=='H')sum+=1;
            if(ch1=='C')sum+=12;
               if(ch1=='N')sum+=14;
               if(ch1=='O')sum+=16;
         }
         else
         {
               if(chem=='H')sum+=1*cal;
               if(chem=='C')sum+=12*cal;
               if(chem=='N')sum+=14*cal;
               if(chem=='O')sum+=16*cal;
         }
   printf("%d",sum);
   return 0;
}
```

</details>

## E

`E.cpp` 把字符串按行填入边长为 $\lceil\sqrt{n}\rceil$ 的方阵，空位用空格补齐，再按列读出非空格字符。

较早的 `E.c` 使用 `ch[++tot]`，会跳过首字符，并以 `-` 填充；它已作为失败/试验版排除，未改写成“正确答案”。

<details class="exam-answer">
<summary>查看当时的提交代码（E.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
#include<stdlib.h>
int max(int a,int b)
{
   if(a>b)return a;
   return b;
}
int min(int a,int b)
{
   if(a<b)return a;
   return b;
}
int gcd(int a,int b)
{
   if(b==0)return a;
   return gcd(b,a%b);
}
char ch[100005];
char a[400][400];
int main()
{
   int len,tot=0;
   scanf("%s",&ch);
   len=strlen(ch);
   //scanf("%d",&len);
   int n=ceil(sqrt((double)len));
   //printf("%d",n);
   for(int i=1;i<=n;i++)
   {
         for(int j=1;j<=n;j++)
         {
              if(tot<len)a[i][j]=ch[tot++];
              else a[i][j]=' ';
      }
   }
   for(int i=1;i<=n;i++)
      for(int j=1;j<=n;j++)
           if(a[j][i]!=' ')printf("%c",a[j][i]);
   return 0;
}
```

</details>

## F

`F.cpp` 枚举一个字符串的所有循环移位，逐字符比较并保留字典序更小的候选，输出字典序最小循环表示。

<details class="exam-answer">
<summary>查看当时的提交代码（F.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
#include<stdlib.h>
int max(int a,int b)
{
   if(a>b)return a;
   return b;
}
int min(int a,int b)
{
   if(a<b)return a;
   return b;
}
int gcd(int a,int b)
{
   if(b==0)return a;
   return gcd(b,a%b);
}
int len;
char s[105],ans[105],cap[105];
int less()
{
   for(int i=0;i<len;i++)
   {
         if(ans[i]>cap[i])return 1;
         if(ans[i]<cap[i])return 0;
   }
   return 0;
}
int main()
{
   scanf("%s",&s);
   len=strlen(s);
   for(int i=0;i<len;i++)ans[i]=s[i];
   for(int i=0;i<len;i++)
   {
         for(int j=0;j<len;j++)cap[j]=s[(j+i)%len];
         if(less())
            for(int k=0;k<len;k++)ans[k]=cap[k];
   }
   printf("%s",ans);
   return 0;
}
```

</details>

## G

`G.cpp` 对二进制串标出连续四个 0 的违例位 `V`，按此前脉冲奇偶决定是否在四连零起点放置平衡位 `B`，再输出 `+1/-1/0` 电平序列。变量与分支对应 HDB3 编码过程。

<details class="exam-answer">
<summary>查看当时的提交代码（G.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
#include<stdlib.h>
int max(int a,int b)
{
   if(a>b)return a;
   return b;
}
int min(int a,int b)
{
   if(a<b)return a;
   return b;
}
int gcd(int a,int b)
{
   if(b==0)return a;
   return gcd(b,a%b);
}
char s[1005];
int cal0,cal1,c1[1005],p=-1;
int main()
{
   scanf("%s",&s);
   int len=strlen(s);
   for(int i=0;i<len;i++)
   {
         if(s[i]=='1')
         {
              cal0=0;
              c1[i]=++cal1;
       }
         else
         {
              cal0++;
              c1[i]=cal1;
              if(cal0==4)
              {
                  s[i]='V';
                  cal0=0;
                  cal1=0;
         }
      }
   }
   for(int i=0;i<len;i++)
      if(s[i+3]=='V'&&c1[i]%2==0)s[i]='B';
   for(int i=0;i<len;i++)
   {
         if(s[i]=='1'||s[i]=='B')
         {
              p=-p;
         if(p==1)printf("+1 ");
              else printf("-1 ");
      }
      else if(s[i]=='V')
      {
           if(p==1)printf("+1 ");
              else printf("-1 ");
      }
      else printf("0 ");
   }
   return 0;
}
```

</details>

## H

`H.cpp` 在固定整数区间内寻找最大的 $x$，使 $x\log_{10}x\le n$，输出这个整数。右端点为何是 255431604、$n$ 的范围为何，源代码没有说明。

<details class="exam-answer">
<summary>查看当时的提交代码（H.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
#include<stdlib.h>
int max(int a,int b)
{
   if(a>b)return a;
   return b;
}
int min(int a,int b)
{
   if(a<b)return a;
   return b;
}
int gcd(int a,int b)
{
   if(b==0)return a;
   return gcd(b,a%b);
}
int n;
double f(int x)
{
   return log10((double)x)*(double)x;
}
int main()
{
   scanf("%d",&n);
   int l=1,r=255431604;
   while(l<r)
   {
         int mid=(l+r+1)/2;
         if(f(mid)>n)r=mid-1;
         else l=mid;
   }
   printf("%d",l);
   return 0;
}
```

</details>

## J

`J.cpp` 递归划分数组，再通过相邻交换把两段连接起来；每次交换计数，最终输出排序过程中的交换总数，也就是该实现要统计的逆序对数。计数变量为 `int`，是否会溢出取决于原题规模。

<details class="exam-answer">
<summary>查看当时的提交代码（J.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
#include<stdlib.h>
int max(int a,int b)
{
   if(a>b)return a;
   return b;
}
int min(int a,int b)
{
   if(a<b)return a;
   return b;
}
int gcd(int a,int b)
{
   if(b==0)return a;
   return gcd(b,a%b);
}
int n;
int a[1000005],ans;
void swap(int x,int y)
{
   int t=a[x];
   a[x]=a[y];
   a[y]=t;
}
void con(int l,int r,int s)
{
   if(l==s)return;
   int m=s-1;
   while(a[m]>a[m+1])
   {
         swap(m,m+1);
         ans++;
         m++;
   }
   con(l,r,s-1);
}
void sort(int l,int r)
{
   if(l==r)return;
   int mid=(l+r)/2;
   sort(l,mid);sort(mid+1,r);
   con(l,r,mid+1);
}
int main()
{
   scanf("%d",&n);a[n+1]=2147483647;
   for(int i=1;i<=n;i++)scanf("%d",&a[i]);
   sort(1,n);
   printf("%d",ans);
   return 0;
}
```

</details>

这份记录的边界到此为止：它保存的是现有源代码能够证明的内容，不等价于原题、官方解析或通过证明。
