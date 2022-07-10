---
layout: post
title: "Using CSS counters"
date: 2021-11-04 14:03:01 -0400
featured_image: {
  src: "using-css-counters.jpg",
  title: "Using CSS counters",
  alt: "CSS counters" }
category: MarTech
tags: ["web development", "CSS"]
featured: false
---

CSS. Developers tend to either love it or hate it—sometimes depending on the day. Well, here’s a reason to love it: CSS counters.

Of course we can simply use an ordered list to count items on a web page, but that doesn’t always fit semantically. And CSS counters are a bit more flexible than boring old lists, in my opinion.

## How to Use CSS Counters

When using CSS counters, there are four properties and one function we can work with: `counter-reset`, `counter-increment`, `counter-set`, `content`, and the `counter()` function.

### counter-reset

We’ll use the `counter-reset` property to create our counter on the parent element of the items we wish to count. The property can accept two values: a counter’s name and a number from which to increment. The number value is optional and defaults to 0.

Note: The increment number can be a little confusing because the value provided is the starting point, so the first counted item will display the next incremented value.

{% highlight css linenos %}
#one {
	counter-reset: myCounter;
	counter-reset: myCounter 0; /* Same result as above */
	counter-reset: myCounter 3; /* Begin at 4 */
}
{% endhighlight %}

As the name suggests, `counter-reset` can also reset an existing counter.

### counter-increment

The `counter-increment` property defines the increment on the specified counter. This property can accept one or two values: either the name of a counter to increment or the name of a counter plus a number specifying the increment amount. If only the name of a counter is provided, the default increment of 1 is used.

{% highlight css linenos %}
#one {
	counter-reset: myCounter;
}

#one .child {
	counter-increment: myCounter 1; /* 1, 2, 3, 4... */
	counter-increment: myCounter; /* Same result as above */
}

#two {
	counter-reset: yourCounter;
}

#two .child {
	counter-increment: yourCounter 3; /* 3, 6, 9, 12... */
}
{% endhighlight %}

### counter-set

Now that we have defined our counters and their increments, we can *set* a starting point. That’s where `counter-set` comes in. This property accepts a counter name and the starting value of the counter. The element it’s used on will be the starting point for the `counter-set` value. Leaving the starting value out makes `counter-set` default to 0. In cases where you might have multiple counters on an element, you can use multiple name-value pairs. You can also set `counter-set` to none to cancel a less specific `counter-set` style rule.

Note: We could leave out this property to let the counting start at the default of 1.

{% highlight css linenos %}
#one {
	counter-reset: myCounter;
}

#one .child {
	counter-increment: myCounter;
}

#one .child:first-of-type::before {
	counter-set: myCounter; /* Start at 0 */
	counter-set: myCounter 300; /* Start at 300 */
}

#one .nth-of-type(3)::before {
	counter-set: myCounter -2; /* 1, 2, -2, -1, 0, 1, 2, 3... */
}

#two {
	counter-reset: yourCounter;
}

#two .child {
	counter-increment: yourCounter 3;
}
{% endhighlight %}

### counter()

The `counter()` function returns a string representing the value of the specified counter. This is how our counter will be displayed visually. The `counter()` function is generally used with pseudo-elements and the content property, but it could theoretically be used anywhere a string value is accepted.

To display our counter, we need to provide the counter name to the `counter()` function. The function accepts a second argument to define the style. Any valid [`list-style-type`](https://developer.mozilla.org/en-US/docs/Web/CSS/list-style-type) value is also valid here.

{% highlight css linenos %}
#one {
	counter-reset: myCounter;
}

#one .child {
	counter-increment: myCounter;
}

#one .child::before {
	content: counter(myCounter);
	content: counter(myCounter, decimal); /* Same result as above */
}

#two {
	counter-reset: yourCounter;
}

#two .child {
	counter-increment: yourCounter 3;
}

#two .child::before {
	content: counter(yourCounter, lower-alpha);
}
{% endhighlight %}

## Defining Custom CSS Counters

If the standard list-style-type values aren’t sufficient, you could define your own custom counter style with the [`@counter-style`](https://developer.mozilla.org/en-US/docs/Web/CSS/@counter-style) CSS at-rule. From the MDN Web Docs:

> The initial version of CSS defined a set of useful counter styles. However, although more styles were added to this set of predefined styles over the years, this system proved too restrictive to fulfill the needs of worldwide typography. The @counter-style at-rule addresses this shortcoming in an open-ended manner, by allowing authors to define their own counter styles when the pre-defined styles aren’t fitting their needs.

I won’t get into `@counter-style` this time, but check out the tutorial on the [`@counter-style` CSS at-rule](https://www.quackit.com/css/at-rules/css_counter-style_at-rule.cfm) over at Quackit. To see the rest of the CSS counter tools in action, take a look at this [Codepen collection about CSS counters](https://codepen.io/collection/gYzzQv).

Using CSS counters is pretty easy once you understand the the few properties involved. I prefer CSS counters when the task is about styling. If you need proper list markup, this isn’t the method to use. (You’re probably looking for [HTML lists](https://www.freecodecamp.org/news/html-list-how-to-use-bullet-points-ordered-and-unordered-lists/).) Nevertheless, there’s a lot you can do with only a handful of CSS.