import React from 'react';
import { NavPortal } from './navportal';
import { NavMenu } from './navmenu';
import sign from './../../assets/images/sign.png';
import { Link } from 'react-router-dom';
import '../styles/navigation.scss';

export const Navbar = (): JSX.Element => (
    <div className="nav">
        <NavPortal />
        <div className="navTop">
            <div className="logo">
                <Link to={'./'}>
                    <img src={sign} width={400} />
                </Link>
            </div>
            <NavMenu />
        </div>
    </div>
);
