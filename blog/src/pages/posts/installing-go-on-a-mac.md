---
title: "Installing Go on a Mac"
pubDate: "2020-02-01"
slug: "go-basics-1-installing-go-on-a-mac"
description: "In this article, I am going to show you how to install & setup Go (Golang) on Mac and also setup/configure VS Code for writing Go (Golang) code."
hero: "/images/Golang-Basics.png"
tags: ["go"]
layout: "../../layouts/BlogPostLayout.astro"
---

In this article, I am going to show you how to install & setup Go on Mac and also setup/configure VS Code for writing Go code.

## Install

The easiest way to install go is via go's website [Golang.org](https://golang.org/dl). After going to this page, click on the link for 'Apple macOS' and run the installer.

If you have [Homebrew](https://brew.sh/) installed you can run the command `brew install golang`

After you have installed, let's verify and test that everything is working.

Run this command in your terminal:

```bash
go version

# You should see an output similar to the following:
# go version go1.13.7 darwin/amd64
```

## Workspace Setup

Go has this concept of a 'workspace,' which is where all of your source code and 3rd party packages, binaries etc. are all stored. On a mac this location is under:

```bash
/Users/<your mac username>/go

# mine is: /Users/rguss/go/src
```

This location is also known as your `GOPATH`. The location of this path and various other Go specific ENV Variables can be located with the command:

```bash
go env
```

You will also need to create 3 directories inside of your `$GOPATH` with the following:

```bash
mkdir -p $GOPATH $GOPATH/src $GOPATH/pkg $GOPATH/bin
```

## Hello World

Let's create a simple hello world program and build it to make sure we have everything configured correctly.

Inside of your `$GOPATH/src` directory create a directory called `hello` and then a file called `hello.go` inside of it.

It should look like this `$GOPATH/src/hello/hello.go`

Then paste the following into `hello.go`:

```go
package main

import "fmt"

func main() {
	fmt.Printf("Hello, World!")
}
```

Then build it with the go tool:

```bash
cd $HOME/go/src/hello
go build
```

Then:

```bash
./hello

# Output should be:
# Hello, World!
```

If you see `Hello, World!` output to the console, you are all set!

## VS Code

The final step is to set up and configure [VS Code](https://code.visualstudio.com/) to write Go code. It is as simple as
installing a single extension called [Go](https://marketplace.visualstudio.com/items?itemName=ms-vscode.Go). Once installed, you are all set and ready to start writing Go.

## Additional Resources

- [Golang.org](https://golang.org/)
- [Go.dev](https://go.dev/)
