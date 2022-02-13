import React from 'react';
import { NavItem } from './navitem';
import '../styles/navportal.scss';

export const NavPortal = (): JSX.Element => (
    <div className="portal">
        <NavItem buttonType="portalButton" name="Apply Now" location='application'/>
        <NavItem buttonType="portalButton" name="Resident Portal" location='portal'/>
    </div>
);
