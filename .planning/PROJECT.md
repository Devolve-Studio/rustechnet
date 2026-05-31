# ClientsScroller Admin Panel

## What This Is

A custom Next.js `/admin` panel secured with a hardcoded password (stored in `.env`). It allows users to upload, automatically convert to WebP, and incrementally name images for the `ClientsScroller` component. It also includes the ability to delete images and refactors the component to read from `/public/client` dynamically.

## Core Value

Zero-maintenance dynamic image rendering for the ClientsScroller via a simple, secure admin UI.

## Requirements

### Validated

<!-- Shipped and confirmed valuable. -->

- ✓ Next.js App Router (v15) architecture — existing
- ✓ TailwindCSS styling — existing
- ✓ Static `ClientsScroller` component — existing

### Active

<!-- Current scope. Building toward these. -->

- [ ] Refactor `ClientsScroller` to read dynamically from `/public/client`.
- [ ] Create `/admin` Next.js route with hardcoded password authentication (via `.env`).
- [ ] Create Next.js API route for image upload.
- [ ] API route converts uploaded images to `.webp` via `sharp`.
- [ ] API route implements incremental naming logic based on existing images in `/public/client`.
- [ ] Admin UI includes functionality to delete images from `/public/client`.

### Out of Scope

<!-- Explicit boundaries. Includes reasoning to prevent re-adding. -->

- [Full Decap CMS installation] — we chose a custom Next.js admin to keep it simple and handle WebP conversion directly.
- [Reordering images via drag-and-drop] — user requested simple "add and delete both" logic.

## Context

- The project uses Next.js 15 App Router and TailwindCSS v4.
- `sharp` is already available in the `package.json` for image conversion.
- The user specifically requested a simple and quick solution.

## Constraints

- **Security**: Password must be stored in `.env` — to avoid hardcoding secrets in the repository.
- **File Format**: Uploaded images must be converted to `.webp` — for performance optimization.
- **Simplicity**: No complex CMS integrations — to keep the implementation and maintenance simple.

## Key Decisions

<!-- Decisions that constrain future work. Add throughout project lifecycle. -->

| Decision | Rationale | Outcome |
|----------|-----------|---------|
| Custom Next.js Admin | Simpler than modifying Decap CMS to support WebP conversion and custom naming | — Pending |

## Evolution

This document evolves at phase transitions and milestone boundaries.

**After each phase transition** (via `/gsd-transition`):
1. Requirements invalidated? → Move to Out of Scope with reason
2. Requirements validated? → Move to Validated with phase reference
3. New requirements emerged? → Add to Active
4. Decisions to log? → Add to Key Decisions
5. "What This Is" still accurate? → Update if drifted

**After each milestone** (via `/gsd-complete-milestone`):
1. Full review of all sections
2. Core Value check — still the right priority?
3. Audit Out of Scope — reasons still valid?
4. Update Context with current state

---
*Last updated: 2026-06-01 after initialization*
