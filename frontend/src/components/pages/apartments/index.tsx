import { useEffect, useState } from 'react';
import { ModernButton } from '../../ModernButton';
import { bedroomImages } from './../../../assets/images/apartments/bedroom';
import Laundry from '../../../assets/icons/laundry';
import LightBulb from '../../../assets/icons/lightbulb';
import Heat from '../../../assets/icons/heat';
import Wifi from '../../../assets/icons/wifi';
import { OptimizedImageCarousel } from '../../OptimizedImageCarousel';
import { airbnbImages } from '../../../assets/images/apartments/airbnb';
import { studioImages } from '../../../assets/images/apartments/studio';
import {
    deviceScreenType,
    getDeviceScreenType,
} from '../../../utils/functions';

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

    const isMobile = screenType === deviceScreenType.mobile;

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="bg-gradient-to-b from-navy/5 to-white py-12">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-8">
                        <h1 className="text-4xl lg:text-5xl font-bold text-navy mb-4">
                            Available Rentals
                        </h1>
                        <p className="text-lg lg:text-xl text-gray-600 max-w-3xl mx-auto">
                            Discover your perfect living space in Mystic Village
                        </p>
                    </div>

                    {/* Filter Buttons */}
                    <div className="flex flex-col sm:flex-row justify-center gap-3 mb-8">
                        <ModernButton
                            className="w-full sm:w-auto min-w-[140px]"
                            isActive={currentOption === 'studio'}
                            onClick={() => studioClick()}
                        >
                            Studio
                        </ModernButton>
                        <ModernButton
                            className="w-full sm:w-auto min-w-[140px]"
                            isActive={currentOption === 'bedroom'}
                            onClick={() => bedroomClick()}
                        >
                            1 Bedroom
                        </ModernButton>
                        <ModernButton
                            className="w-full sm:w-auto min-w-[140px]"
                            isActive={currentOption === 'airbnb'}
                            onClick={() => airbnbClick()}
                        >
                            Airbnb
                        </ModernButton>
                    </div>

                    {/* Gallery and Details Side by Side */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mt-8">
                        {/* Left: Gallery */}
                        <div className="bg-white rounded-2xl shadow-xl p-4">
                            <h2 className="text-2xl font-bold text-navy mb-4 text-center">
                                Gallery
                            </h2>
                            <div className="bg-gray-50 rounded-xl">
                                <OptimizedImageCarousel
                                    images={images}
                                    isMobile={isMobile}
                                />
                            </div>
                        </div>

                        {/* Right: Details */}
                        <div className="space-y-6">
                            {/* Amenities Card */}
                            <div className="bg-gradient-to-br from-navy/5 to-white rounded-2xl p-5 shadow-lg">
                                <h3 className="text-xl font-bold text-navy mb-4">
                                    Apartment Amenities
                                </h3>
                                <div className="grid grid-cols-2 gap-3">
                                    <div className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow-sm">
                                        <div className="w-8 h-8 flex items-center justify-center bg-navy/10 rounded-lg flex-shrink-0">
                                            <div className="w-4 h-4">
                                                <Laundry />
                                            </div>
                                        </div>
                                        <p className="text-sm text-navy font-medium">On-Site Laundry</p>
                                    </div>
                                    <div className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow-sm">
                                        <div className="w-8 h-8 flex items-center justify-center bg-navy/10 rounded-lg flex-shrink-0">
                                            <div className="w-4 h-4">
                                                <LightBulb />
                                            </div>
                                        </div>
                                        <p className="text-sm text-navy font-medium">Electricity</p>
                                    </div>
                                    <div className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow-sm">
                                        <div className="w-8 h-8 flex items-center justify-center bg-navy/10 rounded-lg flex-shrink-0">
                                            <div className="w-4 h-4">
                                                <Heat />
                                            </div>
                                        </div>
                                        <p className="text-sm text-navy font-medium">Heating/Cooling</p>
                                    </div>
                                    <div className="flex items-center space-x-2 p-2 bg-white rounded-lg shadow-sm">
                                        <div className="w-8 h-8 flex items-center justify-center bg-navy/10 rounded-lg flex-shrink-0">
                                            <div className="w-4 h-4">
                                                <Wifi />
                                            </div>
                                        </div>
                                        <p className="text-sm text-navy font-medium">Wifi</p>
                                    </div>
                                </div>
                            </div>

                            {/* Details Card */}
                            <div className="bg-gradient-to-br from-gold/10 to-white rounded-2xl p-5 shadow-lg">
                                <h3 className="text-xl font-bold text-navy mb-4">
                                    Details
                                </h3>
                                {currentOption === 'airbnb' ? (
                                    <div className="space-y-3">
                                        <div className="p-3 bg-white rounded-lg border-l-4 border-gold shadow-sm">
                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                Each Airbnb will have its individual decorations and furniture.
                                                The above images is from our lovely Haley Studio.
                                            </p>
                                        </div>
                                        <div className="p-3 bg-white rounded-lg border-l-4 border-gold shadow-sm">
                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                Visit our{' '}
                                                <a
                                                    href="https://www.airbnb.com/wishlists/v/1095462513?s=67&unique_share_id=0617313d-c6a6-4891-b490-71e1883d652f"
                                                    className="text-navy font-semibold underline hover:text-gold transition-colors duration-200"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                >
                                                    Airbnb listing
                                                </a>{' '}
                                                to see details of all our available Airbnbs.
                                            </p>
                                        </div>
                                    </div>
                                ) : (
                                    <div className="space-y-2">
                                        {studioDetails.map((detail, i) => {
                                            return (
                                                <div
                                                    className="flex justify-between items-center p-3 bg-white rounded-lg hover:shadow-md transition-shadow duration-200"
                                                    key={i}
                                                >
                                                    <p className="text-sm text-navy font-bold">
                                                        {detail.key}
                                                    </p>
                                                    <p className="text-sm text-gray-700">
                                                        {detail.value}
                                                    </p>
                                                </div>
                                            );
                                        })}
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
