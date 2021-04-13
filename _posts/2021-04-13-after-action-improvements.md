---
layout: post
author: nathan
title: After Action Improvements
date: 2021-04-13T19:53:57.306Z
---
Millions of people take action via ControlShift every month and we’re committed to ensuring that every supporter’s voice is made as powerful as possible.

We’ve been iteratively refining the experiences your supporters have after they take action on a petition or attend an event. We’re able to A/B test new designs at scale across all of our customers in order to ensure that every advocacy organization we work with benefits from a  thoroughly optimized experience. The latest refinements we’ve shipped improve the visual consistency of post-action “daisy chain” steps while also increasing conversions.  

#### Share

We’ve refined the share step to balance the initial sharing prompt with a more prominent option to move on to other choices. This updated design maintains the number of supporters who share campaigns while increasing the number of supporters who engage with a second action.

![The updated after-action modal has a refreshed design that's consistent through each step.](/img/uploads/share_modal.png "The updated after-action modal has a refreshed design that's consistent through each step.")

We’re continuing to refine this step since it’s so critical to how quickly both petition and event campaigns grow. Our tests found that adding an option to copy the URL to the clipboard has a positive impact. We’ve also confirmed that the social proof associated with showing that other people are sharing the campaign remains a potent element –  **increasing new shares by 7%**.

Not everything we’ve tried has worked: while users are more likely to share content when they see that their peers have previously shared it, our tests of animated social proofs showed a decrease in the sharing conversion rate. This is an area we’re planning to continue testing.

You can expect to see additional A/B tests in the future as we continue to refine the sharing experience. Some planned tests include: using the new Web Share API on mobile browsers and experimenting with a preview of how the petition will appear once it’s shared. 

#### Welcome

Customers can optionally set up a welcome message for new supporters who haven’t previously taken action. This welcome message allows organizations to tell the story of their movement and suggest additional ways to get involved. We’ve redesigned the welcome modal to make it consistent with the new share modal styles.

![Use welcome messages to explain the work your organization is doing and other ways to get involved.](/img/uploads/welcome.png "Use welcome messages to explain the work your organization is doing and other ways to get involved.")

#### Donate

Several customers use our support for embedded iframes in the post-action daisy chain to ask their supporters for donations after they sign a petition or attend an event using third-party donation software. This works particularly well when the donation ask is connected back to the campaign the supporter just participated in, but we’ve also seen customers experiment with generic asks to support broader organizing. 

We’re interested in building more robust integrations with other donation tools to more easily allow for after-action fundraising, testing dynamic language, and better donation reporting within ControlShift. [Let us know](mailto:talk@controlshiftlabs.com) if you’d like to collaborate in early experiments and help shape our product development in this area. 

#### Promoted Petitions and Campaign Events

Our infrastructure for promoting campaigns remains one of the most powerful features of ControlShift. We allow customers to select a set of petitions that should be promoted to recent action takers. 

Then, after someone signs a campaign, we’ll show them a petition they’ve not yet signed. We’ll automatically choose the campaign we think the user will be most interested in, based on their location and the campaign they just signed.

![Show recent signers other campaigns they might be interested in.](/img/uploads/promoted.png "Show recent signers other campaigns they might be interested in.")

Similarly, organizations can also promote campaign events to recent signers. Promoting upcoming events can be a great way to convert supporters to offline action. 

![Events allow supporters to take their action offline. ](/img/uploads/event.png "Events allow supporters to take their action offline."){: .img-responsive}

As with the other modals, we’ve improved the designs of the promoted petition and event invitation modals to ensure that your supporters have a cohesive visual experience.