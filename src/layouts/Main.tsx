import * as React from 'react';

interface MainProps {
  children: React.ReactNode;
  className?: string;
}

export default function Main({ children, className }: MainProps) {
  return <main className={`w-full layout ${className}`}>{children}</main>;
}
