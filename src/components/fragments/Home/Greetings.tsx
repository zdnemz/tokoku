'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { Session } from '@/types/lib';
import greetings from '@/utils/greetings';
import { useLoading } from '@/providers/Loading';

export default function Greetings() {
  const [greeting, setGreeting] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    const greetingMessage = greetings(currentHour);
    setGreeting(greetingMessage);
  }, []);

  const { data: session, status } = useSession();
  const { setLoading } = useLoading();

  useEffect(() => {
    setLoading(status === 'loading');
  }, [status, setLoading]);

  return (
    <div className="mt-3">
      <h1>
        {greeting} {(session as Session)?.user.username}!
      </h1>
      <p className="text-text-light/50 dark:text-text-dark/50">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsa,
        voluptatum.
      </p>
    </div>
  );
}
