import Link from 'next/link';

import Session from './Session';
import { Text } from '@/components/elements/Text';
import SearchBar from './SearchBar';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';

export default function Navbar() {
  return (
    <nav className="navbar">
      <div className="flex justify-between items-center">
        <Text variant="heading">Tokoku</Text>
        <div className="hidden sm:block">
          <SearchBar />
        </div>
        <div>
          <div className="flex justify-center items-center gap-3">
            <Link
              href="/cart"
              className="text-primary-light hover:text-primary-light/70 dark:text-primary-dark dark:hover:text-primary-dark/70 transition-colors duration-200"
            >
              <FontAwesomeIcon icon={faShoppingCart} />
            </Link>
            <div className="w-px h-6 bg-primary-light/70 dark:bg-primary-dark/70" />
            <Session />
          </div>
        </div>
      </div>
      <div className="flex w-full mt-3 justify-center sm:hidden">
        <SearchBar />
      </div>
    </nav>
  );
}
