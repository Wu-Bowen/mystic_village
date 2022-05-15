import { IButtonStyles, PrimaryButton } from '@fluentui/react/lib/Button';
import React, { useEffect, useState } from 'react';
import floorplanBedroom from './../../../assets/images/floorplan1BR.jpg';
import floorplanStudio from './../../../assets/images/floorplanStudio.jpg';
import { NavItem } from '../../navigation/navitem';
import '../../styles/apartments.scss';

const inactiveButton: IButtonStyles = {
    root: {
        margin: '10px',
        backgroundColor: '#adc6ed',
        borderColor: '#adc6ed',
        borderRadius: '16px',
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
        margin: '10px',
        backgroundColor: '#1d2959',
        borderColor: '#1d2959',
        borderRadius: '16px',
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

export const Apartments = (): JSX.Element => {
    const [currentOption, setCurrentOption] = useState('studio');
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
        console.log(currentOption);
    }, [currentOption]);
    return (
        <div className="Apartments">
            <div className="apartmentButtons">
                <PrimaryButton
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
        </div>
    );
};
