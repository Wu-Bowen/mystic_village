import React from 'react';
import '../styles/footer.scss';
import { IIconStyles, Icon } from '@fluentui/react/lib/Icon';

const iconStyles: IIconStyles = {
    root: {
        paddingBottom: '10px',
    },
};

const PhoneIcon = (): JSX.Element => {
    return <Icon iconName="Phone" styles={iconStyles} />;
};

const MailIcon = (): JSX.Element => {
    return <Icon iconName="Mail" styles={iconStyles} />;
};

const MapIcon = (): JSX.Element => {
    return <Icon iconName="MapPin" styles={iconStyles} />;
};

export const Footer = (): JSX.Element => (
    <div className="footer">
        <div className="footer-content-container">
            <div className="footer-content-title">Contact Us</div>
            <div className="footer-content-inner-container">
                <div className="footer-content-container">
                    <PhoneIcon />
                    <div className="footer-content">860-608-9661</div>
                    <div className="footer-content">860-857-0369</div>
                    <div className="footer-content">860-912-7315</div>
                </div>
                <div className="footer-content-container">
                    <MailIcon />
                    <div className="footer-content">MalerbaKaer@gmail.com</div>
                </div>
                <div className="footer-content-container">
                    <MapIcon />
                    <div className="footer-content">
                        2350 Goldstar Highway, Mystic
                    </div>
                </div>
            </div>
        </div>
    </div>
);
