---
layout: post
title: "How to update an email in a running journey, Salesforce Marketing Cloud (SFMC)"
date: 2025-08-19 06:01:11 -0500
featured_image: {
  src: "sfmc-journey-builder-map.webp",
  fallback: "sfmc-journey-builder-map.png",
  title: "SFMC Journey Builder map",
  alt: "Salesforce Marketing Cloud Journey Builder map"
}
description: "Change the content of a Journey Builder email without stopping the journey."
category: MarTech
tags: ["Salesforce Marketing Cloud", "email"]
howto: {
	title: "How to update a Journey Builder email in a running journey",
	description: "Change the content of a Journey Builder email without stopping the journey.",
	time: {
		formatted: 'PT5M',
		duration: '5 minutes'
	},
	steps: [
		{
			name: "Triggered Emails",
			text: "Go to the Triggered Emails screen within Email Studio by hovering over the Interactions tab and selecting Triggered Emails."
		},
        {
			name: "Open the journey folder",
			text: "Open the Journey Builder Sends folder in the left pane and find the appropriate journey and journey version."
		},
		{
			name: "Select the email",
			text: "Check the box next to the appropriate email."
		},
		{
			name: "Pause the email",
			text: "With the box checked, click the Pause button."
		},
		{
			name: "Edit the email",
			text: "Make any edits to the email within Email Studio."
		},
		{
			name: "Publish the changes",
			text: "On the Triggered Emails screen, ensure that the email is still checked (or check it again) and click the Publish Changes button."
		},
		{
			name: "Restart the triggered email",
			text: "After seeing the success message, check the box again and click the Start/Restart button."
		},
		{
			name: "Confirm the changes",
			text: "Confirm the changes by selecting the email within Journey Builder, choosing Activity Summary, and clicking the Preview & Test button."
		}
	]
}
featured: true
permalink: /2025/sfmc-update-email-in-running-journey
published: true
---

## What is Journey Builder?

Salesforce Marketing Cloud (SFMC) Journey Builder is a powerful tool that allows marketers to design and automate personalized customer journeys across multiple channels. It helps businesses map out the customer experience from initial contact to conversion and beyond, using real-time data and behavior triggers.

Key features include:

- Drag-and-drop interface for building journeys visually
- Multi-channel engagement via email, SMS, push notifications, and ads
- Real-time decision splits based on customer actions or attributes
- Integration with CRM data for personalized messaging
- Analytics and reporting to track performance and optimize campaigns

SFMC Journey Builder empowers marketers to deliver the right message at the right time, enhancing customer engagement and driving loyalty.

## Scenario

Picture this: You've set up a journey in Marketing Cloud's Journey Builder for a sale launching tomorrow. The first message in the journey is an email to build excitement for the sale, and it has already started sending to the audience. The next email will send tomorrow morning and include product links and sale prices. But you've just learned that a few of the sale items need to change before the next email sends. The journey has already started! How can you edit the content of the next email without stopping the journey?

This is a common scenario for organizations. Campaigns change often, sometimes even after starting. Not to worry; Marketing Cloud can handle [updating an email activity in a journey](https://help.salesforce.com/s/articleView?id=mktg.mc_jb_update_an_email_in_a_running_journey.htm&type=5).

## How to edit email content in a running journey

Follow these simple steps to edit a Journey Builder email (or several) in a running journey:

1. Go to the **Triggered Emails** screen within Email Studio by hovering over the _Interactions_ tab and selecting _Triggered Emails_.
2. Open the _Journey Builder Sends_ folder in the left pane and find the appropriate journey and journey version. Click on the journey version that you need to edit.
3. Select the appropriate email by checking the box next to it.
4. With the box checked, click the **Pause** button.
5. Make any necessary edits to the email within Email Studio. (Make sure you're editing the email that's been added to the journey.)
6. On the **Triggered Emails** screen, ensure that the email is still checked (or check it again) and click the **Publish Changes** button.
7. After seeing the success message, check the box again and click the **Start/Restart** button.
8. Confirm the changes by selecting the email within Journey Builder, choosing _Activity Summary_, and clicking the **Preview & Test** button.

That's it! The email is now updated.

Be sure to wait for the success message after each action on the **Triggered Emails** screen. They can take a few seconds to appear.

You can confirm that your changes were applied by viewing the _Activity Summary_ and previewing the email, which should now show your recent changes.