# Architecture Research

## Component Boundaries
- **Admin UI (`src/app/admin/page.tsx`)**: Renders login state and the upload/delete dashboard.
- **Admin API (`src/app/api/admin/route.ts`)**: Handles POST (upload) and DELETE (remove) requests. Uses `fs` to read/write to `public/client` and `sharp` to process images.
- **ClientsScroller (`src/components/ClientsScroller.tsx`)**: Refactored to fetch the list of files in `public/client` directly.

## Data Flow
1. User logs into `/admin` (password stored in secure cookie).
2. User uploads image -> Admin UI sends `multipart/form-data` to API.
3. API verifies cookie/password -> parses form -> reads highest incremental number -> `sharp` converts to webp -> saves to `/public/client/client-[N].webp`.
4. `ClientsScroller` (Server Component) reads directory using `fs.readdirSync` and renders all `client-*.webp` images.
