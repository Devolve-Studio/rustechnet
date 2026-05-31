'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

export default function AdminGallery({ images }: { images: string[] }) {
  const router = useRouter();
  const [isUploading, setIsUploading] = useState(false);
  const [deletingFile, setDeletingFile] = useState<string | null>(null);

  const handleUpload = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const formData = new FormData(e.currentTarget);
    const file = formData.get('file') as File;
    if (!file || file.size === 0) return;

    setIsUploading(true);
    try {
      const res = await fetch('/api/admin/upload', {
        method: 'POST',
        body: formData,
      });
      if (res.ok) {
        router.refresh();
        (e.target as HTMLFormElement).reset();
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to upload');
      }
    } catch (err) {
      alert('An error occurred during upload.');
    } finally {
      setIsUploading(false);
    }
  };

  const handleDelete = async (filename: string) => {
    if (!confirm(`Are you sure you want to delete ${filename}?`)) return;
    
    setDeletingFile(filename);
    try {
      const res = await fetch('/api/admin/delete', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ filename }),
      });
      if (res.ok) {
        router.refresh();
      } else {
        const data = await res.json();
        alert(data.error || 'Failed to delete');
      }
    } catch (err) {
      alert('An error occurred during deletion.');
    } finally {
      setDeletingFile(null);
    }
  };

  return (
    <div className="space-y-8">
      {/* Upload Form */}
      <div className="bg-white p-6 rounded shadow-md border border-gray-200">
        <h2 className="text-xl font-bold mb-4">Upload New Image</h2>
        <form onSubmit={handleUpload} className="flex flex-col md:flex-row md:items-center space-y-4 md:space-y-0 md:space-x-4">
          <input
            type="file"
            name="file"
            accept="image/*"
            required
            className="flex-1 block w-full text-sm text-gray-500
              file:mr-4 file:py-2 file:px-4
              file:rounded file:border-0
              file:text-sm file:font-semibold
              file:bg-blue-50 file:text-blue-700
              hover:file:bg-blue-100 cursor-pointer"
          />
          <button
            type="submit"
            disabled={isUploading}
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-2 px-6 rounded disabled:opacity-50 transition-colors whitespace-nowrap"
          >
            {isUploading ? 'Uploading...' : 'Upload Image'}
          </button>
        </form>
      </div>

      {/* Gallery */}
      <div className="bg-white p-6 rounded shadow-md border border-gray-200">
        <h2 className="text-xl font-bold mb-4">Gallery ({images.length} images)</h2>
        {images.length === 0 ? (
          <p className="text-gray-500">No images found. Upload one above!</p>
        ) : (
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
            {images.map((img) => (
              <div key={img} className="relative group rounded overflow-hidden border border-gray-200 aspect-square flex items-center justify-center bg-gray-50">
                <img
                  src={`/clients/${img}`}
                  alt={img}
                  className="max-w-full max-h-full object-contain p-2"
                />
                <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-40 transition-opacity flex items-center justify-center opacity-0 group-hover:opacity-100">
                  <button
                    onClick={() => handleDelete(img)}
                    disabled={deletingFile === img}
                    className="bg-red-600 hover:bg-red-700 text-white font-bold py-1 px-3 rounded text-sm disabled:opacity-50"
                  >
                    {deletingFile === img ? 'Deleting...' : 'Delete'}
                  </button>
                </div>
                <div className="absolute bottom-0 left-0 right-0 bg-black bg-opacity-70 text-white text-xs px-2 py-1 truncate text-center">
                  {img}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
