import Button from '@/components/elements/Button';
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
];

export default function Categories() {
  return (
    <div className="py-6 overflow-x-auto">
      <Text variant="heading" className=" max-w-[75%]">
        Kategori Recommended Untukmu!
      </Text>
      <div className="flex overflow-x-auto gap-6 py-3 justify-between">
        {CategoriesData.map((category, index) => (
          <Link
            className="flex flex-col justify-center items-center w-fit group"
            href={`/products/categories/${category.name}`}
            key={category.name}
          >
            <Image
              className="w-[15vw] h-[15vw] max-h-24 max-w-24 rounded-xl overflow-hidden group-hover:opacity-80 transition-all duration-300 ease-in-out"
              src={`/${index + 1}.jpg`}
              alt={category.name}
              width={100}
              height={100}
            />
            <Text
              variant="subheading"
              className={`group-hover:text-primary-light dark:group-hover:text-primary-dark text-text-light dark:text-text-dark transition-all duration-300 ease-in-out relative`}
            >
              <div className="absolute group-hover:bg-primary-light dark:group-hover:bg-primary-dark bg-text-light dark:bg-text-dark inset-x-0 bottom-[15%] transition-all duration-300 ease-in-out w-0 group-hover:w-full h-px" />
              {category.name}
            </Text>
          </Link>
        ))}
      </div>
    </div>
  );
}
