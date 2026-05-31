import { cookies } from 'next/headers';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';
import AdminGallery from './AdminGallery';
import path from 'path';
import fs from 'fs/promises';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.has('admin_session');

  if (isAuthenticated) {
    let images: string[] = [];
    try {
      const targetDir = path.join(process.cwd(), 'public', 'clients');
      const files = await fs.readdir(targetDir);
      images = files.filter(f => f.endsWith('.webp'));
      
      // Sort numerically by ID (newest first)
      images.sort((a, b) => {
        const matchA = a.match(/^c(\d+)\.webp$/);
        const matchB = b.match(/^c(\d+)\.webp$/);
        const numA = matchA ? parseInt(matchA[1], 10) : 0;
        const numB = matchB ? parseInt(matchB[1], 10) : 0;
        return numB - numA;
      });
    } catch (err: any) {
      if (err.code !== 'ENOENT') {
        console.error('Failed to load images for admin:', err);
      }
    }

    return (
      <div className="min-h-screen p-8 bg-gray-50 text-gray-900">
        <div className="max-w-6xl mx-auto flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <LogoutButton />
        </div>
        <div className="max-w-6xl mx-auto">
          <AdminGallery images={images} />
        </div>
      </div>
    );
  }

  return <LoginForm />;
}
