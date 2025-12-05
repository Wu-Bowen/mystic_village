import { useEffect, useState } from 'react';
import homepage1 from './../../../assets/images/homepage/homepage1.jpg';
import homepage2 from './../../../assets/images/homepage/homepage2.png';
import communityImage from './../../../assets/images/community/community1.png';
import {
    deviceScreenType,
    getDeviceScreenType,
} from '../../../utils/functions';

export const Homepage = (): JSX.Element => {
    const [screenType, setScreenType] = useState(getDeviceScreenType());
    useEffect(() => {
        function handleResize() {
            setScreenType(getDeviceScreenType());
        }

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const isMobile = screenType === deviceScreenType.mobile;

    return (
        <div className="pt-20">
            {/* Hero Section */}
            <section className="relative bg-gradient-to-b from-navy/5 to-white pb-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12 pt-12">
                        <h1 className="text-5xl lg:text-6xl font-bold text-navy mb-6">
                            Welcome to Mystic Village Apartments
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
                            Where extraordinary value meets superior service
                        </p>
                    </div>

                    {/* Hero Images Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                        <div className="lg:col-span-1 overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                            <img
                                src={homepage1}
                                className="w-full h-full object-cover aspect-[4/3]"
                                alt="Mystic Village Apartments - Main View"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={homepage2}
                                    className="w-full h-full object-cover aspect-square"
                                    alt="Mystic Village Apartments - Interior"
                                />
                            </div>
                            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={communityImage}
                                    className="w-full h-full object-cover aspect-square"
                                    alt="Mystic Village Apartments - Community"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* About Section */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-12 text-center">
                            About Us
                        </h2>

                        <div className="space-y-8">
                            <div className="bg-gray-50 rounded-2xl p-8 lg:p-12 shadow-md hover:shadow-lg transition-shadow duration-300">
                                <p className="text-xl lg:text-2xl text-gray-700 leading-relaxed">
                                    At 888 Holdings, the management team for Mystic Village
                                    Apartments, we have brought together a highly effective team
                                    that has in-depth experience in all aspects of real estate and
                                    property management.
                                </p>
                            </div>

                            <div className="bg-navy rounded-2xl p-8 lg:p-12 shadow-md hover:shadow-lg transition-shadow duration-300">
                                <p className="text-xl lg:text-2xl text-white leading-relaxed">
                                    In Mystic Village Apartments, we provide extraordinary value and
                                    superior service to our tenants and Airbnb guests, so they feel
                                    at Home.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Features Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-16 text-center">
                        Why Choose Us
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6 mx-auto">
                                <span className="text-3xl text-white">★</span>
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4 text-center">
                                Premium Service
                            </h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                Dedicated management team with deep expertise in property management and tenant satisfaction.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6 mx-auto">
                                <span className="text-3xl text-white">🏠</span>
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4 text-center">
                                Modern Living
                            </h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                Beautifully appointed apartments with contemporary amenities and thoughtful design.
                            </p>
                        </div>

                        <div className="bg-white rounded-2xl p-8 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                            <div className="w-16 h-16 bg-gold rounded-full flex items-center justify-center mb-6 mx-auto">
                                <span className="text-3xl text-white">📍</span>
                            </div>
                            <h3 className="text-2xl font-bold text-navy mb-4 text-center">
                                Prime Location
                            </h3>
                            <p className="text-gray-600 text-center leading-relaxed">
                                Located in the heart of Mystic with easy access to local attractions and amenities.
                            </p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
