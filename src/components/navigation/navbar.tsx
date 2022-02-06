import React from 'react';
import { NavItem } from './navitem';

export const Navbar = () => (
    <div className="nav">
        <NavItem name="Apply Now" />
        <NavItem name="Resident Portal" />
        <NavItem name="Our Community" />
        <NavItem name="Available Apartments" />
        <NavItem name="Schedule Tour" />
        <NavItem name="Contact Us" />
    </div>
);
