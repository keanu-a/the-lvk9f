# CLAUDE.md — Client Website Project

> Template for every client/portfolio site. Copy into the repo root, fill in the
> PROJECT section, and keep the rest. Keep this file under ~150 lines: Claude reads
> all of it every session, so anything that isn't a rule or a fact goes in docs/.

## PROJECT (fill in per site)

- **Client:** <name> — <one-sentence mission / what they sell>
- **Primary goal:** <e.g. get donations / book appointments / call the shop>
- **Primary CTA:** <button label + destination>
- **Audience:** <who, on what device, arriving from where>
- **Aesthetic direction:** <2–4 mood words, e.g. "warm community editorial">
- **Design source of truth:** `docs/DESIGN.md` (tokens, type, components, references)
- **Content source:** `content/` (MDX/JSON). Never invent copy, stats, names or testimonials.
  If content is missing, insert a clearly marked `TODO(content):` placeholder and list it at the end of your reply.

## STACK

- Next.js (App Router) + TypeScript (strict) + Tailwind CSS
- Static generation by default; server routes only for forms and Stripe Checkout
- Images via `next/image`; fonts via `next/font` (self-hosted, max 2 families)
- Hosting: Vercel or Netlify. No database unless the brief requires one.
- Package manager: pnpm

## COMMANDS

- `pnpm dev` — local dev
- `pnpm build` — must pass with zero errors before any task is "done"
- `pnpm lint` / `pnpm typecheck`
- `pnpm test:a11y` — axe checks (Playwright + @axe-core/playwright)

## HOW TO WORK WITH ME

1. **Design first.** Before writing any UI code, use the `frontend-design` skill and read
   `docs/DESIGN.md`. State the aesthetic direction in one sentence before you start.
2. **Plan, then build.** For anything bigger than one component, propose a short plan
   (files to touch, components to create) and wait for my OK.
3. **One section at a time.** Build a page section, then stop so I can review it in the
   browser. Don't build whole pages in one pass.
4. **Use the tokens.** Colors, spacing, radii and type sizes come from the Tailwind theme.
   No hard-coded hex values or arbitrary `[13px]` values in components.
5. **Small, reusable components** in `components/`; page-specific sections in
   `app/(site)/<page>/_sections/`.
6. **When done with a task:** run build + lint + typecheck, then summarize what changed
   and anything I need to check visually.

## DESIGN RULES (anti-generic)

Avoid the patterns that make sites look AI-generated:
- No purple/blue gradients, glassmorphism, neon glows, or emoji as icons
- No Inter, Roboto or Arial as the display font
- Don't default to "hero + three identical icon cards + testimonial carousel + CTA band"
- Vary section rhythm: mix full-bleed images, asymmetric text/image splits, and quiet text sections
- No filler copy ("Empowering X through Y", "Unlock your potential"). Headlines must be specific to this client.
- Real photography over illustrations; consistent crop and treatment
- One accent color reserved for the primary CTA
- Motion is subtle (opacity/translate, ≤ 300 ms) and respects `prefers-reduced-motion`

## QUALITY BAR (every page)

- Mobile first; check 360, 768, 1280, 1440 px
- Lighthouse mobile: 95+ in all four categories; LCP < 2.0 s; CLS < 0.1
- WCAG 2.2 AA: 4.5:1 text contrast, visible focus rings, 44 px tap targets,
  semantic landmarks (`header`, `nav`, `main`, `footer`), one `h1` per page,
  alt text on every meaningful image, labels on every input
- Every page has a unique `<title>`, meta description and Open Graph image
- `sitemap.xml`, `robots.txt`, and LocalBusiness / Organization JSON-LD

## DON'T

- Don't add dependencies without asking (each one is something I maintain on a care plan)
- Don't touch `.env*` files or commit secrets; Stripe/API keys are server-side only
- Don't use `any`, `// @ts-ignore`, or disable lint rules to make errors go away
- Don't delete or rewrite content in `content/` unless asked

## REFERENCE

- `docs/DESIGN.md` — design system for this client
- `docs/BRIEF.md` — the project brief (goals, audiences, site map)
- `docs/CONTENT-TODO.md` — content still needed from the client
