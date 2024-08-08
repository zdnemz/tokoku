import Link from 'next/link';
import { UilShoppingCart as Cart } from '@iconscout/react-unicons';
import Session from './Session';
import { Text } from '@/components/elements/Text';

export default function Navbar() {
  return (
    <nav className="navbar">
      <Text variant="heading">Tokoku</Text>
      <div>
        <div className="flex justify-center items-center gap-3">
          <Link
            href="/cart"
            className="text-primary-light hover:text-primary-light/70 dark:text-primary-dark dark:hover:text-primary-dark/70 transition-colors duration-200"
          >
            <Cart />
          </Link>
          <div className="w-px h-6 bg-primary-light/70 dark:bg-primary-dark/70" />
          <Session />
        </div>
      </div>
    </nav>
  );
}
