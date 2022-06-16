---
layout: page
title: Tags
permalink: /tags/
---

{% capture site_tags %}
  {% for tag in site.tags %}
    {{ tag | first }}{% unless forloop.last %},{% endunless %}
  {% endfor %}
{% endcapture %}

{% assign sortedTags = site_tags | split:',' | sort %}

{% for tag in sortedTags %}
<div>
  <h3 id="{{tag | cgi_escape}}" class="tag-name"><span>{{tag}}</span></h3>
    <ul class="tag-list">
    {% for post in site.tags[tag] %}
      <li>
        <time itemprop="dateCreated" datetime="{{post.date}}">{{post.date | date: "%b %d, %Y "}}</time> <a href="{{site.baseurl}}{{post.url}}" rel="bookmark" title="Link to {{site.baseurl}}{{post.url}}">{{post.title}}</a>
      </li>
    {% endfor %}
    </ul>
  </div>
{% endfor %}