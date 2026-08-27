---
title: "E7 练习赛提交记录（原题面缺失）"
description: "根据 E7 八份留存代码整理字符串、矩阵、格式化与查找练习，明确历史实现的边界"
date: 2026-08-27
tags: ["作业"]
---

E7 的 A～H 各保留一份源码，没有题面或官方解析。所有文件都复制了一套通用 `max/min/gcd/swap/sort` 模板，很多题实际没有调用这些函数；下面仍保留完整文件，方便回看当时的真实写法，而不是悄悄重写成今天的标准答案。

## A

`A.cpp` 对每个无空格字符串比较成对的首尾字符：完全对称输出 `yes`，否则输出 `no` 和不相等的镜像字符对数量。

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
char s[1005];
int main()
{
   int sum=0,flag=1,len;
   while(scanf("%s",&s)!=EOF)
   {
         len=strlen(s);
         sum=0;flag=1;
      for(int i=0;i<(len+1)/2;i++)
         if(s[i]!=s[len-i-1])
         {
             sum++;
             flag=0;
         }
      if(flag)printf("yes\n");
      else printf("no %d\n",sum);
   }
   return 0;
}
```

</details>

## B

`B.cpp` 读取 $m\times n$ 与 $n\times p$ 两个矩阵，按三重循环计算矩阵乘积并输出。

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
long long a[45][45],b[45][45],ans[45][45];
int main()
{
   int m,n,p;
   scanf("%d%d%d",&m,&n,&p);
   for(int i=1;i<=m;i++)
      for(int j=1;j<=n;j++)scanf("%lld",&a[i][j]);
   for(int i=1;i<=n;i++)
      for(int j=1;j<=p;j++)scanf("%lld",&b[i][j]);
   for(int i=1;i<=m;i++)
   {
         for(int j=1;j<=p;j++)
         {
              for(int k=1;k<=n;k++)ans[i][j]+=a[i][k]*b[k][j];
              printf("%lld ",ans[i][j]);
      }
      printf("\n");
   }
   return 0;
}
```

</details>

## C

`C.cpp` 把标准输入的每一行转写成一段 C 程序中的 `puts("...");`，对单引号、双引号和反斜杠加反斜杠转义，并补出 `main` 框架。源码使用了已废弃的 `gets`。

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
char s[505];
int main()
{
   printf("#include<stdio.h>\nint main()\n{\n");
   while(gets(s)!=NULL)
   {
      printf("    puts(\"");
      for(int i=0;i<strlen(s);i++)
      {
           if(s[i]=='\''||s[i]=='"'||s[i]=='\\')printf("\\%c",s[i]);
           else printf("%c",s[i]);
      }
      printf("\");\n");
   }
   printf("    return 0;\n}");
   return 0;
}
```

</details>

## D

`D.cpp` 先以输入的格式串从一行文本中 `sscanf` 出字符串，再动态构造 `%k.xs` 形式的格式串，用字段宽度 $k$ 和最大输出长度 $x$ 打印。输入格式是否合法、是否只含一个字符串转换，原题前提未保留。

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
char format[1001];
char s[1001];
char str[1001];
char format_p[1001];
int main()
{
   int k,x;
   gets(s);
   gets(format);
   scanf("%d%d",&k,&x);
   sscanf(s,format,str);
   sprintf(format_p,"%%%d.%ds",k,x);
   printf(format_p,str);
   return 0;
}
```

</details>

## E

`E.cpp` 对多组数独，检查给定完成盘是否与原盘中的非零提示一致，并检查每行、每列、每个 $3\times3$ 宫是否有重复数字，输出两种固定评价。代码依赖输入数字落在 1～9 的前提。

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
int a[10][10],b[10][10],T,r[10],l[10],g[10];
void work()
{
   for(int i=1;i<10;i++)
      for(int j=1;j<10;j++)scanf("%d",&a[i][j]);
   for(int i=1;i<10;i++)
      for(int j=1;j<10;j++)scanf("%d",&b[i][j]);
   for(int i=1;i<10;i++)
   {
      for(int j=1;j<10;j++)r[j]=0;
      for(int j=1;j<10;j++)
         {
              if(a[i][j]&&a[i][j]!=b[i][j])
              {
                  printf("Moca is so careless!\n");
                  return;
         }
         if(r[b[i][j]])
         {
             printf("Moca is so careless!\n");
                  return;
         }
         r[b[i][j]]=1;
      }
   }
   for(int i=1;i<10;i++)
   {
         for(int j=1;j<10;j++)l[j]=0;
         for(int j=1;j<10;j++)
         {
         if(l[b[j][i]])
         {
             printf("Moca is so careless!\n");
                  return;
         }
         l[b[j][i]]=1;
      }
   }
   for(int i=1;i<=7;i+=3)
   {
      for(int j=1;j<=7;j+=3)
         {
              for(int k=1;k<10;k++)g[k]=0;
              for(int ii=i;ii<=i+2;ii++)
                 for(int jj=j;jj<=j+2;jj++)
                 {
                    if(g[b[ii][jj]])
               {
                  printf("Moca is so careless!\n");
                        return;
               }
               g[b[ii][jj]]=1;
            }
      }
   }
   printf("Moca finish this sudoku perfectly!\n");
}
int main()
{
   scanf("%d",&T);
   while(T--)work();
   return 0;
}
```

</details>

## F

`F.cpp` 对非降序数组预处理每个相等值连续段的长度；每次查询用二分找到第一个不小于关键字的位置，存在时输出首次下标和出现次数，否则输出 `-1`。

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
int n,t;
int a[1000005],b[1000005],key;
void work()
{
   int l=1,r=n;
   while(l<r)
   {
         int mid=(l+r)/2;
         if(a[mid]>=key)r=mid;
      else l=mid+1;
   }
   if(a[l]!=key)printf("-1\n");
   else printf("%d %d\n",l,b[l]);
}
int main()
{
   scanf("%d%d",&n,&t);
   int flag=1,sum=1;
   scanf("%d",&a[1]);
   for(int i=2;i<=n;i++)
   {
      scanf("%d",&a[i]);
      if(a[i-1]==a[i])sum++;
      else
      {
           b[flag]=sum;
         flag=i;
           sum=1;
      }
   }
   b[flag]=sum;
   while(t--)
   {
         scanf("%d",&key);
         work();
   }
   return 0;
}
```

