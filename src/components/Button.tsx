import React from 'react';
import { FORM_URL } from '../constants';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'secondary' | 'outline';
  className?: string;
  fullWidth?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ 
  children, 
  variant = 'primary', 
  className = "",
  fullWidth = false
}) => {
  const baseStyles = "inline-flex items-center justify-center font-bold py-4 px-8 rounded-full transition-transform hover:scale-105 active:scale-95 shadow-lg text-lg";
  
  const variants = {
    primary: "bg-red-500 hover:bg-red-600 text-white border-2 border-red-500 animate-pulse-slow",
    secondary: "bg-sun-yellow hover:bg-yellow-400 text-slate-900 border-2 border-sun-yellow",
    outline: "bg-transparent border-2 border-white text-white hover:bg-white/10"
  };

  return (
    <a 
      href={FORM_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${fullWidth ? 'w-full' : ''} ${className}`}
    >
      {children}
    </a>
  );
};