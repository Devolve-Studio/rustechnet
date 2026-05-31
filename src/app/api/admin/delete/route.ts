import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import { revalidatePath } from 'next/cache';

export async function POST(request: Request) {
  try {
    const { filename } = await request.json();

    if (!filename) {
      return NextResponse.json({ error: 'Filename is required' }, { status: 400 });
    }

    // Strict validation to prevent directory traversal
    const regex = /^client-\d+\.webp$/;
    if (!regex.test(filename)) {
      return NextResponse.json({ error: 'Invalid filename format' }, { status: 400 });
    }

    const filePath = path.join(process.cwd(), 'public', 'client', filename);

    try {
      await fs.unlink(filePath);
      
      revalidatePath('/', 'layout');
      revalidatePath('/admin', 'layout');
      
      return NextResponse.json({ success: true });
    } catch (err: any) {
      if (err.code === 'ENOENT') {
        return NextResponse.json({ error: 'File not found' }, { status: 404 });
      }
      throw err; // rethrow other file system errors to be caught by outer catch
    }
  } catch (error) {
    console.error('Delete error:', error);
    return NextResponse.json({ error: 'Failed to delete file' }, { status: 500 });
  }
}
