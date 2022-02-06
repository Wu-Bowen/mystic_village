import React from 'react';
import { PrimaryButton } from '@fluentui/react';

type NavItemProps = {
    name: string;
    location?: string;
};

export const NavItem = ({ name, location }: NavItemProps) => {
    const _alertClicked = (): void => {
        alert(name);
    };

    return (
        <PrimaryButton
            text={name}
            onClick={_alertClicked}
            allowDisabledFocus
            disabled={false}
        />
    );
};
