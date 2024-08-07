import { useLoading } from '@/providers/Loading';
import Image from 'next/image';

export default function Loading() {
  const { isLoading } = useLoading();

  if (!isLoading) return null;

  return (
    <div className="z-50 fixed inset-0 w-full h-[100vh] flex justify-center items-center bg-background-light dark:bg-background-dark">
      <Image src={'/loading-dark.svg'} alt="loading" width={100} height={100} />
    </div>
  );
}
