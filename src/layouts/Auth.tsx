'use client';

import Button from '@/components/elements/Button';
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
      className={`w-full layout ${className || ''} ${!session ? 'flex justify-center items-center' : ''}`}
    >
      {!session ? (
        <div>
          <h1>Untuk mengakses halaman ini, kamu harus login dulu !</h1>
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
