import { Text } from '@/components/elements/Text';
import SimpleNavbar from '@/components/fragments/Navigation/SimpleNavbar';
import Auth from '@/layouts/Auth';

export default function Cart() {
  return (
    <>
      <SimpleNavbar />
      <Auth>
        <Text variant="heading">Produk dalam keranjangmu</Text>
      </Auth>
    </>
  );
}
