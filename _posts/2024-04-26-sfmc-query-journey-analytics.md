---
layout: post
title: "How to automate Marketing Cloud journey analytics data"
date: 2024-04-26 11:39:20 -0500
featured_image: {
  src: "analytics-dashboard.webp",
  fallback: "analytics-dashboard.jpeg",
  title: "Querying data using SQL",
  alt: "Structured Query Language (SQL)" }
description: "Understanding and leveraging journey analytics is essential for optimizing marketing efforts."
category: MarTech
tags: ["analytics", "Salesforce Marketing Cloud", "SQL"]
permalink: /2024/sfmc-query-journey-analytics
featured: false
---

In Salesforce Marketing Cloud, analyzing the performance of journeys is crucial for optimizing marketing strategies and enhancing customer engagement. One effective way to gain insights into journey performance is by querying the system's data views using SQL. In this article, I'll break down a SQL query designed to retrieve daily journey analytics from Salesforce Marketing Cloud.

## Context

Before delving into the SQL query, let's understand the components involved.

- **Journeys:** These are multi-step marketing campaigns designed to engage customers at various touchpoints.
- **_Job:** Represents a send job for an email within a journey.
- **_Sent:** Records each instance of an email being sent.
- **_Open:** Tracks when subscribers open emails.
- **_Click:** Records clicks on links within emails.
- **_Bounce:** Logs instances where emails bounce back undelivered.
- **_Unsubscribe:** Records instances where subscribers opt out of further communications.
- **_JourneyActivity:** Tracks activities within a journey, such as sends, opens, clicks, etc.
- **_Journey:** Contains information about journeys, including their status and versions.

{% highlight sql %}
SELECT
	jou.JourneyID AS JourneyID,
	jou.JourneyName AS JourneyName,
	jou.VersionNumber AS VersionNumber,
	jou.JourneyStatus AS Status,
	CONVERT(date, s.EventDate) AS SentDate,
	j.EmailName AS EmailName,
	COUNT(s.JobID) AS Sent,
	COUNT(s.JobID) - COUNT(b.JobID) AS Delivered,
	COUNT(o.JobID) AS Opened,
	COUNT(c.JobID) AS Clicked,
	COUNT(b.JobID) AS Bounced,
	COUNT(u.JobID) AS Unsubscribed
FROM _Job j
LEFT JOIN _Sent s ON j.JobID = s.JobID
LEFT JOIN _Open o ON s.JobID = o.JobID
	AND s.ListID = o.ListID
	AND s.BatchID = o.BatchID
	AND s.SubscriberID = o.SubscriberID
	AND o.IsUnique = 1
LEFT JOIN _Click c ON s.JobID = c.JobID
	AND s.ListID = c.ListID
	AND s.BatchID = c.BatchID
	AND s.SubscriberID = c.SubscriberID
	AND c.IsUnique = 1
LEFT JOIN _Bounce b ON s.JobID = b.JobID
	AND s.ListID = b.ListID
	AND s.BatchID = b.BatchID
	AND s.SubscriberID = b.SubscriberID
	AND b.IsUnique = 1
LEFT JOIN _Unsubscribe u ON s.JobID = u.JobID
	AND s.ListID = u.ListID
	AND s.BatchID = u.BatchID
	AND s.SubscriberID = u.SubscriberID
	AND u.IsUnique = 1
LEFT JOIN _JourneyActivity ja ON j.TriggererSendDefinitionObjectID = ja.JourneyActivityObjectID
LEFT JOIN _Journey jou ON ja.VersionID = jou.VersionID
WHERE jou.JourneyName IS NOT NULL
	AND jou.JourneyStatus IN ('Running', 'Paused')
	AND CONVERT(date, s.EventDate) = CONVERT(date, DATEADD(day, -5, GETDATE()))
GROUP BY jou.JourneyID, jou.JourneyName, jou.VersionNumber, j.EmailName, CONVERT(date, s.EventDate), jou.JourneyStatus
{% endhighlight %}

## Query breakdown

Let's dissect the SQL query step by step:

1. **SELECT:** This clause selects the fields we want to retrieve in the result set, including JourneyID, JourneyName, VersionNumber, Status, SentDate, EmailName, and various counts for different activities.
2. **FROM:** Specifies the primary table from which data is retrieved, in this case, the _Job table.
3. **JOIN:** Joins the _Job table with other relevant tables (_Sent, _Open, _Click, _Bounce, _Unsubscribe, _JourneyActivity, and _Journey) based on common keys (JobID, ListID, BatchID, SubscriberID).
4. **WHERE:** Filters the data based on specific conditions:
- Retrieves only journeys with non-null names that are either running or paused.
- Filters data for a specific date (five days ago from the current date).
5. **GROUP BY:** Groups the results by JourneyID, JourneyName, VersionNumber, EmailName, SentDate, and Status, allowing aggregation functions (COUNT) to be applied to calculate metrics for each group.

## Understanding the metrics

- **Sent:** Total number of emails sent.
- **Delivered:** Number of sent messages that were successfully delivered.
- **Opened:** Count of emails that were opened by recipients.
- **Clicked:** Number of clicks on links within emails.
- **Bounced:** Instances where emails bounced back undelivered.
- **Unsubscribed:** Count of subscribers who opted out of further communications.

## Conclusion

This SQL query provides valuable insights into the performance of journeys within Salesforce Marketing Cloud. By analyzing metrics such as sends, opens, clicks, bounces, and unsubscribes on a daily basis, marketers can assess the effectiveness of their campaigns, identify areas for improvement, and tailor future strategies to better engage their audience.

Understanding and leveraging journey analytics is essential for optimizing marketing efforts, enhancing customer experiences, and driving overall business success in Salesforce Marketing Cloud.