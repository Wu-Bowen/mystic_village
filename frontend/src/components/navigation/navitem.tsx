import React from 'react';
import { useNavigate } from 'react-router-dom';
import { ModernButton } from '../ModernButton';

// FluentUI styles removed - using ModernButton component instead

interface NavItemProps {
    name: string;
    isMobile?: boolean;
    buttonType?: string;
    location?: string;
    disabled?: boolean;
    onClickCallback?: () => void;
}

// Removed calloutProps for FluentUI

export const NavItem = ({
    isMobile,
    name,
    buttonType,
    location,
    disabled,
    onClickCallback,
}: NavItemProps): JSX.Element => {
    const navigate = useNavigate();
    // Removed useId hook for FluentUI

    const linkClicked = (location: string): void => {
        navigate(location);
    };
    if (buttonType === 'portalButton') {
        return disabled ? (
            <div title="Currently Under Development" style={{display: 'inline-block'}}>
                <ModernButton
                    onClick={() => {
                        linkClicked(location);
                        onClickCallback?.();
                    }}
                    disabled={disabled}
                    className="portal-button"
                >
                    {name}
                </ModernButton>
            </div>
        ) : (
            <ModernButton
                onClick={() => {
                    linkClicked(location);
                    onClickCallback?.();
                }}
                className="portal-button"
                disabled={disabled}
            >
                {name}
            </ModernButton>
        );
    }
    return (
        <button
            style={{
                fontSize: isMobile ? '22px' : '18px',
                margin: isMobile ? '50px 0 40px 0' : '0 4vw 40px 4vw',
                color: isMobile ? '#f3d89e' : 'inherit',
                background: 'transparent',
                border: 'none',
                cursor: 'pointer',
                padding: '10px'
            }}
            onClick={() => {
                linkClicked(location);
                onClickCallback?.();
            }}
            disabled={false}
        >
            {name}
        </button>
    );
};
