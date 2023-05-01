import React, { useEffect, useState } from 'react';
import { NavPortal } from './navportal';
import { NavMenu } from './navmenu';
import sign from './../../assets/images/sign.png';
import { Link } from 'react-router-dom';
import '../styles/navigation.scss';
import { deviceScreenType, getDeviceScreenType } from '../../utils/functions';

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
            <div className="navTop">
                <div className="logo">
                    <Link to="./">
                        <img
                            src={sign}
                            width={
                                screenType === deviceScreenType.mobile
                                    ? 200
                                    : 400
                            }
                        />
                    </Link>
                </div>
                <NavMenu isMobile={screenType === deviceScreenType.mobile} />
            </div>
        </div>
    );
};
