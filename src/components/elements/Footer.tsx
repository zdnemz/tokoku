export default function Footer() {
  return (
    <footer className="bottom-0 absolute w-full flex justify-center items-center text-text-light/70 dark:text-text-dark/70 mb-3">
      &copy; {new Date().getFullYear()} Tokoku. All rights reserved
    </footer>
  );
}
