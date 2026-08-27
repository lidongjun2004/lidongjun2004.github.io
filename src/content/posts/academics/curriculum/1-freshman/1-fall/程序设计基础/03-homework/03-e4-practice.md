---
title: "E4 练习赛提交记录（原题面缺失）"
description: "根据 E4 留存代码客观整理八道练习的行为与实现；重复文件合并，缺失题面不作补造"
date: 2026-08-27
tags: ["作业"]
---

E4 留下 A～H 八个题号的代码。G 同时有 `G.c` 与 `G.cpp`，两份逐字节一致，因此下面只展开 `G.cpp`，不把副本算成第九题。每个文件都带了一组通用辅助函数，其中不少没有被本题调用；代码仍按留存版本展示。

## A

`A.cpp` 读入一个字符和整数 $n$，第 $i$ 行先输出 $i-1$ 个空格，再输出 $n-i+1$ 个该字符，形成逐行右移、逐行缩短的图案。

<details class="exam-answer">
<summary>查看当时的提交代码（A.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
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
void swap(int a,int b)
{
   int t=a;
   a=b;
   b=t;
}
int gcd(int a,int b)
{
   if(b==0)return a;
   return gcd(b,a%b);
}
int abs(int a)
{
   if(a>=0)return a;
   else return -a;
}
int main()
{
   char ch;
   int n;
   scanf("%c%d",&ch,&n);
   for(int i=1;i<=n;i++)
   {
         for(int j=1;j<i;j++)printf(" ");
         for(int j=i;j<=n;j++)printf("%c",ch);
         printf("\n");
   }
   return 0;
}
```

</details>

## B

`B.cpp` 把十进制字符 0～9 映射为固定的四位码：0～4 为 `0000`～`0100`，5～9 为 `1011`～`1111`。这正好是代码中的 2421 自补码映射；输入按字符一直处理到 EOF。

<details class="exam-answer">
<summary>查看当时的提交代码（B.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
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
void swap(int a,int b)
{
   int t=a;
   a=b;
   b=t;
}
int gcd(int a,int b)
{
   if(b==0)return a;
   return gcd(b,a%b);
}
int abs(int a)
{
   if(a>=0)return a;
   else return -a;
}
int main()
{
   char ch;
   while(scanf("%c",&ch)!=EOF)
   {
         if(ch=='0')printf("0000");
         if(ch=='1')printf("0001");
         if(ch=='2')printf("0010");
         if(ch=='3')printf("0011");
         if(ch=='4')printf("0100");
         if(ch=='5')printf("1011");
         if(ch=='6')printf("1100");
         if(ch=='7')printf("1101");
         if(ch=='8')printf("1110");
         if(ch=='9')printf("1111");
   }
   return 0;
}
```

</details>

## C

`C.cpp` 读取若干判定字符：`p/g/b/m` 分别影响总分、连击数和最终评价，输出总分、最大连击以及 `All Perfect!`、`Full Combo!` 或 `Moca Complete!`。具体游戏判定含义只能以这些固定分支为准。

<details class="exam-answer">
<summary>查看当时的提交代码（C.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
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
void swap(int a,int b)
{
   int t=a;
   a=b;
   b=t;
}
int gcd(int a,int b)
{
   if(b==0)return a;
   return gcd(b,a%b);
}
int abs(int a)
{
   if(a>=0)return a;
   else return -a;
}
int main()
{
   int n,flag=0,score=0,combo=0,mostcombo=0;
   char ch;
   scanf("%d",&n);getchar();
   for(int i=1;i<=n;i++)
   {
         scanf("%c",&ch);
         getchar();
         if(ch=='p')
      {
         score+=300;
         combo++;
         if(combo>mostcombo)mostcombo=combo;
      }
         if(ch=='g')
         {
              score+=208;
              combo++;
              if(combo>mostcombo)mostcombo=combo;
              if(flag==0)flag=1;
      }
      if(ch=='b')
      {
           score+=105;
           flag=2;
           if(combo>mostcombo)mostcombo=combo;
           combo=0;
      }
      if(ch=='m')
      {
           flag=2;
           if(combo>mostcombo)mostcombo=combo;
           combo=0;
      }
   }
   printf("%d\n%d\n",score,mostcombo);
   if(flag==0)printf("All Perfect!");
   if(flag==1)printf("Full Combo!");
   if(flag==2)printf("Moca Complete!");
   return 0;
}
```

</details>

## D

`D.cpp` 用标记数组模拟约瑟夫环：$n$ 人循环报数，每次数到 $k$ 淘汰，直到只剩一人，输出其编号。

<details class="exam-answer">
<summary>查看当时的提交代码（D.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
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
void swap(int a,int b)
{
   int t=a;
   a=b;
   b=t;
}
int gcd(int a,int b)
{
   if(b==0)return a;
   return gcd(b,a%b);
}
int abs(int a)
{
   if(a>=0)return a;
   else return -a;
}
int flag[1005];
int main()
{
   int n,k;
   scanf("%d%d",&n,&k);
   int tot=n,num=0,i=0;
   while(tot>1)
   {
         num++;i++;
         if(i>n)i=1;
         while(flag[i])
         {
              i++;
              if(i>n)i=1;
      }
         if(num==k)
         {
              num=0;
              flag[i]=1;
              tot--;
      }
   }
   for(i=1;i<=n;i++)
      if(!flag[i])printf("%d",i);
   return 0;
}
```

