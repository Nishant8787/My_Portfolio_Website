import React, { ButtonHTMLAttributes } from 'react';
import { motion } from 'framer-motion';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'outline' | 'ghost' | 'link';
  size?: 'sm' | 'md' | 'lg';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  className = '',
  ...props
}) => {
  const baseStyles = 'inline-flex items-center justify-center rounded-md font-medium transition-colors focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-offset-2 disabled:opacity-50';
  
  const variantStyles = {
    primary: 'bg-primary-600 text-white hover:bg-primary-700 shadow-sm',
    secondary: 'bg-secondary-600 text-white hover:bg-secondary-700 shadow-sm',
    outline: 'border border-primary-600 text-primary-600 bg-transparent hover:bg-primary-50',
    ghost: 'bg-transparent hover:bg-primary-50 text-primary-600',
    link: 'bg-transparent underline-offset-4 hover:underline text-primary-600 p-0',
  };
  
  const sizeStyles = {
    sm: 'text-sm px-3 py-1.5',
    md: 'text-base px-4 py-2',
    lg: 'text-lg px-6 py-3',
  };
  
  const buttonClasses = `${baseStyles} ${variantStyles[variant]} ${variant !== 'link' ? sizeStyles[size] : ''} ${className}`;
  
  return (
    <motion.button
      whileHover={{ scale: variant !== 'link' ? 1.03 : 1 }}
      whileTap={{ scale: variant !== 'link' ? 0.98 : 1 }}
      className={buttonClasses}
      {...props}
    >
      {children}
    </motion.button>
  );
};

export default Button;