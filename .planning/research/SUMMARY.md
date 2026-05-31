# Research Summary

## Key Findings

**Stack:** Custom Next.js Admin page, Next.js Route Handlers, `sharp` for image processing, and `fs` for file system operations. Password authentication via `.env`.

**Table Stakes:** Secure login, image upload, image deletion, and a gallery view of existing images.

**Watch Out For:**
- Unsecured API routes (always verify auth token/cookie on the server).
- Next.js caching (use `revalidatePath` so the `ClientsScroller` updates immediately).
- Robust file increment logic to prevent overwriting existing images.
