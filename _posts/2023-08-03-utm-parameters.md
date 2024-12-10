---
layout: post
title: "UTM parameters"
date: 2023-08-03 06:58:56 -0500
featured_image: {
  src: "ga4-utm-parameters-feature.webp",
  fallback: "ga4-utm-parameters-feature.png",
  title: "Google Analytics 4 UTM parameters",
  alt: "Google Analytics 4 UTM parameters"
}
description: "UTM parameters are snippets of text that can be added to the end of a URL to track the effectiveness of online marketing campaigns."
category: MarTech
tags: ["Google Analytics 4", "data"]
featured: false
permalink: /2023/utm-parameters
published: true
---

UTM parameters, or Urchin Tracking Module parameters, are snippets of text that can be added to the end of a URL to track the effectiveness of online marketing campaigns. UTM parameters are supported by most web analytics tools, including Google Analytics.

These parameters can be used to track the performance of individual marketing campaigns, as well as the overall effectiveness of different marketing channels. For example, you could use UTM parameters to track the number of visitors to your website from a specific social media post, or to track the conversion rate of visitors who came to your website from a paid search campaign.

UTM parameters are a powerful tool that can help you to track the effectiveness of your online marketing campaigns and make informed decisions about your marketing strategy.

## How to use UTM parameters

According to multiple articles and tutorials, UTM parameters are case-sensitive. Google Analytics 4 evaluates UTM parameters as lowercase values, so all parameters should be lowercase. Google Analytics 4 converts data to lowercase, but this isn’t 100% reliable.

UTM parameters should only be used when the source and destination for a link are not measured by the same Google Analytics property. In other words, don’t use UTM parameters to track internal links; doing so can distort your data. If you need to track specific internal link clicks, I recommend creating an event or event parameters that allow you to filter your reports appropriately.

