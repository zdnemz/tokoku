'use client';

import Button from '@/components/elements/Button';
import Modals from '@/components/elements/Modals';
import { Text } from '@/components/elements/Text';
import { useModals } from '@/hooks/useModals';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

export default function Session() {
  const { data: session } = useSession();
  const { setOpen } = useModals();

  return (
    <div className="flex gap-3">
      {!session ? (
        <>
          <Link href="/auth/login">
            <Button variant="outline" className="font-semibold">
              Login
            </Button>
          </Link>
          <Link href="/auth/register">
            <Button variant="outline" className="font-semibold">
              Register
            </Button>
          </Link>
        </>
      ) : (
        <>
          <Link href="/profile">
            <Button variant="outline" className="font-semibold">
              Profile
            </Button>
          </Link>
          <Button
            variant="text"
            className="font-semibold"
            onClick={() => setOpen(true)}
          >
            Logout
          </Button>
          <Modals>
            <div className="w-56 flex flex-col gap-3">
              <Text variant="subheading">
                Kamu yakin ingin keluar dari akunmu ?
              </Text>
              <div className="flex w-full justify-between">
                <Button onClick={() => setOpen(false)}>Gajadi</Button>
                <Button
                  variant="fill"
                  colors="danger"
                  className="font-semibold"
                  onClick={() => signOut()}
                >
                  Keluar
                </Button>
              </div>
            </div>
          </Modals>
        </>
      )}
    </div>
  );
}
