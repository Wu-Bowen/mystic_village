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
        <div className="officeHours">
            <h1> Office Hours </h1>
            <div className="time">
                <p className="date">Monday</p>
                <p> 9am - 6pm</p>
            </div>
            <div className="time">
                <p className="date">Tuesday</p>
                <p> 9am - 6pm</p>
            </div>
            <div className="time">
                <p className="date">Wednesday</p>
                <p> 9am - 6pm</p>
            </div>
            <div className="time">
                <p className="date">Thursday</p>
                <p> 9am - 6pm</p>
            </div>
            <div className="time">
                <p className="date">Friday</p>
                <p> 9am - 6pm</p>
            </div>
        </div>
        <div className="contact">
            <div className="contact-item">
                <PhoneIcon />
                <div className={'contact-text'}>(860)-857-0369</div>
            </div>
            <div className="contact-item">
                <MailIcon />
                <div className={'contact-text'}>kaerholding88@gmail.com</div>
            </div>
            <div className="contact-item">
                <MapIcon />
                <div className={'contact-text'}>2350 gold star highway</div>
            </div>
        </div>
        <div className="legal">
            <div className="legal-item">Privacy Policy</div>
            <div className="legal-item">DMCA Agent</div>
            <div className="legal-item">Disclosure and Licenses</div>
            <div className="legal-item">Copyright Mystic Apartments</div>
        </div>
    </div>
);
