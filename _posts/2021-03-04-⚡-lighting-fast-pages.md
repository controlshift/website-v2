---
layout: post
featured_image: img/uploads/desktop.png
title: ⚡ Lighting Fast Pages
date: 2021-03-04T21:44:13.901Z
---
Front-end page performance might seem like an obscure technical aspect of a product, but it can be one of the most critical metrics that drives the success of any site. It's particularly important for mobile users whose constrained bandwidth and limited device capacity can make websites that otherwise perform well feel frustratingly slow to load. In one often-cited study, [the BBC found that they lost an additional 10% of users](https://web.dev/why-speed-matters/) for each additional second it took for a page to load. We've become quite passionate about finding ways to improve the actual and perceived performance of the sites that we host for customers because while it might seem like an obscure concern at first, we think it can be critical to our customers' success.

On one level, front-end page performance is about conversions: the faster we make our pages, the more people who will take action by signing a petition or creating an event. 

It's also about equity: pages that are fast, regardless of the mobile device or bandwidth available, reach more people wherever they might live or how old their phones might be. 

Finally it's about search engine optimization: Google and other search engines prioritize sites that load quickly when sorting results. Sites that Google believes are fast will rise in the rankings. 

**Measure Twice, Cut Once**

In our front-end performance work we've found both lab and real-world measurements to be equally important.

In the lab, we've added [Google's Lighthouse CI](https://github.com/GoogleChrome/lighthouse-ci) tool to our software development process. This allows us to evaluate the performance consequences of each change we make to the platform and monitor how performance metrics are changing over time. While adding new features makes ControlShift more useful, they can also slow down the page if they are not implemented carefully.

![Screenshot of Google Lighthouse CI](/img/uploads/screen-shot-2021-03-04-at-5.47.25-pm.png)

Using Lighthouse CI gives the ControlShift engineering team the ability to continuously measure and improve performance, site accessibility, and SEO best practices as we develop the product. We've used this tool to establish baseline metrics and then measure the impact of each attempt we make to optimize a page in our lab environment. 

In addition to instrumenting ControlShift in the lab for front-end performance, we've also found that real world usage can be quite different than what we've measured or expected from the continuous integration (CI) context. Because of these differences, we also use [PageSpeed Insights](https://developers.google.com/speed/pagespeed/insights/) and the [Chrome User Experience Report](https://developers.google.com/web/tools/chrome-user-experience-report) to verify that our upgrades are actually improving real user experiences on live customer versions of the platform. We've found both lab and real user monitoring techniques to be useful in identifying and measuring front-end performance changes. 

**Making it Fast**

Improving the page speed for those taking action via petitions and events has been a particular focus for us because these pages are seen by millions of supporters across our customer sites each month. Many of these supporters visit us with an empty browser cache, and they arrive primarily via mobile devices. We've implemented numerous new strategies to make these flows feel faster, especially on mobile devices:

* Modernized the front-end framework we use to develop ControlShift and refined the CSS we generate to make it smaller. This was an enormous project for us but has paid significant dividends already. 
* Switched from gzip compression for CSS and JavaScript assets to the newer and more efficient [Brotli compression](https://blogs.akamai.com/2016/02/understanding-brotlis-potential.html).
* Slimmed the amount of JavaScript that is loaded on the page by [carefully analyzing](https://blog.saeloun.com/2020/08/04/how-to-investigate-your-build-size-in-webpack.html) how various libraries we use are imported and deferring some JavaScript loads.
* Added [browser hints about the resources](https://developer.mozilla.org/en-US/docs/Web/HTML/Preloading_content) each page needs to speed things up, especially for customers using Google Fonts.
* Experimented with [differential serving of distinct JavaScript bundles](https://www.smashingmagazine.com/2018/10/smart-bundling-legacy-code-browsers/) for specific browser versions. 
* Implemented [critical CSS inlining](https://www.smashingmagazine.com/2015/08/understanding-critical-css/) for petitions, which allows above-the-fold content to render immediately while the rest of the stylesheet is loading in the background.

**Partnering with Customers**

While we're excited about the performance gains we've already baked into ControlShift, we've also discovered that many customers still experience page performance that does not meet our expectations even with these improvements in place. We allow customers to add third-party analytics, advertising, and content optimization tools to their instances of ControlShift, which often has a side effect of slowing down the page. We're currently methodically working with our customers to find ways to still meet their needs for data collection or advertising while ensuring that pages are as fast as they can be. Often there are some simple tweaks we can make to help ensure these third-party tools do not slow the page down for supporters. 

Reducing the size of uploaded images and carefully choosing fonts and other design elements can also have a big impact.

**Just the Beginning**

While we've already made significant changes, we see this work as a continuous process of constant improvement. It's sometimes easy while using a new laptop on high-speed internet to ignore page performance, but many of our customers' supporters are visiting the platforms we host on mobile devices over 3G. It's critical that sites and products for activism strive to perform well for those audiences too.