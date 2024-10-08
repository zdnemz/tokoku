import Main from '@/layouts/Main';
import { Navbar } from '@/components/fragments/Navigation';
import {
  Carousel,
  Categories,
  Greetings,
  Promo,
  Voucher,
} from '@/components/fragments/Home';
import Image from 'next/image';

export default function Home() {
  return (
    <>
      <Navbar />
      <Main className="min-h-[200vh]">
        <Carousel className="mt-16 sm:mt-0" auto>
          {Array.from({ length: 3 }, (_, index) => (
            <div key={index} className="w-full">
              <Image
                src={`/${index + 1}.jpg`}
                alt="image"
                width={1920}
                height={1080}
              />
            </div>
          ))}
        </Carousel>
        <Greetings />
        <Categories />
        <Promo />
        <Voucher />
      </Main>
    </>
  );
}
