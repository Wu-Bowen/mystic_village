import React from 'react';
import '../styles/footer.scss';
import { Icon } from '@fluentui/react/lib/Icon';

const PhoneIcon = (): JSX.Element => {
    return <Icon iconName="Phone" style={{ paddingRight: '3vw' }} />;
};

const MailIcon = (): JSX.Element => {
    return <Icon iconName="Mail" style={{ paddingRight: '3vw' }} />;
};

const MapIcon = (): JSX.Element => {
    return <Icon iconName="MapPin" style={{ paddingRight: '3vw' }} />;
};

export const Footer = (): JSX.Element => (
    <div className="footer">
        <div className="footer-content-container">
            <div className="footer-content-title">Contact Us</div>
            <div className="footer-content-inner-container">
                <div className="footer-content">860-857-0469</div>
                <div className="footer-content">
                    Kaerholding888@gmail.com
                </div>
                <div className="footer-content">
                    250 Goldstar Highway
                </div>
            </div>
        </div>
    </div>
);
