# Phase 1: Authentication & Basic Admin UI - Research

## Domain Findings
This phase establishes the foundational security for the custom admin panel. The user wants a simple, secure login using a hardcoded password. The system must use cookie-based authentication, returning a secure session cookie that lasts for 30 days.

## Architectural Approach
We will use Next.js `src/middleware.ts` to protect the admin routes and a Route Handler (`src/app/api/admin/login/route.ts`) to verify the password and set the cookie.

**Components needed:**
1. `src/middleware.ts`
   - Intercepts requests to `/admin` and `/api/admin/*`.
   - Bypasses the login route itself (`/api/admin/login`).
   - Checks for the presence of the `admin_session` cookie. If missing or invalid, redirects to `/admin` (if trying to access a protected page) or returns 401 (if API).
   
2. `src/app/api/admin/login/route.ts`
   - Accepts POST request with `{ password }`.
   - Compares with `process.env.ADMIN_PASSWORD`.
   - On success: uses `cookies().set('admin_session', 'true', { httpOnly: true, secure: true, maxAge: 30 * 24 * 60 * 60 })`.
   - On failure: returns 401 Unauthorized.

3. `src/app/admin/page.tsx`
   - If already authenticated, it should show the admin dashboard shell. For this phase, it can just be a placeholder "Admin Dashboard" with a logout button. If not authenticated, the middleware should have redirected, but actually the login page *is* at `/admin`.
   - Wait, if `/admin` is the login page AND the dashboard, we need to handle that. A better approach: `/admin/login` is the login page, and `/admin` is the dashboard. Middleware protects `/admin` (except `/admin/login`) and redirects to `/admin/login`.
   - Or, we just use a Client Component on `/admin` that checks state, but Server Components + Middleware is more secure. Let's use `/admin` as the dashboard, and redirect to `/admin/login` if not authenticated.
   - Wait, requirement is "User can visit `/admin` and see a login form." If the user is unauthenticated and visits `/admin`, they should see the login form. So `/admin` serves BOTH the login form and the dashboard depending on the cookie.
   - We can check `cookies().has('admin_session')` inside `src/app/admin/page.tsx`. If it exists, render the Dashboard Shell. If not, render the Login Form. This avoids complex redirects and satisfies the "visit /admin and see a login form" requirement perfectly.

## Key Files to Create/Modify
- `src/app/admin/page.tsx` (New) - Renders login form or dashboard shell based on cookie.
- `src/app/api/admin/login/route.ts` (New) - Handles login POST.
- `src/app/api/admin/logout/route.ts` (New) - Clears cookie.
- `src/middleware.ts` (New) - Protects `/api/admin/*` (except login/logout) from unauthorized access. (We don't need to protect `/admin` here since the page itself will render the login form).

## UI/UX Details
- **Login UI:** A simple, functional box centered on the screen.
- **Error Feedback:** Inline red text on the login form for incorrect passwords.
- **Styling:** Tailwind CSS utility classes.

## Security Considerations
- `process.env.ADMIN_PASSWORD` must be used.
- The cookie must be `httpOnly`, `secure` (in prod), `sameSite: 'lax'`, and have a 30-day max age.

## Validation Architecture
- Check that `/admin` renders a login form when no cookie exists.
- Check that submitting the wrong password displays inline red text.
- Check that submitting the correct password (matches `.env`) sets the cookie and shows the dashboard shell.
- Check that accessing `/api/admin/upload` (to be created in Phase 2) without the cookie returns 401.

## RESEARCH COMPLETE
