'use client';

import { useRouter } from 'next/navigation';
import { Text } from '@/components/elements/Text';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';

export default function SimpleNavbar() {
  const router = useRouter();

  return (
    <nav className="navbar flex justify-between items-center">
      <FontAwesomeIcon
        icon={faChevronLeft}
        onClick={() => router.back()}
        className="cursor-pointer text-primary-light hover:text-primary-light/70 dark:text-primary-dark dark:hover:text-primary-dark/70 transition-colors duration-200"
      />
      <Text variant="heading">Tokoku</Text>
    </nav>
  );
}
