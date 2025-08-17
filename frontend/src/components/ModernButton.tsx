import React from 'react';

interface ModernButtonProps {
    children: React.ReactNode;
    onClick: () => void;
    isActive?: boolean;
    className?: string;
    disabled?: boolean;
}

export const ModernButton: React.FC<ModernButtonProps> = ({
    children,
    onClick,
    isActive = false,
    className = '',
    disabled = false
}) => {
    const baseStyles: React.CSSProperties = {
        backgroundColor: isActive ? '#1d2959' : '#adc6ed',
        borderColor: '#1d2959',
        borderRadius: '8px',
        color: isActive ? '#dfe6f2' : 'black',
        fontSize: '18px',
        height: '50px',
        border: `2px solid #1d2959`,
        cursor: disabled ? 'not-allowed' : 'pointer',
        transition: 'all 0.2s ease',
        padding: '0 20px',
        fontWeight: '500',
        outline: 'none',
        opacity: disabled ? 0.6 : 1,
    };

    const handleMouseEnter = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!disabled && !isActive) {
            e.currentTarget.style.backgroundColor = '#213069';
            e.currentTarget.style.color = '#dfe6f2';
        }
    };

    const handleMouseLeave = (e: React.MouseEvent<HTMLButtonElement>) => {
        if (!disabled && !isActive) {
            e.currentTarget.style.backgroundColor = '#adc6ed';
            e.currentTarget.style.color = 'black';
        }
    };

    return (
        <button
            style={baseStyles}
            onClick={onClick}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
            className={className}
            disabled={disabled}
        >
            {children}
        </button>
    );
};