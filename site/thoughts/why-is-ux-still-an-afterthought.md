---
layout: layouts/article.njk
title: "Why is UX still an afterthought?"
subtitle: "And are designers really the only ones struggling?"
excerpt: "Why is UX still an afterthought? Drawing on research and experience across academia and industry, I explore the shared frustrations of designers and developers, the imbalance in resources, and what gets in the way of better collaboration."
date: 2026-10-15
category: UX Integration, Design Leadership, Cross-functional Collaboration
image: https://images.unsplash.com/photo-1487058792275-0ad4aaf24ca7?auto=format&fit=crop&w=800&q=80
slug: why-is-ux-still-an-afterthought
permalink: /thoughts/{{ slug }}/
tags: thoughts
---

I've spent a considerable amount of time wondering why UX design still struggles to find its place within software development.

It's hardly a new problem. Designers get involved too late, research is squeezed between competing priorities, and decisions affecting the user experience are made before anyone has had a chance to properly investigate what users actually need.

Then, when something doesn't work, design is expected to fix it.

But the more I discussed these frustrations with software engineers, the more I realised we weren't necessarily experiencing different problems.

As far back as 2018, while working at King's Digital Lab (KDL), I remember conversations with senior developers about the lack of time for architectural planning, technical decisions made in haste, and the tendency to start writing code before fully understanding what needed to be built.

Sound familiar?

Different disciplines, remarkably similar frustrations.

It made me question whether UX being treated as an afterthought was really the problem, or merely one symptom of something bigger.

## Different environments, familiar problems

KDL was an interesting place to start asking these questions.

As an academic research lab, it provided a relatively safe environment to challenge established practices, discuss alternative approaches and experiment with different ways of working. Questioning things was part of the job, after all.

But having the freedom to question something doesn't necessarily mean having the freedom to change it.

Within the lab, we experimented with different resources, processes and approaches to collaboration. Some of these experiments led to improvements, although the changes weren't always as extensive or as quick as we might have hoped.

Academic environments have their own constraints. Established research frameworks, institutional approval processes and collaborations with more traditional academic disciplines can all influence how much freedom there is to introduce and sustain change.

Progress could be slow, even when there was agreement that something wasn't working particularly well.

Moving into a commercial software development environment in 2023 gave me a rather different perspective.

At PRODA, where I took on the Lead UX Designer role, I encountered a stronger emphasis on delivery. Things could move quickly, but time wasn't always explicitly allocated to questioning approaches, investigating alternatives or evaluating the consequences of decisions.

Sometimes, the doing itself seemed to be considered research.

Build something, see what happens, adjust, repeat.

There's nothing inherently wrong with learning by doing. In fact, experimentation is fundamental to both research and product development.

But experimentation needs some form of evaluation. Otherwise, how do we know whether we've actually learned anything?

And this is where I find some interpretations of Agile development rather frustrating.

Agile should allow teams to adapt, respond to evidence and improve through iteration. But simply making changes quickly doesn't mean those changes are informed by new knowledge.

Without adequate research and evaluation, iteration risks becoming trial and error with a methodology attached to it.

Of course, this isn't a universal description of commercial development, nor were things perfect in academia.

The interesting part was that, despite their differences, both environments exposed many of the same underlying problems.

The constraints were different. The consequences were often surprisingly familiar.

## From frustration to research

In 2022, I was awarded a Software Sustainability Institute (SSI) Fellowship to investigate how UI/UX design could be better integrated into existing software development lifecycles (SDLCs), particularly within research software engineering.

The idea had been developing for several years through conversations with colleagues, observations of projects and experiments with different approaches.

I wanted to understand whether design and engineering processes could be brought closer together, and perhaps eventually become part of a more coherent shared workflow.

Not another process for teams to follow on top of everything else. Ideally, something that could make everyone's work more effective.

Throughout 2022 and 2023, I continued investigating the problem, including a survey conducted in early 2023 within the Research Software Engineering (RSE) community.

On 19 March 2024, I brought the findings to a workshop at King's College London, organised with the support of KDL and funded by SSI.

The workshop involved 15 participants, including UX designers, software engineers, analysts, and project and product managers from KDL, PRODA and King's Digital.

The intention was to share what I'd found, challenge some assumptions and explore what might be worth doing differently.

Before getting to that, though, let's look at the research.

## What the data told us

The survey involved approximately 50 participants, primarily from the RSE community, with a smaller number from outside it.

Given the limited resources available, I designed the survey myself and adopted an exploratory approach, focusing on understanding perceptions, practices and recurring problems.

It's worth being clear about its limitations.

The sample was relatively small and wasn't designed to represent the entire RSE community, let alone the software industry more broadly. The findings should therefore be treated as exploratory, rather than definitive.

