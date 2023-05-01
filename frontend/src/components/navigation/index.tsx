import React, { useEffect, useState } from 'react';
import { NavPortal } from './navportal';
import { NavMenu } from './navmenu';
import sign from './../../assets/images/sign.png';
import { Link } from 'react-router-dom';
import '../styles/navigation.scss';
import { deviceScreenType, getDeviceScreenType } from '../../utils/functions';
import favicon from './../../assets/images/favicon.png';
import { IButtonStyles, IconButton } from '@fluentui/react';

const navButtonStyles: IButtonStyles = {
    root: {
        margin: '10px',
        backgroundColor: 'transparent',
        '&:hover': {
            backgroundColor: 'transparent',
        },
        ':active': {
            backgroundColor: 'transparent',
        },
        ':focus': {
            backgroundColor: 'transparent',
        },
    },
};

export const Navbar = (): JSX.Element => {
    const [screenType, setScreenType] = useState(getDeviceScreenType());

    useEffect(() => {
        function handleResize() {
            setScreenType(getDeviceScreenType());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="nav">
            {screenType === deviceScreenType.large ? <NavPortal /> : null}
            {screenType === deviceScreenType.mobile ? (
                <>
                    <div className="navTopMobile">
                        <div className="navTopMobileLeft">
                            <img
                                src={favicon}
                                width={48}
                                style={{ padding: '5px' }}
                            />
                            <h4> Mystic Village Apartments</h4>
                        </div>
                        <IconButton
                            styles={navButtonStyles}
                            iconProps={{
                                iconName: 'GlobalNavButton',
                                styles: { root: { fontSize: '30px' } },
                            }}
                            width={48}
                            height={48}
                        />
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
        </div>
    );
};
