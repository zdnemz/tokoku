interface DividerProps {
  className?: string;
  variant?: 'horizontal' | 'vertical';
  children?: React.ReactNode;
}

export default function Divider({
  className,
  variant = 'horizontal',
  children,
}: DividerProps) {
  switch (variant) {
    case 'horizontal':
      return (
        <div
          className={`${
            !children
              ? 'w-full h-px bg-primary-light/70 dark:bg-primary-dark/70'
              : 'flex items-center justify-center w-full'
          } ${className}`}
        >
          {children && (
            <div className="w-full h-px bg-primary-light/70 dark:bg-primary-dark/70 mr-3" />
          )}
          {children}
          {children && (
            <div className="w-full h-px bg-primary-light/70 dark:bg-primary-dark/70 ml-3" />
          )}
        </div>
      );
    case 'vertical':
      return (
        <div
          className={`${
            !children
              ? 'w-px min-h-4 bg-primary-light/70 dark:bg-primary-dark/70'
              : ''
          } ${className}`}
        >
          {children && (
            <div className="w-px min-h-4 bg-primary-light/70 dark:bg-primary-dark/70 mb-3" />
          )}
          {children}
          {children && (
            <div className="w-px min-h-4 bg-primary-light/70 dark:bg-primary-dark/70 mt-3" />
          )}
        </div>
      );
    default:
      return null;
  }
}
