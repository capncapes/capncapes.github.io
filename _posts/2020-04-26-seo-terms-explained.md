---
layout: post
title: "SEO terms explained"
date: 2020-04-26 14:25:20 -0400
featured_image: {
  src: "seo-terms-explained.webp",
  fallback: "seo-terms-explained.jpeg",
  title: "SEO terms explained",
  alt: "Man writing SEO terminology" }
description: "Not everyone can afford to hire an SEO agency, so it’s helpful to have SEO terms explained in plain English."
category: MarTech
tags: ["SEO"]
permalink: /2020/seo-terms-explained
featured: false
---

Search engine optimization (SEO) can be very complicated, and even small changes to search engines’ algorithms can cause panic in the marketing community. There’s an entire SEO industry of professionals who spend 100% of their time optimizing websites for clients. But not everyone can afford to hire an SEO agency, so it’s helpful to have SEO terms explained in plain English for those of us who plan to get our hands dirty.

If you’re asking yourself, [“What is SEO?”](2018-09-15-what-is-seo.md) check out my article answering that very question. It’s important to understand what search engine optimization is and how to use that knowledge. Essentially, it boils down to this: SEO is the practice of making strategic and technical changes to a web page in order to position it to rank on search engine results pages (SERP).

## SEO Terms Explained

Now that you have a general understanding of search engine optimization, let’s see some SEO terms explained.

### Alt Attribute

The alt attribute is used within the  tag to define an image in words. This is used by search engines to determine what a picture is in order to provide relevant search results to a user.

This attribute also helps humans. When a browser can’t load an image for some reason, it will display the alt text in its place. If the text is descriptive enough, the person can get a sense of what the image should be. Alt text is also used by screen readers to describe images to visually impaired users.

The alt attribute is a great place to put a keyword that you want to rank for. It should still describe the picture, so using relevant pictures is important.

Search engines like web pages with pictures because they’re typically more engaging to users, and it’s worth the effort to add alt attributes to your pictures. If a page contains an image without an alt attribute, the search engine doesn’t know what that picture represents. The page is then likely to rank worse because there’s a mysterious image that might not be relevant to a user’s search.

### Anchor Text

In HTML, an anchor is a hyperlink denoted with the a tag. The anatomy of a hyperlink includes the destination address (defined by the href attribute), any additional attributes, and the anchor text. Anchor text is the linked text content that’s visible on the page.

{% highlight html %}
<a href=“https://brandoncaples.com/blog/seo/”>What is SEO?</a>
{% endhighlight %}

Anchor text is important for SEO, specifically for the destination address. The anchor text should ideally include a keyword important to the destination address. For example, a page linking to this blog post might call that link “SEO terms explained” or “SEO glossary” in order to help my post rank better.

The reason it works this way is simple: social affirmation. If another website vouches for my page’s credibility as a good resource for “SEO terms explained”, then Google and other search engines can feel confident that it’s a helpful page to show for that search term. And the more “social affirmation” a page receives—multiple related websites linking to my page with similar anchor text—the greater the chance for an excellent page rank.

### Backlinks

Backlinks are web links coming to your site from other websites. Search engines used to rank websites according to their numbers of backlinks, but that algorithm was quickly exploited by people with dozens—even hundreds—of micro-sites that served no purpose except to link to a main site. The number of backlinks to your website is probably still a major factor, but the key is having quality backlinks.

Did you notice the word related in the last section? That’s important for quality backlinks. While you should strive to produce the kind of website that others want to link to, having a few dozen links from reputable, secure websites in your industry is much more preferable than having a lot of links from random, unsecured sites with no relation to what your website is about. For example, if you’re a food blogger trying to rank your website, you should want backlinks from restaurant websites, food truck associations, and other food blogs.

Search engines keep their algorithms under lock and key, so it’s hard to say just how important quality backlinks are, but there’s substantial evidence to suggest that backlinks are a primary pillar of search engine optimization.

### Canonical Reference

The canonical reference is a tag that references a duplicate web page that should be considered more important than the current page. For example, say I want to reconfigure my URL structure to make blog post URLs shorter. (It’s widely believed that search engines prefer shorter URLs.) Since my blog posts have been indexed by Google for years, those URLs might have some pretty nice page ranks. I have a few options in this scenario:

- Keep the old and new blog posts online, but add a noindex value to the old posts
- Remove the old blog posts and redirect those URLs to the new blog posts
- Keep the old and new posts, and set canonical tags to the new URLs

Adding noindex to the old blog posts is a waste of page authority. Redirecting those old URLs will pass page rank onto the new URLs, but if redirection isn’t a viable option, using a canonical reference is a great solution.

Duplicate content causes Google and other search engines to have to decide which of the duplicates is most helpful to searchers and should therefore be ranked. The likely winner is the older page; the other will get flagged as duplicate content, which will hurt the rank of the entire domain. But by placing canonical tags on the old pages, I can tell search engines that the new pages should get the ranking credit.

### Click-Through Rate (CTR)

A click-through rate (CTR) is the percentage of instances in which a searcher is shown a particular search result and clicks it. The click-through rate is a ranking factor for Google, because clicking a result after typing a keyword into the search bar tells the search engine, “Hey, this is what I was looking for.” The search engine then associates that web page a little more closely with the keyword used to find it.

### Meta Description

