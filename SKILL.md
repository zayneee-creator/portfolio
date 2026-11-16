# SKILL.md — Personal Website Build Spec

## 1. Objective
Build a single-page (with anchored sections) personal portfolio website for
Abideen Shittu — Full-Stack & AI Developer, Technical Lead, builder of
assistive technology, and coding instructor for kids. The site must serve
recruiters/clients, parents seeking private coding tuition, and the
education/accessibility community, while demonstrating the owner's
engineering quality.

## 2. Audience
- Primary: recruiters, hiring managers, technical leads (screen for
  "product-minded engineer with end-to-end ownership").
- Primary: **parents/guardians looking to hire a private coding tutor for
  their children** (incl. parents of children with special educational needs).
- Secondary: prospective freelance/contract clients.
- Tertiary: education/edtech and accessibility communities.

## 3. Positioning (locked)
- Hero descriptor: "Full-stack & AI developer, Technical Lead, and builder
  of assistive technology." (Keep the tutoring offer visible in the nav and
  a dedicated section — do not overload the hero line.)
- Do NOT use "startup founder" in positioning copy.
- "CEO & Co-Founder" may appear as a job title in the Experience section only.

## 4. Information Architecture
Single page, sticky nav, sections in this order:

1. **Hero** — name, positioning line, location (Lagos, Nigeria),
   CTAs: "View projects" (primary), "Book a coding session" (secondary),
   icon links: GitHub, LinkedIn, Email.
2. **About** — 2–3 short paragraphs (engineering + inclusive tech + teaching).
3. **Experience** — vertical timeline, reverse chronological (7 roles, below).
4. **Coding for Kids & Private Tutoring** — NEW. Audience: parents.
   - What: 1:1 and small-group coding lessons for children (Scratch,
     Python, JavaScript, web basics), plus inclusive/adaptive teaching for
     children with special educational needs (ASL-capable, special-ed
     background).
   - Formats: online (remote) or in-person (Lagos, subject to arrangement).
   - Ages/levels: beginner → intermediate; curriculum tailored per child.
   - Proof: *Coding for Kids* book, Jeliz Academy & OdumareTech instruction,
     special education teaching experience.
   - CTA: "Enquire about tutoring" → mailto with prefilled subject
     (e.g. `mailto:...?subject=Coding%20tutoring%20enquiry`).
   - Optional: 3-step "How it works" (Enquire → Free intro call → Tailored plan).
5. **Projects** — card grid (Wearable Communication Aid featured; client platforms).
6. **Skills** — 4 grouped columns (+ teaching under Education group).
7. **Publications** — *Coding for Kids*, *Transition*, Medium.
8. **Languages** — English, Yoruba, ASL, German.
9. **Contact** — email (mailto), LinkedIn, GitHub. Include a line inviting
   tutoring enquiries.
10. **Footer** — copyright, back-to-top.

## 5. Visual Design Direction
- Style: clean, editorial, high-contrast. Not a generic "dark neon dev portfolio."
- Palette: near-black #0F0F0F on off-white #FAFAF7; one accent (deep teal
  #0F766E) used sparingly. The Tutoring section may use a soft tinted
  background (e.g. #F0FDFA) to visually separate it for parents.
- Typography: Space Grotesk (headings) + Inter (body). Max two families.
- Layout: max width ~1100px; 2-col hero desktop, single column mobile;
  Tutoring section can use a warm, friendly card style (rounded, larger
  type) distinct from the engineering sections — signals "for parents."
- Motion: subtle only; respect `prefers-reduced-motion`.
- Imagery: no stock photos. Portrait or abstract SVG; tutoring section may
  use simple friendly SVG icons (blocks, robot, keyboard).

## 6. Accessibility Requirements (non-negotiable)
- Semantic HTML5 landmarks; single H1; ordered headings.
- WCAG 2.1 AA contrast for all text.
- Full keyboard nav, visible focus rings, skip-to-content link.
- `alt` text on images; `aria-label` on icon-only links.
- Respect `prefers-reduced-motion`.

## 7. Technical Requirements
- Stack: Next.js (App Router) + Tailwind + TypeScript. Static/SSG. Vercel.
- All copy in `content.ts` (typed) — including a `tutoring` object.
- Performance: Lighthouse ≥ 95 all categories (mobile).
- SEO: meta, OG/Twitter cards, JSON-LD `Person` (+ optionally `Service`
  schema for the tutoring offer).
- Responsive: mobile-first; 640/768/1024/1280.

## 8. Content Deck (approved copy)

### Hero
- H1: Abideen Shittu
- Sub: Full-stack & AI developer, Technical Lead, and builder of assistive technology.
- Location: Lagos, Nigeria
- CTAs: "View projects" / "Book a coding session"

### About (draft)
"I build software end-to-end — from architecture and deployment to client
partnerships and operations. That span means I ship with the business
context, not just the code.

My work sits at the intersection of full-stack engineering, AI-driven
automation, and inclusive technology. I've authored research and built a
wearable communication aid for Deaf students, and I've taken digital
products from concept to profitable operation.

I also teach. I've spent years teaching coding to children — including
children with special educational needs — and I believe technology should
be something every child can learn to shape, not just use."

### Coding for Kids & Private Tutoring (new copy)
- Heading: "Coding for Kids & Private Tutoring"
- Intro: "I offer one-to-one and small-group coding lessons for children —
  from first steps in Scratch to building real projects in Python and
  JavaScript. Lessons are tailored to each child's pace and interests."
- What I teach:
  - Scratch & block coding (beginners, ages ~7+)
  - Python & JavaScript fundamentals
  - Web basics (HTML/CSS) and simple projects
  - Inclusive, adaptive teaching for children with special educational needs
    (American Sign Language supported)
- Formats: Online (remote, worldwide) or in-person in Lagos (by arrangement).
- How it works: 1) Enquire by email → 2) Free intro call → 3) Personalised plan.
- CTA button: "Enquire about tutoring" → `mailto:zayn.grow@proton.me?subject=Coding%20tutoring%20enquiry`

