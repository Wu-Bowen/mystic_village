import React from 'react';
import { NavItem } from './navitem';

interface NavMenuProps {
    isMobile: boolean;
}

export const NavMenu = ({ isMobile }: NavMenuProps): JSX.Element => {
    return (
        <div className="menu">
            {isMobile ? null : (
                <>
                    <NavItem name="Home" location="/" />
                    <NavItem name="Our Community" location="community" />
                    <NavItem name="Available Rentals" location="apartments" />
                    {/* <NavItem name="Schedule Tour" location="tour" /> */}
                    <NavItem name="Contact Us" location="contact" />
                </>
            )}
        </div>
    );
};
