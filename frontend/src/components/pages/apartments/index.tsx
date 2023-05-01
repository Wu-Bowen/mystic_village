import { IButtonStyles, PrimaryButton } from '@fluentui/react/lib/Button';
import React, { useEffect, useState } from 'react';
import { bedroomImages } from './../../../assets/images/apartments/bedroom';
import Laundry from '../../../assets/icons/laundry';
import LightBulb from '../../../assets/icons/lightbulb';
import Heat from '../../../assets/icons/heat';
import Wifi from '../../../assets/icons/wifi';
import '../../styles/apartments.scss';
import { ImageCarousel } from '../homepage/imageCarousel';
import { airbnbImages } from '../../../assets/images/apartments/airbnb';
import { studioImages } from '../../../assets/images/apartments/studio';
import {
    deviceScreenType,
    getDeviceScreenType,
} from '../../../utils/functions';

const inactiveButton: IButtonStyles = {
    root: {
        backgroundColor: '#adc6ed',
        borderColor: '#1d2959',
        borderRadius: '8px',
        color: 'black',
        fontSize: '18px',
        height: '50px',
    },
    rootHovered: {
        backgroundColor: '#213069',
        borderColor: '#1d2959',
        color: '#dfe6f2',
    },
    rootPressed: {
        backgroundColor: '#213069',
        borderColor: '#1d2959',
        color: '#dfe6f2',
    },
};

const activeButton: IButtonStyles = {
    root: {
        backgroundColor: '#1d2959',
        borderColor: '#1d2959',
        borderRadius: '8px',
        color: '#dfe6f2',
        fontSize: '18px',
        height: '50px',
    },
    rootHovered: {
        backgroundColor: '#1d2959',
        borderColor: '#1d2959',
        color: '#dfe6f2',
    },
    rootPressed: {
        backgroundColor: '#1d2959',
        borderColor: '#1d2959',
        color: '#dfe6f2',
    },
};

const studioDetails: details[] = [
    { key: 'Residents', value: '1-2 People' },
    { key: 'Bedrooms', value: '1' },
    { key: 'Bathrooms', value: '1' },
    { key: 'Size', value: '800 square ft' },
    { key: 'Leasing Period', value: '2022 - 2023' },
];
interface details {
    key: string;
    value: string;
}

export const Apartments = (): JSX.Element => {
    const [screenType, setScreenType] = useState(getDeviceScreenType());

    useEffect(() => {
        function handleResize() {
            setScreenType(getDeviceScreenType());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const [currentOption, setCurrentOption] = useState('studio');
    const [images, setImages] = useState(studioImages);

    const studioClick = () => {
        setCurrentOption('studio');
    };
    const bedroomClick = () => {
        setCurrentOption('bedroom');
    };
    const airbnbClick = () => {
        setCurrentOption('airbnb');
    };

    useEffect(() => {
        if (currentOption === 'airbnb') {
            setImages(airbnbImages);
        } else if (currentOption === 'bedroom') {
            setImages(bedroomImages);
        } else {
            setImages(studioImages);
        }
    }, [currentOption]);
    return (
        <div className="Apartments">
            <h1> Available Rentals </h1>
            <div className="apartment-buttons">
                <PrimaryButton
                    className="button-left"
                    styles={
                        currentOption === 'studio'
                            ? activeButton
                            : inactiveButton
                    }
                    text="Studio"
                    onClick={() => studioClick()}
                    allowDisabledFocus
                />
                <PrimaryButton
                    className="button-middle"
                    styles={
                        currentOption === 'bedroom'
                            ? activeButton
                            : inactiveButton
                    }
                    text="1 Bedroom"
                    onClick={() => bedroomClick()}
                    allowDisabledFocus
                />
                <PrimaryButton
                    className="button-right"
                    styles={
                        currentOption === 'airbnb'
                            ? activeButton
                            : inactiveButton
                    }
                    text="Airbnb"
                    onClick={() => airbnbClick()}
                    allowDisabledFocus
                />
            </div>
            <h1> Gallery </h1>
            <ImageCarousel
                images={images}
                isMobile={screenType === deviceScreenType.mobile}
            />
            <div className={'apartment-details'}>
                <div>
                    <h1 className={'h1-no-margin'}>Apartment Amenties</h1>
                    <div className="amenity-section">
                        <div className="amenity-left">
                            <div className="amenity-icon">
                                <Laundry />
                            </div>
                            <p className="detail-text"> On-Site Laundry</p>
                        </div>
                        <div className="amenity-right">
                            <div className="amenity-icon">
                                <LightBulb />
                            </div>
                            <p className="detail-text">Electricity</p>
                        </div>
                    </div>
                    <div className="amenity-section">
                        <div className="amenity-left">
                            <div className="amenity-icon">
                                <Heat />
                            </div>
                            <p className="detail-text">Heating/Cooling</p>
                        </div>
                        <div className="amenity-right">
                            <div className="amenity-icon">
                                <Wifi />
                            </div>
                            <p className="detail-text">Wifi</p>
                        </div>
                    </div>
                </div>
                <div>
                    <h1> Details</h1>
                    <div className="detail-section">
                        {currentOption === 'airbnb' ? (
                            <>
                                <p className="detail-text">
                                    Each Airbnb will have its individual
                                    decorations and furniture. The above images
                                    is from our lovely Haley Studio
                                </p>
                                <p className="detail-text">
                                    Go to our{' '}
                                    <a href="https://www.airbnb.com/wishlists/v/1095462513?s=67&unique_share_id=0617313d-c6a6-4891-b490-71e1883d652f">
                                        Airbnb link
                                    </a>{' '}
                                    to see details of all our avaialable airbnbs
                                </p>
                            </>
                        ) : (
                            <>
                                {studioDetails.map((detail, i) => {
                                    return (
                                        <div className="detail-item" key={i}>
                                            <p className="detail-text detail-text-bold">
                                                {detail.key}
                                            </p>
                                            <p className="detail-text">
                                                {detail.value}
                                            </p>
                                        </div>
                                    );
                                })}
                            </>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};
