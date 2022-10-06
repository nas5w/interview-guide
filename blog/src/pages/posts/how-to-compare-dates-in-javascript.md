---
title: "How to compare dates in JavaScript"
pubDate: "2020-01-28"
slug: "how-to-compare-dates-in-javascript"
description: "How to compare dates in JavaScript natively using the Date Object, without using any third-party libraries."
hero: "/images/javascript-logo-banner.jpg"
tags: ["javascript"]
layout: "../../layouts/BlogPostLayout.astro"
---

Working with dates in JavaScript can be tricky to say the least. Recently I needed to compare two dates with one another to see which was greater than, less than, etc.

In my particular use case, I was using a date-picker that was returning a string like `01/28/2020`. I needed to see if this date was `>=` to the current day.

The first thing I needed to do was convert this string into a JavaScript Date Object.

```js
const date: new Date("01/28/2020");
console.log(date);
// Tue Jan 28 2020 00:00:00 GMT-0500 (Eastern Standard Time)
```

Then, compare this date with the current day:

```js
const compareDate = new Date("01/28/2020");
const today = new Date();
console.log(compareDate >= today);
// false
```

The issue is that even though the dates are the same, the times are not.

```js
const compareDate = new Date("01/28/2020");
const today = new Date();
console.log("compareDate: ", compareDate);
console.log("today: ", today);
// compareDate:  Tue Jan 28 2020 00:00:00 GMT-0500 (Eastern Standard Time)
// today:  Tue Jan 28 2020 21:33:27 GMT-0500 (Eastern Standard Time)
```

Notice how `compareDate` has all zero's for time. The difference in time is the reason why this comparison fails. To fix this, we need to create the current day without time. We do this by instantiating a new JS Date object by individually passing in the year, month and day.

```js
const todayWithoutTime = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate()
);
console.log("todayWithoutTime: ", todayWithoutTime);
// todayWithoutTime:  Tue Jan 28 2020 00:00:00 GMT-0500 (Eastern Standard Time)
```

So let's try our comparison again.

```js
const compareDate = new Date("01/28/2020");
const todayWithoutTime = new Date(
  new Date().getFullYear(),
  new Date().getMonth(),
  new Date().getDate()
);
console.log(compareDate >= todayWithoutTime);
// true
```

That's it. Just remember that when comparing dates in JavaScript it is vital to factor in the time. 😎
