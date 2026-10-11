---
layout: layouts/article.njk
title: "UI/UX design integration workshop - A report"
excerpt: "A workshop held in London on March 19, 2024, highlighted challenges in integrating UI/UX design into Agile software development, emphasizing the need for better resource allocation, cross-team collaboration, and streamlined workflows."
date: 2025-03-17
category: UX Integration
image: https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80
slug: uiux-integration-workshop-20240319
permalink: /thoughts/uiux-integration-workshop-20240319/
tags: thoughts
---

A version of this article will be forthcoming in a [King's Digital Lab](//kdl.kcl.ac.uk) blogpost and will be linked once published.

## Introduction

On March 19, 2024, I conducted a workshop in London to discuss findings from a research initiative focused on improving UI/UX design integration into software development lifecycles (SDLCs) within Agile environments. The study, initiated under the 2022 Software Sustainability Institute (SSI) Fellowship, investigated long-standing inefficiencies in design and user experience implementation. Through a survey conducted within the Research Software Engineering (RSE) community, we explored how UX design is perceived, utilised, and integrated into both academic and commercial settings.

The workshop was an opportunity to take stock of the situation, share progress, exchange ideas, and plan for the future. It followed nearly two years of collecting feedback and data on software engineers' perceptions of UI/UX design and vice versa. A particularly valuable aspect of this experience was assessing ways of working in two different software development settings: at KDL—an academic research lab where the idea of investigating the state of UI/UX design in R&D originated—and at PRODA, a software development company, where I was able to test some of the same hypotheses in a commercial environment.

_Spoiler alert:_ Perhaps unsurprisingly, when it came to integrating UI/UX into SDLCs, these different settings showed more similarities than differences.

The workshop was organised with the help and support of **KDL** and funded by **SSI**. It was held at **King’s College London** and included **UX designers, software engineers, analysts, project and product managers** from **KDL, PRODA, and King’s Digital**. Though a small group of 15 attendees, the diverse range of roles led to an engaging and insightful Q&A session.## What the data says

### The survey

A survey was conducted within the **RSE community** (and a few external participants) in early 2023. The participants ranged from developers to project managers, product owners, and analysts.

The recurring questions were:

1. Why are we questioning whether UI/UX design is integrated or not?
2. Is there an efficient way to integrate UI/UX design into software development?

The answer to (1) lies in the numerous examples of poor user experiences and aesthetics found in both academic and commercial outputs. This becomes particularly evident in tools requiring intensive user interaction and/or complex data presentation (e.g., **search dashboards, data visualizations, computational analysis tools**). These tools frequently end up either **clunky or limited**.

### Perceptions of UI/UX design

The survey revealed that **34 respondents** saw clear benefits in UX design processes, while **5 did not**, and **8** perceived some benefits. However, when asked whether their **colleagues, project partners, and stakeholders** recognised these benefits, the responses were mixed: only **9 said yes, 13 said no**, and **24** indicated a partial understanding of UX’s value.

![Survey question 1](/thatsmood-v9/assets/post-images/img1.png)

![Survey question 2](/thatsmood-v9/assets/post-images/img2.png)

### Resource allocation

A critical challenge emerged regarding **resource allocation for UX design**. When asked if their working environments provided enough resources for UX, only **6 respondents agreed**, while **36 stated otherwise**. This lack of resources significantly hinders the seamless integration of design into SDLCs.

![Survey question 3](/thatsmood-v9/assets/post-images/img3.png)

### UI/UX design and development integration

Participants rated the level of **UX integration within core development processes** on a scale from 1 (poor integration) to 5 (optimal integration). The results indicated a **suboptimal but evolving** relationship between UX and development teams.

![Survey question 4](/thatsmood-v9/assets/post-images/img4.png)

## Key observations: projects vs. products

The research revealed key differences in the approach to UX within **project-based and product-based** development environments:

### Projects:

* Requirements are defined collaboratively, typically led by an **analyst or project manager**
 * The **design team drives creativity**, while **engineering leads implementation**
 * **User feedback is primarily handled by the design team**
* Use cases are led by analysts or designers

### Products:

* **Product managers** lead requirement definitions in collaboration with teams
* The **design team drives creativity**, while **engineering leads implementation**
* UX and product teams **share responsibility for user feedback**
* **Product managers** lead on defining use cases

## Common challenges in UI/UX integration

Several recurring challenges emerged from our research:

* **Initial research and user feedback** are often perceived as unnecessary
* **Design is seen as slowing down development**
* **Target users are frequently unidentified**, leading to unchecked assumptions
* **Communication gaps** exist between design, engineering, and product teams
* **Responsibilities related to design implementation remain unclear**
* **Metrics for measuring design success are often not established**
* **The iteration cycles of design and software development are not always aligned**
* **Many teams are already operating at full capacity**, leaving little room for additional UX work

## Strategies for improvement

### Proven improvements:

* **Cross-team collaboration** enhances alignment and project planning
* **User feedback-driven design** facilitates quicker assumption testing and validation
* **Frequent usability testing** helps teams identify immediate, actionable insights

### Areas still being tested:

* Parallel workflows between design and implementation
* Measuring design turnaround time and efficiency
* Shared resources between UX designers and engineers, such as a **unified design system**
* Consistent adoption of best practices across teams

## Case studies in progress

To bridge these gaps, various strategies are being tested:

* **Continuous feedback loops** using dedicated applications to collect and analyse input
![](/thatsmood-v9/assets/post-images/img5.png)
* **Frequent usability sessions** leveraging collaborative tools like FigJam to document real-time user insights
!(/thatsmood-v9/assets/post-images/img6.png)
* **Reusable resources** such as a centralised Figma-based design system fostering collaboration between designers and developers
!(/thatsmood-v9/assets/post-images/img7.png)
* **Task management tools** designed to minimise overlap and duplication, ensuring clear ownership between design and engineering teams

![All engineering tasks](/thatsmood-v9/assets/post-images/img8.png)

![Design-only tasks](/thatsmood-v9/assets/post-images/img9.png)

## Key challenges moving forward

* **Defining the UX Designer’s role:** Should it sit within Engineering, Product, or an independent function?
* **Addressing fragmentation:** Balancing hands-on design work with strategic responsibilities
* **Aligning business, product, and user objectives:** Justifying UX resources while delivering tangible value
* **Improving internal communication:** Encouraging engineers to engage with design processes, sharing successes, and making better use of shared resources

![Suggested structure for collaborative work setting](/thatsmood-v9/assets/post-images/img10.jpg)

## Conclusion and next steps

To continue improving UI/UX integration within Agile SDLCs, the following actions will be prioritised:

* **Collect and analyse data** to measure success
* **Gather real-world stories and experiences**
* **Develop case studies** illustrating effective UX integration
* **Share tools and methodologies** that have proven successful
* **Test and refine a scalable framework for UX integration**

By addressing these challenges and leveraging collaborative strategies, we can ensure that UX design becomes a fully integrated, valued component of the software development process. This ongoing research will continue evolving as new insights and best practices emerge.