import React, { useEffect, useState } from 'react';
import '../styles/footer.scss';
// import { IIconStyles, Icon } from '@fluentui/react/lib/Icon'; // Temporarily disabled for React 18 migration
import { getDeviceScreenType } from '../../utils/functions';
import { deviceScreenType } from '../../utils/functions';

// const iconStyles: IIconStyles = { // Temporarily disabled for React 18 migration
//     root: {
//         paddingBottom: '10px',
//     },
// };

const PhoneIcon = (): JSX.Element => {
    return <span style={{paddingBottom: '10px'}}>📞</span>; // Temporary replacement
};

const MailIcon = (): JSX.Element => {
    return <span style={{paddingBottom: '10px'}}>✉️</span>; // Temporary replacement
};

const MapIcon = (): JSX.Element => {
    return <span style={{paddingBottom: '10px'}}>📍</span>; // Temporary replacement
};

export const Footer = (): JSX.Element => {
    const [screenType, setScreenType] = useState(getDeviceScreenType());

    useEffect(() => {
        function handleResize() {
            setScreenType(getDeviceScreenType());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="footer">
            <div className="footer-content-container">
                <div className="footer-content-title">Contact Us</div>
                <div className="footer-content-inner-container">
                    <div className="footer-content-container">
                        {screenType !== deviceScreenType.mobile ? (
                            <PhoneIcon />
                        ) : null}

                        <div className="footer-content">860-608-9661</div>
                        <div className="footer-content">860-857-0369</div>
                        <div className="footer-content">860-912-7315</div>
                    </div>
                    <div className="footer-content-container">
                        {screenType !== deviceScreenType.mobile ? (
                            <MailIcon />
                        ) : null}
                        <div className="footer-content">
                            MalerbaKaer@gmail.com
                        </div>
                    </div>
                    <div className="footer-content-container">
                        {screenType !== deviceScreenType.mobile ? (
                            <MapIcon />
                        ) : null}
                        <div className="footer-content">
                            2350 Goldstar Highway, Mystic
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};
