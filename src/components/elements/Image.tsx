'use client';

import NextImage from 'next/image';
import type { ImageProps } from 'next/image';
import { useState } from 'react';

export default function Image({ className, ...props }: ImageProps) {
  const [isLoading, setIsLoading] = useState(true);

  function onLoad() {
    setIsLoading(false);
  }

  return (
    <div className={className || ''}>
      <NextImage
        className={`w-full h-full object-cover object-center`}
        {...props}
        width={100}
        height={100}
        onLoad={onLoad}
      />
      {isLoading && (
        <div className="w-full h-full object-cover object-center bg-yellow-400 animate-pulse" />
      )}
    </div>
  );
}