</details>

## G

`G.cpp` 从输入串构造两种交错放置、镜像补字符的候选串，再比较前半段并输出字典序较小者。代码用常数 `219` 计算镜像字符，原题的字符表与语义已经无法从现有文件唯一恢复，因此不再给它补名字。

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
char s[2005],s1[2005],s2[2005];
int len;
int main()
{
   scanf("%s",&s);
   len=strlen(s);
   for(int i=0;i<len;i++)
   {
         s1[2*i]=s[i];
         s2[2*i+1]=s[i];
   }
   len*=2;
   for(int i=0;i<len;i++)
   {
         if(s1[i]=='0')s1[i]='o';
         if(s2[i]=='0')s2[i]='o';
   }
   for(int i=0;i<len;i+=2)
   {
      s1[i+1]=219-s1[len-i-2];
      s2[i]=219-s2[len-i-1];
   }
   for(int i=0;i<len/2;i++)
   {
         if(s1[i]<s2[i])
         {
         for(int j=0;j<len/2;j++)printf("%c",s1[j]);
         break;
      }

         if(s1[i]>s2[i])
         {
         for(int j=0;j<len/2;j++)printf("%c",s2[j]);
         break;
      }
   }
   return 0;
}
```

</details>

## H

`H.cpp` 实现一个字符串命令解释器：追加、截断、插入、删除、替换，以及查询子串第一次和最后一次出现位置；全部命令处理完后输出最终字符串。下标是按源码的 0 基方式操作。

<details class="exam-answer">
<summary>查看当时的提交代码（H.cpp）</summary>

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
char str1[10005],str2[10005];
int op,len1,len2,a,b;
int check(int ii)
{
   for(int i=0;i<len2;i++)
      if(str1[i+ii]!=str2[i])return 0;
   return 1;
}
void work1()
{
   scanf("%s",&str2);
   len1=strlen(str1);
   len2=strlen(str2);
   for(int i=len1;i<len1+len2;i++)str1[i]=str2[i-len1];
}
void work2(int ii)
{
   len1=strlen(str1);
   for(int i=ii;i<len1;i++)str1[i]=NULL;
}
void work3(int ii)
{
   scanf("%s",&str2);
   len1=strlen(str1);
   len2=strlen(str2);
   for(int i=len1+len2-1;i>ii+len2;i--)str1[i]=str1[i-len2];
   for(int i=ii+1;i<=ii+len2;i++)str1[i]=str2[i-ii-1];
}
void work4(int ii,int jj)
{
   len1=strlen(str1);
   for(int i=ii;i<=jj;i++)str1[i]=str1[jj+i+1-ii];
   for(int i=len1-(jj-ii+1);i<len1;i++)str1[i]=NULL;
}
void work5(int ii,int jj)
{
    work4(ii,jj);work3(ii-1);
}
void work6()
{
   scanf("%s",&str2);
   len1=strlen(str1);
   len2=strlen(str2);
   if(len2>len1)
   {
         printf("NULL\n");
         return;
   }
   int flag=0;
   for(int i=0;i<=len1-len2;i++)
      if(check(i))
      {
           printf("%d ",i);
           flag=1;
           break;
      }
   for(int i=len1-len2;i>=0;i--)
      if(check(i))
      {
           printf("%d\n",i);
           flag=1;
           break;
      }
   if(!flag)printf("NULL\n");
}
int main()
{
   scanf("%s",&str1);
   while(scanf("%d",&op)!=EOF)
   {
         if(op==1)work1();
         if(op==2)
      {
           scanf("%d",&a);
         work2(a);
      }
         if(op==3)
      {
           scanf("%d",&a);
         work3(a);
      }
         if(op==4)
         {
           scanf("%d%d",&a,&b);
         work4(a,b);
      }
         if(op==5)
         {
              scanf("%d%d",&a,&b);
         work5(a,b);
      }
         if(op==6)work6();
   }
   printf("%s\n",str1);
   return 0;
}
```

</details>

这份记录的边界到此为止：它保存的是现有源代码能够证明的内容，不等价于原题、官方解析或通过证明。
