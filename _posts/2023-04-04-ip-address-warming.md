---
layout: post
title: "IP address warming"
date: 2023-04-04 18:13:26 -0500
featured_image: {
  src: "envelopes.webp",
  fallback: "envelopes.jpeg",
  title: "Envelopes",
  alt: "Envelopes"
}
description: "IP warming is like introducing yourself gradually to ESPs, building trust by sending out a few emails at first and then steadily increasing volume over time."
category: MarTech
tags: ["email"]
featured: false
published: true
---

Congratulations on setting up your new email server! Now comes the crucial step of ensuring your emails actually reach your recipients' inboxes. This is where IP address warming comes in.

## What is IP warming?

Think of your IP address as your email server's fingerprint. When you're a new sender, email providers don't recognize you yet. Sending a massive email blast right off the bat can raise red flags and trigger spam filters. IP warming is like introducing yourself gradually, building trust by sending out small-volume, targeted emails at first and then steadily increasing volume over time.

## Benefits of IP warming

- **Improved deliverability:** Warmed-up IPs have a significantly higher chance of landing in inboxes, boosting your email marketing success.
- **Reduced spam complaints:** By demonstrating responsible sending practices, you avoid being flagged as spam and protect your sender reputation.
- **Enhanced sender reputation:** Consistent, controlled sending builds trust with email providers, ultimately leading to better email deliverability in the long run.

## How to warm up your IP address

1. Start slow and steady: Begin by sending a small number of emails per day, focusing on engaged recipients who have opted-in to your list. Gradually increase the volume over time, aiming for a 20-30% increase each day.
2. Segment your audience: Don't send the same email to everyone. Segment your list based on engagement levels, interests, and demographics. This personalizes the experience and improves open rates, which is another signal of legitimacy for email providers.
3. Authenticate your emails: Implement SPF, DKIM, and DMARC to authenticate your emails and prevent spoofing. This tells mailbox providers that your emails are indeed coming from you and not an impersonator.
4. Monitor your sending reputation: Use email sending platforms or analytics tools to track your sending reputation. This will give you insights into your deliverability rates and allow you to adjust your warming strategy as needed.
5. Maintain a clean list: Regularly remove inactive or unsubscribed recipients from your list. A clean list improves your overall sending reputation and ensures you're only reaching engaged subscribers.

## Which subscribers to send to

The first contacts used for IP warming should be your most engaged subscribers. Start with contacts who are new or have engaged with an email within the last 30 days. Build list segments divided by engagement and email domain (*e.g.* your most engaged Gmail users). After the first batch of subscribers (engagement within the last 30 days), target subscribers with engagement within the last 60 days, then 6 months. Subscribers with no engagement for the past 6 months should be suppressed as unengaged; these contacts are more likely to trigger spam complaints.

To increase the likelihood of IP warming success, you should obtain explicit consent from the subscribers used for IP warming. Explicit opt-in means a customer or subscriber told you directly that they agree to and want to hear from your company or brand.

### Acceptable forms of explicit consent

- Subscribers who submitted a form on your website
- Subscribers who purchased your product(s) within the last six months
- Subscribers who entered a written contract with your organization withinin the last six months
- Subscribers who donated to or volunteered with your organization within the last six months
- Subscribers who signed up for and are active users of your services
- Subscribers who filled out a paper or electronic signup sheet specifically for your emails

Once you've segmented your subscribers by ESP/domain and ordered them by engagement, it's time to split those segments into smaller segments based on audience size. The IP warming schedule below should help with this.

## IP warming schedule

The next task is to split your ESP/domain segments based on specific thresholds and determine the IP warming schedule for each sub-segment. Think of your IP warming schedule like the card game *21*. Your goal is to get as close to the target number for each ESP/domain without going over.

In the table below, the totals can be distributed across multiple days or sent at a single time within the appropriate window.

