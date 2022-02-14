import React from 'react';
import { NavItem } from './navitem';

export const NavMenu = (): JSX.Element => (
    <div className="menu">
        <NavItem name="Home" location="/" />
        <NavItem name="Our Community" location="community" />
        <NavItem name="Available Apartments" location="apartments" />
        <NavItem name="Schedule Tour" location="tour" />
        <NavItem name="Contact Us" location="contact" />
    </div>
);
