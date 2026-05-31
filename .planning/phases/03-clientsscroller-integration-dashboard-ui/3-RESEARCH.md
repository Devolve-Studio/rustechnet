# Phase 3: ClientsScroller Integration & Dashboard UI - Research

## Domain Findings
This phase integrates the Phase 2 backend logic with the frontend components. Specifically, it involves modifying `ClientsScroller.tsx` to display uploaded images dynamically and building an admin gallery in `/admin/page.tsx` to view and delete images.

## Architectural Approach & Context Correction
During research, a critical discrepancy was found regarding decision **D-02**. The context stated that `src/app/page.tsx` was a Server Component and should read the `/public/client` directory via `fs`. However, checking `src/app/page.tsx` reveals it is marked with `'use client'` (likely due to the use of `framer-motion` for animations). 

**Correction:** We cannot use `fs.readdir` inside a Client Component. 
**New Approach:** We will create a simple Server Action or a dedicated GET API route (`/api/clients`) to fetch the list of images. Since we want zero-maintenance and instant updates without excessive client-side loading states on the homepage, the best approach is to decouple the framer-motion sections into their own Client Components OR use a Server Component wrapper for the data fetching. 

*Alternative chosen:* Let's extract the data fetching into a dedicated Server Component wrapper (`ClientsScrollerServer.tsx`), which reads the directory via `fs` and renders the existing Client Component `ClientsScroller`. Then, we import this wrapper into `page.tsx`. Wait, importing a Server Component into a Client Component is NOT allowed in Next.js! 

So, `page.tsx` *must* either be refactored into a Server Component (moving `'use client'` to the specific sub-components like the `motion.div` section), OR we use an API route. 

Given the goal is simplicity, we will create a simple GET route at `src/app/api/clients/route.ts` which returns the array of logos, and fetch it in `ClientsScroller.tsx` using a React `useEffect` or SWR. 

## Key Files to Modify/Create
1. `src/app/api/clients/route.ts` (New)
   - Handles GET requests, reads `/public/client`, filters by `.webp`, and returns an array of filenames.
2. `src/components/ClientsScroller.tsx` (Modify)
   - Add a `useEffect` to fetch from `/api/clients`.
   - Update the `img src` path from `/clients/` to `/client/`.
3. `src/app/admin/page.tsx` (Modify)
   - Since `/admin` is already a Server Component (from Phase 1), it can directly use `fs.promises.readdir` to fetch the image list.
   - We will pass this list to a new Client Component `AdminGallery.tsx` which will render the images and delete buttons, alongside the `UploadForm`.
4. `src/app/admin/AdminGallery.tsx` (New)
   - Client Component for uploading (multipart/form-data) and deleting (calling `/api/admin/delete`).
   - Uses `router.refresh()` to update the page after actions.
5. Update Phase 2 API routes (Modify)
   - Add `revalidatePath('/', 'layout')` and `revalidatePath('/admin', 'layout')` in `src/app/api/admin/upload/route.ts` and `src/app/api/admin/delete/route.ts`.

## UI/UX Details
- **Upload Form:** Simple `<input type="file" />` with a submit button.
- **Gallery:** A Tailwind grid (e.g., `grid-cols-2 md:grid-cols-4`) displaying the images with a small "Delete" button overlay on each.

## RESEARCH COMPLETE
