'use client';

import Button from '@/components/elements/Button';
import { Text } from '@/components/elements/Text';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import * as React from 'react';

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

export default function Auth({ children, className }: MainProps) {
  const { data: session } = useSession();
  return (
    <main
      className={`w-full layout ${className || ''} ${!session ? 'flex justify-center items-center min-h-[100vh]' : ''}`}
    >
      {!session ? (
        <div>
          <Text variant="heading">
            Untuk mengakses halaman ini, kamu harus login dulu !
          </Text>
          <Button variant="text">
            <Link href="/auth/login">Login disini</Link>
          </Button>
        </div>
      ) : (
        <>{children}</>
      )}
    </main>
  );
}
