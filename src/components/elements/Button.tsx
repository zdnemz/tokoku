import clsx from 'clsx';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'outline' | 'fill' | 'text';
  colors?: 'primary' | 'secondary' | 'danger';
}

export default function Button({
  children,
  className,
  variant = 'fill',
  colors = 'primary',
  ...props
}: ButtonProps) {
  const colorClasses = {
    primary: {
      text: 'text-primary-light dark:text-primary-dark',
      bg: 'bg-primary-light dark:bg-primary-dark',
      border: 'border-primary-light/50 dark:border-primary-dark/50',
      hoverText: 'hover:text-primary-dark dark:hover:text-primary-light',
      hoverBg: 'hover:bg-primary-light/80 dark:hover:bg-primary-dark/80',
    },
    secondary: {
      text: 'text-secondary-light dark:text-secondary-dark',
      bg: 'bg-secondary-light dark:bg-secondary-dark',
      border: 'border-secondary-light/50 dark:border-secondary-dark/50',
      hoverText: 'hover:text-secondary-dark dark:hover:text-secondary-light',
      hoverBg: 'hover:bg-secondary-light/80 dark:hover:bg-secondary-dark/80',
    },
    danger: {
      text: 'text-danger-light dark:text-danger-dark',
      bg: 'bg-danger-light dark:bg-danger-dark',
      border: 'border-danger-light/50 dark:border-danger-dark/50',
      hoverText: 'hover:text-danger-dark dark:hover:text-danger-light',
      hoverBg: 'hover:bg-danger-light/80 dark:hover:bg-danger-dark/80',
    },
  };

  const baseClasses =
    'py-1 px-2 rounded-md transition-all duration-300 ease-in-out';

  const variantClasses = {
    fill: clsx(
      colorClasses[colors].bg,
      'text-text-dark dark:text-text-light',
      colorClasses[colors].hoverBg,
    ),
    outline: clsx(
      'border',
      colorClasses[colors].border,
      colorClasses[colors].text,
      colorClasses[colors].hoverText,
    ),
    text: clsx(
      colorClasses[colors].text,
      'group relative',
      colorClasses[colors].hoverText,
    ),
  };

  // underline for 'text' variants
  const textVariantUnderline = variant === 'text' && (
    <div
      className={clsx(
        `absolute ${colorClasses[colors].bg} group-hover:bg-text-light dark:group-hover:bg-text-dark`,
        'inset-x-0 bottom-[15%] transition-all duration-300 ease-in-out w-0 group-hover:w-full h-px',
      )}
    />
  );

  return (
    <button
      className={clsx(baseClasses, variantClasses[variant], className)}
      {...props}
    >
      {children}
      {textVariantUnderline}
    </button>
  );
}
