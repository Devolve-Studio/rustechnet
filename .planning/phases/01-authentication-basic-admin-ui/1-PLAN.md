---
wave: 1
depends_on: []
files_modified:
  - src/middleware.ts
  - src/app/api/admin/login/route.ts
  - src/app/api/admin/logout/route.ts
  - src/app/admin/page.tsx
autonomous: true
---

# Phase 1: Authentication & Basic Admin UI - Plan

**Requirements Covered:** AUTH-01, AUTH-02

## Threat Model

<threat_model>
- **Threat 1: Unauthorized access to `/admin` or `/api/admin/*`** (High) - Mitigation: `src/middleware.ts` enforces `admin_session` cookie presence.
- **Threat 2: Brute force login** (Medium) - Mitigation: Hardcoded password, single secret. (Rate limiting can be added in future, but simple env comparison is used now).
- **Threat 3: Cookie theft/XSS** (High) - Mitigation: Cookie must be `httpOnly: true`, `secure: process.env.NODE_ENV === 'production'`, `sameSite: 'lax'`.
</threat_model>

## Tasks

<task>
<id>create-middleware</id>
<description>Create Next.js middleware to protect the admin routes.</description>
<read_first>
- src/middleware.ts (if it exists, otherwise create it)
</read_first>
<action>
Create or modify `src/middleware.ts` in the root of `src/`.
Add a middleware function that intercepts requests matching `^/(api/)?admin(/.*)?`.
Bypass protection for `/admin`, `/api/admin/login`, and `/api/admin/logout`.
Check for the `admin_session` cookie. If missing, return `NextResponse.redirect(new URL('/admin', request.url))` for pages, or `NextResponse.json({ error: 'Unauthorized' }, { status: 401 })` for API routes.
Configure the matcher: `matcher: ['/admin/:path*', '/api/admin/:path*']`.
</action>
<acceptance_criteria>
- `src/middleware.ts` exports a middleware function.
- `src/middleware.ts` config matcher includes `'/admin/:path*'` and `'/api/admin/:path*'`.
- `NextResponse.json` returns 401 for unauthorized API requests.
</acceptance_criteria>
</task>

<task>
<id>create-login-api</id>
<description>Create the login and logout API routes to handle authentication.</description>
<read_first>
- src/app/api/admin/login/route.ts
- src/app/api/admin/logout/route.ts
</read_first>
<action>
Create `src/app/api/admin/login/route.ts`:
Export a `POST` function that parses `{ password }` from the request body.
Compare it with `process.env.ADMIN_PASSWORD`.
If it matches, use `cookies().set('admin_session', 'true', { httpOnly: true, secure: process.env.NODE_ENV === 'production', sameSite: 'lax', maxAge: 30 * 24 * 60 * 60 })`. Return 200 OK.
If it doesn't match, return 401 Unauthorized with `{ error: 'Invalid password' }`.

Create `src/app/api/admin/logout/route.ts`:
Export a `POST` function that calls `cookies().delete('admin_session')`. Return 200 OK.
</action>
<acceptance_criteria>
- `src/app/api/admin/login/route.ts` contains `process.env.ADMIN_PASSWORD`.
- `cookies().set` is called with `admin_session` and `httpOnly: true`.
- `src/app/api/admin/logout/route.ts` calls `cookies().delete('admin_session')`.
</acceptance_criteria>
</task>

<task>
<id>create-admin-ui</id>
<description>Create the admin UI page that serves as both the login form and the dashboard shell.</description>
<read_first>
- src/app/admin/page.tsx
</read_first>
<action>
Create `src/app/admin/page.tsx` as a Server Component.
Check `cookies().has('admin_session')`.
If `true`, render the Dashboard Shell (a simple `div` saying "Admin Dashboard" and a Client Component button that calls `POST /api/admin/logout` and then `router.refresh()`).
If `false`, render the Login Form (a Client Component).
The Login Form should be a simple functional box centered on the screen using Tailwind classes (e.g., `flex min-h-screen items-center justify-center`).
It should have an input type `password`, a submit button, and state for an error message.
On submit, `POST /api/admin/login`. If success, `router.refresh()`. If error (401), set the error state and render inline red text.
</action>
<acceptance_criteria>
- `src/app/admin/page.tsx` checks `cookies().has('admin_session')`.
- The login form includes a password input and submits to `/api/admin/login`.
- Incorrect password displays inline red text (conditionally rendered error element with Tailwind `text-red-500` or similar).
</acceptance_criteria>
</task>

## Verification

<must_haves>
- User can visit `/admin` and see a login form when unauthenticated.
- Submitting the correct password from `.env` logs the user in and shows the dashboard shell.
- Submitting an incorrect password shows an inline red text error.
- Unauthenticated requests to other `/api/admin/*` endpoints return 401.
</must_haves>
