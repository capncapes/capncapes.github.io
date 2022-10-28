---
layout: post
title: "A love/hate relationship with Internet Explorer"
date: 2017-01-06 14:34:40 -0400
featured_image: {
  src: "internet-explorer-frustration.jpeg",
  title: "A love/hate relationship with Internet Explorer",
  alt: "Angry man punching through a laptop screen" }
category: MarTech
tags: ["web development"]
featured: false
published: true
---

Okay, maybe _love_ is a strong word here, at least for me. Every web developer knows that Internet Explorer (IE) does things differently than other browsers, and I try to avoid it when I can, but how avoidable is it really?

(Internet Explorer actually used to be innovative in web development, but as [this article on How-To Geek](http://www.howtogeek.com/howto/32372/htg-explains-why-do-so-many-geeks-hate-internet-explorer/) explains, it went downhill fast.)

In my experience, many people in office settings use Internet Explorer exclusively, and a lot of corporations have even built their internal systems on Internet Explorer. It’s the default browser on many computers and email clients. IE is pretty unavoidable.

## An example of IE incompatibility using DOM manipulation

Traversing the DOM is very common and even a necessary step for many JavaScript functions. A jQuery library can make this easier, but some projects don’t require jQuery; it might not make sense to employ.

A major process in DOM manipulation is node selection, and two very similar node selection properties are `textContent` and `innerText`. The `textContent` property grabs raw textual content from a DOM element, while `innerText` looks at styles and grabs the content presented to the user. Internet Explorer introduced `innerText` to recognize and ignore `<style>` and `<script>` tags.

Here’s an example:

### HTML:

{% highlight html %}
<li id="one"><em>fresh</em> beets</li>
<li id="two"><em>fresh</em> beats</li>
{% endhighlight %}

### CSS:

{% highlight css %}
em { display: none; }
{% endhighlight %}

### JavaScript using `textContent`:

{% highlight javascript %}
document.getElementById('one').textContent;
document.getElementById('two').textContent;
{% endhighlight %}

Result: `fresh beets` and `fresh beats`

### JavaScript using `innerText`:

{% highlight javascript %}
document.getElementById('one').innerText;
document.getElementById('two').innerText;
{% endhighlight %}

Result: `beets` and `beats`

The two properties can sometimes produce the same results, but there are many instances where `innerText` doesn’t grab what’s needed. That’s why it’s generally avoided. Internet Explorer didn’t even support `textContent` until IE9.

There are many other browser incompatibilities with Internet Explorer, especially prior to IE9, but the good news is that Microsoft has recently improved Internet Explorer, in addition to launching a new browser, Microsoft Edge.

Though Internet Explorer presents some challenges, that’s part of the job. It’s a bit unrealistic to expect everything to run smoothly all the time. Although Internet Explorer was left in the dust of Chrome and Firefox in the recent past, IE9, IE10, and IE11 are considered to be much better than their predecessors (and mostly standards-compliant, too!).