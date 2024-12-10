---
layout: post
title: "Google Analytics 4 user properties"
date: 2023-09-20 14:15:16 -0500
featured_image: {
  src: "ga4-user-properties-feature.webp",
  fallback: "ga4-user-properties-feature.png",
  title: "Google Analytics 4 user properties",
  alt: "Google Analytics 4 realtime overview showing users"
}
description: "Google Analytics 4 user properties are customizable attributes that describe groups of your users, such as their language preferences, geographic locations, or subscription status."
category: MarTech
tags: ["Google Analytics 4", "data"]
howto: {
	title: "How to add a user property to Google Analytics 4 using GTM",
	description: "Google Analytics 4 user properties are customizable attributes that describe groups of your users.",
	time: {
		formatted: 'PT3M',
		duration: '3 minutes'
	},
	steps: [
		{
			name: "Ensure presence of Google Tag",
			text: "Make sure that the Google Tag (gtag.js) is present on the page."
		},
		{
			name: "Edit GA4 event",
			text: "Create a new event or open an existing one."
		},
		{
			name: "Add Row",
			text: "Click the Add Row button in the User Properties tab of the GA4 event."
		},
		{
			name: "Add the user property",
			text: "Add the name of the user property and its value."
		},
		{
			name: "Save",
			text: "Save the event and any related variables and triggers."
		},
		{
			name: "Create a GA4 custom dimension",
			text: "Create the corresponding user-scoped custom dimension in Google Analytics 4."
		},
		{
			name: "Publish",
			text: "Publish the GTM changes."
		}
	]
}
featured: true
permalink: /2023/ga4-user-properties
published: true
---

If you've worked with Google Analytics 4 (GA4) for any amount of time, you're probably familiar with event properties. When you send an event, you can attach parameters that provide more context for that event. But there's a powerful feature that you may not be using called _user properties_.

Google Analytics 4 user properties are customizable attributes that describe groups of your users, such as their language preferences, geographic locations, or subscription status. You can use user properties to segment your audience and create more granular reports, helping you to better understand your users and improve their experience.

A user property will remain attached to a user profile in GA4 until it’s overwritten, making it very useful when segmenting users, even when a user is not currently involved in a segmentation activity. For example, you could send a user property to GA4 that defines a user as an email subscriber, allowing you to report on website activity for email subscribers, even if they haven’t clicked an email in a while.

You can create up to 25 user properties per Google Analytics 4 property. Here are a few ideas to get you started:

- email_subscriber
- sms_subscriber
- mail_subscriber
- user_role
- donor_giving_level
- event_attendee

It's important to remember that custom dimensions should not receive too many unique values. Create user properties with boolean values (true/false) or ones with only a few possible options. Some marketing companies, for example, ask for a user's organizational role while registering a new account. Rather than asking for a specific title, it's typically a dropdown menu with a handful of marketing roles that are significant to the collecting organization (_e.g._ Executive, Developer, Analyst).

## Adding user properties to GA4

It’s very simple to add new user properties to GA4, and it can be done either with Google Tag Manager (GTM) or in the code of the site using the Google Tag (gtag).

### Google Tag Manager

To set a user property with Google Tag Manager, simply click the **Add Row** button in the User Properties tab of a GA4 event. Add the name of the user property and its value. You can define a GTM variable to hold the user property value. For a user property called email_subscriber, you would probably use JavaScript to determine when a pageview event comes from an email click (based on [UTM parameter values](/martech/2023/utm-parameters)) and set the value of the variable to either true or false.

<picture class="block md:mx-12 xl:mx-0">
	<source type="image/webp" srcset="/assets/img/martech/google-tag-manager-user-property.webp" >
	<img src="/assets/img/martech/google-tag-manager-user-property.png" class="shadow" alt="Google Analytics 4 user property setup in Google Tag Manager" />
</picture>

### Google Tag

To set a user property in the website code, first make sure that the Google Tag (gtag.js) is present on the page. If it’s not, you can choose to [install the Google Tag](https://developers.google.com/tag-platform/gtagjs/install) or use GTM.

This is the format for setting a user property using the Google Tag:

{% highlight javascript %}
gtag('set', 'user_properties', {
  email_subscriber: true,
  app_user: false,
  occupation: 'physician'
});
{% endhighlight %}

To set a user property for only one data stream, use a config command instead:

{% highlight javascript %}
gtag('config', 'STREAM_ID', {
  'user_properties': {
    email_subscriber: true,
    app_user: true,
    occupation: 'web developer'
  }
});
{% endhighlight %}

Simply replace *STREAM_ID* with your own data stream ID. You can find your data stream ID by going to **Admin**, selecting the appropriate property, and choosing **Data Streams** from the list.

<picture class="block md:mx-12 xl:mx-0">
	<source type="image/webp" srcset="/assets/img/martech/google-analytics-4-stream-id.webp" >
	<img src="/assets/img/martech/google-analytics-4-stream-id.png" class="shadow" alt="Google Analytics 4 data stream ID and measurement ID" />
</picture>

Make sure that you create a _user-scoped_ custom dimension in GA4 for each user property you want to use. Otherwise, GA4 won't collect the data. It's also important that **Scope** is set to "User" in order to attribute the property to the user instead of to the event. You can do this by selecting **Custom definitions** from the property column in the **Admin** settings.

<picture class="block md:mx-12 xl:mx-0">
	<source type="image/webp" srcset="/assets/img/martech/google-analytics-4-user-scoped-dimension.webp" >
	<img src="/assets/img/martech/google-analytics-4-user-scoped-dimension.png" class="shadow" alt="Google Analytics 4 user-scoped custom dimension" />
</picture>

Google Analytics 4 collects some [user properties by default](https://support.google.com/analytics/answer/9268042), which you're probably already using in your reports. Your custom user properties can be used in the same way by adding them to reports and explorations and viewing them in the realtime report.

If you're not already employing user properties in your reports and dashboards, this one feature could be a game changer for your business analytics.