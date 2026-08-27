---
title: "E8 练习赛提交记录（原题面缺失）"
description: "根据 E8 七份历史提交整理递归、排序、模拟与分配练习；对明显风险如实标注"
date: 2026-08-27
tags: ["作业"]
---

E8 留下 A～G 七份源码，没有完整题面、官方答案或通过记录。这里把代码能够确认的目标说清楚，也保留明显的历史问题；尤其 F 的递归缺少负下标边界，不能因为要写博客就替它修成另一份“标准答案”。

## A

`A.cpp` 读入总高度 $h$，用约三分之二的高度输出居中的星号三角树冠，再用约三分之一高度输出由竖线组成的树干。整数除法决定各部分尺寸。

<details class="exam-answer">
<summary>查看当时的提交代码（A.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
#include<stdlib.h>
#define ll long long
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
void swap(void *a,void *b,int data_type_size)
{
   unsigned char *p=(unsigned char *)a;
   unsigned char *q=(unsigned char *)b;
   unsigned char temp;
   while(data_type_size--)
   {
      temp=*p;
      *p=*q;
      *q=temp;
      p++;
      q++;
   }
}
void sort(int *arr,int left,int right)
{
   if(left>right)return;
   int tmp=arr[left];
   int i=left;
   int j=right;
   while(i!=j)
   {
      while(arr[j]>=tmp&&j>i)j--;
      while(arr[i]<=tmp&&j>i)i++;
      if(j>i)
      {
         int t=arr[i];
         arr[i]=arr[j];
         arr[j]=t;
      }
   }
   arr[left]=arr[i];
   arr[i]=tmp;
   sort(arr,left,i-1);
   sort(arr,i+1,right);
}
int h,h1,h2;
int main()
{
   scanf("%d",&h);
   h1=h*2/3;
   h2=h/3;
   for(int i=1;i<=h1;i++)
   {
         for(int j=1;j<=h1-i;j++)
         {
              printf(" ");
      }
      for(int j=1;j<=2*i-1;j++)printf("*");
      printf("\n");
   }
   for(int i=1;i<=h2;i++)
   {
         for(int j=1;j<=h1-(h2/4)-1;j++)printf(" ");
         for(int j=1;j<=(h2/4)*2+1;j++)printf("|");
         printf("\n");
   }
   return 0;
}
```

</details>

## B

`B.cpp` 对每组起点、终点和方向串，只在当前字符恰好让横纵位移向 0 靠近时计数并更新；位移归零就输出使用的有效步数，否则输出固定失败语。它忽略不朝目标走的字符，不等同于按每个字符真实移动。

<details class="exam-answer">
<summary>查看当时的提交代码（B.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
#include<stdlib.h>
#define ll long long
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
void swap(void *a,void *b,int data_type_size)
{
   unsigned char *p=(unsigned char *)a;
   unsigned char *q=(unsigned char *)b;
   unsigned char temp;
   while(data_type_size--)
   {
      temp=*p;
      *p=*q;
      *q=temp;
      p++;
      q++;
   }
}
void sort(int *arr,int left,int right)
{
   if(left>right)return;
   int tmp=arr[left];
   int i=left;
   int j=right;
   while(i!=j)
   {
      while(arr[j]>=tmp&&j>i)j--;
      while(arr[i]<=tmp&&j>i)i++;
      if(j>i)
      {
         int t=arr[i];
         arr[i]=arr[j];
         arr[j]=t;
      }
   }
   arr[left]=arr[i];
   arr[i]=tmp;
   sort(arr,left,i-1);
   sort(arr,i+1,right);
}
int T,sx,sy,ex,ey,x,y,len,sum,flag;
char s[1005];
int main()
{
   scanf("%d",&T);
   while(T--)
   {
         scanf("%d%d%d%d",&sx,&sy,&ex,&ey);
         x=ex-sx;
         y=ey-sy;sum=0;flag=1;
      scanf("%s",&s);
      len=strlen(s);
      for(int i=0;i<len;i++)
      {
           if(s[i]=='N'&&y>0){sum++;y--;}
           if(s[i]=='W'&&x<0){sum++;x++;}
           if(s[i]=='S'&&y<0){sum++;y++;}
           if(s[i]=='E'&&x>0){sum++;x--;}
           if(x==0&&y==0)
           {
               printf("%d\n",sum);

               flag=0;break;

         }
      }
      if(flag)printf("We want to live in Gensokyo forever...\n");
   }
   return 0;
}
```

