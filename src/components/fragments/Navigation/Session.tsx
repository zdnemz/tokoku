import Button from '@/components/elements/Button';
import { useLoading } from '@/providers/Loading';
import { signOut, useSession } from 'next-auth/react';
import Link from 'next/link';
import React from 'react';

export default function Session() {
  const { data: session, status } = useSession();
  const { setLoading } = useLoading();

  React.useEffect(() => {
    setLoading(status === 'loading');
  }, [status, setLoading]);

  return (
    <div className="flex gap-3">
      {!session ? (
        <>
          <Button variant="outline" className="font-semibold">
            <Link href="/auth/login">Login</Link>
          </Button>
          <Button variant="outline" className="font-semibold">
            <Link href="/auth/register">Register</Link>
          </Button>
        </>
      ) : (
        <>
          <Button variant="outline" className="font-semibold">
            <Link href="/profile">Profile</Link>
          </Button>
          <Button
            variant="text"
            className="font-semibold"
            onClick={() => signOut()}
          >
            Logout
          </Button>
        </>
      )}
    </div>
  );
}
