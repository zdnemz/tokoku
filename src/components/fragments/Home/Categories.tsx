import Image from '@/components/elements/Image';
import { Text } from '@/components/elements/Text';
import Link from 'next/link';

const CategoriesData = [
  {
    name: 'kemeja',
    image: '/kemeja.jpg',
  },
  {
    name: 'celana',
    image: '/celana.jpg',
  },
  {
    name: 'jaket',
    image: '/jaket.jpg',
  },
  {
    name: 'baju',
    image: '/baju.jpg',
  },
  {
    name: 'sepatu',
    image: '/sepatu.jpg',
  },
  {
    name: 'hoodie',
    image: '/hoodie.jpg',
  },
  {
    name: 'kacamata',
    image: '/kacamata.jpg',
  },
  {
    name: 'tas',
    image: '/tas.jpg',
  },
  {
    name: 'celana panjang',
    image: '/celana-panjang.jpg',
  },
  {
    name: 'celana pendek',
    image: '/celana-pendek.jpg',
  },
];

export default function Categories() {
  return (
    <div className="py-6 overflow-x-auto">
      <Text variant="heading" className=" max-w-[75%]">
        Kategori Recommended Untukmu!
      </Text>
      <div className="grid grid-cols-5 gap-6 mt-4 w-full">
        {CategoriesData.map((category, index) => (
          <Link
            href={`/products/categories/${category.name}`}
            key={category.name}
          >
            <div className="flex flex-col relative overflow-hidden rounded-lg group">
              <Image
                className="w-full h-24"
                src={`/${index + 1}.jpg`}
                alt={category.name}
                width={100}
                height={100}
              />
              <div className="w-full absolute bottom-0 py-1.5 bg-text-light/70 text-text-dark flex justify-center items-center rounded-lg group-hover:py-9 group-hover:bg-text-light/50 transition-all duration-300">
                <p>{category.name}</p>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