</details>

## C

`C.cpp` 反复用 `a^b` 表示无进位和、`2*(a&b)` 表示进位，并累计每一轮进位掩码中 1 的个数，直到进位为 0。小参数尝试用二维数组记忆化；该数组约有一亿个 `int`，内存开销很大。

<details class="exam-answer">
<summary>查看当时的提交代码（C.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
#include<stdlib.h>
#define ll long long
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
void swap(void *a,void *b,int data_type_size)
{
   unsigned char *p=(unsigned char *)a;
   unsigned char *q=(unsigned char *)b;
   unsigned char temp;
   while(data_type_size--)
   {
      temp=*p;
      *p=*q;
      *q=temp;
      p++;
      q++;
   }
}
void sort(int *arr,int left,int right)
{
   if(left>right)return;
   int tmp=arr[left];
   int i=left;
   int j=right;
   while(i!=j)
   {
      while(arr[j]>=tmp&&j>i)j--;
      while(arr[i]<=tmp&&j>i)i++;
      if(j>i)
      {
         int t=arr[i];
         arr[i]=arr[j];
         arr[j]=t;
      }
   }
   arr[left]=arr[i];
   arr[i]=tmp;
   sort(arr,left,i-1);
   sort(arr,i+1,right);
}
int f[10005][10005];
int popcount(int x)
{
   int sum=0;
   while(x>0)
   {
         if(x%2)sum++;
         x=x>>1;
   }
   return sum;
}
int func(int a,int b)
{
   if(b==0)return 0;
   int p=a^b;
   int g=a&b;
   if(a<10005&&b<10005)
   {
         if(f[a][b])return f[a][b];
         return f[a][b]=popcount(g)+func(p,2*g);
   }
   return popcount(g)+func(p,2*g);
}
int main()
{
   int a,b;
   while(scanf("%d%d",&a,&b)!=EOF)
   {
         if(b==0)printf("0\n");
      else if(a<10005&&b<10005)
         {
              if(f[a][b])printf("%d\n",f[a][b]);
              else
              {
                  f[a][b]=func(a,b);
                  printf("%d\n",f[a][b]);
         }
      }
      else printf("%d\n",func(a,b));
   }
   return 0;
}
```

</details>

## D

`D.cpp` 对数组从右向左做 $k$ 趟冒泡，每趟把当前最小元素推到前部，最后输出前 $k$ 个元素。源码还实现了按字节交换任意对象的 `swap`。

<details class="exam-answer">
<summary>查看当时的提交代码（D.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
#include<stdlib.h>
#define ll long long
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
void swap(void *a,void *b,int data_type_size)
{
   unsigned char *p=(unsigned char *)a;
   unsigned char *q=(unsigned char *)b;
   unsigned char temp;
   while(data_type_size--)
   {
      temp=*p;
      *p=*q;
      *q=temp;
      p++;
      q++;
   }
}
int a[1000005],n,k;
void sort(int *arr,int left,int right)
{
   if(left>right)return;
   int tmp=arr[left];
   int i=left;
   int j=right;
   while(i!=j)
   {
      while(arr[j]>=tmp&&j>i)j--;
      while(arr[i]<=tmp&&j>i)i++;
      if(j>i)
      {
         int t=arr[i];
         arr[i]=arr[j];
         arr[j]=t;
      }
   }
   arr[left]=arr[i];
   arr[i]=tmp;
   sort(arr,left,i-1);
   sort(arr,i+1,right);
}
int main()
{
   scanf("%d%d",&n,&k);
   for(int i=1;i<=n;i++)scanf("%d",&a[i]);
   for(int i=1;i<=k;i++)
   {
         for(int j=n;j>i;j--)
         {
              if(a[j-1]>a[j])swap(a+j,a+j-1,4);
      }
   }
   for(int i=1;i<=k;i++)printf("%d ",a[i]);
   return 0;
}
```

