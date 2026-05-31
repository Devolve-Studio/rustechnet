# Directory Structure

## Key Locations
- `src/app/`: Next.js App Router pages and layouts.
  - `src/app/about/`: About section
  - `src/app/services/`: Services section
  - `src/app/contact/`: Contact section
  - `src/app/events/`: Events section
  - `src/app/blog/`: Blog section
- `src/components/`: Reusable UI elements like `Header.tsx`, `Footer.tsx`, `HeroSection.tsx`, `MapContent.tsx`, `CeoQuote.tsx`.
- `src/lib/`: Utility functions (e.g., `utils.ts`).
- `public/`: Static assets like images and fonts.

## Naming Conventions
- React components use PascalCase (e.g., `HeroBanner.tsx`).
- Directories in `app/` use kebab-case/lowercase for route segments.
- Utility files use camelCase (e.g., `utils.ts`).
