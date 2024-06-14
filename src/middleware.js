import { NextResponse } from 'next/server';
import { cookies } from 'next/headers';

const protectedRoutes = ['/booking', '/[booking]'];
const authRoutes = ['/auth']

export default function middleware(req) {
  const { pathname } = req.nextUrl;
  const isProtectedRoute = protectedRoutes.some(route => pathname.startsWith(route));


  const isauthRoute = authRoutes.some(route => pathname.startsWith(route));
  const allCookies = cookies();
  const cookie = allCookies.get('access-token')?.value;

  // console.log('Middleware Executed');
  // console.log('Pathname:', pathname);
  // console.log('Is Protected Route:', isProtectedRoute);
  // console.log('Cookie:', cookie);

  if (isProtectedRoute && !cookie) {
    // console.log('Redirecting to /auth');
    return NextResponse.redirect(new URL('/auth', req.nextUrl));
  }

  if (cookie && isauthRoute) {
    // console.log('Redirecting to /auth');
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
  }

  if (pathname === '/') {
    // console.log('Redirecting to /dashboard');
    return NextResponse.redirect(new URL('/dashboard', req.nextUrl));
  }
  

  return NextResponse.next();
}

export const config = {
  matcher: [
    '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}