That said, some of the results were revealing.

### UX is valued. At least in principle.

When asked about the benefits of UX design processes:

- 34 respondents recognised clear benefits.
- 8 saw some benefits.
- 5 saw no benefits.

So far, reasonably encouraging.

But when asked whether their colleagues, project partners and stakeholders recognised those same benefits, the picture changed.

Only 9 respondents believed they did. Another 24 reported partial recognition, while 13 felt the benefits weren't recognised.

These responses don't necessarily demonstrate what colleagues actually thought. They tell us how participants perceived the attitudes around them.

Still, that perception matters.

It's difficult to establish design as an integral part of development when the people involved aren't confident that its contribution is understood.

<figure>
  <img src="{{ '/assets/post-images/img1.png' | url }}" alt="Pie chart showing that 34 respondents said their role benefits from UI/UX design processes, 8 said somewhat and 5 said no">
  <figcaption>Survey question 1</figcaption>
</figure>

<figure>
  <img src="{{ '/assets/post-images/img2.png' | url }}" alt="Pie chart showing whether UI/UX benefits are clear to colleagues and stakeholders: 9 yes, 13 no, 24 somewhat and 1 don't know">
  <figcaption>Survey question 2</figcaption>
</figure>

### Recognising value doesn't necessarily mean allocating resources

The responses about available resources were rather less encouraging.

Only 6 respondents felt their working environment provided sufficient resources for UX design, while 36 disagreed.

That's a substantial imbalance within this sample.

It also raises an obvious question: if we recognise the value of user research, design and testing, why do we so frequently struggle to make room for them?

There are several possible explanations, from competing priorities to limited budgets and unclear responsibilities.

But there's also a circular problem.

Without sufficient resources, it becomes difficult to demonstrate the contribution of UX. Without evidence of that contribution, securing resources becomes harder.

And around we go.

<figure>
  <img src="{{ '/assets/post-images/img3.png' | url }}" alt="Pie chart showing whether enough resources are assigned to UI/UX design: 6 yes, 36 no, 2 said no resources were needed and 3 didn't know">
  <figcaption>Survey question 3</figcaption>
</figure>

### And then there's the question of numbers

The survey findings were consistent with something I'd experienced directly.

At both KDL and PRODA, the design team fluctuated between one and three people. Easy enough to remember when there's never more than three of you!

Engineering teams, meanwhile, were considerably larger. I don't have the exact historical headcounts, but from memory, PRODA had around 30 engineers at certain points.

Of course, there's no universal ratio of designers to engineers that guarantees good outcomes. Different products, teams and organisations have different needs.

But numbers do matter.

A small design team isn't simply responsible for producing fewer screens than a larger engineering team is responsible for implementing. Its remit often extends across research, interaction design, accessibility, usability testing, design systems, product discussions and, increasingly, strategic decisions.

When that responsibility falls on one or two people, something inevitably has to give.

Research gets deprioritised. Designers become reactive rather than proactive. And the time available to question decisions, rather than simply respond to them, becomes increasingly limited.

So while I believe designers and engineers share many frustrations, I don't think it's accurate to suggest they're equally positioned to address them.

**The problems may be shared. The resources available to tackle them are not.**

### Integration remains inconsistent

Participants were also asked to rate UX integration within development processes on a scale from 1 (poor integration) to 5 (optimal integration).

The responses suggested that integration was far from optimal, although practices were evolving.

Beyond the ratings, several recurring difficulties emerged:

- User research and feedback were often given insufficient priority.
- Target users weren't always clearly identified.
- Design was sometimes perceived as an obstacle to development speed.
- Responsibilities between design, engineering and product were unclear.
- Communication gaps created duplication and misalignment.
- Success metrics weren't consistently established.
- Design and development iteration cycles didn't always align.
- Teams were often already operating at capacity.

None of these problems is particularly exotic.

Perhaps that's what makes them so frustrating.

We've been discussing variations of them for years, and yet they continue to appear.

<figure>
  <img src="{{ '/assets/post-images/img4.png' | url }}" alt="Bar chart rating UI/UX integration with core development processes from 1 to 5, with an average rating of 2.44">
  <figcaption>Survey question 4</figcaption>
</figure>

## Are designers the only ones affected?

UX designers understandably focus on the consequences of decisions made without adequate user research or design input.

But engineers can experience something similar when architectural decisions, requirements and technical constraints aren't properly considered.

A designer might be asked to make an interface usable after the fundamental interaction decisions have already been made.

An engineer might be asked to implement functionality before there's a sufficiently clear understanding of its requirements or technical implications.

In both cases, teams end up compensating for decisions that could have been better informed earlier.

And compensating takes time.

I should clarify that the observations about architectural planning came primarily from conversations and professional experience, including discussions at KDL that predated the formal survey. They weren't established as a separate quantitative finding through this research.

