import { IButtonStyles, PrimaryButton } from '@fluentui/react/lib/Button';
import React, { useEffect, useState } from 'react';
import {
    studio1,
    studio2,
    studio3,
    studio4,
    studio5,
    studio6,
    studio7,
} from './../../../assets/images/apartments/studio';
import {
    bedroom1,
    bedroom2,
    bedroom3,
    bedroom4,
    bedroom5,
    bedroom6,
    bedroom7,
} from './../../../assets/images/apartments/bedroom';
import '../../styles/apartments.scss';
import { ImageCarousel } from '../homepage/imageCarousel';

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

const studioImages: string[] = [
    studio1,
    studio2,
    studio3,
    studio4,
    studio5,
    studio6,
    studio7,
];
const bedroomImages: string[] = [
    bedroom1,
    bedroom2,
    bedroom3,
    bedroom4,
    bedroom5,
    bedroom6,
    bedroom7,
];

export const Apartments = (): JSX.Element => {
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
            <ImageCarousel images={images} />
            <div className={'apartment-details'}>
                <div>
                    <h1>Apartment Amenties</h1>
                    <div></div>
                    <div></div>
                </div>
                <div>
                    <h1> Details</h1>
                </div>
            </div>
        </div>
    );
};
