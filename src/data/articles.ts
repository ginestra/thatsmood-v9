
export interface Article {
  id: number;
  title: string;
  excerpt: string;
  date: Date;
  category: string;
  image: string;
  slug: string;
  content?: string;
}

export const articles: Article[] = [
  {
    id: 1,
    title: "UI/UX design integration workshop - A report",
    excerpt: "A workshop held in London on March 19, 2024, highlighted challenges in integrating UI/UX design into Agile software development, emphasizing the need for better resource allocation, cross-team collaboration, and streamlined workflows.",
    date: new Date('2025-03-17'),
    category: "UX Integration",
    image: "https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80",
    slug: "uiux-integration-workshop-20240319",
    content: "A version of this article will be forthcoming in a [King's Digital Lab](//kdl.kcl.ac.uk) blogpost and will be linked once published.\n\n## Introduction\n\nOn March 19, 2024, I conducted a workshop in London to discuss findings from a research initiative focused on improving UI/UX design integration into software development lifecycles (SDLCs) within Agile environments. The study, initiated under the 2022 Software Sustainability Institute (SSI) Fellowship, investigated long-standing inefficiencies in design and user experience implementation. Through a survey conducted within the Research Software Engineering (RSE) community, we explored how UX design is perceived, utilised, and integrated into both academic and commercial settings.\n\nThe workshop was an opportunity to take stock of the situation, share progress, exchange ideas, and plan for the future. It followed nearly two years of collecting feedback and data on software engineers' perceptions of UI/UX design and vice versa. A particularly valuable aspect of this experience was assessing ways of working in two different software development settings: at KDL—an academic research lab where the idea of investigating the state of UI/UX design in R&D originated—and at PRODA, a software development company, where I was able to test some of the same hypotheses in a commercial environment.\n\n_Spoiler alert:_ Perhaps unsurprisingly, when it came to integrating UI/UX into SDLCs, these different settings showed more similarities than differences.\n\nThe workshop was organised with the help and support of **KDL** and funded by **SSI**. It was held at **King’s College London** and included **UX designers, software engineers, analysts, project and product managers** from **KDL, PRODA, and King’s Digital**. Though a small group of 15 attendees, the diverse range of roles led to an engaging and insightful Q&A session.## What the data says\n\n### The survey\n\nA survey was conducted within the **RSE community** (and a few external participants) in early 2023. The participants ranged from developers to project managers, product owners, and analysts.\n\nThe recurring questions were:\n\n1. Why are we questioning whether UI/UX design is integrated or not?\n2. Is there an efficient way to integrate UI/UX design into software development?\n\nThe answer to (1) lies in the numerous examples of poor user experiences and aesthetics found in both academic and commercial outputs. This becomes particularly evident in tools requiring intensive user interaction and/or complex data presentation (e.g., **search dashboards, data visualizations, computational analysis tools**). These tools frequently end up either **clunky or limited**.\n\n### Perceptions of UI/UX design\n\nThe survey revealed that **34 respondents** saw clear benefits in UX design processes, while **5 did not**, and **8** perceived some benefits. However, when asked whether their **colleagues, project partners, and stakeholders** recognised these benefits, the responses were mixed: only **9 said yes, 13 said no**, and **24** indicated a partial understanding of UX’s value.\n\n![Survey question 1](/assets/post-images/img1.png)\n\n![Survey question 2](/assets/post-images/img2.png)\n\n### Resource allocation\n\nA critical challenge emerged regarding **resource allocation for UX design**. When asked if their working environments provided enough resources for UX, only **6 respondents agreed**, while **36 stated otherwise**. This lack of resources significantly hinders the seamless integration of design into SDLCs.\n\n![Survey question 3](/assets/post-images/img3.png)\n\n### UI/UX design and development integration\n\nParticipants rated the level of **UX integration within core development processes** on a scale from 1 (poor integration) to 5 (optimal integration). The results indicated a **suboptimal but evolving** relationship between UX and development teams.\n\n![Survey question 4](/assets/post-images/img4.png)\n\n## Key observations: projects vs. products\n\nThe research revealed key differences in the approach to UX within **project-based and product-based** development environments:\n\n### Projects:\n\n* Requirements are defined collaboratively, typically led by an **analyst or project manager**\n * The **design team drives creativity**, while **engineering leads implementation**\n * **User feedback is primarily handled by the design team**\n* Use cases are led by analysts or designers\n\n### Products:\n\n* **Product managers** lead requirement definitions in collaboration with teams\n* The **design team drives creativity**, while **engineering leads implementation**\n* UX and product teams **share responsibility for user feedback**\n* **Product managers** lead on defining use cases\n\n## Common challenges in UI/UX integration\n\nSeveral recurring challenges emerged from our research:\n\n* **Initial research and user feedback** are often perceived as unnecessary\n* **Design is seen as slowing down development**\n* **Target users are frequently unidentified**, leading to unchecked assumptions\n* **Communication gaps** exist between design, engineering, and product teams\n* **Responsibilities related to design implementation remain unclear**\n* **Metrics for measuring design success are often not established**\n* **The iteration cycles of design and software development are not always aligned**\n* **Many teams are already operating at full capacity**, leaving little room for additional UX work\n\n## Strategies for improvement\n\n### Proven improvements:\n\n* **Cross-team collaboration** enhances alignment and project planning\n* **User feedback-driven design** facilitates quicker assumption testing and validation\n* **Frequent usability testing** helps teams identify immediate, actionable insights\n\n### Areas still being tested:\n\n* Parallel workflows between design and implementation\n* Measuring design turnaround time and efficiency\n* Shared resources between UX designers and engineers, such as a **unified design system**\n* Consistent adoption of best practices across teams\n\n## Case studies in progress\n\nTo bridge these gaps, various strategies are being tested:\n\n* **Continuous feedback loops** using dedicated applications to collect and analyse input\n![](/assets/post-images/img5.png)\n* **Frequent usability sessions** leveraging collaborative tools like FigJam to document real-time user insights\n!(/assets/post-images/img6.png)\n* **Reusable resources** such as a centralised Figma-based design system fostering collaboration between designers and developers\n!(/assets/post-images/img7.png)\n* **Task management tools** designed to minimise overlap and duplication, ensuring clear ownership between design and engineering teams\n\n![All engineering tasks](/assets/post-images/img8.png)\n\n![Design-only tasks](/assets/post-images/img9.png)\n\n## Key challenges moving forward\n\n* **Defining the UX Designer’s role:** Should it sit within Engineering, Product, or an independent function?\n* **Addressing fragmentation:** Balancing hands-on design work with strategic responsibilities\n* **Aligning business, product, and user objectives:** Justifying UX resources while delivering tangible value\n* **Improving internal communication:** Encouraging engineers to engage with design processes, sharing successes, and making better use of shared resources\n\n![Suggested structure for collaborative work setting](/assets/post-images/img10.jpg)\n\n## Conclusion and next steps\n\nTo continue improving UI/UX integration within Agile SDLCs, the following actions will be prioritised:\n\n* **Collect and analyse data** to measure success\n* **Gather real-world stories and experiences**\n* **Develop case studies** illustrating effective UX integration\n* **Share tools and methodologies** that have proven successful\n* **Test and refine a scalable framework for UX integration**\n\nBy addressing these challenges and leveraging collaborative strategies, we can ensure that UX design becomes a fully integrated, valued component of the software development process. This ongoing research will continue evolving as new insights and best practices emerge."
  }
];
