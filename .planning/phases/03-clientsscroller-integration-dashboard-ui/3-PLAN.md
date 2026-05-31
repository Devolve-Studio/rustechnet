---
wave: 1
depends_on: []
files_modified:
  - src/app/api/clients/route.ts
  - src/components/ClientsScroller.tsx
  - src/app/admin/page.tsx
  - src/app/admin/AdminGallery.tsx
  - src/app/api/admin/upload/route.ts
  - src/app/api/admin/delete/route.ts
autonomous: true
---

# Phase 3: ClientsScroller Integration & Dashboard UI - Plan

**Requirements Covered:** INT-01, INT-02

## Threat Model

<threat_model>
- **Threat 1: Unauthorized Deletion/Upload via UI** (Low) - Mitigation: Handled by Phase 1 middleware and Phase 2 backend validation. The UI just triggers the secure endpoints.
- **Threat 2: Unauthenticated Information Disclosure** (Low) - Mitigation: The `/api/clients` route will expose the filenames in `/public/client`. This is public data meant for the homepage, so no auth is required for the GET request.
</threat_model>

## Tasks

<task>
<id>create-clients-api</id>
<description>Create a public API route to fetch the list of dynamic client images.</description>
<read_first>
- src/app/api/clients/route.ts
</read_first>
<action>
Create `src/app/api/clients/route.ts`.
Export an async `GET` function.
Define `const targetDir = path.join(process.cwd(), 'public', 'client');`.
Wrap with `try/catch`. Inside, `const files = await fs.promises.readdir(targetDir);`.
Filter files to include only `.webp` files (or `/\.webp$/`).
Return `NextResponse.json(files)`.
If an error occurs (e.g., directory does not exist yet), return `NextResponse.json([])` to avoid breaking the homepage before the first upload.
</action>
<acceptance_criteria>
- `src/app/api/clients/route.ts` returns a JSON array of strings.
- Gracefully handles `ENOENT` (missing directory) by returning `[]`.
</acceptance_criteria>
</task>

<task>
<id>refactor-clientsscroller</id>
<description>Update the ClientsScroller component to fetch dynamic images.</description>
<read_first>
- src/components/ClientsScroller.tsx
</read_first>
<action>
Modify `src/components/ClientsScroller.tsx`.
Remove the hardcoded `logos` array.
Add a React `useEffect` to fetch the filenames from `/api/clients`.
Store the result in a `useState<string[]>([])`.
Update the `<img src>` tags to point to `/client/${logo}` instead of `/clients/${logo}`.
Ensure the component renders smoothly when `logos` is empty (e.g., return null or a skeleton if `logos.length === 0`).
</action>
<acceptance_criteria>
- `ClientsScroller` fetches data from `/api/clients` on mount.
- Image paths are updated to `/client/`.
</acceptance_criteria>
</task>

<task>
<id>admin-dashboard-gallery</id>
<description>Create the Admin Dashboard UI with an upload form and image gallery.</description>
<read_first>
- src/app/admin/page.tsx
- src/app/admin/AdminGallery.tsx
</read_first>
<action>
Create `src/app/admin/AdminGallery.tsx` as a Client Component.
It should accept a prop `images: string[]`.
Include an Upload Form: A simple `<input type="file" accept="image/*" />` and an "Upload" button. On submit, POST the file via `FormData` to `/api/admin/upload`, then call `router.refresh()`.
Include a Gallery Grid: Render the `images` in a Tailwind grid (`grid-cols-2 md:grid-cols-4 gap-4`).
Each image should be displayed with an absolute positioned "Delete" button (using Tailwind, e.g., red background). On click, POST `{ filename }` to `/api/admin/delete`, then call `router.refresh()`.

Modify `src/app/admin/page.tsx`.
Since it is a Server Component, use `fs.promises.readdir` to read `/public/client` (handle `ENOENT` by catching it and defaulting to `[]`). Filter for `.webp`.
Replace the placeholder text ("Welcome to the admin panel...") with `<AdminGallery images={images} />`.
</action>
<acceptance_criteria>
- `AdminGallery` uses multipart/form-data for uploads.
- `AdminGallery` displays a grid of images.
- Delete buttons work and refresh the page.
- `page.tsx` passes the dynamic list of images to the gallery.
</acceptance_criteria>
</task>

<task>
<id>update-revalidate-path</id>
<description>Add Next.js cache revalidation to the Phase 2 API routes.</description>
<read_first>
- src/app/api/admin/upload/route.ts
- src/app/api/admin/delete/route.ts
</read_first>
<action>
Modify `src/app/api/admin/upload/route.ts`.
Import `revalidatePath` from `next/cache`.
After a successful upload (before returning the response), call `revalidatePath('/', 'layout');` and `revalidatePath('/admin', 'layout');`.

Modify `src/app/api/admin/delete/route.ts`.
Import `revalidatePath` from `next/cache`.
After a successful deletion (before returning the response), call `revalidatePath('/', 'layout');` and `revalidatePath('/admin', 'layout');`.
</action>
<acceptance_criteria>
- Both API routes call `revalidatePath` on success, ensuring the homepage and admin dashboards update their cache instantly.
</acceptance_criteria>
</task>

## Verification

<must_haves>
- The `/api/clients` route returns a list of webp files.
- The `ClientsScroller` displays uploaded images dynamically.
- The `/admin` dashboard allows uploading new images via a simple file input.
- The `/admin` dashboard displays all images in a grid.
- Deleting an image from the dashboard works and refreshes the list.
- Cache invalidation ensures updates reflect immediately on the homepage without manual refreshes.
</must_haves>
