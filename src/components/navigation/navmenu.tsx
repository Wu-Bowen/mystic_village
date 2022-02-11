import React from 'react';
import { NavItem } from './navitem';
import '../scss/navmenu.scss';

export const NavMenu = () => (
    <div className="menu">
        <NavItem name="Our Community" />
        <NavItem name="Available Apartments" />
        <NavItem name="Schedule Tour" />
        <NavItem name="Contact Us" />
    </div>
);
