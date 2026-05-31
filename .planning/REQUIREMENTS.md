# Requirements

## v1 Requirements

### Authentication
- [ ] **AUTH-01**: User can log into the `/admin` dashboard using a hardcoded password stored in `.env`.
- [ ] **AUTH-02**: The system denies access to the admin UI and API routes for unauthenticated users.

### File Management
- [ ] **FILE-01**: User can upload an image file from their device via the admin UI.
- [ ] **FILE-02**: The system automatically converts uploaded images to `.webp` format using `sharp`.
- [ ] **FILE-03**: The system assigns an incremental file name (e.g., `client-3.webp`) based on existing files in `/public/client`.
- [ ] **FILE-04**: User can delete an existing client image from the admin UI.

### Integration
- [ ] **INT-01**: The `ClientsScroller` component dynamically fetches and displays all images currently in `/public/client`.
- [ ] **INT-02**: The system automatically invalidates the Next.js cache (`revalidatePath`) so the scroller updates immediately after an upload or deletion.

## v2 Requirements
- OAuth or formal session management (deferred to keep v1 simple).
- Drag-and-drop reordering of clients (deferred for simplicity).

## Out of Scope
- Full Decap CMS integration — too complex for a single section; custom Next.js admin provides exact needed functionality.

## Traceability
- **AUTH-01**, **AUTH-02** -> Phase 1
- **FILE-01**, **FILE-02**, **FILE-03**, **FILE-04** -> Phase 2
- **INT-01**, **INT-02** -> Phase 3
