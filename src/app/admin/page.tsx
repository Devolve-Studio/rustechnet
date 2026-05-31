import { cookies } from 'next/headers';
import LoginForm from './LoginForm';
import LogoutButton from './LogoutButton';

export default async function AdminPage() {
  const cookieStore = await cookies();
  const isAuthenticated = cookieStore.has('admin_session');

  if (isAuthenticated) {
    return (
      <div className="min-h-screen p-8 bg-gray-50 text-gray-900">
        <div className="max-w-4xl mx-auto flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Admin Dashboard</h1>
          <LogoutButton />
        </div>
        <div className="bg-white rounded shadow p-6">
          <p>Welcome to the admin panel. Image management will be implemented in Phase 2.</p>
        </div>
      </div>
    );
  }

  return <LoginForm />;
}
