---
wave: 1
depends_on: []
files_modified:
  - src/app/api/admin/upload/route.ts
  - src/app/api/admin/delete/route.ts
autonomous: true
---

# Phase 2: File Upload & Processing API - Plan

**Requirements Covered:** FILE-01, FILE-02, FILE-03, FILE-04

## Threat Model

<threat_model>
- **Threat 1: Directory Traversal via File Deletion** (High) - Mitigation: Strict validation of the filename parameter (regex `/^client-\d+\.webp$/`) ensures only intended files in the target directory can be deleted.
- **Threat 2: Unrestricted File Upload / RCE** (High) - Mitigation: Validation of file MIME type (`file.type.startsWith('image/')`), forcing the WebP extension, and passing through `sharp` strips potentially malicious payloads from image formats.
- **Threat 3: Denial of Service via Large File Uploads** (Medium) - Mitigation: Size limit checking before processing (e.g., max 5MB). Next.js also has built-in body size limits.
</threat_model>

## Tasks

<task>
<id>create-upload-api</id>
<description>Create the file upload and processing API route.</description>
<read_first>
- src/app/api/admin/upload/route.ts (if exists)
</read_first>
<action>
Create `src/app/api/admin/upload/route.ts`.
Export an async `POST(request: Request)` function.
Extract the file using `const formData = await request.formData(); const file = formData.get('file') as File;`.
Check if a file was provided and if `file.type.startsWith('image/')`. If not, return a 400 response with `{ error: 'Invalid file type. Only images are allowed.' }`.
Define the target directory: `const targetDir = path.join(process.cwd(), 'public', 'client');`. Use `fs.promises.mkdir(targetDir, { recursive: true })` to ensure it exists.
Read the directory using `fs.promises.readdir(targetDir)`.
Filter files using the regex `/^client-(\d+)\.webp$/`.
Map over the matching files to extract the numeric ID. Find the maximum ID (`Math.max(...ids)`). If no files exist, default the highest ID to 0.
The new filename is `client-${highestId + 1}.webp`.
Convert the file to a buffer: `const buffer = Buffer.from(await file.arrayBuffer());`.
Use `sharp` to process the buffer: `await sharp(buffer).resize(800, null, { withoutEnlargement: true }).webp({ quality: 80 }).toFile(path.join(targetDir, newFilename));`.
Return a 200 response with `{ success: true, filename: newFilename }`.
</action>
<acceptance_criteria>
- `src/app/api/admin/upload/route.ts` imports and uses `sharp`.
- The code uses `request.formData()` and checks `file.type`.
- Incremental naming logic uses regex to parse existing files and determines the next highest number.
- `sharp` is configured to output `webp` format and resize to `800`px width.
</acceptance_criteria>
</task>

<task>
<id>create-delete-api</id>
<description>Create the file deletion API route.</description>
<read_first>
- src/app/api/admin/delete/route.ts (if exists)
</read_first>
<action>
Create `src/app/api/admin/delete/route.ts`.
Export an async `POST(request: Request)` function.
Extract the filename from the JSON body: `const { filename } = await request.json();`.
Validate the filename against the regex `/^client-\d+\.webp$/`. If invalid, return a 400 response with `{ error: 'Invalid filename format' }`.
Construct the full path: `const filePath = path.join(process.cwd(), 'public', 'client', filename);`.
Use `try/catch` around `await fs.promises.unlink(filePath);`.
If successful, return a 200 response `{ success: true }`.
If an error occurs (e.g., file not found), return a 404 response `{ error: 'File not found' }`.
</action>
<acceptance_criteria>
- `src/app/api/admin/delete/route.ts` parses the JSON body to extract `filename`.
- The filename is strictly validated using regex before any filesystem operations.
- `fs.promises.unlink` is used to delete the file.
</acceptance_criteria>
</task>

## Verification

<must_haves>
- The upload API rejects non-image files with a 400 status code.
- The upload API successfully converts images to `.webp` format and saves them with an incremental naming scheme (`client-[N+1].webp`) in `/public/client`.
- The upload API resizes images to a maximum width of 800px.
- The delete API removes a specified file from `/public/client`.
- The delete API rejects invalid or directory-traversal filenames with a 400 status code.
</must_haves>
