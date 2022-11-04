---
layout: post
title: "How to fix sideways images on your website"
date: 2018-08-30 10:01:10 -0400
featured_image: {
  src: "brandon-caples-sideways.webp",
  fallback: "brandon-caples-sideways.jpeg",
  title: "Brandon Caples",
  alt: "A sideways image of Brandon Caples wearing a wooden bowtie (circa 2013)" }
category: MarTech
tags: ["CSS", "graphic design"]
howto: {
	title: "How to fix sideways images on your website",
	description: "Resolve the issue of some browsers displaying an image sideways or upside down.",
	time: "P0DT0H1M",
	steps: [
		{
			name: "Export",
			text: "In GIMP, choose \"Export As…\" in the File menu. Select your options, then click \"Export\"."
		},
		{
			name: "Advanced Options",
			text: "After clicking Export, another pop-up will appear. Click on \"Advanced Options\" for a dropdown of additional export options."
		},
		{
			name: "EXIF Data",
			text: "Now uncheck \"Save EXIF Data\" and click \"Export\"."
		}
	]
}
featured: false
published: true
---

A colleague recently emailed me to report that one of our pages was displaying sideways images. I hadn’t noticed it before, because the pictures worked fine for me in several browsers. I did some troubleshooting and discovered that both Safari and Chrome on iOS devices have a default behavior that rotates an image according to its EXIF data. So if you take a picture at an angle, it will be sideways when you upload it, and rotating the image in a media previewer won’t always correct the EXIF data.

## About EXIF

EXIF stands for exchangeable image file format and describes data about the picture, like the time and location it was taken and the type of camera, among other information. This includes details about the angle at which the photo was taken. The pictures in question were likely taken on a smartphone and at an angle, meaning the orientation EXIF data attached to the images themselves weren’t what the photographer intended.

EXIF data in photos is a pretty innocent concept. It allows photographers to study how others achieved certain image results. Facebook and Google use it for geotagging your photos so you know where you were when you snapped a picture of that delicious taco. Unfortunately, there are people out there who use EXIF data in shared photos to commit crimes. A word of warning: be careful what you share online.

## A CSS solution?

After a cursory Google search for a solution, I found the CSS3 property called [`image-orientation`](https://developer.mozilla.org/en-US/docs/Web/CSS/image-orientation). According to Mozilla, this property will likely be deprecated and rolled into properties on the `img` and/or `picture` elements. But even now, Firefox is the _only_ browser that supports this property. Even though iOS Safari and Chrome rotate images according to EXIF data by default, they still don’t support the `image-orientation` property. So what can you do?

## How to fix sideways images

Since `image-orientation` isn’t very useful (or enduring), I opened the pictures in my favorite free image editor, [GIMP](https://www.gimp.org/). If the images are already rotated to the correct orientation, you still need to make sure that the EXIF data won’t interfere in the browser. You can do this when exporting the image in GIMP.

<img src="/assets/img/martech/save-exif-data.jpeg" alt="How to save an image without EXIF data in GIMP" class="shadow">

This removes EXIF data from your image. No matter which browser you use, now the picture will display correctly.