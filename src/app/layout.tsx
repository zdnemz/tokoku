import type { Metadata } from 'next';
import { Poppins } from 'next/font/google';
import './globals.css';
import '@fortawesome/fontawesome-svg-core/styles.css';
import NextAuthProvider from '@/providers/NextAuth';
import { Toaster } from 'react-hot-toast';
import Footer from '@/components/elements/Footer';
import { ModalsProvider } from '@/providers/Modals';

const poppins = Poppins({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-poppins',
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

export const metadata: Metadata = {
  title: 'Tokoku | Belanja barang impianmu',
  description:
    'Belanja barang impianmu dengan mudah dan nyaman di Tokoku. Cari dan belanja barang impianmu di Tokoku.',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={poppins.variable}>
        <NextAuthProvider>
          <ModalsProvider>
            {/* <LoadingProvider> */}
            <Toaster toastOptions={{ duration: 3000 }} position="bottom-left" />
            {children}
            <Footer />
            {/* </LoadingProvider> */}
          </ModalsProvider>
        </NextAuthProvider>
      </body>
    </html>
  );
}
