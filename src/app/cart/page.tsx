import Footer from '@/components/elements/Footer';
import SimpleNavbar from '@/components/fragments/Navigation/SimpleNavbar';
import Auth from '@/layouts/Auth';

export default function Cart() {
  return (
    <>
      <SimpleNavbar />
      <Auth>
        <h1>Produk dalam keranjangmu</h1>
      </Auth>
      <Footer />
    </>
  );
}
