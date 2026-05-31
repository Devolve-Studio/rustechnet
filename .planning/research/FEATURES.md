# Features Research

## Table Stakes
- Password-protected login form for `/admin`
- File upload interface for images
- Delete button for existing images
- Gallery view of currently uploaded client images

## Differentiators
- Automatic format conversion to `.webp` via `sharp`
- Incremental file naming logic to avoid conflicts (e.g., `client-1.webp`, `client-2.webp`)
- Automatic UI updates in `ClientsScroller` without redeploys

## Anti-Features
- Full CMS like Decap or Sanity (too complex for a single section)
- Drag-and-drop reordering (user prefers simple add/delete)
