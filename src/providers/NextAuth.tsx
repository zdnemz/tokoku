'use client';

import { SessionProvider, useSession } from 'next-auth/react';
import * as React from 'react';
import Loading from '@/components/elements/Loading';

export default function NextAuthProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <SessionProvider>
      <Auth>{children}</Auth>
    </SessionProvider>
  );
}

function Auth({ children }: { children: React.ReactNode }) {
  const { status } = useSession();

  if (status !== 'loading') {
    return <>{children}</>;
  }
  return <Loading />;
}
