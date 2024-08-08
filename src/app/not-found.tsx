import Button from '@/components/elements/Button';
import { Text } from '@/components/elements/Text';
import { SimpleNavbar } from '@/components/fragments/Navigation';
import Main from '@/layouts/Main';
import Link from 'next/link';

export default function NotFound() {
  return (
    <>
      <SimpleNavbar />
      <Main className="flex justify-center items-center min-h-[100vh]">
        <div>
          <Text variant="heading">Ups! Halaman yang kamu cari gak ada</Text>
          <Button variant="text">
            <Link href="/">Coba cari halaman lain</Link>
          </Button>
        </div>
      </Main>
    </>
  );
}
