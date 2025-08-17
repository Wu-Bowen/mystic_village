import React, { useEffect, useState } from 'react';
import { NavPortal } from './navportal';
import { NavMenu } from './navmenu';
import sign from './../../assets/images/sign.png';
import { Link } from 'react-router-dom';
import '../styles/navigation.scss';
import { deviceScreenType, getDeviceScreenType } from '../../utils/functions';
import favicon from './../../assets/images/favicon.png';
// import { IButtonStyles, IconButton } from '@fluentui/react'; // Temporarily disabled for React 18 migration
import { NavItem } from './navitem';

// Navigation button styles temporarily disabled for React 18 migration
// const navButtonStyles: IButtonStyles = {
//     root: {
//         margin: '10px',
//         backgroundColor: 'transparent',
//         '&:hover': {
//             backgroundColor: 'transparent',
//         },
//         ':active': {
//             backgroundColor: 'transparent',
//         },
//         ':focus': {
//             backgroundColor: 'transparent',
//         },
//     },
// };

export const Navbar = (): JSX.Element => {
    const [screenType, setScreenType] = useState(getDeviceScreenType());
    const [isNavOpen, setIsNavOpen] = useState(false);

    useEffect(() => {
        document.body.style.overflow = isNavOpen ? 'hidden' : 'unset';
    }, [isNavOpen]);

    useEffect(() => {
        function handleResize() {
            setScreenType(getDeviceScreenType());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const closeNav = () => {
        setIsNavOpen(false);
    };

    return (
        <div className="nav">
            {screenType === deviceScreenType.large ? <NavPortal /> : null}
            {screenType === deviceScreenType.mobile ? (
                <>
                    <div className="navTopMobile">
                        <div className="navTopMobileLeft">
                            <Link to="./">
                                <img
                                    src={favicon}
                                    width={48}
                                    style={{ padding: '5px' }}
                                />
                            </Link>
                            <h4> Mystic Village Apartments</h4>
                        </div>
                        <button
                            style={{margin: '10px', backgroundColor: 'transparent', border: 'none', fontSize: '30px', color: '#1d2959', cursor: 'pointer'}}
                            onClick={() => {
                                setIsNavOpen(!isNavOpen);
                            }}
                        >
                            ☰
                        </button>
                    </div>
                    <div className="navMobile-menu"> </div>
                    <div className="navTopMobile-margin"> </div>
                </>
            ) : (
                <div className="navTop">
                    <div className="logo">
                        <Link to="./">
                            <img
                                src={sign}
                                width={
                                    screenType === deviceScreenType.medium
                                        ? 300
                                        : 400
                                }
                            />
                        </Link>
                    </div>
                    <NavMenu />
                </div>
            )}
            {isNavOpen ? (
                <div className="nav-mobile-menu">
                    <NavItem
                        name="Home"
                        location="/"
                        isMobile
                        onClickCallback={closeNav}
                    />
                    <NavItem
                        name="Our Community"
                        location="community"
                        isMobile
                        onClickCallback={closeNav}
                    />
                    <NavItem
                        name="Available Rentals"
                        location="apartments"
                        isMobile
                        onClickCallback={closeNav}
                    />
                    {/* <NavItem name="Schedule Tour" location="tour" /> */}
                    <NavItem
                        name="Contact Us"
                        location="contact"
                        isMobile
                        onClickCallback={closeNav}
                    />
                </div>
            ) : null}
        </div>
    );
};
