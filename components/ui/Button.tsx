/**
 * Button Component
 * 
 * Wiederverwendbarer Button mit verschiedenen Varianten:
 * - primary: TYANA Rot mit weißem Text
 * - outline: Transparent mit Rahmen
 * - outline-white: Transparent mit weißem Rahmen (für dunkle Hintergründe)
 * - ghost: Kein Hintergrund, nur Text
 */

'use client';

import React from 'react';
import Link from 'next/link';

interface ButtonProps {
  children: React.ReactNode;
  variant?: 'primary' | 'outline' | 'outline-white' | 'ghost';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  className?: string;
  disabled?: boolean;
  icon?: React.ReactNode;
  iconPosition?: 'left' | 'right';
}

const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  href,
  onClick,
  type = 'button',
  className = '',
  disabled = false,
  icon,
  iconPosition = 'right',
}) => {
  // Basis-Klassen
  const baseClasses = `
    inline-flex items-center justify-center gap-2
    font-medium transition-all duration-300 ease-out
    rounded-none
    disabled:opacity-50 disabled:cursor-not-allowed
    focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2
  `;

  // Varianten-Klassen
  const variantClasses = {
    primary: 'bg-primary text-white hover:bg-primary-dark',
    outline: 'border-2 border-dark text-dark hover:bg-dark hover:text-white',
    'outline-white': 'border-2 border-white text-white hover:bg-white hover:text-dark',
    ghost: 'text-dark hover:text-primary underline-offset-4 hover:underline',
  };

  // Größen-Klassen
  const sizeClasses = {
    sm: 'px-4 py-2 text-sm',
    md: 'px-6 py-3 text-base',
    lg: 'px-8 py-4 text-lg',
  };

  const combinedClasses = `
    ${baseClasses}
    ${variantClasses[variant]}
    ${sizeClasses[size]}
    ${className}
  `;

  const content = (
    <>
      {icon && iconPosition === 'left' && <span className="inline-flex">{icon}</span>}
      {children}
      {icon && iconPosition === 'right' && <span className="inline-flex">{icon}</span>}
    </>
  );

  // Als Link rendern wenn href vorhanden
  if (href) {
    return (
      <Link href={href} className={combinedClasses}>
        {content}
      </Link>
    );
  }

  // Als Button rendern
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={combinedClasses}
    >
      {content}
    </button>
  );
};

export default Button;