For Google Analytics 4 (<abbr title="Google Analytics 4">GA4</abbr>) to classify [default channel groups](https://support.google.com/analytics/answer/9756891?hl=en) appropriately, UTM parameters should meet certain standards. <abbr title="Google Analytics 4">GA4</abbr> associates channels based on values of the two most important UTM parameters: `utm_source` and `utm_medium`. Other useful parameters are `utm_content` and `utm_campaign`.

## The UTM parameters

A tracking URL is made up of four parameters: source, medium, content, and campaign name. These parameters do not need to be in any particular order. To use UTM parameters, simply add them to the end of a URL, separated by question marks and ampersands. For example, the following URL uses UTM parameters to track the traffic from a specific social media post:

`https://www.example.com/?utm_source=facebook.com&utm_medium=social&utm_campaign=spring-sale`

(When a URL contains parameters, the start of the parameter string is always **?**, as indicated above. Then each parameter, and its value, is separated by **&**. These URL parameters can sometimes determine the content on the page, but only if the website is programmed to do that. Otherwise, parameters do not affect the user experience, since they are largely for analytics.)

When a user clicks on this link, the UTM parameters will be sent to <abbr title="Google Analytics 4">GA4</abbr> and other web analytics tools, depending on which tools are installed on the website. You can then view reports in your web analytics tool to see how many visitors came to your website from this link, and how they interacted with your website.

### UTM Source

The `utm_source` parameter should identify where the link lives&mdash;the source of the user who clicked. The `utm_source` is often a website domain, like facebook.com or edx.org. For some media, the source can be more flexible but should still identify where the original click came from.

#### Examples

The following link lives on Instagram in a reel featuring Shaquille O'Neal for the brand awareness campaign. When a link comes from another website, `utm_source` is determined automatically. In this case, `utm_source` can be omitted from the tracking link.

`?utm_source=instagram&utm_medium=social&utm_content=shaq-reel&utm_campaign=2023_brand_awareness`

This link is in the footer of the second email (“donor appeal”) in the October 2023 fundraising campaign.

`?utm_source=2-donor-appeal&utm_medium=email&utm_content=footer&utm_campaign=2023-10_fundraising`

The following is a shortlink printed on the reply envelope of the October 2023 fundraising letter.

`?utm_source=fundraising-letter&utm_medium=print&utm_content=reply-envelope&utm_campaign=2023-10_fundraising`

### UTM Medium

The `utm_medium` parameter is more rigid and should follow Google’s standards identified in the [documentation](https://support.google.com/analytics/answer/9756891?hl=en). It is the vehicle for the message that the user interacted with. It could be a **referral** from another website, an **email**, a **print**ed document, or some other mode of communication.

#### Examples

The following link is on Facebook in the ad with a product focus, which is part of a retargeting campaign.

`?utm_source=facebook&utm_medium=retargeting&utm_content=product-focus&utm_campaign=2023_social_advertising`

This affiliate link is on an influencer's blog. Tracking parameters are only needed if the link directs to a website not tracked by a <abbr title="Google Analytics 4">GA4</abbr> property’s cross-domain settings. If this link originated on a subdomain of the destination site, tracking parameters would not be needed. In this case, the tracking link is needed since the influencer's blog site is likely not tracked by the same <abbr title="Google Analytics 4">GA4</abbr> property as the destination site.

`?utm_source=influencer.blog&utm_medium=affiliate&utm_content=try-this-awesome-product&utm_campaign=2023_influencers`

This link is the first CTA link in the first email (“content delivery”) of the brand awareness campaign.

`?utm_source=1-content-delivery&utm_medium=email&utm_content=cta-1&utm_campaign=2023_brand_awareness`

This link is in an app's settings, directing to a contact form.

`?utm_source=settings&utm_medium=app&utm_content=contact&utm_campaign=app_ios`

As mentioned previously, if you want <abbr title="Google Analytics 4">GA4</abbr> to appropriately identify and organize default channel groups, you need to be intentional about `utm_medium`, even more so than `utm_source`. <abbr title="Google Analytics 4">GA4</abbr> monitors values of both to organize default channel groups, but I've found that following stricter rules with `utm_medium` values allows for more flexibility when assigning `utm_source` values. (You can also define [custom channel groups](https://support.google.com/analytics/answer/13051316?hl=en) to work with an existing naming convention in place.)

The table below provides `utm_medium` values that work with the <abbr title="Google Analytics 4">GA4</abbr> default channel grouping rules. There are other values that work, and they are [documented on the Analytics Help site](https://support.google.com/analytics/answer/9756891?hl=en). Custom values can also be added as you see fit, but you may need to define additional channel grouping rules.

<div class="px-12">
	<table>
		<thead>
			<tr class="text-xs">
				<th scope="col">Medium</th>
				<th scope="col">Convention</th>
				<th scope="col">Examples</th>
			</tr>
		</thead>
		<tbody>
			<tr class="text-xs">
				<td>Printed Materials</td>
				<td>The word <em>print</em></td>
				<td>print</td>
			</tr>
			<tr class="text-xs">
				<td>Email</td>
				<td>The word <em>email</em></td>
				<td>email</td>
			</tr>
			<tr class="text-xs">
				<td>External Website</td>
				<td>The word <em>referral</em></td>
				<td>referral</td>
			</tr>
			<tr class="text-xs">
				<td>Affiliate Links</td>
				<td>The word <em>affiliate</em></td>
				<td>affiliate</td>
			</tr>
			<tr class="text-xs">
				<td>Social Media</td>
				<td>The word <em>social</em></td>
				<td>social</td>
			</tr>
			<tr class="text-xs">
				<td>Digital Ads</td>
				<td>The type of ad (<em>e.g.</em> cp*, ppc, retargeting) or the word <em>paid</em></td>
				<td>cpc<br>cpm<br>ppc<br>retargeting<br>paid</td>
			</tr>
			<tr class="text-xs">
				<td>Display Ads</td>
				<td>The type of display ad (<em>e.g.</em> display, banner, expandable)</td>
				<td>display<br>banner<br>expandable<br>interstitial<br>cpm</td>
			</tr>
			<tr class="text-xs">
				<td>Audio Ads</td>
				<td>The word <em>audio</em></td>
				<td>audio</td>
			</tr>
			<tr class="text-xs">
				<td>Text Message</td>
				<td>The word <em>sms</em></td>
				<td>sms</td>
			</tr>
			<tr class="text-xs">
				<td>App Notification</td>
				<td>The word <em>mobile</em></td>
				<td>mobile</td>
			</tr>
		</tbody>
	</table>
</div>

(Since the channel group is determined based on the combined values of `utm_source` and `utm_medium`, the **source** will determine whether a digital ad is attributed to **Paid Social**, **Paid Search**, or another paid channel group.)

### UTM Content

The `utm_content` parameter is used to differentiate creatives. Though it’s intended for advertising, utm_content is a very flexible parameter that can be used in any meaningful way. It can differentiate links within the same email—for example, a text link, a button, and a linked image all directing to the same product page. If needed, it could also be used to distinguish the destination of the link, as the utm_medium parameter has been used in the past (e.g. link-opd, link-known).

Because of its association with ads, `utm_content` can be found in <abbr title="Google Analytics 4">GA4</abbr> as the Session manual ad content dimension, or sometimes simply as Ad content.

#### Examples

The following link is from a brand ad on Facebook in an awareness campaign.

`?utm_source=m.facebook.com&utm_medium=cpc&utm_content=brand-focus&utm_campaign=2023_brand_awareness`

This link is from a QR code titled Community in a printed Bible study.

`?utm_source=book_galatians&utm_medium=print&utm_content=qr-code_community&utm_campaign=product_bible-studies`

### UTM Campaign

The `utm_campaign` parameter is intended to identify a promotional campaign by name and can be used in any way that's helpful. I recommend coming up with a naming convention for campaigns to make it easy to identify the various campaigns showing up in reports.