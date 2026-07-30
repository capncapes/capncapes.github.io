---
layout: post
title: "Systemic bias in algorithms"
date: 2022-07-29 09:11:13 -0400
featured_image: {
  src: "systemic_bias_in_algorithms.webp",
  fallback: "systemic_bias_in_algorithms.jpg",
  title: "Systemic bias in algorithms",
  alt: "Multiple simple figures standing upright, one laying flat"
}
description: "The algorithm is not introducing bias from scratch; it is formalizing and scaling patterns that already exist."
category: MarTech
tags: ["data"]
featured: true
permalink: /2022/systemic-bias-in-algorithms
published: true
---

Algorithms now sit at the center of decision-making across industries—from who gets hired to who gets approved for insurance to who sees your next marketing campaign. They promise efficiency, scale, and objectivity. But as Cathy O’Neil outlines in <a href="/book-reviews/weapons-of-math-destruction" class="italic">Weapons of Math Destruction</a>, many of these systems operate less like neutral tools and more like amplifiers of existing inequality.

The core issue is not that algorithms are flawed in isolation. It is that they are designed to optimize within systems that are already uneven. When you scale those systems, you scale the imbalance.

## Bias does not start in the model

Most algorithmic systems are trained on historical data, which encodes past decisions. Those decisions reflect human judgment, structural constraints, and unequal access to opportunity.

Consider a few common applications:

- Job application screening tools trained on past hiring decisions may learn to favor candidates who resemble previously hired employees, reinforcing homogeneity rather than identifying potential.
- Performance review algorithms can overweight easily measurable outputs while undervaluing less visible contributions, disadvantaging certain roles or working styles.
- Insurance risk models may correlate proxies like ZIP codes with risk, effectively encoding socioeconomic disparities into pricing.
- Predictive policing systems often allocate resources based on historical arrest data; those feedback loops cause over-policing in some communities.
- Risk assessment tools in corrections have been shown to produce uneven outcomes across demographic groups, influencing sentencing and parole decisions.

In each case, the algorithm is not introducing bias from scratch; it is formalizing and scaling patterns that already exist. Human bias gets scaled by machine efficiency.

O’Neil writes about systemic bias in algorithms that directly affect communities, but the same principles apply to customer data in a marketing context.

## Optimization without context creates distortion

Algorithms are built to optimize defined objectives. In digital marketing, that might be click-through rate, conversion rate, or revenue per send. In hiring, it might be candidate scoring. In insurance, it is risk minimization.

The issue is that these objectives are rarely neutral.

When a system is optimized purely for short-term performance, it will naturally converge toward the most responsive, most predictable segments. In marketing, this is visible in the following ways:

- Lookalike modeling that increasingly narrows audience diversity.
- Engagement-based suppression that filters out users who have had less exposure or opportunity to engage.
- Budget allocation algorithms that concentrate spend on already high-performing cohorts.

This creates a form of digital redlining — not intentional exclusion, but systematic underrepresentation driven by performance signals.

The same pattern appears across industries. Optimization favors the measurable, the immediate, and the historically successful. It does not account for who was excluded from the system that produced those signals.

## Feedback loops turn bias into infrastructure

What makes these systems particularly powerful — and risky — is their ability to learn from their own outputs.

A typical loop looks like this:

1. The algorithm makes a decision (who to target, approve, prioritize, or monitor).
2. That decision shapes real-world outcomes.
3. Those outcomes become new training data.

Over time, this creates a self-reinforcing cycle. Groups that are prioritized receive more opportunities, generating stronger performance signals. Groups that are deprioritized receive fewer opportunities, appearing less valuable in the data.

In digital marketing, this can quietly reshape an entire customer base:

- High-engagement segments receive more frequent and optimized messaging.
- Lower-engagement or newer segments are gradually excluded.
- The system “proves” its own assumptions by limiting exposure to alternatives.

The result is not just biased outcomes, but a narrowing of future possibilities.

## Why this often goes unnoticed

One of the more dangerous aspects of systemic bias is that it can coexist with strong performance metrics.

Dashboards tend to focus on aggregates:

- Higher conversion rates.
- Increased revenue efficiency.
- Improved engagement metrics.

These signals suggest success. But they rarely reveal distributional effects—who is being included, excluded, or deprioritized.

Without segment-level analysis, it is entirely possible to improve topline performance while systematically reducing reach, diversity, or long-term growth potential.

This is where marketers need to shift from reporting performance to interrogating it:

- Which segments are receiving less exposure over time?
- Are certain groups consistently underrepresented in high-value outcomes?
- Is the model optimizing for short-term efficiency at the expense of long-term success?

Bias is rarely visible in averages. It lives on the edges of the distribution.

## Designing for accountability, not just accuracy

If systemic bias is a systems problem, mitigation has to be systemic as well. This does not mean abandoning algorithmic decision-making. It means designing with awareness of trade-offs.

In practice, this can look like:

- Auditing training data for representation and historical skew before model deployment.
- Introducing guardrails that ensure baseline exposure or opportunity across segments.
- Evaluating models against multiple objectives, including fairness or long-term value.

In digital marketing, this might mean intentionally reserving reach for new or under-engaged audiences, or incorporating lifetime value alongside immediate conversion signals.

These are not purely ethical considerations—they are strategic ones. Systems that overfit to past success often limit future growth.

## A shift in responsibility

O’Neil’s central argument is that the most dangerous algorithms are those that are opaque, unregulated, and operating at scale. In many cases, they are trusted precisely because they appear mathematical.

But models do not remove human judgment — they amplify it.

For those building and operating these systems — whether in marketing, analytics, or product — the responsibility is not just to optimize outcomes, but to understand what is being optimized and for whom.

The question is no longer whether an algorithm performs well. It is whether it reinforces the right patterns. That distinction is what separates efficient systems from responsible ones — and increasingly, from sustainable ones.
