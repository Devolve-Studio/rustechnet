# Architecture

## Application Structure
The application follows standard Next.js App Router conventions:
- **App Router (`src/app/`)**: Handles routing, pages, and layouts. Includes sections for `about`, `services`, `blog`, `contact`, `events`.
- **Components (`src/components/`)**: Reusable React components, often broken down into functional sections (e.g., `HeroBanner.tsx`, `Header.tsx`, `Footer.tsx`).

## Data Flow
- Primarily static or server-rendered pages using React Server Components.
- Client components are used where interactivity is required (e.g., 3D graphics, maps, animations).

## Key Abstractions
- **UI Components**: Separated into generic structural sections in `src/components/` and likely some shared utilities in `src/lib/`.
