import React from 'react';
import {
    PrimaryButton,
    ActionButton,
    IButtonStyles,
} from '@fluentui/react/lib/Button';
import { useNavigate } from 'react-router-dom';
import { DirectionalHint, TooltipHost } from '@fluentui/react';
import { useId } from '@fluentui/react-hooks';

interface NavItemProps {
    name: string;
    buttonType?: string;
    location?: string;
    disabled?: boolean;
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

const calloutProps = { gapSpace: 0 };

export const NavItem = ({
    name,
    buttonType,
    location,
    disabled,
}: NavItemProps): JSX.Element => {
    const navigate = useNavigate();
    const tooltipId = useId('tooltip');

    const linkClicked = (location: string): void => {
        navigate(location);
    };
    if (buttonType === 'portalButton') {
        return disabled ? (
            <TooltipHost
                content="Currently Under Development"
                id={tooltipId}
                calloutProps={calloutProps}
                directionalHint={DirectionalHint.leftCenter}
            >
                <PrimaryButton
                    styles={portalButtonStyles}
                    text={name}
                    onClick={() => linkClicked(location)}
                    allowDisabledFocus
                    disabled={disabled}
                />
            </TooltipHost>
        ) : (
            <PrimaryButton
                styles={portalButtonStyles}
                text={name}
                onClick={() => linkClicked(location)}
                allowDisabledFocus
                disabled={disabled}
            />
        );
    }
    return (
        <ActionButton
            styles={menuButtonStyles}
            text={name}
            onClick={() => linkClicked(location)}
            allowDisabledFocus
            disabled={false}
        />
    );
};
