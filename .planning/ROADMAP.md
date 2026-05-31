# Project Roadmap

**3 phases** | **8 requirements mapped** | All v1 requirements covered ✓

## Phase 1: Authentication & Basic Admin UI
**Goal:** Establish secure access and the shell for the admin dashboard.
**Requirements:** AUTH-01, AUTH-02
**UI hint:** yes
**Success Criteria:**
1. User can visit `/admin` and see a login form.
2. User can submit password and gain access via a secure cookie.
3. Unauthenticated access to `/admin` or `/api/admin/*` returns a 401/redirect.

## Phase 2: File Upload & Processing API
**Goal:** Implement the backend logic to handle image uploads, WebP conversion, incremental naming, and deletion.
**Requirements:** FILE-01, FILE-02, FILE-03, FILE-04
**UI hint:** no
**Success Criteria:**
1. Uploading any valid image format converts it to `.webp`.
2. New files are saved as `client-[N+1].webp` in `/public/client`.
3. User can trigger deletion of a specific file, removing it from the disk.

## Phase 3: ClientsScroller Integration & Dashboard UI
**Goal:** Refactor the frontend component to read dynamic files and complete the Admin gallery view.
**Requirements:** INT-01, INT-02
**UI hint:** yes
**Success Criteria:**
1. `ClientsScroller` automatically displays all images from `/public/client` without hardcoded arrays.
2. Admin dashboard displays all existing images with delete buttons.
3. Next.js cache updates immediately after an upload/delete action.
