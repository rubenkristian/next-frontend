import { getToken } from 'next-auth/jwt'
import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'
 
// This function can be marked `async` if using `await` inside
export async function middleware(request: NextRequest) {
    const token = await getToken({req: request, secret: process.env.NEXTAUTH_SECRET});
    const protectedRoutes = ['/admin'];

    const isProtected = protectedRoutes.some((route) => request.nextUrl.pathname.startsWith(route));

    if (token && request.nextUrl.pathname == '/admin/login') {
        return NextResponse.redirect(new URL('/admin', request.url));
    }
    
    if ((isProtected && request.nextUrl.pathname !== '/admin/login') && !token) {
        return NextResponse.redirect(new URL('/admin/login', request.url))
    }

    return NextResponse.next();
}
 
// See "Matching Paths" below to learn more
export const config = {
  matcher: '/admin/:path*',
}