</details>

## E

`E.cpp` 在数值矩阵的每个 $3\times3$ 窗口上计算六种固定笔画模板的和，对应字符 `V/I/O/L/E/T`；输出全局最大和，并按固定顺序输出所有达到最大值的字母。

<details class="exam-answer">
<summary>查看当时的提交代码（E.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
#include<stdlib.h>
#define ll long long
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
void swap(void *a,void *b,int data_type_size)
{
   unsigned char *p=(unsigned char *)a;
   unsigned char *q=(unsigned char *)b;
   unsigned char temp;
   while(data_type_size--)
   {
      temp=*p;
      *p=*q;
      *q=temp;
      p++;
      q++;
   }
}
void sort(int *arr,int left,int right)
{
   if(left>right)return;
   int tmp=arr[left];
   int i=left;
   int j=right;
   while(i!=j)
   {
      while(arr[j]>=tmp&&j>i)j--;
      while(arr[i]<=tmp&&j>i)i++;
      if(j>i)
      {
         int t=arr[i];
         arr[i]=arr[j];
         arr[j]=t;
      }
   }
   arr[left]=arr[i];
   arr[i]=tmp;
   sort(arr,left,i-1);
   sort(arr,i+1,right);
}
int a[1005][1005],n,m,sum[7],ans,flag[7];
char s[7]={'0','V','I','O','L','E','T'};
int main()
{
   scanf("%d%d",&m,&n);
   for(int i=1;i<=m;i++)
   {
         for(int j=1;j<=n;j++)
         {
              scanf("%d",&a[i][j]);
      }
   }
   for(int i=1;i<=m-2;i++)
   {
         for(int j=1;j<=n-2;j++)
         {
              sum[1]=a[i][j]+a[i+1][j]+a[i+2][j+1]+a[i+1][j+2]+a[i][j+2];
              sum[2]=a[i][j+1]+a[i+1][j+1]+a[i+2][j+1];
              sum[3]=a[i][j]+a[i+1][j]+a[i+2][j]+a[i][j+1]+a[i+2][j+1]+a[i][j+2]+a[i+1][j+2]+a[i+2][j+2];
              sum[4]=a[i][j]+a[i+1][j]+a[i+2][j]+a[i+2][j+1]+a[i+2][j+2];
         sum[5]=a[i][j]+a[i+1][j]+a[i+2][j]+a[i][j+1]+a[i+1][j+1]+a[i+2][j+1]+a[i][j+2]+a[i+1][j+2]+a[i+2][j+2];
         sum[6]=a[i][j]+a[i][j+1]+a[i+1][j+1]+a[i+2][j+1]+a[i][j+2];
         for(int k=1;k<=6;k++)
         {
             if(sum[k]>ans)
             {
                ans=sum[k];
                for(int ii=1;ii<=6;ii++)flag[ii]=0;
                flag[k]=1;
            }
            if(sum[k]==ans)flag[k]=1;
         }
      }
   }
   printf("%d\n",ans);
   for(int i=1;i<=6;i++)
   {
         if(flag[i])printf("%c",s[i]);
   }
   return 0;
}
```

</details>

## F

`F.cpp` 在网格上把若干坐标标成障碍，递归计算从 $(0,0)$ 只向两个正方向走到 $(m,n)$ 的路径数。历史代码没有处理 `x<0` 或 `y<0`，递归到边界时可能访问负下标；下面原样保留并明确视为有缺陷的提交。

这份代码不应直接作为参考答案使用；若重做，至少要先补齐坐标越界终止条件，并根据原题范围决定是否记忆化。

<details class="exam-answer">
<summary>查看当时的提交代码（F.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
#include<stdlib.h>
#define ll long long
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
void swap(void *a,void *b,int data_type_size)
{
   unsigned char *p=(unsigned char *)a;
   unsigned char *q=(unsigned char *)b;
   unsigned char temp;
   while(data_type_size--)
   {
      temp=*p;
      *p=*q;
      *q=temp;
      p++;
      q++;
   }
}
void sort(int *arr,int left,int right)
{
   if(left>right)return;
   int tmp=arr[left];
   int i=left;
   int j=right;
   while(i!=j)
   {
      while(arr[j]>=tmp&&j>i)j--;
      while(arr[i]<=tmp&&j>i)i++;
      if(j>i)
      {
         int t=arr[i];
         arr[i]=arr[j];
         arr[j]=t;
      }
   }
   arr[left]=arr[i];
   arr[i]=tmp;
   sort(arr,left,i-1);
   sort(arr,i+1,right);
}
int a[15][15],m,n,t;
int dp(int x,int y)
{
   if(a[x][y]==-1)return 0;
   if(x==0&&y==0)return 1;
   return dp(x-1,y)+dp(x,y-1);
}
int main()
{
   scanf("%d%d%d",&m,&n,&t);
   int x,y;
   for(int i=1;i<=t;i++)
   {
         scanf("%d%d",&x,&y);
         a[x][y]=-1;
   }
   printf("%d",dp(m,n));
   return 0;
}
```

