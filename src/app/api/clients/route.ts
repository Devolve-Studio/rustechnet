import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';

export async function GET() {
  try {
    const targetDir = path.join(process.cwd(), 'public', 'clients');
    const files = await fs.readdir(targetDir);
    const webpFiles = files.filter(f => f.endsWith('.webp'));
    return NextResponse.json(webpFiles);
  } catch (error: any) {
    if (error.code === 'ENOENT') {
      return NextResponse.json([]);
    }
    console.error('Error reading clients directory:', error);
    return NextResponse.json({ error: 'Failed to fetch clients' }, { status: 500 });
  }
}