</details>

## E

`E.cpp` 读取形如 `year.month.day hour:minute` 的多组时间，把超范围的分钟、小时、日、月逐步进位后按补零格式输出。源码只做有限次数的月日归一化，并使用额外的 3200 年闰年例外；若输入能跨越很多个月，现有逻辑未必完整。

<details class="exam-answer">
<summary>查看当时的提交代码（E.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
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
void swap(int a,int b)
{
   int t=a;
   a=b;
   b=t;
}
int gcd(int a,int b)
{
   if(b==0)return a;
   return gcd(b,a%b);
}
int abs(int a)
{
   if(a>=0)return a;
   else return -a;
}
int main()
{
   int n,year,month,day,hour,minute;
   scanf("%d",&n);
   for(int i=1;i<=n;i++)
   {
         scanf("%d.%d.%d %d:%d",&year,&month,&day,&hour,&minute);
         if(minute>=60)
         {
              minute-=60;
              hour++;
      }
      if(hour>=24)
      {
           day+=hour/24;
           hour%=24;
      }
      if(month>12)
      {
           year+=(month-1)/12;
           month-=(month-1)/12*12;
      }
      if(month==1)
         if(day>31)
           {
               day-=31;
               month++;
         }
      if(month==2)
      {
           if(day>28)
           {
            if(day>28)
              {
               if(((year%4==0&&year%100!=0)||year%400==0)&&year%3200!=0)
               {
                   if(day>29)
                  {
                     day-=29;
                        month++;
                  }
               }
               else
               {
                  day-=28;
                  month++;
               }
            }
         }
      }
      if(month==3)
         if(day>31)
           {
               day-=31;
               month++;
         }
      if(month==4)
         if(day>30)
           {
               day-=30;
               month++;
         }
      if(month==5)
         if(day>31)
           {
               day-=31;
               month++;
         }
      if(month==6)
         if(day>30)
           {
               day-=30;
               month++;
         }
      if(month==7)
         if(day>31)
           {
               day-=31;
               month++;
         }
      if(month==8)
         if(day>31)
           {
               day-=31;
               month++;
         }
      if(month==9)
         if(day>30)
           {
               day-=30;
               month++;
         }
      if(month==10)
         if(day>31)
           {
               day-=31;
               month++;
         }
      if(month==11)
         if(day>30)
           {
               day-=30;
               month++;
         }
      if(month==12)
         if(day>31)
           {
               day-=31;
               month++;
         }
      if(month>12)
      {
           month%=12;
           year++;
           if(month==1)
            if(day>31)
              {
                  day-=31;
                  month++;
            }
         if(month==2)
         {
              if(day>28)
              {
               if(((year%4==0&&year%100!=0)||year%400==0)&&year%3200!=0)
               {
                   if(day>29)
                  {
                     day-=29;
                        month++;
                  }
               }
               else
               {
                  day-=28;
                  month++;
               }
            }
         }
      }
      printf("%d.",year);
      if(month<10)printf("0%d.",month);
      else printf("%d.",month);
      if(day<10)printf("0%d ",day);
      else printf("%d ",day);
      if(hour<10)printf("0%d:",hour);
      else printf("%d:",hour);
      if(minute<10)printf("0%d\n",minute);
      else printf("%d\n",minute);
   }
   return 0;
}
```

</details>

## F

`F.cpp` 对 $m$ 次区间加法使用差分数组，恢复每个位置的累计值，并统计不小于给定阈值的位置数。

<details class="exam-answer">
<summary>查看当时的提交代码（F.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
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
void swap(int a,int b)
{
   int t=a;
   a=b;
   b=t;
}
int gcd(int a,int b)
{
   if(b==0)return a;
   return gcd(b,a%b);
}
int abs(int a)
{
   if(a>=0)return a;
   else return -a;
}
int d[200005];
int main()
{
   int n,m,limit,l,r,x,ans=0;
   long long sum=0;
   scanf("%d%d%d",&n,&m,&limit);
   for(int i=1;i<=m;i++)
   {
         scanf("%d%d%d",&l,&r,&x);
         d[l]+=x;d[r+1]-=x;
   }
   for(int i=1;i<=n;i++)
   {
         sum+=d[i];
         if(sum>=limit)ans++;
   }
   printf("%d",ans);
   return 0;
}
```

