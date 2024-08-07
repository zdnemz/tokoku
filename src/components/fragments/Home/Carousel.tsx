'use client';

import * as React from 'react';
import Left from '@mui/icons-material/KeyboardArrowLeft';
import Right from '@mui/icons-material/KeyboardArrowRight';

interface CarouselProps {
  children: React.ReactNode[] | React.ReactNode;
  duration?: number;
  auto?: boolean;
  className?: string;
}

export default function Carousel(props: CarouselProps) {
  const { children, duration, auto, className } = props;

  const childrens = Array.isArray(children) ? children : [children];

  const [current, setCurrent] = React.useState(0);
  const [transform, setTransform] = React.useState(0);

  React.useEffect(() => {
    setTransform(100 * current);
  }, [current]);

  React.useEffect(() => {
    if (auto) {
      const interval = setInterval(() => {
        if (current < childrens.length - 1) {
          setCurrent(current + 1);
        } else {
          setCurrent(0);
        }
      }, duration || 5000);
      return () => {
        clearInterval(interval);
      };
    } else {
      return;
    }
  }, [current, auto, duration, childrens.length]);

  return (
    <div
      className={`w-full h-[20vw] min-h-32 relative overflow-hidden shadow-inner rounded-lg group ${
        className && className
      }`}
    >
      <Left
        className="group-hover:translate-x-4 group-hover:opacity-100 opacity-0 transition-all absolute top-1/2 translate-x-8 -translate-y-1/2 left-0 bg-background-light/70 dark:bg-background-dark/70 z-10 w-6 h-6 flex justify-center items-center rounded-full cursor-pointer icon"
        onClick={() => {
          if (current > 0) {
            setCurrent(current - 1);
          } else {
            setCurrent(childrens.length - 1);
          }
        }}
      />
      <Right
        className="group-hover:-translate-x-4 group-hover:opacity-100 opacity-0 transition-all absolute top-1/2 -translate-x-8 -translate-y-1/2 right-0 bg-background-light/70 dark:bg-background-dark/70 z-10 w-6 h-6 flex justify-center items-center rounded-full cursor-pointer icon"
        onClick={() => {
          if (current < childrens.length - 1) {
            setCurrent(current + 1);
          } else {
            setCurrent(0);
          }
        }}
      />
      <div
        className={`h-full transition-transform duration-300 ease-in-out flex`}
        style={{
          transform: `translateX(-${transform / childrens.length}%)`,
          width: `${childrens.length * 100}%`,
        }}
      >
        {children}
      </div>
    </div>
  );
}
