import React from 'react';
import {
    PrimaryButton,
    ActionButton,
    IButtonStyles,
} from '@fluentui/react/lib/Button';

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
        borderRadius: '8px',
        color: '#f3d89e',
        fontSize: '18px',
        height: '50px',
    },
    rootHovered: {
        backgroundColor: '#28397d',
        borderColor: '#28397d',
        color: '#f3d89e',
    },
};

const menuButtonStyles: IButtonStyles = {
    root: {
        margin: '0 4vw 40px 4vw',
        fontSize: '18px',
    },
};

export const NavItem = ({
    name,
    buttonType,
    location,
}: NavItemProps): JSX.Element => {
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
            styles={menuButtonStyles}
            text={name}
            onClick={alertClicked}
            allowDisabledFocus
            disabled={false}
        />
    );
};
