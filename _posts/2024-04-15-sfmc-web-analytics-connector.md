---
layout: post
title: "How to use Web Analytics Connector in Salesforce Marketing Cloud"
date: 2024-04-15 05:31:00 -0500
featured_image: {
  src: "gears.webp",
  fallback: "gears.jpeg",
  title: "Web Analytics Connector",
  alt: "Structured Query Language (SQL)" }
description: "With its Web Analytics Connector, Marketing Cloud offers a powerful tool to gain deeper insights into customer interactions."
category: MarTech
tags: ["analytics", "Salesforce Marketing Cloud"]
featured: false
---

The Salesforce Marketing Cloud Web Analytics Connector (WAC) is your secret weapon for bridging the gap between email marketing and website analytics.

## What is the Web Analytics Connector?

The WAC acts as a bridge between Marketing Cloud and your favorite web analytics service, like Google Analytics or Adobe Analytics. It works by automatically adding custom tags (parameters) to the links in your emails. When a subscriber clicks a link, the tags are sent to your web analytics tool, allowing you to track specific details about that click, such as:

- **Campaign ID:** Identify which email campaign drove the website traffic.
- **Subscriber data:** See individual subscriber behavior based on email opens, clicks, and website visits.
- **Link clicked:** Track which specific links within your email are most engaging.

## Benefits of using the Web Analytics Connector

By leveraging the WAC, you gain a wealth of insights into your email marketing effectiveness:

1. Measure campaign performance: See which email campaigns drive the most website traffic and conversions.
2. Optimize link placement: Identify the most clicked links within your emails and refine your email design for better engagement.
3. Personalize the customer Journey: Use subscriber data captured through the WAC to tailor website experiences for individual subscribers.

## How to use the Web Analytics Connector

There are four levels of <a href="https://ampscript.com/web-analytics-connector-wac/" target="_blank">parameter management</a>: Account, Email, Subscriber, and Link levels. These various levels of parameters can be managed in **Parameter Manager**. Once the Web Analytics Connector is set up in your account, Parameter Manager can be accessed by visiting **Setup** from the top-right menu of Marketing Cloud (beneath the name of the logged-in user). Next, find **Data Management** > **Parameter Management** in the menu on the left side of the screen.

<picture class="block md:mx-12 xl:mx-0">
	<source type="image/webp" srcset="/assets/img/martech/sfmc_parameter_manager.webp" >
	<img src="/assets/img/martech/sfmc_parameter_manager.jpeg" class="shadow" alt="Parameter Manager within Salesforce Marketing Cloud" />
</picture>

You can enter parameters into the textbox to be inserted automatically at the end of each link of your emails. Parameters can be hardcoded or formatted dynamically using AMPscript.

`utm_term=marketingcloud​&sfmc_key=%%_subscriberkey%%​&utm_medium=email​&mc_source_code__c=%%__AdditionalEmailAttribute1%%​&utm_source=%%__AdditionalEmailAttribute2%%​&utm_campaign=%%__AdditionalEmailAttribute3%%`

## Getting started with the Web Analytics Connector

The <a href="https://help.salesforce.com/s/articleView?id=sf.mc_wa_web_analytics_connector.htm&type=5" target="_blank">Salesforce Marketing Cloud documentation</a> offers comprehensive resources on setting up and using the WAC, including <a href="https://mc.chat/web-analytics-connector/" target="_blank">step-by-step guides</a> and troubleshooting tips.

## Unleash the Power of Marketing Cloud Data

The Web Analytics Connector is a powerful tool for marketers seeking to bridge the gap between email marketing and website analytics. By using the WAC, you can gain a deeper understanding of your email campaigns' impact and optimize your marketing efforts for maximum ROI.