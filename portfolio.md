---
layout: portfolio
title: Portfolio
permalink: /portfolio/
---

{% assign projects = site.data.portfolio %}
{% if projects.size > 0 %}
<div class="projects splendid-flex justify-between flex-wrap">
	{% for project in projects %}
		<article class="project">
			<h4>{{ project.title }}</h4>
			<div class="scroll-img-container rounded shadow" style="background-color:{{ project.img_bg_color }};">
				<picture class="{% if project.picture_width < 100 %}mt-5 {% endif %}mx-auto w-{{ project.picture_width }}">
					<source type="image/webp" srcset="{{ project.img_webp_src }}" >
					<img src="{{ project.img_fallback_src }}" alt="{{ project.img_alt_text }}" />
				</picture>
			</div>
			<footer class="splendid-flex mt-4 py-1 px-3 flex-row justify-center items-center text-sm">
				<a href="{{ project.github_code_url }}" title="See the email code on GitHub" class="p-3 bg-white shadow" target="_blank">{% include code-icon.html %}</a>
				<a href="{{ project.github_screenshot_url }}" title="See the email screenshot on GitHub" class="p-3 bg-white shadow" target="_blank">{% include image-icon.html %}</a>
			</footer>
		</article>
	{% endfor %}
</div>
{% else %}
<div class="splendid-flex px-6 justify-center items-center bg-white rounded">
	<h4>There are no projects here yet. Check back later.</h4>
</div>
{% endif %}