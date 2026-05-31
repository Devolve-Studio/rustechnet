# Phase 2: File Upload & Processing API - Research

## Domain Findings
This phase implements the backend logic for processing image uploads via a Next.js Route Handler. The API will receive multipart form data containing an image, convert it to WebP, resize it to a maximum width of 800px, and save it using an incremental naming strategy (`client-N.webp`). It also implements a deletion API.

## Architectural Approach
We will use Next.js Route Handlers with standard Web APIs (`request.formData()`) to handle file uploads. `sharp` will be used for image processing, and Node.js `fs/promises` will be used for file system operations.

**Key API Routes:**
1. `src/app/api/admin/upload/route.ts` (POST)
   - Parse `formData` from the request.
   - Extract the `file` field.
   - Validate that the file is an image (check MIME type or let `sharp` fail). As per D-03, fail fast with 400 Bad Request if invalid. We can check `file.type.startsWith('image/')`.
   - Ensure the `/public/client` directory exists (`fs.mkdir(..., { recursive: true })`).
   - Read existing files in `/public/client` to find the highest number `N` from `client-N.webp` (Regex: `/^client-(\d+)\.webp$/`).
   - The new filename will be `client-${N + 1}.webp`. If no files exist, use `client-1.webp`.
   - Convert the file to an `ArrayBuffer` then `Buffer`.
   - Process with `sharp(buffer).resize(800, null, { withoutEnlargement: true }).webp({ quality: 80 }).toFile(filePath)`.
   - Note: Because of D-02, we only find the absolute highest number and increment it. Gaps are ignored.
   - After saving, return a success response with the new filename.

2. `src/app/api/admin/delete/route.ts` (POST)
   - Parse `{ filename }` from the JSON body.
   - Validate the filename to prevent directory traversal (e.g., ensure it matches `/^client-\d+\.webp$/`).
   - Construct the full path and check if the file exists using `fs.stat`.
   - Delete the file using `fs.unlink`.
   - Return success response.

## Security Considerations
- **Directory Traversal:** Ensure the filename in the delete endpoint cannot contain `../` or absolute paths. Enforcing a strict regex `/^client-\d+\.webp$/` mitigates this entirely.
- **Authentication:** These routes are automatically protected by `src/middleware.ts` created in Phase 1, which blocks access if the `admin_session` cookie is missing.
- **Denial of Service (DoS):** `sharp` is generally safe, but very large images might consume significant memory. Checking the file size before processing is a good defense (e.g., max 5MB).

## Validation Architecture
- Check that uploading a valid image saves a file named `client-1.webp` (or higher) in `/public/client`.
- Check that the saved file is actually in WebP format and its width does not exceed 800px.
- Check that uploading a non-image file returns a 400 status.
- Check that the delete API successfully removes the specified file.
- Check that deleting a file with an invalid name (e.g., `../../etc/passwd`) returns a 400 status without crashing.

## RESEARCH COMPLETE