</details>

## G

`G.cpp` 读取若干名额、学生的名次和志愿序列；按志愿轮次从前到后、同轮按名次从高到低尝试分配，名额尚余时锁定结果，最后按名次输出姓名和分配编号。输入编号范围等前提没有保留。

<details class="exam-answer">
<summary>查看当时的提交代码（G.cpp）</summary>

```cpp
#include<stdio.h>
#include<math.h>
#include<string.h>
#include<stdlib.h>
#define ll long long
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
void swap(void *a,void *b,int data_type_size)
{
   unsigned char *p=(unsigned char *)a;
   unsigned char *q=(unsigned char *)b;
   unsigned char temp;
   while(data_type_size--)
   {
      temp=*p;
      *p=*q;
      *q=temp;
      p++;
      q++;
   }
}
void sort(int *arr,int left,int right)
{
   if(left>right)return;
   int tmp=arr[left];
   int i=left;
   int j=right;
   while(i!=j)
   {
      while(arr[j]>=tmp&&j>i)j--;
      while(arr[i]<=tmp&&j>i)i++;
      if(j>i)
      {
         int t=arr[i];
         arr[i]=arr[j];
         arr[j]=t;
      }
   }
   arr[left]=arr[i];
   arr[i]=tmp;
   sort(arr,left,i-1);
   sort(arr,i+1,right);
}
int n,m;
int col[11],rank[1005],vol[1005][11],a[1005],ans[1005];
char stu[1005][10];
int main()
{
   scanf("%d%d",&n,&m);
   for(int i=1;i<=m;i++)scanf("%d",&col[i]);
   for(int i=1;i<=n;i++)
   {
         scanf("%s%d",&stu[i],&rank[i]);
         a[rank[i]]=i;
         for(int j=1;j<=m;j++)scanf("%d",&vol[i][j]);
   }
   for(int i=1;i<=m;i++)
   {
         for(int j=1;j<=n;j++)
         {
              if(ans[a[j]])continue;
         if(col[vol[a[j]][i]])
              {
                  ans[a[j]]=vol[a[j]][i];
                  col[vol[a[j]][i]]--;
         }
      }
   }
   for(int i=1;i<=n;i++)
   {
         printf("%s %d\n",stu[a[i]],ans[a[i]]);
   }
   return 0;
}
```

</details>

这份记录的边界到此为止：它保存的是现有源代码能够证明的内容，不等价于原题、官方解析或通过证明。
