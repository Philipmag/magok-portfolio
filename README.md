# 💼 Magok Portfolio

[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](LICENSE)

> A responsive, accessible personal portfolio built with React and TypeScript to showcase projects, skills, and experience.

[![TypeScript](https://img.shields.io/badge/TypeScript-007ACC?style=flat-square&logo=typescript&logoColor=white)](https://www.typescriptlang.org)
[![React](https://img.shields.io/badge/React-20232A?style=flat-square&logo=react&logoColor=61DAFB)](https://reactjs.org)
[![Tailwind CSS](https://img.shields.io/badge/Tailwind_CSS-38B2AC?style=flat-square&logo=tailwind-css&logoColor=white)](https://tailwindcss.com)
[![Status](https://img.shields.io/badge/Status-Live-brightgreen?style=flat-square)](https://github.com/Philipmag/magok-portfolio)

---

## Overview

A single-page portfolio website built to give recruiters and collaborators a fast, clear picture of who I am and what I build. The design follows a "Midnight Craft" aesthetic — deep navy/black with cyan accents — and prioritizes performance, accessibility, and clean component architecture over visual complexity.

Every section is driven by typed data files (`src/data/`), making it easy to update projects, skills, and experience without touching component code.

---

## Demo

> **Live at:** [philipmag.github.io](https://philipmag.github.io) *(or your deployed URL)*

Run locally:

```bash
git clone https://github.com/Philipmag/magok-portfolio
cd magok-portfolio
pnpm install
pnpm dev
```

Open [http://localhost:5173](http://localhost:5173) in your browser.

---

## Features

- **Project showcase with category filtering** — Projects are filterable by category (Frontend, Full-Stack, Data, Platform) with smooth scroll animations on entry.
- **Animated hero section** — Staggered entrance animations with a full-viewport background image and floating code snippet decoration.
- **Data-driven architecture** — All project, skill, and experience data lives in `src/data/` — update your content without touching component logic.
- **WCAG 2.1 AA accessible** — Semantic HTML, ARIA labels, keyboard navigation, and full screen reader compatibility throughout.
- **Dark theme by default** — Consistent dark design system with Tailwind CSS utility classes and a custom theme context.

---

## Tech Stack

| Layer | Technology |
|-------|------------|
| Frontend | React, TypeScript |
| Styling | Tailwind CSS, custom CSS variables |
| Routing | Wouter (lightweight client-side router) |
| Build | Vite |
| Animations | Framer Motion, IntersectionObserver API |
| Icons | Lucide React |

---

## Getting Started

```bash
git clone https://github.com/Philipmag/magok-portfolio
cd magok-portfolio
pnpm install
pnpm dev        # starts dev server at localhost:5173
pnpm build      # production build
```

To update your projects, edit `src/data/projects.ts`. To update skills or experience, edit the corresponding files in `src/data/`.

---

## How It Works

1. **Single-page app** — `wouter` handles routing between the Home page and a 404 fallback; all portfolio content lives on the Home route.
2. **Component sections** — `Hero`, `About`, `Projects`, `Skills`, `Experience`, `Contact`, and `Footer` are independent components that compose the full page.
3. **Scroll animations** — An `IntersectionObserver` in each section component adds a `visible` CSS class when the element enters the viewport, triggering entrance animations.
4. **Category filtering** — `Projects.tsx` maintains an `activeFilter` state; the `filtered` array is recomputed on every filter change and passed to `ProjectCard` components.

---

## What I Learned

- **Data-driven UI is worth the upfront investment** — separating content from presentation made it trivial to add new projects and update descriptions without risking layout regressions.
- **Framer Motion's staggered animations** require careful timing — too fast feels cheap, too slow feels sluggish; 120ms per item with a 150ms initial delay hit the right balance.
- **Wouter is a great alternative to React Router** for portfolio sites — it's 1.5KB vs 50KB and handles all the routing needs of a single-page portfolio without the overhead.

---

## Roadmap

- [ ] Add a blog section powered by Markdown files for writing about projects and learnings.
- [ ] Integrate a contact form with email delivery via Resend or EmailJS.
- [ ] Add a dark/light theme toggle for users who prefer light mode.
