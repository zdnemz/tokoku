'use client';

import { useRouter } from 'next/navigation';
import ArrowBack from '@mui/icons-material/ArrowBack';

export default function SimpleNavbar() {
  const router = useRouter();

  return (
    <nav className="navbar">
      <ArrowBack
        onClick={() => router.back()}
        className="cursor-pointer text-primary-light hover:text-primary-light/70 dark:text-primary-dark dark:hover:text-primary-dark/70 transition-colors duration-200"
      />
      <h1>Tokoku</h1>
    </nav>
  );
}
