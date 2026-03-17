/* eslint-disable no-unused-vars */
import React from 'react';
import { motion } from 'framer-motion';
import { cn } from '../../lib/utils';
import { ArrowRight } from 'lucide-react';

const Button = React.forwardRef(({ 
  children, 
  variant = 'primary', 
  size = 'default',
  className, 
  icon = false,
  ...props 
}, ref) => {
  const baseStyles = "inline-flex items-center justify-center font-medium transition-all duration-300 rounded-sm focus:outline-none focus:ring-2 focus:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none";
  
  const variants = {
    primary: "bg-gold-500 text-neutral-100 shadow-md hover:bg-gold-600 hover:shadow-lg hover:-translate-y-0.5",
    outline: "bg-transparent text-neutral-900 border border-neutral-300 hover:bg-neutral-900 hover:text-white hover:border-neutral-900",
    white: "bg-white text-neutral-900 border border-neutral-200 hover:bg-neutral-50 shadow-sm",
    ghost: "bg-transparent hover:bg-neutral-100 text-neutral-700",
    link: "text-neutral-900 underline-offset-4 hover:underline",
  };

  const sizes = {
    default: "px-6 py-3 text-sm",
    sm: "h-9 rounded-md px-3",
    lg: "h-11 rounded-md px-8",
    icon: "h-10 w-10",
  };

  return (
    <motion.button
      ref={ref}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className={cn(baseStyles, variants[variant], sizes[size], className)}
      {...props}
    >
      {children}
      {icon && <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />}
    </motion.button>
  );
});

Button.displayName = "Button";

export default Button;
