import Image from 'next/image';

export function Avatar({ src }: { src: string }) {
  return (
    <div className="w-20 h-20 rounded-full bg-skeleton-light dark:bg-skeleton-dark overflow-hidden">
      <Image src={src} alt="avatar" width={100} height={100} />
    </div>
  );
}

export function AvatarSkeleton() {
  return (
    <div className="w-20 h-20 rounded-full bg-skeleton-light dark:bg-skeleton-dark animate-pulse" />
  );
}
