import React from 'react';
import {
    PrimaryButton,
    ActionButton,
    IButtonStyles,
} from '@fluentui/react/lib/Button';
import '../scss/navitem.scss';

interface NavItemProps {
    name: string;
    buttonType?: string;
    location?: string;
}

const portalButtonStyles: IButtonStyles = {
    root: {
        margin: '10px',
        width: '175px',
        backgroundColor: '#1d2959',
        borderColor: '#1d2959',
        color: '#f3d89e',
    },
    rootHovered: {
        backgroundColor: '#28397d',
        color: '#f3d89e',
    },
};

export const NavItem = ({ name, buttonType, location }: NavItemProps) => {
    const alertClicked = (): void => {
        alert(name);
    };
    if (buttonType === 'portalButton') {
        return (
            <PrimaryButton
                styles={portalButtonStyles}
                text={name}
                onClick={alertClicked}
                allowDisabledFocus
                disabled={false}
            />
        );
    }
    return (
        <ActionButton
            className="menuButton"
            text={name}
            onClick={alertClicked}
            allowDisabledFocus
            disabled={false}
        />
    );
};
