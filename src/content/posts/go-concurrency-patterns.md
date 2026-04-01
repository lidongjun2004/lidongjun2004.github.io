---
title: "Go 并发模式详解"
description: "深入理解 goroutine、channel 和常见并发模式，写出高效的并发程序"
date: 2026-03-15
section: "tech-stack"
category:
  - "Backend"
  - "Go"
tags: ["go", "concurrency", "goroutine", "channel"]
---

Go 语言的并发模型是它最强大的特性之一。与传统的线程模型不同，Go 采用了 CSP（Communicating Sequential Processes）模型，通过 goroutine 和 channel 来实现并发。

## Goroutine：轻量级线程

Goroutine 是 Go 并发的基础单元。它比操作系统线程轻量得多 —— 一个 goroutine 初始栈只有 2KB，而一个线程通常需要 1MB。

```go
func main() {
    go func() {
        fmt.Println("Hello from goroutine!")
    }()

    time.Sleep(time.Second)
}
```

## Channel：goroutine 间的通信

Channel 是 goroutine 之间传递数据的管道。Go 的哲学是：

> Don't communicate by sharing memory; share memory by communicating.

```go
ch := make(chan int, 10) // buffered channel

go func() {
    ch <- 42
}()

value := <-ch
fmt.Println(value) // 42
```

## 常见并发模式

### Fan-out / Fan-in

将任务分发给多个 worker 并行处理，然后汇总结果：

```go
func fanOut(input <-chan int, workers int) []<-chan int {
    channels := make([]<-chan int, workers)
    for i := 0; i < workers; i++ {
        channels[i] = worker(input)
    }
    return channels
}
```

### Pipeline

将处理流程分成多个阶段，每个阶段通过 channel 连接：

```go
func generate(nums ...int) <-chan int {
    out := make(chan int)
    go func() {
        for _, n := range nums {
            out <- n
        }
        close(out)
    }()
    return out
}
```

## 总结

Go 的并发模型简洁而强大。掌握 goroutine、channel 和常见的并发模式，能帮助你写出高效、可维护的并发程序。
