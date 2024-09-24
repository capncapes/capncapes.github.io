---
layout: post
title: "Email accessibility"
date: 2024-09-23 20:29:10 -0500
featured_image: {
  src: "laptop-emails.webp",
  fallback: "laptop-emails.jpg",
  title: "Abstract emails coming out of a laptop",
  alt: "A woman typing on a laptop, with abstract emails flying out" }
description: "Enhancing accessibility ensures that your message makes your email campaigns more successful in the long run."
category: MarTech
tags: ["email", "a11y"]
featured: false
---

In today's digital world, email is a critical communication tool for reaching your audience. To ensure everyone can engage with your content, including those with disabilities, it's essential to incorporate accessibility best practices into your email development. Accessibility ensures that users of all abilities, including those using assistive technologies, can access and understand your message. Here are key areas to focus on when making emails accessible.

## Image alt text

Adding descriptive alt text to your email images is one of the most important accessibility practices. Alt text provides context for screen readers, allowing visually impaired users to understand the purpose of the images. For instance, if your email features a product image, the alt text should be descriptive and actionable, like <q>Click to shop our latest collection.</q>

Without alt text, screen readers will skip the image entirely or read the image’s file name, which could be confusing and meaningless. Remember that alt text should be concise and relevant to the image's function, not just a repetition of decorative text.

## Presentation role on tables

Tables in email are often used for layout purposes, but this can create issues for users relying on screen readers. When screen readers encounter a table, they may read each cell as if it contains important data, even when the table is being used only for layout. This can confuse users.

By adding the `role="presentation"` attribute to tables, you instruct screen readers to ignore the table’s structure and only read the customer-facing text. This ensures that users won't hear unnecessary content about rows and columns, keeping the message simple and clear.

## Avoid using title attributes

Title attributes are often used in HTML elements to provide additional information when a user hovers over a link or image. While this may seem helpful, it can be problematic for accessibility. Screen readers may read the title attribute in addition to the link text or image alt text, which can interrupt the natural flow of the message. This redundancy can confuse users and slow down their reading experience.

Instead of relying on title attributes for additional context, ensure that the text of your email or alt attributes contain all necessary information.

## Contrast ratio

Color contrast plays a significant role in email accessibility. Low-contrast color combinations can be difficult for visually impaired users or those with color vision deficiency (CVD) to read. The [Web Content Accessibility Guidelines (WCAG) 2.0](https://en.wikipedia.org/wiki/Web_Content_Accessibility_Guidelines) recommend a minimum contrast ratio of 4.5:1 between the text and its background for standard body content. For larger or bold text, a contrast ratio of 3:1 is acceptable.

These contrast ratios help ensure that text is readable, even for users with low vision. Following these guidelines helps make your emails accessible to a wider audience. For stricter accessibility, you can aim for AAA compliance, which sets a higher standard for contrast but may be more challenging to implement universally.

## Link visibility

Links are vital to navigating emails, but if they are not clearly visible, they can easily be missed, especially by users with CVD. Ensure that links are clearly distinguishable from surrounding text, both visually and programmatically. This can be achieved by using underlines or bold text for links. Relying solely on color to differentiate links from regular text is not enough, as some users may have difficulty distinguishing colors.

Make sure that links stand out with a combination of design choices like contrast, size, and style so that all users, regardless of their vision, can interact with your content.

## Enhance text for zoom

Many visually impaired users rely on zoom functionality to read email text. Ensuring that your email is legible when zoomed in by up to 200% is crucial for accessibility. Test your email by zooming in and check whether the layout breaks, or the text becomes unreadable.

Consider increasing the font size for body content and ensuring enough line height and white space to accommodate zooming. This practice helps keep your email responsive and user-friendly for those with low vision.

## Headings and concise text

Using headings and concise text is key to helping all users, especially those relying on assistive technology, navigate your emails effectively. Screen readers use headings to help users skip to the most relevant content, so it's important to include semantic HTML headings (`<h1>`, `<h2>`, etc.) to structure your email.

Keep your text concise and to the point. Emails that are too wordy or complex can overwhelm users, so aim for clarity. Ensure that headings and body content are easy to understand, helping all users absorb key information quickly.

## Use semantic buttons

When creating buttons for your emails, it's important to use [semantic HTML buttons](/martech/2023/bulletproof-html-email-buttons/) (`<button>`) or styled anchor tags (`<a>`) instead of image-based buttons. Semantic buttons provide a more accessible and responsive experience for all users, especially those who rely on screen readers or other assistive technologies.

Screen readers can easily recognize and announce semantic buttons as interactive elements, giving users clear instructions on how to interact with the email. Conversely, image-based buttons can cause several accessibility issues:

- If an image fails to load, the button may disappear completely, leaving users with no way to interact with the email.
- Relying on image-based buttons also puts visually impaired users at a disadvantage if the alt text is missing or insufficiently descriptive.
- Semantic buttons are more responsive, resizing and adapting better to different screen sizes and email clients compared to image-based buttons, which may become distorted on smaller screens.

### Best practices for semantic buttons

- Use `<a>` tags styled as buttons with clear, descriptive text (*e.g.*, “Shop Now” or “Donate Here”) instead of relying on images.
- Ensure buttons have sufficient contrast between the button text and the background, following the WCAG 2.0 contrast ratio guidelines mentioned earlier (4.5:1 for body text and 3:1 for larger or bold text).
- Make sure buttons are large enough and well-spaced so users with motor impairments or those using touch devices can easily interact with them.
- Include `aria-labels` for buttons if additional context is needed for screen readers.

By using semantic buttons, you provide a more robust and accessible user experience across devices and assistive technologies, making your emails easier to navigate and interact with for all recipients.

## Section 508 compliance

[Section 508](/martech/2023/section-508-email-compliance/) of the Rehabilitation Act requires that all electronic and information technology used by federal agencies is accessible to people with disabilities. While your emails may not be sent to government agencies, following Section 508 standards can help ensure broad accessibility for all recipients.

To meet Section 508 requirements, ensure that your emails are compatible with screen readers, keyboard navigation, and other assistive technologies. This includes using proper alt text for images, ensuring high color contrast, and using semantic HTML for structure.

## Final thoughts

Making your emails accessible is not just a legal obligation in some cases, but also a best practice for inclusivity. By incorporating alt text, optimizing color contrast, ensuring readable and zoomable text, and properly using HTML structure, you can deliver a more engaging and accessible experience for all users.

Taking the time to enhance accessibility ensures that your message reaches everyone effectively and makes your email campaigns more successful in the long run.