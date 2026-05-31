import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  // Bypass protection for the main /admin route (which serves the login page if unauthenticated)
  // and the auth API routes.
  if (
    pathname === '/admin' ||
    pathname === '/api/admin/login' ||
    pathname === '/api/admin/logout'
  ) {
    return NextResponse.next();
  }

  // Check for the admin session cookie
  const session = request.cookies.get('admin_session');

  if (!session) {
    // For API routes, return 401
    if (pathname.startsWith('/api/admin')) {
      return NextResponse.json({ error: 'Unauthorized' }, { status: 401 });
    }
    
    // For any other admin sub-paths, redirect to the main /admin page
    return NextResponse.redirect(new URL('/admin', request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*', '/api/admin/:path*'],
};