Nevertheless, they helped shape how I understood the problem.

What if we stopped treating design and engineering as disciplines competing for time in the development process?

What if we recognised that both benefit from clearer requirements, better-informed decisions and opportunities to evaluate their work?

Perhaps the solution isn't simply to involve designers earlier.

Perhaps we need to reconsider how decisions are made, documented and shared across the entire team.

## Projects, products and the problem with requirements

Comparing project-based work at KDL with product development at PRODA revealed some interesting differences.

In project-based environments, requirements were often developed collaboratively, with analysts playing a central role in gathering information and coordinating activities. Use cases tended to be established earlier and connected to the needs of research partners or clients.

In a product environment, product managers generally had greater responsibility for defining and evolving requirements, with feedback informing successive iterations.

These are broad tendencies, of course. Real organisations rarely fit neatly into textbook definitions.

Roles overlap, responsibilities shift and teams develop their own variations of established processes.

What became particularly interesting was what happened to requirements after they were initially agreed.

In some projects, high-level requirements were relatively clear, while more detailed specifications evolved throughout development.

Nothing unusual there.

Problems arose when changes weren't consistently documented or connected to the implementation tasks they affected.

Sometimes, requirements lived inside individual tickets rather than in a central, traceable record. Discussions happened across different channels, decisions were revisited, and the reasoning behind a change wasn't always easy to recover.

The result could be confusion about scope, duplicated effort or differences between what had been designed and what was eventually built.

This isn't just a documentation problem.

It's a problem of maintaining shared understanding.

I'm not suggesting that every conversation needs to be recorded or that teams should introduce additional bureaucracy for the sake of it.

But when the reasoning behind decisions disappears, the same questions tend to resurface.

And repeatedly reconstructing decisions isn't a particularly productive use of anyone's time.

## What could we do differently?

By the time of the 2024 workshop, several possible directions had emerged from the research and our experiences at KDL and PRODA.

Some approaches had already shown practical benefits. Others were still being explored.

I think it's important not to confuse the two.

### 1. Make feedback part of the process, not an occasional event

One of the approaches explored at PRODA involved creating more continuous ways to collect and review product feedback.

Rather than treating feedback as something gathered only at specific milestones, the intention was to make it more readily available to the people involved in product decisions.

Dedicated feedback tools helped bring different sources of information together and made it easier to identify recurring issues.

But collecting feedback is only part of the challenge.

It needs to be analysed, discussed and connected to decisions. Otherwise, we're just becoming better at accumulating information.

<figure>
  <img src="{{ '/assets/post-images/img5.png' | url }}" alt="Savio feedback dashboard listing 143 product feedback items with customer, feature and plan information">
  <figcaption>User feedback</figcaption>
</figure>

### 2. Make user research easier to share

Usability sessions offered another opportunity to bring disciplines closer together.

Collaborative tools such as FigJam allowed us to prepare sessions, document observations and discuss findings in a shared environment.

One of the benefits of this approach was that insights didn't have to remain confined to the designer conducting the session.

Other team members could engage with the material, ask questions and contribute their perspectives.

This matters because user research shouldn't become another collection of documents that only the UX team reads.

The more people understand the evidence behind a design decision, the easier it becomes to have a meaningful conversation about the compromises involved.

<figure>
  <img src="{{ '/assets/post-images/img6.png' | url }}" alt="Collaborative FigJam board containing usability objectives, test tasks, participant observations, results and design iterations">
  <figcaption>Collaborative space</figcaption>
</figure>

### 3. Build shared resources, not separate territories

Design systems are often discussed in terms of consistency, efficiency and reusable components.

All valid benefits.

But I think their collaborative potential is equally important.

A shared design system can provide designers and engineers with a common reference point for discussing interfaces, behaviours and implementation decisions.

At PRODA, we explored this through a centralised Figma-based design system, using comments, documentation and shared components to support collaboration.

The intention wasn't simply to create a library of reusable elements.

It was to reduce unnecessary ambiguity and make conversations between design and development easier.

Whether this consistently reduces turnaround time or implementation effort requires further measurement, but the opportunity is worth investigating.

<figure>
  <img src="{{ '/assets/post-images/img7.png' | url }}" alt="Figma design-system workspace containing interface components, design explorations, notes and collaborator markers">
  <figcaption>Suggested structure for collaborative work setting</figcaption>
</figure>

### 4. Make responsibilities and decisions easier to follow

Another area of experimentation involved task management.

Different teams need different views of the same work.

Engineers may need visibility of dependencies and implementation tasks across multiple workstreams. Designers may benefit from a more focused view of activities requiring their involvement.

The aim was to reduce noise without losing transparency.

