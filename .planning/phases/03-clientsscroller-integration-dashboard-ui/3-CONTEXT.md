# Phase 3: ClientsScroller Integration & Dashboard UI - Context

**Gathered:** 2026-06-01
**Status:** Ready for planning

<domain>
## Phase Boundary

Refactor the frontend component `ClientsScroller` to read dynamic files instead of a hardcoded array, and complete the Admin gallery view (upload UI + delete buttons) on `/admin`.
</domain>

<decisions>
## Implementation Decisions

### ClientsScroller data fetching
- **D-01:** Refactor `ClientsSliderInfinite` (in `ClientsScroller.tsx`) to accept a `logos: string[]` prop.
- **D-02:** Update `src/app/page.tsx` (a Server Component) to read the `/public/client` directory using `fs.promises.readdir` and pass the list of image filenames to `ClientsSliderInfinite`.
- **D-03:** Note a minor path inconsistency: `ClientsScroller.tsx` currently looks in `/clients/`. Since Phase 2 saves to `/public/client/`, the `<img src>` must be updated to `/client/${logo}`.

### Upload UI
- **D-04:** Use the simplest possible UI for uploads on the admin page — a standard file input and a submit button.

### Cache invalidation
- **D-05:** Update the Phase 2 API routes (`upload` and `delete`) to call Next.js `revalidatePath('/', 'layout')` and `revalidatePath('/admin', 'layout')` aggressively, ensuring zero-maintenance updates are instantly visible across the entire site.

### the agent's Discretion
- Gallery grid styling for the admin dashboard (e.g., tailwind `grid-cols-2` or `grid-cols-4`).
- Loading states during upload/deletion.
</decisions>

<specifics>
## Specific Ideas

No further specific requirements. Standard React Server Component + Client Component patterns apply.
</specifics>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

No external specs — requirements are fully captured in decisions above.
</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- `ClientsSliderInfinite` component already implements the Swiper functionality. It just needs propification.

### Established Patterns
- Client component composition inside Server components (e.g., `page.tsx`).

### Integration Points
- `src/components/ClientsScroller.tsx`
- `src/app/page.tsx`
- `src/app/admin/page.tsx`
- `src/app/api/admin/upload/route.ts` (needs revalidatePath)
- `src/app/api/admin/delete/route.ts` (needs revalidatePath)
</code_context>

<deferred>
## Deferred Ideas

- Drag-and-drop reordering (explicitly out of scope).
</deferred>

---

*Phase: 03-clientsscroller-integration-dashboard-ui*
*Context gathered: 2026-06-01*
