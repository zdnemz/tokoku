import Link from 'next/link';
import Cart from '@mui/icons-material/ShoppingCartOutlined';
import Session from './Session';

export default function Navbar() {
  return (
    <nav className="navbar">
      <h1>Tokoku</h1>
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
