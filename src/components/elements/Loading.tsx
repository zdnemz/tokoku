import Image from 'next/image';

export default function Loading() {
  return (
    <div className="z-50 fixed inset-0 w-full h-[100vh] flex justify-center items-center bg-background-light dark:bg-background-dark">
      <Image
        priority
        className="w-[40%] max-w-16"
        src={'/loading-dark.svg'}
        alt="loading"
        width={100}
        height={100}
      />
    </div>
  );
}
