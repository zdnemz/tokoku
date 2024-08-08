'use client';

import { useRouter } from 'next/navigation';
import { UilPrevious as Previous } from '@iconscout/react-unicons';
import { Text } from '@/components/elements/Text';

export default function SimpleNavbar() {
  const router = useRouter();

  return (
    <nav className="navbar">
      <Previous
        onClick={() => router.back()}
        className="cursor-pointer text-primary-light hover:text-primary-light/70 dark:text-primary-dark dark:hover:text-primary-dark/70 transition-colors duration-200"
      />
      <Text variant="heading">Tokoku</Text>
    </nav>
  );
}
