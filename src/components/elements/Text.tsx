export function Text({
  children,
  className,
  variant = 'body',
}: {
  children: React.ReactNode;
  className?: string;
  variant?: 'heading' | 'subheading' | 'body' | 'caption' | 'label';
}) {
  switch (variant) {
    case 'heading':
      return (
        <h1 className={`text-2xl font-bold ${className || ''}`}>{children}</h1>
      );
    case 'subheading':
      return (
        <h2 className={`text-lg font-semibold ${className || ''}`}>
          {children}
        </h2>
      );

    case 'body':
      return <p className={`text-base ${className || ''}`}>{children}</p>;

    case 'caption':
      return (
        <p
          className={`text-sm text-opacity-70 text-text-light dark:text-text-dark ${className || ''}`}
        >
          {children}
        </p>
      );

    case 'label':
      return (
        <p className={`text-sm font-bold ${className || ''}`}>{children}</p>
      );
  }
}

export function TextSkeleton({
  className,
  variant = 'body',
}: {
  className?: string;
  variant?: 'heading' | 'subheading' | 'body' | 'caption' | 'label';
}) {
  switch (variant) {
    case 'heading':
      return (
        <div
          className={`animate-pulse pt-1 h-6 bg-skeleton-light dark:bg-skeleton-dark rounded-md ${className || ''}`}
        />
      );
    case 'subheading':
      return (
        <div
          className={`animate-pulse pt-h-[1.125rem] bg-skeleton-light dark:bg-skeleton-dark rounded-md ${className || ''}`}
        />
      );

    case 'body':
      return (
        <div
          className={`animate-pulse pt-1 h-h-4 bg-skeleton-light dark:bg-skeleton-dark rounded-md ${className || ''}`}
        />
      );

    case 'caption':
      return (
        <div
          className={`animate-pulse pt-1 h-3.5 bg-skeleton-light dark:bg-skeleton-dark rounded-md ${className || ''}`}
        />
      );

    case 'label':
      return (
        <div
          className={`animate-pulse pt-1 h-3.5 bg-skeleton-light dark:bg-skeleton-dark rounded-md ${className || ''}`}
        />
      );
  }
}
