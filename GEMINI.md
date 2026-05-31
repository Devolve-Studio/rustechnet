<!-- GSD:project-start source:PROJECT.md -->
## Project

**ClientsScroller Admin Panel**

A custom Next.js `/admin` panel secured with a hardcoded password (stored in `.env`). It allows users to upload, automatically convert to WebP, and incrementally name images for the `ClientsScroller` component. It also includes the ability to delete images and refactors the component to read from `/public/client` dynamically.

**Core Value:** Zero-maintenance dynamic image rendering for the ClientsScroller via a simple, secure admin UI.

### Constraints

- **Security**: Password must be stored in `.env` — to avoid hardcoding secrets in the repository.
- **File Format**: Uploaded images must be converted to `.webp` — for performance optimization.
- **Simplicity**: No complex CMS integrations — to keep the implementation and maintenance simple.
<!-- GSD:project-end -->

<!-- GSD:stack-start source:codebase/STACK.md -->
## Technology Stack

## Core Technologies
- **Language**: TypeScript (v5)
- **Framework**: Next.js (v15.3.8) with React (v19)
- **Styling**: TailwindCSS (v4)
- **Runtime**: Node.js (via Vercel/Next.js)
## Key Dependencies
- **UI Components & Icons**: `lucide-react`, `@tabler/icons-react`, `react-icons`
- **Animations**: `framer-motion`, `gsap`, `tw-animate-css`
- **3D Graphics**: `three`, `@react-three/fiber`, `@react-three/drei`, `@splinetool/react-spline`
- **Maps**: `leaflet`, `react-leaflet`
## Configuration
- `next.config.ts`: Next.js configuration
- `tsconfig.json`: TypeScript compiler options
- `postcss.config.mjs`: PostCSS configuration for Tailwind
- `components.json`: UI Component library config (likely shadcn/ui or similar)
<!-- GSD:stack-end -->

<!-- GSD:conventions-start source:CONVENTIONS.md -->
## Conventions

## Language
- TypeScript is heavily used for all components and utilities.
## Styling
- Tailwind CSS v4 is used via class names for styling components.
- Class-variance-authority (`cva`) and `clsx` + `tailwind-merge` are used for dynamic class name merging in UI components.
## Patterns
- **Animations**: Complex animations handled by GSAP and Framer Motion.
- **Client vs Server Components**: Standard Next.js 15 pattern - assume Server Components by default, add `"use client"` for interactivity (like Maps and 3D).
<!-- GSD:conventions-end -->

<!-- GSD:architecture-start source:ARCHITECTURE.md -->
## Architecture

## Application Structure
- **App Router (`src/app/`)**: Handles routing, pages, and layouts. Includes sections for `about`, `services`, `blog`, `contact`, `events`.
- **Components (`src/components/`)**: Reusable React components, often broken down into functional sections (e.g., `HeroBanner.tsx`, `Header.tsx`, `Footer.tsx`).
## Data Flow
- Primarily static or server-rendered pages using React Server Components.
- Client components are used where interactivity is required (e.g., 3D graphics, maps, animations).
## Key Abstractions
- **UI Components**: Separated into generic structural sections in `src/components/` and likely some shared utilities in `src/lib/`.
<!-- GSD:architecture-end -->

<!-- GSD:skills-start source:skills/ -->
## Project Skills

No project skills found. Add skills to any of: `.agent/skills/`, `.agents/skills/`, `.cursor/skills/`, or `.github/skills/` with a `SKILL.md` index file.
<!-- GSD:skills-end -->

<!-- GSD:workflow-start source:GSD defaults -->
## GSD Workflow Enforcement

Before using Edit, Write, or other file-changing tools, start work through a GSD command so planning artifacts and execution context stay in sync.

Use these entry points:
- `/gsd-quick` for small fixes, doc updates, and ad-hoc tasks
- `/gsd-debug` for investigation and bug fixing
- `/gsd-execute-phase` for planned phase work

Do not make direct repo edits outside a GSD workflow unless the user explicitly asks to bypass it.
<!-- GSD:workflow-end -->



<!-- GSD:profile-start -->
## Developer Profile

> Profile not yet configured. Run `/gsd-profile-user` to generate your developer profile.
> This section is managed by `generate-claude-profile` -- do not edit manually.
<!-- GSD:profile-end -->
