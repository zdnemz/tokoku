interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'fill' | 'text';
}

export default function Button({
  children,
  className,
  variant = 'fill',
  ...props
}: ButtonProps) {
  switch (variant) {
    case 'outline':
      return (
        <button
          className={`border border-primary-light/50 dark:border-primary-dark/50 py-1 px-2 text-primary-light dark:text-primary-dark rounded-md transition-all duration-300 ease-in-out hover:border-primary-light dark:hover:border-primary-dark hover:bg-primary-light dark:hover:bg-primary-dark hover:text-text-dark dark:hover:text-text-light ${className}`}
          {...props}
        >
          {children}
        </button>
      );
    case 'fill':
      return (
        <button
          className={`bg-primary-light dark:bg-primary-dark py-1 px-2 text-text-dark dark:text-text-light rounded-md transition-all duration-300 ease-in-out hover:bg-primary-light/80 dark:hover:bg-primary-dark/80 ${className}`}
          {...props}
        >
          {children}
        </button>
      );
    case 'text':
      return (
        <button
          className={`text-primary-light dark:text-primary-dark hover:text-text-light dark:hover:text-text-dark transition-all duration-300 ease-in-out group relative ${className}`}
          {...props}
        >
          <div className="absolute bg-primary-light dark:bg-primary-dark group-hover:bg-text-light dark:group-hover:bg-text-dark inset-x-0 bottom-[15%] transition-all duration-300 ease-in-out w-0 group-hover:w-full h-px" />
          {children}
        </button>
      );
  }
}
