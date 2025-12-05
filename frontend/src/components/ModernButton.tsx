import { ReactNode } from 'react';

interface ModernButtonProps {
  children: ReactNode;
  onClick: () => void;
  isActive?: boolean;
  className?: string;
  disabled?: boolean;
}

export const ModernButton = ({
  children,
  onClick,
  isActive = false,
  className = '',
  disabled = false,
}: ModernButtonProps) => {
  const buttonClasses = `
    ${
      isActive
        ? 'bg-navy text-white'
        : 'bg-blue-200 text-black hover:bg-navy-dark hover:text-white'
    }
    border-2 border-navy rounded-lg text-lg h-12 px-5 font-medium
    transition-all duration-200 ease-in-out outline-none
    ${disabled ? 'opacity-60 cursor-not-allowed' : 'cursor-pointer'}
    ${className}
  `;

  return (
    <button
      className={buttonClasses}
      onClick={onClick}
      disabled={disabled}
      type="button"
    >
      {children}
    </button>
  );
};
