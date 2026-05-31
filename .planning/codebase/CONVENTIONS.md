# Coding Conventions

## Language
- TypeScript is heavily used for all components and utilities.

## Styling
- Tailwind CSS v4 is used via class names for styling components.
- Class-variance-authority (`cva`) and `clsx` + `tailwind-merge` are used for dynamic class name merging in UI components.

## Patterns
- **Animations**: Complex animations handled by GSAP and Framer Motion.
- **Client vs Server Components**: Standard Next.js 15 pattern - assume Server Components by default, add `"use client"` for interactivity (like Maps and 3D).