More broadly, we explored how tasks, requirements and decisions could be connected to minimise duplication and clarify responsibilities.

There's a balance to find here. Too little structure creates confusion, but too much introduces overhead and leaves little room for flexibility.

The aim isn't to document every decision or prescribe how every team should work. It's to establish just enough structure to keep people aligned, without making the process itself another obstacle to getting things done.

<figure>
  <img src="{{ '/assets/post-images/img8.png' | url }}" alt="Shortcut project board showing work from across the organisation arranged into Ideas, Later, Soon, Small Stories, Refinement and Next columns">
  <figcaption>All tasks</figcaption>
</figure>

<figure>
  <img src="{{ '/assets/post-images/img9.png' | url }}" alt="The same Shortcut project board filtered to show only tasks involving the design team">
  <figcaption>Design tasks</figcaption>
</figure>

## What the workshop added

The March 2024 workshop offered an opportunity to discuss these findings beyond the immediate teams involved in the research.

With designers, engineers, analysts and product managers in the same room, we could compare experiences and discuss the practical difficulties of integrating UX into development workflows.

The diversity of roles contributed to an engaging question-and-answer session.

There wasn't a single breakthrough that suddenly solved the problem.

And, given the exploratory nature of the research and the limited resources available, I wouldn't claim that the workshop validated a new framework or demonstrated lasting organisational change.

What it did provide was an opportunity to consolidate the investigation, exchange perspectives and identify questions worth exploring further.

Among them:

How should UX responsibilities be distributed across teams?

Should design sit within Product, Engineering or operate as a separate function?

How can designers balance hands-on work with strategic responsibilities?

How do we justify investment in UX while still responding to commercial constraints?

And perhaps most importantly, how do we make collaboration something embedded in everyday work rather than another activity that teams struggle to find time for?

These questions aren't unique to any single organisation.

Nor do I think there's one organisational structure or methodology capable of answering them all.

## The problem with another framework

One of the original ambitions behind the Fellowship was to explore whether design and engineering workflows could be brought together into something more coherent.

I still think that's worth investigating.

As part of the investigation, I also explored a possible structure for bringing design and development activities closer together. The diagram below represents an attempt to organise those activities into a more collaborative workflow, rather than treating design as a separate stage that happens before implementation.

It's a proposal, not a validated framework. And that's an important distinction. The aim was to provide a starting point for discussion and experimentation, not prescribe another process for teams to follow.

<figure>
  <img src="{{ '/assets/post-images/decision-tree.jpg' | url }}" alt="Collaborative workflow diagram tracing feature requests through prioritisation, requirements, design, implementation, testing, release and validation, with roles involved at each stage">
  <figcaption>Suggested structure for collaborative work setting — Miro diagram</figcaption>
</figure>

But the more I work on this, the less convinced I am that introducing a framework, on its own, will achieve very much.

Frameworks can provide structure, clarify responsibilities and encourage better practices.

They can also become another set of activities that teams perform without necessarily understanding why.

We've all encountered processes that made sense when introduced, only to become increasingly detached from the problems they were meant to solve.

The question isn't simply whether a team follows a particular methodology.

It's whether that methodology helps the team make better decisions.

That requires some freedom to question the process itself, and enough evidence to understand whether changes are actually helping.

This is one reason I've been interested in approaches such as dual-track Agile, which attempt to balance discovery and delivery rather than treating them as strictly consecutive phases.

The promise is appealing.

But whether a particular implementation works depends on the people, organisation, resources and constraints involved.

Again, something to investigate rather than assume.

## Where does that leave us?

I'm not convinced that better integration between design and engineering requires another universal framework.

What I am convinced of is that both disciplines need the time, resources and opportunity to contribute before important decisions become difficult to reverse.

That doesn't mean their circumstances are identical. In my experience, design has often been expected to cover an increasingly broad range of responsibilities with a fraction of the people allocated to engineering.

But I don't see this as a competition between disciplines.

The research reinforced something I'd been thinking about since my early conversations with developers at KDL: many of our frustrations have common roots, even when they manifest themselves differently.

I intend to continue exploring these questions, particularly how teams can balance discovery and delivery, share responsibility for decisions and evaluate whether changes are actually improving the way they work.

After all, compromise is inevitable in complex projects. But it shouldn't become something one team is repeatedly expected to absorb on behalf of everyone else.

**Perhaps the first step towards better integration isn't another design process, a new tool or a different Agile framework.**

**Perhaps it's making enough room for everyone involved to ask whether we're solving the right problem, before we get too busy building the wrong solution.**

---

*Author's note (October 2026): I left PRODA in May 2026. The observations and examples discussed in this article reflect my experience at the company between April 2023 and May 2026, alongside my earlier work at King's Digital Lab and the research supported by the Software Sustainability Institute Fellowship.*