The meta description is the short paragraph that appears below the title of a search result. It describes the content of the page to the person searching. Google announced in 2009 that meta descriptions do not directly affect search engine rankings, but they can impact click-through rates. Think of the meta description as the elevator pitch for your web page. This elevator pitch should entice the person to click onto the page.

Google increased the length of meta descriptions on its search engine results pages last year from about 160 characters to about 320 characters. Marketers were ecstatic. But only a few short months later, Google had changed its mind and reverted back, leaving people scrambling to shorten the descriptions they had just lengthened. I now recommend about 155 characters.

### Robots

Google and other search engines inspect your web pages using robots—a.k.a. bots, spiders, or crawlers—that “crawl” pages and report on what they find. This helps search engines know what a page is about in order to show it to searchers on the search engine results page (SERP). These robots read all kinds of content and check for specific elements of a page to get information. If a particular piece of information is missing, it can affect how a page ranks on the SERP.

Search engine bots don’t have nearly the cognitive processing power of the human brain, so it’s crucial for search engine optimization that your web pages contain information that’s readable by robots. That’s why the SEO terms explained in this glossary are important. If a search engine can’t tell clearly what a page is about, it won’t rank that page well.

#### Using robots.txt

One important way to communicate with search engine bots is with a document called robots.txt, which should be placed in the root directory of your website. If you’re using WordPress or another content management system (CMS), there are plugins and add-ons that can help you with this. However, you can avoid downloading a plugin if you have access to your website files and want to create this document manually.

#### noindex

Indexing is what happens when a search engine like Google lists a web page in its search engine results pages (SERP). But what if you don’t want a particular page to appear in search results? A prime example is a thank-you page that a user might see after completing a web form. It would be weird if someone accidentally stumbled onto your thank-you page when they haven’t interacted with your website before. Even worse, what if that page contains a download in exchange for contact information?

The solution is to add a noindex value to a robots meta tag. It looks like this:

{% highlight html %}
<meta name="robots" content="noindex">
{% endhighlight %}

This tells search engines not to index the page. It’s that simple. (You could also replace the value robots with a specific bot name, like googlebot, to allow every search engine except Google to index the page.) But you should [never use both noindex and a canonical reference on the same page](https://www.searchenginejournal.com/google-dont-mix-noindex-relcanonical/262607/). According to Google’s John Mueller, this will force Google to choose which signal to honor.

It should be noted that noindex, and other search engine signals, are only requests. Google, Bing, and other reputable search engines will honor these requests, but other, less honorable bots can still crawl your site and see your pages. If you want to truly hide a page, it should be password-protected.

#### nofollow

Sometimes, you might need to link to another website without associating it with your own site. You can use nofollow for that. Using nofollow on a link tells search engines not to follow the link and pass link authority to the other web page. This is useful if the link leads to a nonsecure website, a site that’s not related to your industry, or if it’s a paid link.

### Sitemap

Google and other search engines “crawl” the web by following links from one page to another and from one domain to another. If you have a new website with few, if any, links pointing to it, a sitemap will come in handy. A sitemap is an XML document written for robots that lists all the URLs of a website. Search engines will crawl your website if they can regardless of the the presence of a sitemap, but it helps them index a site’s pages quicker and keeps things organized. A sitemap acts kind of like a directory in the lobby of a large office building, pointing robots to where they should go and avoiding a page being missed if, for instance, there’s no link pointing to it.

This document can be created in WordPress easily with the [Yoast SEO plugin](https://wordpress.org/plugins/wordpress-seo/). If your site isn’t built with WordPress, you can visit [XML-Sitemaps.com](https://www.xml-sitemaps.com/) to create a sitemap. Next, you need to let search engines know about your sitemap by referencing it in your robots.txt file:

{% highlight text %}
Sitemap: https://www.example.com/sitemap.xml
{% endhighlight %}

Alternatively, you can submit your sitemap to Google and other search engines directly. One thing to make sure of is that the information you’re giving to search engines is consistent. Don’t block a page in robots.txt and then list it in your sitemap. A sitemap should contain all the pages that should be indexed by a search engine.

### Title tag

The meta title is very important. It’s, well, the title of your web page. Like a book title, it sums up the whole web page. It tells everyone—humans and robots alike—what the page is about. Search engines use this basic piece of information to determine whether your web page is worth showing to a searcher seeking answers online.

Your meta title should be fairly short. Google tends to display titles between 50 and 60 characters. I recommend a meta title length of no more than 55 characters. You don’t want search engines to cut your title short.

The meta title should also contain the keyword you’re targeting for the page, preferably at the beginning of the title. The title will display on search engine results pages and in the browser tab when someone visits the page. This is how the HTML should be displayed:

{% highlight html %}
<title>Here’s an Awesome Title | Brandon Caples</title>
{% endhighlight %}

Many websites also place the title in the content of the page for viewers to see. If you want it on the viewable part of the web page, put it in an H1 tag:

{% highlight html %}
<h1>Here’s an Awesome Title</h1>
{% endhighlight %}

### Conclusion

Search engine optimization can be as simple as writing good content and linking to helpful resources, or as complicated as multiple lines of schema markup on every page of a website. Regardless of your particular approach to SEO, it’s helpful to know what these terms can mean for your website.

For more SEO resources, I recommend [Moz](https://moz.com/beginners-guide-to-seo), [Neil Patel](https://neilpatel.com/what-is-seo/), and [Search Engine Journal](https://www.searchenginejournal.com/seo-guide/).