import { auth } from '@clerk/nextjs/server';
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

// List of public routes that don't require authentication
const publicRoutes = [
  '/',
  '/sign-in',
  '/sign-up',
  '/api/uploadthing'
];

// Check if the current route is public
const isPublicRoute = (path: string) => {
  return publicRoutes.some(route => {
    const regex = new RegExp(`^${route}(/.*)?$`);
    return regex.test(path);
  });
};

export default async function middleware(req: NextRequest) {
  const { pathname } = req.nextUrl;

  // Allow public routes to be accessed without authentication
  if (isPublicRoute(pathname)) {
    return NextResponse.next();
  }

  try {
    // Check for authentication
    const { userId } = await auth();
    
    // If user is not authenticated, redirect to sign-in page
    if (!userId) {
      const signInUrl = new URL('/sign-in', req.url);
      signInUrl.searchParams.set('redirect_url', req.url);
      return NextResponse.redirect(signInUrl);
    }

    return NextResponse.next();
  } catch (error) {
    console.error('Authentication error:', error);
    // If there's an error, redirect to sign-in page
    const signInUrl = new URL('/sign-in', req.url);
    signInUrl.searchParams.set('redirect_url', req.url);
    return NextResponse.redirect(signInUrl);
  }
}

export const config = {
  matcher: [
    '/((?!.*\..*|_next).*)',
    '/',
    '/(api|trpc)(.*)'
  ],
};
