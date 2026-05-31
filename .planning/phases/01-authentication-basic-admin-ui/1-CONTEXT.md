# Phase 1: Authentication & Basic Admin UI - Context

**Gathered:** 2026-06-01
**Status:** Ready for planning

<domain>
## Phase Boundary

Establish secure access and the shell for the admin dashboard. This covers the `/admin` UI, the login form, and the authentication verification for API routes using a hardcoded password.
</domain>

<decisions>
## Implementation Decisions

### Session duration
- **D-01:** Admin cookie should last for 30 days to maximize convenience.

### Error feedback
- **D-02:** Incorrect password attempts should display an inline red text error message, rather than a generic toast notification.

### Login UI design
- **D-03:** The login interface should be a simple functional box centered on the screen. No need to match the main site's stylized theme.

### the agent's Discretion
- Name of the secure cookie.
- Exact spacing, padding, and typography within the simple login box.
</decisions>

<specifics>
## Specific Ideas

No specific requirements — open to standard Next.js App Router approaches for cookie-based authentication.
</specifics>

<canonical_refs>
## Canonical References

**Downstream agents MUST read these before planning or implementing.**

No external specs — requirements are fully captured in decisions above.
</canonical_refs>

<code_context>
## Existing Code Insights

### Reusable Assets
- None specifically for the admin panel, as this is a new standalone section. TailwindCSS is available for styling the simple box.

### Established Patterns
- Next.js App Router (v15) structure.
- TailwindCSS v4 utility classes.

### Integration Points
- `/admin` path for the dashboard.
- `/api/admin/*` path for the secure routes.
</code_context>

<deferred>
## Deferred Ideas

None — discussion stayed within phase scope.
</deferred>

---

*Phase: 01-authentication-basic-admin-ui*
*Context gathered: 2026-06-01*
