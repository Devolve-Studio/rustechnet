# Phase 2: File Upload & Processing API - Context

**Gathered:** 2026-06-01
**Status:** Ready for planning

<domain>
## Phase Boundary

Implement the backend logic to handle image uploads, WebP conversion, incremental naming, and deletion. This phase focuses entirely on the API layer (`/api/admin/upload` and `/api/admin/delete`) and file system operations.
</domain>

<decisions>
## Implementation Decisions

### Image optimization
- **D-01:** Convert uploaded images to WebP format AND resize them to a maximum width of 800px to guarantee performance.

### Naming gaps
- **D-02:** When saving new images, find the absolute highest number (e.g., `client-N`) currently in the directory and use `client-[N+1]`. Do not attempt to fill gaps (e.g., if `client-2` is missing, skip it) to avoid potential browser caching issues.

### Invalid files
- **D-03:** If a user attempts to upload a non-image file, fail fast with a 400 Bad Request error and return a clear error message to be shown in the UI.

### the agent's Discretion
- Image conversion quality level (e.g., 80% for WebP).
- Temporary file handling during the upload stream (if any).
</decisions>

<specifics>
## Specific Ideas

No specific requirements — open to standard Node.js/Next.js Route Handler file system approaches.
</specifics>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

No external specs — requirements are fully captured in decisions above.
</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `sharp` library is already present in `package.json` for image conversion.
- `src/middleware.ts` from Phase 1 protects all `/api/admin/*` routes automatically.

### Established Patterns
- Next.js Route Handlers (`route.ts`).
- Server-side file system operations (`fs/promises`).

### Integration Points
- `/public/client` directory where images will be read and written.
- `ClientsScroller` component (to be refactored in Phase 3) will depend on this directory's contents.
</code_context>

<deferred>
## Deferred Ideas

- Drag-and-drop reordering (explicitly out of scope per PROJECT.md).
</deferred>

---

*Phase: 02-file-upload-processing-api*
*Context gathered: 2026-06-01*
