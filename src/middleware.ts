import { NextRequest, NextResponse } from 'next/server';

function redirect(url: string, origin: string) {
  const redirects = [
    {
      matcher: '^/admin$',
      redirect: '/admin/dashboard',
    },
  ];

  for (const { matcher, redirect } of redirects) {
    if (new RegExp(matcher).test(url)) {
      return NextResponse.redirect(new URL(redirect, origin));
    }
  }

  return NextResponse.next();
}

export function middleware(req: NextRequest) {
  return redirect(req.nextUrl.pathname, req.nextUrl.origin);
}
