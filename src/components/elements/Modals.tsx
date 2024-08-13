'use client';

import { useModals } from '@/hooks/useModals';
import { ReactNode, useEffect } from 'react';

interface ModalsProps {
  children: ReactNode;
  duration?: number;
}

export default function Modals({ children, duration }: ModalsProps) {
  const { setOpen, setContent } = useModals();

  useEffect(() => {
    setContent(<>{children}</>);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [setContent]);

  useEffect(() => {
    if (!duration) return;

    const timeoutId = setTimeout(() => {
      setOpen(false);
    }, duration);

    return () => {
      clearTimeout(timeoutId);
    };
  }, [duration, setOpen]);

  return null;
}
