import { ReactNode, ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'copper' | 'emerald';
  size?: 'sm' | 'md' | 'lg';
  children: ReactNode;
}

export default function Button({
  variant = 'copper',
  size = 'md',
  children,
  className = '',
  ...props
}: ButtonProps) {
  const baseClasses = 'font-body font-medium rounded-lg transition-all duration-300 hover:scale-105 shadow-md hover:shadow-hover disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';

  const variantClasses = {
    primary: 'bg-emerald text-white hover:bg-emerald/90',
    secondary: 'bg-white text-charcoal border-2 border-charcoal hover:bg-charcoal hover:text-white',
    copper: 'bg-copper text-white hover:bg-copper/90',
    emerald: 'bg-emerald text-white hover:bg-emerald/90',
  };

  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-8 py-3 text-base',
    lg: 'px-10 py-4 text-lg',
  };

  const classes = `${baseClasses} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`;

  return (
    <button className={classes} {...props}>
      {children}
    </button>
  );
}
