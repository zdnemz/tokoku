'use client';

import { SessionProvider } from 'next-auth/react';
import * as React from 'react';

export default function NextAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return <SessionProvider>{children}</SessionProvider>;
}
