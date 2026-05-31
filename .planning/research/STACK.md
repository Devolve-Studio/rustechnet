# Stack Research

**Recommendation**: Use Next.js API Routes (App Router Route Handlers) and `sharp`.

- **Admin UI**: Next.js App Router (`/admin/page.tsx`) with TailwindCSS
- **Authentication**: Simple cookie-based session or header check against `process.env.ADMIN_PASSWORD`
- **Image Processing**: `sharp` (already in `package.json`) for converting to `.webp`
- **File System**: Node.js `fs` module to save and incrementally name files in `/public/client`
- **Data Fetching**: The `ClientsScroller` can dynamically list files using `fs.readdirSync` during Server Component render or via an API route.