<table>
	<thead>
		<tr class="text-xs">
			<th scope="col">Email Service Provider</th>
			<th scope="col">Days 1&ndash;3</th>
			<th scope="col">Days 4&ndash;5</th>
			<th scope="col">Days 6&ndash;7</th>
			<th scope="col">Days 8&ndash;13</th>
			<th scope="col">Days 14&ndash;19</th>
		</tr>
	</thead>
	<tbody>
		<tr class="text-xs">
			<th scope="row">Gmail</th>
			<td>5,000</td>
			<td>10,000</td>
			<td>20,000</td>
			<td>40,000</td>
			<td>80,000</td>
		</tr>
		<tr class="text-xs">
			<th scope="row">AOL/Yahoo</th>
			<td>20,000</td>
			<td>20,000</td>
			<td>20,000</td>
			<td>40,000</td>
			<td>80,000</td>
		</tr>
		<tr class="text-xs">
			<th scope="row">Microsoft</th>
			<td>20,000</td>
			<td>20,000</td>
			<td>20,000</td>
			<td>40,000</td>
			<td>80,000</td>
		</tr>
		<tr class="text-xs">
			<th scope="row">ATT</th>
			<td>20,000</td>
			<td>20,000</td>
			<td>20,000</td>
			<td>40,000</td>
			<td>80,000</td>
		</tr>
		<tr class="text-xs">
			<th scope="row">Comcast</th>
			<td>20,000</td>
			<td>20,000</td>
			<td>20,000</td>
			<td>40,000</td>
			<td>80,000</td>
		</tr>
		<tr class="text-xs">
			<th scope="row">Spectrum, Charter, Optimum</th>
			<td>20,000</td>
			<td>20,000</td>
			<td>20,000</td>
			<td>40,000</td>
			<td>80,000</td>
		</tr>
		<tr class="text-xs">
			<th scope="row">Apple</th>
			<td>20,000</td>
			<td>20,000</td>
			<td>20,000</td>
			<td>40,000</td>
			<td>80,000</td>
		</tr>
		<tr class="text-xs">
			<th scope="row">Others</th>
			<td>20,000</td>
			<td>20,000</td>
			<td>20,000</td>
			<td>40,000</td>
			<td>80,000</td>
		</tr>
	</tbody>
</table>

You can continue to scale your segments by following the pattern laid out in the table. If your email ESP segments are very large, make sure to do some additional research. [Salesforce Marketing Cloud](https://help.salesforce.com/s/articleView?id=sf.mc_es_ip_address_warming.htm&type=5) offers some guidance on IP warming for large lists, and [SendGrid](https://docs.sendgrid.com/ui/sending-email/warming-up-an-ip-address) does a lot of the work for its customers.

Remember that IP warming strategies are not guarantees for success. Your goal is to introduce emails from your server gradually to the ESPs, presenting your most engaged subscribers first. And this is typically a great approach, but you should also be mindful of the content you choose to send during these warming exercises. Send content that is likely to be well-received by your audience, increasing the likelihood of favorable reception.

## Additional tips

Use a dedicated IP address; shared IPs can inherit negative reputations from other senders. Investing in a dedicated IP gives you complete control over your sending reputation.

Warm up your new server(s) during off-peak hours. Avoid sending emails during peak times when mailbox providers are bombarded with messages. Opt for early mornings or late evenings.

Implement SPF, DKIM, and DMARC to verify your sending identity and prevent spoofing.

If you plan on sending large volumes of email, consider warming up multiple IP servers simultaneously to accelerate the process. If you're sending more than 2 million emails per day, you should have an additional server to avoid delivery deferrals imposed by the incoming mail servers.

Be patient. Warming up an IP address takes time, typically around 1&ndash;2 weeks (sometimes 3&ndash;4 weeks). Don't get discouraged if you don't see immediate results. Stick to the plan and your deliverability will steadily improve. Remember, IP address warming is an investment in your email marketing success. By taking the time to do it right, you'll ensure your emails reach the inboxes where they belong and build lasting relationships with your subscribers.

Remember: IP address warming is a marathon, not a sprint. Be patient, consistent, and focus on building trust with email providers. By following these steps, you can ensure your new email server hits the ground running and lands your emails straight in the inboxes of your intended recipients.