### Experience bullets
**Fidelo Logistics — CEO & Co-Founder (Jan 2026 – Present)**
- Took a digital logistics product from concept to profitable operation within the first quarter.
- Secured and managed a partnership with GIG Logistics and two restaurant chains.
- Led a delivery fleet and a team of 3 riders, owning fulfillment and customer satisfaction.

**UltraAdeTech (USA, Remote) — Full-Stack Developer & IT Specialist (Mar 2024 – Mar 2026)**
- Directed hosting and DNS management, maintaining 99.9% uptime for international platforms.
- Engineered automated internal tools that cut manual data processing time and streamlined backups.
- Integrated analytics that improved platform speed and engagement.

**OdumareTech (UK, Remote) — Web Developer & Coding Instructor (Jul 2023 – Feb 2025)**
- Built a responsive frontend architecture from scratch, improving mobile accessibility.
- Mentored students in Scratch, web development, Python, and JavaScript.

**Chaste Intellect International School — IT Officer & Computing Instructor (Sep 2021 – Jul 2022)**
- Overhauled network infrastructure, drastically reducing technical interruptions.
- Trained 20+ staff and integrated e-learning tools into the curriculum.

**Silver Maple Schools — IT Officer & Computing Instructor (Apr 2021 – Jul 2021)**
- Managed and maintained the school's network infrastructure and systems.
- Ran professional development for faculty on classroom technology integration.

**Kaduna State Special Education School — Special Education Teacher (2019 – 2020)**
- Created an inclusive learning environment centered on engagement and hands-on learning.
- Received positive feedback from students, parents, and colleagues on instructional impact.

**Jeliz Academy — Remote Coding Instructor (2015 – 2019)**
- Facilitated student success through engaging course materials and current industry practice.

### Projects
1. **Wearable Communication Aid for Deaf Students** (featured) — smartwatch
   converting software signals into tactile feedback. Research + prototype.
2. **Triplegconsulting.us** — end-to-end client platform. Live link.
3. **UltraAdeTech** — international platform, hosting + full-stack. Live link.

### Skills groups
- Engineering & Technical Leadership: full-stack development, AI workflow automation, systems infrastructure (hosting, DNS, security), end-to-end product ownership.
- Education & Inclusive Technology: coding instruction (Scratch/Python/JavaScript), e-learning/LMS, special education, assistive technology, Arduino/IoT, curriculum integration.
- Business & Operations: strategy, partnerships, logistics operations, team leadership, financial planning.
- Other: graphics design, office suites, research & data analysis.

### Publications
- *Coding for Kids* (book)
- *Transition* — bit.ly/3SFzEDo
- Medium — medium.com/@jrshittu

### Languages
English (Fluent) · Yoruba (Native) · American Sign Language (Good) · German (Basic)

### Contact
- Email: zayn.grow@proton.me (confirm final address)
- LinkedIn: linkedin.com/in/jrshittu
- GitHub: github.com/jrshittu
- Include: "Enquiries about coding tutoring for children are welcome."

## 9. Out of Scope (v1)
Blog/CMS, contact-form backend, payments/scheduling integration, analytics.
(Structure `content.ts` so a booking link or Calendly can be dropped into the
tutoring CTA later.)

## 10. Acceptance Criteria
- [ ] All 10 sections present, copy matches content deck.
- [ ] Tutoring section has its own nav item and mailto CTA with prefilled subject.
- [ ] Passes WCAG AA + keyboard nav + screen-reader landmark check.
- [ ] Lighthouse ≥ 95 across all four categories (mobile).
- [ ] Responsive at 360 / 768 / 1280.
- [ ] JSON-LD Person (+ optional Service) schema validates.
- [ ] Copy uses "Technical Lead," not "startup founder."
- [ ] No placeholder lorem ipsum; all links resolve.
