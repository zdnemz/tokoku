'use client';

import Footer from '@/components/elements/Footer';
import SimpleNavbar from '@/components/fragments/Navigation/SimpleNavbar';
import Auth from '@/layouts/Auth';
import { Session } from '@/types/lib';
import { useSession } from 'next-auth/react';

export default function Profile() {
  const { data: session } = useSession();
  return (
    <>
      <title>Profile | {(session as Session).user.username}</title>
      <SimpleNavbar />
      <Auth>
        <h1>Profile</h1>
      </Auth>
      <Footer />
    </>
  );
}
