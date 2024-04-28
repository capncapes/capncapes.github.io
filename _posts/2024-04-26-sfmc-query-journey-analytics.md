---
layout: post
title: "How to automate Marketing Cloud journey analytics"
date: 2024-04-26 11:39:20 -0500
featured_image: {
  src: "abstract-technology.webp",
  fallback: "abstract-technology.jpeg",
  title: "Querying data using SQL",
  alt: "Structured Query Language (SQL)" }
description: "With its Web Analytics Connector, Marketing Cloud offers a powerful tool to gain deeper insights into customer interactions."
category: MarTech
tags: ["analytics", "Salesforce Marketing Cloud", "SQL"]
featured: false
published: false
---

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