</details>

## G

`G.cpp` 先约分 $a/b$，再模拟长除法；它记录每一步得到的数字和新余数，发现重复状态后用括号标出循环节。整数结果输出成 `整数.(0)`。

`G.c` 与 `G.cpp` 内容完全相同，已核对但不重复展示。

<details class="exam-answer">
<summary>查看当时的提交代码（G.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
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
void swap(int a,int b)
{
   int t=a;
   a=b;
   b=t;
}
int gcd(int a,int b)
{
   if(b==0)return a;
   return gcd(b,a%b);
}
int abs(int a)
{
   if(a>=0)return a;
   else return -a;
}
int c[5005],r[5005];
int main()
{
   int a,b;
   scanf("%d%d",&a,&b);
   int GCD=gcd(a,b);
   a/=GCD;
   b/=GCD;
   if(b==1)
   {
      printf("%d.(0)",a);
      return 0;
   }
   printf("%d.",a/b);
   int res=a%b,len=0,flag=0,str,ans;
   while(!flag)
   {
         ans=res*10/b;
      res=res*10%b;
      for(int i=1;i<=len;i++)
         {
              if(ans==c[i]&&res==r[i])
              {
                  flag=1;
                  str=i;
                  break;
         }
      }
      len++;
      c[len]=ans;r[len]=res;
   }
   for(int i=1;i<str;i++)printf("%d",c[i]);
   printf("(");
   for(int i=str;i<len;i++)printf("%d",c[i]);
   printf(")");
   return 0;
}
```

</details>

## H

`H.cpp` 读取格点多边形顶点，用叉积三角剖分求两倍面积，用每条边的坐标差最大公约数累计边界格点数，再按 Pick 定理输出内部格点数。代码假定顶点顺序和多边形性质满足原题前提。

<details class="exam-answer">
<summary>查看当时的提交代码（H.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
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
void swap(int a,int b)
{
   int t=a;
   a=b;
   b=t;
}
long long gcd(long long a,long long b)
{
   if(b==0)return a;
   return gcd(b,a%b);
}
long long abs(long long a)
{
   if(a>=0)return a;
   else return -a;
}
int main()
{
   long long n,x0,y0,x1,y1,x2,y2,s=0,b,ans,a1,b1,a2,b2,c1,c2;
   scanf("%lld",&n);
   scanf("%lld%lld",&x0,&y0);
   scanf("%lld%lld",&x1,&y1);
   b=n;
   c1=abs(x1-x0);c2=abs(y1-y0);
   b+=gcd(c1,c2)-1;
   for(int i=3;i<=n;i++)
   {
         scanf("%lld%lld",&x2,&y2);
         a1=x1-x0;b1=y1-y0;
         a2=x2-x0;b2=y2-y0;
         c1=abs(x1-x2);c2=abs(y1-y2);
         s+=abs(a1*b2-a2*b1);
         b+=gcd(c1,c2)-1;
         x1=x2;y1=y2;
   }
   c1=abs(x2-x0);c2=abs(y2-y0);
   b+=gcd(c1,c2)-1;
   ans=(s-b)/2+1;
   printf("%lld",ans);
   return 0;
}
```

</details>

这份记录的边界到此为止：它保存的是现有源代码能够证明的内容，不等价于原题、官方解析或通过证明。
