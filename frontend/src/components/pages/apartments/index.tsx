import { IButtonStyles, PrimaryButton } from '@fluentui/react/lib/Button';
import React, { useEffect, useState } from 'react';
import floorplanBedroom from './../../../assets/images/floorplan1BR.jpg';
import floorplanStudio from './../../../assets/images/floorplanStudio.jpg';
import { NavItem } from '../../navigation/navitem';
import '../../styles/apartments.scss';

const portalButtonStyles: IButtonStyles = {
    root: {
        margin: '10px',
        width: '150px',
        backgroundColor: '#1d2959',
        borderColor: '#1d2959',
        borderRadius: '16px',
        color: '#f3d89e',
        fontSize: '18px',
        height: '50px',
    },
    rootHovered: {
        backgroundColor: '#28397d',
        borderColor: '#28397d',
        color: '#f3d89e',
    },
};

export const Apartments = (): JSX.Element => {
    const [studio, setStudio] = useState(true);
    // const [message, setMessage] = useState(null);
    // useEffect(() => {
    //     fetch('http://localhost:3001/api')
    //         .then((res) => res.json())
    //         .then((data) => setMessage(data?.message));
    // }, []);

    const studioClick = () => {
        setStudio(true);
    };
    const bedroomClick = () => {
        setStudio(false);
    };

    return (
        <div className={'Apartments'}>
            <div className={'apartmentButtons'}>
                <PrimaryButton
                    styles={portalButtonStyles}
                    text={'Studio'}
                    onClick={() => studioClick()}
                    allowDisabledFocus
                />
                <PrimaryButton
                    styles={portalButtonStyles}
                    text={'1 Bedroom'}
                    onClick={() => bedroomClick()}
                    allowDisabledFocus
                />
                {/* <p>{!message ? 'Loading...' : message}</p> */}
            </div>
            <div className={'apartmentDetails'}>
                <img
                    className={'apartmentDetails-image'}
                    src={studio ? floorplanStudio : floorplanBedroom}
                />
                <div className={'apartmentDetails-text'}>
                    <div className={'apartmentDetails-text-airbnb'}>
                        <h2> Airbnb Booking </h2>
                        <p>
                            Details on this{' '}
                            <a
                                href={
                                    'https://www.airbnb.com/wishlists/1017702808?s=42'
                                }
                                target="_blank"
                            >
                                link
                            </a>
                        </p>
                    </div>
                    <div className={'apartmentDetails-text-rentals'}>
                        <h2> Rentals </h2>
                        <ul>
                            <li>Limited to Two People</li>
                            <li>
                                Starting Price: {studio ? ' 1000$' : ' 1200$'}
                            </li>
                            <li>Leasing Period: 1 year</li>
                        </ul>
                        <NavItem
                            buttonType={'portalButton'}
                            name={'Schedule a Tour'}
                            location={'tour'}
                            disabled={true}
                        />
                    </div>
                </div>
            </div>
            <div>
                <h1> Gallery </h1>
                <h1> Shared Infastructure </h1>
            </div>
        </div>
    );
};
