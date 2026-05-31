# Pitfalls Research

## Common Mistakes
1. **Unsecured API Routes**: Only protecting the frontend `/admin` page but leaving the `/api/admin` routes open to unauthorized POST/DELETE requests.
   - *Prevention*: API routes must also verify the password or the secure session cookie.
2. **Missing Next.js Cache Invalidation**: The `ClientsScroller` might cache the directory listing, meaning new images won't show up immediately after upload without a hard refresh or cache revalidation.
   - *Prevention*: Use `revalidatePath('/')` in the API route after a successful upload/delete.
3. **File Naming Conflicts**: Race conditions or naive incrementing logic leading to overwritten files.
   - *Prevention*: Always read the directory state immediately before saving and find the absolute maximum integer used.
