import { NextResponse } from 'next/server';
import path from 'path';
import fs from 'fs/promises';
import sharp from 'sharp';

export async function POST(request: Request) {
  try {
    const formData = await request.formData();
    const file = formData.get('file') as File;

    if (!file) {
      return NextResponse.json({ error: 'No file provided.' }, { status: 400 });
    }

    if (!file.type.startsWith('image/')) {
      return NextResponse.json({ error: 'Invalid file type. Only images are allowed.' }, { status: 400 });
    }

    const targetDir = path.join(process.cwd(), 'public', 'client');
    await fs.mkdir(targetDir, { recursive: true });

    const files = await fs.readdir(targetDir);
    const regex = /^client-(\d+)\.webp$/;
    
    let highestId = 0;
    for (const fileName of files) {
      const match = fileName.match(regex);
      if (match) {
        const id = parseInt(match[1], 10);
        if (id > highestId) {
          highestId = id;
        }
      }
    }

    const newFilename = `client-${highestId + 1}.webp`;
    const buffer = Buffer.from(await file.arrayBuffer());

    await sharp(buffer)
      .resize(800, null, { withoutEnlargement: true })
      .webp({ quality: 80 })
      .toFile(path.join(targetDir, newFilename));

    return NextResponse.json({ success: true, filename: newFilename });
  } catch (error) {
    console.error('Upload error:', error);
    return NextResponse.json({ error: 'Failed to process file' }, { status: 500 });
  }
}
