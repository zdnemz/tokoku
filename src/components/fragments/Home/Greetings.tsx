'use client';
import { useSession } from 'next-auth/react';
import { useEffect, useState } from 'react';

import { Session } from '@/types/lib';
import greetings from '@/utils/greetings';

const tagLines = [
  'Belanja hemat dan keren di sini! Temukan produk-produk kece dengan harga yang bikin senyum.',
  'Gak perlu repot, semua barang impianmu ada di sini. Yuk, buruan cek sekarang!',
  'Belanja seru, harga miring! Temukan barang-barang hits yang kamu banget di sini.',
  'Temukan barang-barang trendy dengan harga ramah di kantong. Yuk, belanja sekarang!',
  'Jadi yang pertama punya barang-barang kekinian. Semua ada di sini, belanja yuk!',
];

export default function Greetings() {
  const [greeting, setGreeting] = useState('');
  const [tagline, setTagline] = useState('');

  useEffect(() => {
    const currentHour = new Date().getHours();
    const greetingMessage = greetings(currentHour);
    setGreeting(greetingMessage);

    const currentTagline =
      tagLines[Math.floor(Math.random() * tagLines.length)];
    setTagline(currentTagline);
  }, []);

  const { data: session } = useSession();

  return (
    <div className="mt-3">
      <h1>
        {greeting} {(session as Session)?.user.username}!
      </h1>
      <p className="text-text-light/70 dark:text-text-dark/70">{tagline}</p>
    </div>
  );
}
