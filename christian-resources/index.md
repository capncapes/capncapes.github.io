---
layout: default
title: Christian Resources
featured_image: {
  src: "small_group.webp",
  fallback: "small_group.jpeg",
  title: "Christian resources",
  alt: "Small group of people" }
description: "Browse a curated collection of Christian resources for Bible study, child welfare, counseling, and more."
permalink: /christian-resources/
---

Explore this ongoing collection of Christian resources, including print and digital publications, study group locators, Bible studies, adoption agencies, counseling services, and more. You can expect these pages to be updated occasionally, so please check back here often.

  <!-- Cards Gallery : START -->
  <div class="cards-gallery mt-16 lg:mt-24">

    {% for page in site.pages %}
		{% if page.url contains "christian-resources" and page.permalink != "/christian-resources/" %}
			<article title="{{ page.title }}" class="card relative rounded bg-green shadow">
				<a href="{{ page.url }}">
					<div class="absolute inset-0 w-full h-full z-0">
						<img class="w-full h-full object-cover rounded" src="{{ site.url }}/assets/img/{{ page.featured_image.src }}" alt="{{ page.featured_image.alt }}">
					</div>
					<div class="info absolute w-full h-full top-0 p-0 splendid-flex flex-col justify-end items-end flex-nowrap rounded">
						<h3 itemprop="name" class="title w-90 mb-10 mx-auto p-0 text-lg normal">{{ page.title }}</h3>
					</div>
				</a>
			</article>
		{% endif %}
    {% endfor %}

  </div>
  <!-- Cards Gallery : END -->