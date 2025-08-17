import React from 'react';

interface CircleIconProps {
    isSelected?: boolean;
    onClick?: () => void;
    className?: string;
}

export const CircleIcon: React.FC<CircleIconProps> = ({ 
    isSelected = false, 
    onClick, 
    className = '' 
}) => {
    return (
        <button
            onClick={onClick}
            className={`circle-icon ${isSelected ? 'selected' : ''} ${className}`}
            style={{
                width: '20px',
                height: '20px',
                borderRadius: '50%',
                border: 'none',
                backgroundColor: isSelected ? '#f3d89e' : '#1d2959',
                cursor: 'pointer',
                transition: 'background-color 0.2s ease',
                outline: 'none'
            }}
            onMouseOver={(e) => {
                if (!isSelected) {
                    e.currentTarget.style.backgroundColor = '#f3d89e';
                }
            }}
            onMouseOut={(e) => {
                if (!isSelected) {
                    e.currentTarget.style.backgroundColor = '#1d2959';
                }
            }}
            aria-label="Carousel navigation dot"
        />
    );
};