---
layout: post
title: "How to query Salesforce Marketing Cloud subscribers who opened a specific email"
date: 2024-03-08 21:30:41 -0500
featured_image: {
  src: "abstract-technology.webp",
  fallback: "abstract-technology.jpeg",
  title: "Querying data using SQL",
  alt: "Structured Query Language (SQL)" }
description: "With Marketing Cloud, you can use SQL to query a database to identify email subscribers who opened a specific email campaign."
category: MarTech
tags: ["SQL", "Salesforce Marketing Cloud"]
permalink: /2024/how-to-query-subscribers-who-opened-sfmc-email
featured: false
---

Salesforce Marketing Cloud offers a robust set of tools for crafting targeted email campaigns. But what if you need to leverage the full potential of your Salesforce data to create even more precise audience segments?  This is where SQL comes in.

[SQL (Structured Query Language)](/martech/2023/sql-intro) empowers you to write custom queries and extract specific data points from your Salesforce database directly within Marketing Cloud. This unlocks a world of possibilities for personalizing your marketing efforts.

Today, we'll use SQL to query a Salesforce database and identify email subscribers who opened a specific email campaign.

To get started, navigate to **Automation Studio** within Marketing Cloud. Here, you'll utilize the SQL Query activity to write and execute your query. You can use Query Studio to see the results of your query before adding it to Automation Studio.

Here's a sample SQL query that fetches subscribers who opened a specific email:

{% highlight sql %}
SELECT DISTINCT
	con.Id AS SubscriberKey,
	con.FirstName,
	con.LastName,
	con.Email,
	j.EmailName,
	s.JobID,
	s.eventdate AS SendDate
FROM [_Sent] AS s
LEFT JOIN Contact_Salesforce AS con
	ON s.SubscriberKey = con.Id
LEFT JOIN [_Job] AS j
	ON s.JobID = j.JobID
LEFT JOIN [_Open] AS o
	ON s.JobID = o.JobID
	AND s.ListID = o.ListID
	AND s.BatchID = o.BatchID
	AND s.SubscriberID = o.SubscriberID
	AND o.IsUnique = 1
WHERE o.SubscriberID IS NOT NULL
	AND con.Id IS NOT NULL
	AND s.JobID = '[Place job ID here]'
{% endhighlight %}

## Query breakdown

- `SELECT DISTINCT`: Retrieves distinct values for each selected field, avoiding duplicates.
- Joined tables:
	- `[_Sent]`: Contains email send data.
	- `Contact_Salesforce`: Houses contact information from Salesforce.
	- `[_Job]`: Stores email job details like name and ID.
	- `[_Open]`: Captures email open activity.
- Filtering criteria:
	- `o.SubscriberID IS NOT NULL`: Filters for subscribers who opened the email.
	- `con.Id IS NOT NULL`: Ensures contact information is available.
	- `s.JobID = '[...]'`: Targets a specific email job. This is the 6-digit "Job ID" number associated with each sent email.
- Retrieved fields:
	- SubscriberKey, FirstName, LastName, Email
	- EmailName (campaign name), JobID, SendDate

## Applying the query

1. Replace `[Job ID number]` with the actual ID of the email campaign you're analyzing.
2. Paste the code into an SQL Query activity within Marketing Cloud's Automation Studio.
3. Choose a destination Data Extension to store the retrieved subscriber data.
4. Validate the code and schedule the automation.

## Key points

- Use `DISTINCT` to prevent duplicate records.
- Join multiple tables to gather comprehensive information.
- Filter results using WHERE to target specific subscribers and campaigns.
- Validate code before execution.
- Select relevant fields to extract meaningful insights.