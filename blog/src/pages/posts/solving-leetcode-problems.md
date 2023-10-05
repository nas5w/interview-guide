---
title: "The leetcode practice process that helped me pass FAANG and other big tech interviews"
pubDate: "2023-10-05"
slug: "my-leetcode-process"
description: "A dive into my process for practicing leetcode problems"
hero: "/images/desk.jpg"
tags: ["interviewing", "leetcode"]
layout: "../../layouts/BlogPostLayout.astro"
---

Coding interviews are daunting. _FAANG_ coding interviews? Downright terrifying.

I never thought I was the type of person who would pass a FAANG coding interview. I remember being whiteboarded right out of college (too many years ago) and getting eaten alive&mdash;I had no idea how to even approach problems 50% of the time. The other 50% I struggled my way into getting suboptimal solutions. At that point, I pretty much figured passing the most rigorous coding challenges was not ever in the cards for me.

Fast forward to today&mdash;in my most recent round of interviewing, I passed both FAANG and big tech interviews, which included solving many leetcode-style problems.

This post is going to cover how I went from struggling with easy problems to solving hard ones and ultimately passing some of the toughest coding challenges out there.

# There's no secret sauce here

Sorry to disappoint, but there's a reason this post isn't called "One Surprising Coding Trick FAANG Doesn't Want You To Know!" It's because, at the end of the day, cracking a FAANG interview comes down to practicing.

The good news is that all practicing isn't made equal and this post is going to really hammer home how I was able to _efficiently_ pactice leetcode and make sure the _concepts stick_.

This will be especially helpful for those of you who have completed dozens or even hundreds of leetcode problems but feel like you've made minimal progress. It's very possible that you're not getting the most out of your time and I really hope this post can help!

# Make a practice plan

Before you even start practicing, make a plan. How many days, weeks, or months will you practice before you start interviewing? How many days per week? Which days? How many hours those days? Which problems do you plan on solving (Note: I'm a big proponent of starting with the NeetCode 150!).

If you don't make a plan (and preferrably write it down), you will likely do one of two things: (1) have no structure and therefore not study or (2) have no structure and therefore study way too much and burn yourself out.

This is especially important if you have family or dependents who rely on you. When you have a plan, they will _also_ know when you're planning on being busy and it's always good to have shared expectations.

## Don't study too much

I have heard a lot about people burning out when studying leetcode. It's easy to get obsessive about it or, as mentioned in the previous section, have no structure and therefore study constantly. Don't do this because it doesn't help: when you're burned out, your cognitive abilities lessen and you don't retain as much information.

# How to solve each problem

Here is the process I wish I knew when I first started studying for coding interviews. It would have saved me a lot of thrashing and would have also helped me get the most out of my time.

## First, try to solve the problem on your own

Have LeetCode open, read and understand the problem, and try to solve it on your own. Within this step, I'll often try to solve the problem with either pseudocode or comments before writing any real code. For example:

```python
def two_sum(arr, target):
    # Iterate over the array

    # Create a second loop Iterating over the array

    # If the first loop value + second loop value = target, return them
```

If you get this far, great! Now it's time to think about how you might optimize your solution. In this case, it turns out our O(n^2) time complexity is not very good and we can change it to O(n):

```python
def two_sum(arr, target):
    # create set of existing values

    # iterate over array

    # if target - current element in set of existing values, return
    # [current, target - current]

    # add current element to set of existing values
```

Now it's time to write some code. If you couldn't think of the more optimal solution, that's okay! Just write code for the solution you figured out.

## When to "give up" on a problem

# Timebox each problem

# Simulate as much of the environment as you can
