import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
	// Перенаправляем /admin на статическую админку
	if (request.nextUrl.pathname === '/admin') {
		return NextResponse.redirect(new URL('/admin/index.html', request.url))
	}
}

export const config = {
	matcher: '/admin'
} 