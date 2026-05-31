'use client';

import { useRouter } from 'next/navigation';

export default function LogoutButton() {
  const router = useRouter();

  const handleLogout = async () => {
    try {
      const res = await fetch('/api/admin/logout', { method: 'POST' });
      if (res.ok) {
        router.refresh();
      }
    } catch (err) {
      console.error('Logout failed', err);
    }
  };

  return (
    <button 
      onClick={handleLogout}
      className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline transition-colors"
    >
      Logout
    </button>
  );
}
