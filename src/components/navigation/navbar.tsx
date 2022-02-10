import React from 'react';
import { NavItem } from './navitem';
import '../scss/navbar.scss';

const portalStyles = {
    float: 'right',
    display: 'flex',
    flexDirection: 'column',
};
export const Navbar = () => (
    <div className="nav">
        <div className="login">
            <NavItem name="Apply Now" />
            <NavItem name="Resident Portal" />
        </div>
        <NavItem name="Our Community" />
        <NavItem name="Available Apartments" />
        <NavItem name="Schedule Tour" />
        <NavItem name="Contact Us" />
    </div>
);
