---
layout: portfolio_single
title: "Precept toast: Image feature"
category: web
date: 2022-06-08 17:44:59 -0500
permalink: /portfolio/web/precept-toast-image
featured_image: {
  src: "/assets/img/portfolio/web/precept/precept_toast_image_450x300.webp",
  fallback: "/assets/img/portfolio/web/precept/precept_toast_image_450x300.jpg",
  social: "/assets/img/portfolio/web/precept/precept_toast_image_1200x630.jpg",
  title: "Precept website",
  alt: "precept.org homepage"
}
description: "I added an image feature to an existing website toast element."
project_url: "https://www.precept.org"
tags: ["WordPress", "feature enhancements"]
featured: true
published: true
---

For this feature enhancement, I added the option to include an image feature on a website toast. The existing elements of the toast, such as the headline, description, and call-to-action (CTA), were left intact to ensure consistency while integrating the new functionality.

<picture class="block md:mx-12 xl:mx-0">
	<source type="image/webp" srcset="/assets/img/portfolio/web/precept/precept_toast_image_fill_1000x194.webp" >
	<img src="/assets/img/portfolio/web/precept/precept_toast_image_fill_1000x194.png" class="shadow" alt="A website toast modal with an image enhancement" />
</picture>

### Requirements

Since this project was for a WordPress website, the toast options needed to be managed from the user interface of a signed-in user. There were a few existing feature options already&mdash;a simple subject, one of several icons, and [a countdown timer](/portfolio/web/precept-toast-countdown).

### Solution

I used the Advanced Custom Fields plugin to add the image feature settings to the user interface of the custom post type for website toasts. I added two types of image options: fill and fit. **Fill** causes the uploaded image to overflow behind its container, while **fit** frames the image inside the toast, with padding around it.

<picture class="block md:mx-12 xl:mx-0">
	<source type="image/webp" srcset="/assets/img/portfolio/web/precept/precept_toast_image_fit_1000x194.webp" >
	<img src="/assets/img/portfolio/web/precept/precept_toast_image_fit_1000x194.png" class="shadow" alt="A website toast modal with an image enhancement" />
</picture>

### Conclusion

The image feature works very well and is used often to promote new products.