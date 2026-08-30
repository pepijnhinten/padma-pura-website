# Padma Pura Website — Copilot Instructions

## Role

You are the implementation agent for the Padma Pura website.

The human user makes final decisions.
Do not independently redefine the project, content, visual identity, or information architecture.

Work incrementally.
Do not build ahead of the current task.

## Project

This is a greenfield rebuild of:

https://www.padmapura.com

The old website is a content and historical reference source.
It is NOT the technical or visual template for the new website.

Padma Pura Foundation is a Dutch ANBI foundation supporting the Dharma activity of Tenzin Samphel Rinpoche.

The context is Mahayana and Vajrayana Buddhism within the Nyingma school.

Dudjom Tersar is a terma tradition within the Nyingma school.

## Canonical terminology

Use these spellings consistently:

- Tenzin Samphel Rinpoche
- Rinpoche
- Padma Pura
- Nyingma
- Dudjom Tersar
- Tsog
- Tsetar
- Gutor
- Shedup Kunsang Chöling

Do not invent spiritual, historical, biographical, lineage, practice, or ritual facts.

Use clearly marked draft placeholders when approved copy does not yet exist.

## Public content versus internal principles

Not every project instruction is intended to appear on the public website.

Always distinguish between:

1. internal design/project principles
2. explicit public-facing copy

Do not turn internal principles into slogans or website copy unless specifically instructed.

## Design direction

The website is:

- teacher-first
- editorial
- contemplative
- dignified
- spacious
- warm
- precise
- human
- carefully crafted

Rinpoche, Dharma activity, lineage and the actual Padma Pura community provide authenticity.

Internal principle:

> Traditional in substance. Contemporary in presentation.

This is an INTERNAL design principle, not public marketing copy.

Traditional forms and imagery may be used where they genuinely belong to the Dharma, lineage or practice.

Do not add Tibetan cultural decoration merely to make the website appear Buddhist.

## Avoid

Do not default to:

- generic Buddhist website templates
- wellness or yoga aesthetics
- New Age aesthetics
- SaaS or startup aesthetics
- excessive cards
- excessive rounded containers
- glassmorphism
- decorative gradients
- generic lotus icons
- arbitrary Dharma wheels
- arbitrary mandalas
- pseudo-Tibetan ornament
- generic Himalayan stock imagery
- spiritual marketing language
- unnecessary animation

Do not make every section visually identical.

The site should feel like a considered editorial composition, not a collection of UI widgets.

## Brand

The official Padma Pura seal is located at:

`/public/brand/padma-pura-seal.png`

It is a central identity asset.

The central emblem within the seal may also be used independently when a proper asset is available.

Do not casually redraw, reinterpret or distort the logo.

## Primary navigation

Current primary navigation:

- Our Teacher
- Lineage
- Activities
- Padma Pura
- Support

Foundation & ANBI, Updates, Contact and Privacy are secondary and do not need to appear in the primary navigation.

## Technology

Use:

- Astro
- TypeScript
- native modern CSS
- semantic HTML

Keep dependencies minimal.

Do not add React, Vue, Svelte, Tailwind, UI libraries, animation libraries, CMS software or other frameworks unless explicitly approved.

## Content

Structured content will later include:

- Activities
- Updates

Content complexity should not become navigation complexity.

Do not create unnecessary pages simply because a content type exists.

## Accessibility

Accessibility is a requirement from the start.

Use:

- semantic landmarks
- logical heading hierarchy
- visible keyboard focus
- sufficient contrast
- meaningful links
- keyboard-accessible navigation
- responsive layouts
- reduced-motion support where relevant

Do not sacrifice accessibility for visual experimentation.

## Responsive design

Treat mobile as a designed experience.

Do not merely stack the desktop layout vertically.

## Code quality

Prefer:

- simple components
- clear naming
- semantic markup
- CSS custom properties
- maintainable styles
- minimal client-side JavaScript

Do not prematurely componentize every visual section.

Do not over-engineer.

## Workflow

Before modifying code:

1. inspect the existing implementation
2. understand the requested scope
3. preserve approved work

After modifying code:

1. run appropriate checks/build
2. fix errors introduced by the change
3. report what changed
4. mention important decisions or placeholders

Never continue into the next phase unless explicitly asked.

## Microsoft 365 boundary

Padma Pura uses Microsoft 365 / SharePoint as its internal operational,
document and source-media environment.

Microsoft 365 may contain:

- original media
- working documents
- internal documentation
- transcripts and translations
- administrative material
- event working files
- non-public archive material

The public website is a publication layer.

Do not treat the website repository as Padma Pura's primary archive,
document management system or operational workspace.

Do not duplicate Microsoft 365 functionality in the website unless
explicitly requested.

Only deliberately selected and approved public material should be
published into the website.

A file existing in Microsoft 365 does NOT imply that it is public.

Do not create direct public links to internal SharePoint material unless
explicitly approved.