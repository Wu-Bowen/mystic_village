import React from 'react';
import { NavPortal } from './navportal';
import { NavMenu } from './navmenu';

export const Navbar = (): JSX.Element => (
    <div className="nav">
        <NavPortal />
        <NavMenu />
    </div>
);
