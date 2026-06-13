# Selinyx — Company Website

A modern, SaaS-style marketing website for **Selinyx**, a technology company focused on AI solutions, software development, cloud services, automation, and digital transformation — featuring an interactive **3D hero scene**.

> _We Build Digital Solutions That Drive Real Growth_

## Tech stack

- **Next.js 16** (App Router) + **React 19**
- **JavaScript (JSX)** — no TypeScript
- **Tailwind CSS 4** (`@theme` tokens, `class`-based dark mode)
- **Three.js** + **@react-three/fiber** + **@react-three/drei** — the 3D hero scene
- **Framer Motion** for animations
- **Lucide** icons
- **next-themes** for dark-mode persistence
- **Geist** font via `next/font`

## Features

- Premium startup aesthetic — glassmorphism, soft shadows, purple/blue/white palette
- **Interactive 3D hero** — a metallic "S" logo on a podium with orbiting particles, ripple rings, and mouse parallax (desktop / wide screens only)
- **Smart preloader** — a real `0 → 100%` loader driven by the actual 3D model download + the browser `load` event; the site is revealed only when everything is genuinely ready (with a safety timeout so it never gets stuck)
- **Coordinated reveal** — hero text, floating cards, and the 3D spin animation all play *after* the preloader hands off (not hidden behind it)
- **Offline detector** — actively pings external endpoints to detect real internet loss (not just the device's reported status) and shows an offline / back-online toast
- Fully responsive (desktop / tablet / mobile) — 3D is replaced by a clean text hero below `1280px`
- Light **and** dark mode with an animated toggle
- Smooth scroll + on-scroll reveal animations
- Animated stat counters, testimonial carousel, FAQ accordion
- Floating **Selinyx Assistant** chat widget
- WhatsApp contact button, back-to-top button, scroll-progress bar
- Newsletter signup and a full contact form
- SEO-friendly: metadata, Open Graph, Twitter cards, canonical URL, file-based favicon (`logo.png`)

## Pages

| Route | Description |
| --- | --- |
| `/` | Home — 3D hero, trusted-by, services, stats, process, testimonials, FAQ, newsletter, CTA |
| `/about` | Vision, mission, why Selinyx, core values, founder |
| `/services` | All nine service offerings with features |
| `/portfolio` | Featured projects with metrics and case-study links |
| `/pricing` | Three engagement tiers (premium cards) + FAQ |
| `/contact` | Contact form and contact details |

## Getting started

```bash
# 1. Install dependencies
npm install

# 2. Run the dev server
npm run dev
# open http://localhost:3000

# 3. Production build
npm run build
npm start
```

## Project structure

```
.
├── app/
│   ├── layout.js                     # Root layout: fonts, theme, nav, footer, widgets, preloader
│   ├── page.jsx                      # Home page
│   ├── globals.css                   # Tailwind v4 theme tokens, utilities, keyframes
│   ├── about/page.jsx
│   ├── services/page.jsx
│   ├── portfolio/page.jsx
│   ├── pricing/page.jsx
│   ├── contact/page.jsx
│   ├── components/
│   │   ├── layout/
│   │   │   ├── Navbar.jsx
│   │   │   └── Footer.jsx
│   │   ├── sections/
│   │   │   ├── Hero.jsx               # 3D hero + content
│   │   │   ├── TrustedBy.jsx
│   │   │   ├── ServicesPreview.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── Process.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── Newsletter.jsx
│   │   │   ├── CTASection.jsx
│   │   │   ├── PageHeader.jsx
│   │   │   └── ContactForm.jsx
│   │   ├── ui/
│   │   │   ├── Logo.jsx
│   │   │   ├── Badge.jsx
│   │   │   ├── SectionHeading.jsx
│   │   │   ├── Reveal.jsx
│   │   │   ├── AnimatedCounter.jsx
│   │   │   └── ServiceCard.jsx
│   │   ├── widgets/
│   │   │   ├── Preloader.jsx
│   │   │   ├── OfflineIndicator.jsx
│   │   │   ├── ChatWidget.jsx
│   │   │   ├── WhatsAppButton.jsx
│   │   │   ├── BackToTop.jsx
│   │   │   └── ScrollProgress.jsx
│   │   ├── providers/
│   │   │   ├── ThemeProvider.jsx
│   │   │   └── ThemeToggle.jsx
│   │   └── three/
│   │       └── selinyx-scene/        # 3D scene
│   │           ├── Experience.jsx    # scene root (camera parallax, layout, floor)
│   │           ├── SShape.jsx        # GLB logo + intro spin
│   │           ├── Podium.jsx
│   │           ├── Rings.jsx
│   │           ├── Dots.jsx
│   │           └── Lights.jsx
│   └── lib/
│       ├── data.js                   # all site content
│       ├── animations.js             # Framer Motion variants
│       └── loadStore.js              # shared preloader / 3D progress state
├── public/
│   ├── logo.png                      # brand logo + favicon
│   └── SShape.glb                    # 3D model
├── eslint.config.mjs
├── jsconfig.json                     # "@/*" path alias
├── next.config.mjs
└── postcss.config.mjs
```

## How the preloader & 3D coordinate

- `app/lib/loadStore.js` is a tiny dependency-free store shared between the 3D scene and the preloader.
- The **3D hero** (`Hero.jsx`) reports the real model-loading progress (via drei's `useProgress`) into the store. This keeps Three.js out of every other page's bundle.
- The **Preloader** (`widgets/Preloader.jsx`) waits for both the 3D progress **and** the browser `load` event, then flips a `revealed` flag.
- Entrance animations (`Hero` text, floating cards, and the `SShape` intro spin) are gated on `revealed`, so they play *after* the loader — never hidden behind it.

## Customizing

- **Content** lives in `app/lib/data.js` — services, projects, testimonials, FAQs, pricing, nav, and company details (email, WhatsApp number, social links).
- **Brand colors / shadows** are defined in `app/globals.css` under the `@theme` block (`--color-brand-*`, `--color-accent-*`, `--color-ink-*`, `--shadow-*`).
- **3D scene** values (model position, rotation, lights, materials) live in `app/components/three/selinyx-scene/`. The model file is `public/SShape.glb`.
- The contact form, newsletter, and chat widget use client-side mock handlers — wire them to your backend, an email service, or a form provider to go live.

---

© Selinyx. Built with Next.js + Three.js.
