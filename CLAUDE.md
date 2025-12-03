# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Vue 3 SPA for **HawkOps** cybersecurity consultancy website, converted from PHP/Bootstrap to modern Vue + Tailwind CSS 4.

## Commands

```bash
# Development
npm run dev        # Start dev server (http://localhost:5173)

# Build
npm run build      # TypeScript check + production build

# Preview production build
npm run preview    # Preview built app locally
```

## Architecture

### Tech Stack
- **Framework**: Vue 3 with Composition API (`<script setup>`)
- **Language**: TypeScript
- **Styling**: Tailwind CSS 4 (via @tailwindcss/vite plugin)
- **Build**: Vite 7
- **Router**: Vue Router 4

### Project Structure

```
src/
├── components/
│   ├── layout/        # TheHeader, TheFooter, TheSeparator
│   ├── common/        # GradientButton, GlitchText, BackLink, SectionTitle
│   ├── home/          # HeroSection, AboutSection, ServicesSection, etc.
│   ├── services/      # ServiceIntro, PointsSection, BenefitsGrid, etc.
│   └── shared/        # MarqueeSlider, ContactBox, ClientsSlider
├── views/
│   ├── HomeView.vue
│   ├── AboutView.vue
│   ├── ContactView.vue
│   ├── ServicesView.vue
│   ├── NotFoundView.vue
│   └── services/      # WebPenetrationTestingView, MobileApplicationView, etc.
├── data/              # Static content (services.ts, features.ts, etc.)
├── types/             # TypeScript interfaces
├── router/            # Vue Router config
├── style.css          # Tailwind + custom CSS
└── App.vue            # Root component with layout
```

### Routing

Routes defined in `src/router/index.ts`:
- `/` - Home
- `/about-us` - About
- `/contact` - Contact
- `/services` - Services listing
- `/web-penetration-testing`, `/mobile-application`, `/secure-code-review`, `/penetration-testing`, `/redteam` - Service detail pages

### Data Management

Static content stored in `src/data/`:
- `services.ts` - Service details with `getServiceBySlug()` helper
- `features.ts` - Why Choose HawkOps features
- `acknowledgments.ts`, `certifications.ts`, `clients.ts` - Logo/badge data
- `contact.ts` - Contact information
- `navigation.ts` - Menu structure

### Styling Patterns

**Tailwind Theme** (defined in `src/style.css` via `@theme`):
- Colors: `primary` (#B00E39), `accent` (#FF9A1E), `dark` (#0d0320), `light` (#ffe9e9)
- Font: Titillium Web

**Custom CSS Classes**:
- `.glitch-text` - Glitch animation effect (add `auto` class for auto-play)
- `.bg-gradient-primary` - Primary gradient background
- `.bg-pink-section` - Pink/primary tinted section background
- `.container` - Centered container with responsive padding

### Component Patterns

**Service Pages**: Use composition of:
1. `ServiceIntro` - Hero with back link
2. `PointsSection` - Methodology points
3. `BenefitsGrid` or `ComparisonTable` or `ProcessCarousel` - Specific content
4. `ContactBox` - CTA

**Home Page**: Composed of section components that pull data from `src/data/`

### Path Aliases

`@/` maps to `src/` (configured in both `vite.config.ts` and `tsconfig.app.json`)
