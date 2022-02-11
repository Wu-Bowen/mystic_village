import React from 'react';
import { NavItem } from './navitem';
import '../scss/navportal.scss';

export const NavPortal = () => (
    <div className="portal">
        <NavItem buttonType="portalButton" name="Apply Now" />
        <NavItem buttonType="portalButton" name="Resident Portal" />
    </div>
);
