---
layout: portfolio_single
title: "Precept toast: Countdown"
category: web
date: 2021-06-10 10:55:00 -0500
permalink: /portfolio/web/precept-toast-countdown
featured_image: {
  src: "/assets/img/portfolio/web/precept/precept_toast_countdown_dhms_450x300.webp",
  fallback: "/assets/img/portfolio/web/precept/precept_toast_countdown_dhms_450x300.jpg",
  social: "/assets/img/portfolio/web/precept/precept_toast_countdown_dhms_1200x630.jpg",
  title: "Precept website",
  alt: "precept.org homepage"
}
description: "I added a countdown feature to an existing website toast element."
project_url: "https://www.precept.org"
tags: ["WordPress", "feature enhancements"]
featured: true
published: true
---

In this project, I enhanced a custom website toast on a WordPress site by adding a countdown timer feature. The timer counts down to a specific time that can be set in the UI by the user. For countdowns less than 24 hours away, there is an option to exclude the day number, providing a more streamlined display. The existing elements of the toast, such as the headline, description, and call-to-action (CTA), were left intact to ensure consistency while integrating the new functionality.

<picture class="block md:mx-12 xl:mx-0">
	<source type="image/webp" srcset="/assets/img/portfolio/web/precept/precept_toast_countdown_dhms_1000x172.webp" >
	<img src="/assets/img/portfolio/web/precept/precept_toast_countdown_dhms_1000x172.png" class="shadow" alt="A countdown timer on a website toast modal" />
</picture>

### Requirements

The toast needed to count down to a specified point in time while adhering to style guidelines and allowing the signed-in user to easily select options for the toast from the WordPress dashboard.

### Solution

I used the Advanced Custom Fields plugin to add options to the user interface of the custom post type for website toasts. Within the template file, I added a small snippet of JavaScript to decrement the timer.

{% highlight javascript %}
document.addEventListener('DOMContentLoaded', () => {
	let countdownDate = new Date(document.getElementById('campaign-countdown').dataset.countdown).getTime();
	let timerX = setInterval(function() {
		let now = new Date().getTime();
		let duration = countdownDate - now;
		document.querySelector('#campaign-countdown .days .number').innerHTML = formatTimer(Math.floor(duration / (1000 * 60 * 60 * 24)));
		document.querySelector('#campaign-countdown .hours .number').innerHTML = formatTimer(Math.floor((duration % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
		document.querySelector('#campaign-countdown .minutes .number').innerHTML = formatTimer(Math.floor((duration % (1000 * 60 * 60)) / (1000 * 60)));
		document.querySelector('#campaign-countdown .seconds .number').innerHTML = formatTimer(Math.floor((duration % (1000 * 60)) / 1000));
		if (duration < 0) {
			clearInterval(timerX);
			document.querySelectorAll('#campaign-countdown .number').forEach(num => num.innerHTML = '00');
		}
	}, 1000);
	function formatTimer(n) { return (n < 10) ? '0' + n : n }
})
{% endhighlight %}

<picture class="block md:mx-12 xl:mx-0">
	<source type="image/webp" srcset="/assets/img/portfolio/web/precept/precept_toast_countdown_hms_1000x172.webp" >
	<img src="/assets/img/portfolio/web/precept/precept_toast_countdown_hms_1000x172.png" class="shadow" alt="A countdown timer on a website toast modal on Precept.org" />
</picture>

### Conclusion

The countdown feature works very well and is used often to countdown to the end of fundraising campaigns.