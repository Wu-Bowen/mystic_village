import { useEffect, useState } from 'react';
import community1 from './../../../assets/images/community/community1.png';
import community2 from './../../../assets/images/community/community2.png';
import community3 from './../../../assets/images/community/community3.png';
import community4 from './../../../assets/images/community/community4.png';
import community5 from './../../../assets/images/community/community5.png';
import community6 from './../../../assets/images/community/community6.png';
import {
    deviceScreenType,
    getDeviceScreenType,
} from '../../../utils/functions';

export const Community = (): JSX.Element => {
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
            <section className="bg-gradient-to-b from-navy/5 to-white py-16">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h1 className="text-5xl lg:text-6xl font-bold text-navy mb-6">
                            Our Community
                        </h1>
                        <p className="text-xl lg:text-2xl text-gray-600 max-w-3xl mx-auto">
                            Experience the perfect blend of tranquility and convenience
                        </p>
                    </div>

                    {/* Community Images Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-12">
                        <div className="lg:col-span-1 overflow-hidden rounded-2xl shadow-2xl hover:shadow-3xl transition-shadow duration-300">
                            <img
                                src={community1}
                                className="w-full h-full object-cover aspect-[4/3]"
                                alt="Mystic Village Community - Main View"
                            />
                        </div>
                        <div className="grid grid-cols-2 gap-6">
                            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={community2}
                                    className="w-full h-full object-cover aspect-square"
                                    alt="Mystic Village Community - Nature"
                                />
                            </div>
                            <div className="overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
                                <img
                                    src={community3}
                                    className="w-full h-full object-cover aspect-square"
                                    alt="Mystic Village Community - Views"
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Description Section */}
            <section className="bg-white py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <div className="max-w-4xl mx-auto">
                        <div className="bg-gradient-to-br from-navy to-navy/90 rounded-2xl p-8 lg:p-12 shadow-xl">
                            <p className="text-xl lg:text-2xl text-white leading-relaxed text-center">
                                With serene views, peaceful vibes, and plenty of nature, many
                                are happy to call this community their home! There is a variety
                                of fun activities to do and places to see around Mystic Village
                                Apartments.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Attractions Section */}
            <section className="bg-gray-50 py-20">
                <div className="max-w-7xl mx-auto px-6 lg:px-8">
                    <h2 className="text-4xl lg:text-5xl font-bold text-navy mb-16 text-center">
                        Top Attractions Nearby
                    </h2>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {/* Mystic Aquarium */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="overflow-hidden aspect-[4/3]">
                                <img
                                    src={community4}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    alt="Mystic Aquarium"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-navy mb-4 text-center">
                                    Mystic Aquarium
                                </h3>
                                <p className="text-base text-gray-600 leading-relaxed text-center">
                                    This aquarium is about a quick 6 minute drive from
                                    Mystic Village Apartments. Here you can see cute sea
                                    creatures such as beluga whales and colorful fish!
                                </p>
                                <div className="mt-6 flex justify-center">
                                    <div className="bg-gold/10 text-gold font-semibold px-4 py-2 rounded-full text-sm">
                                        6 min drive
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Mystic Seaport */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="overflow-hidden aspect-[4/3]">
                                <img
                                    src={community5}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    alt="Mystic Seaport"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-navy mb-4 text-center">
                                    Mystic Seaport
                                </h3>
                                <p className="text-base text-gray-600 leading-relaxed text-center">
                                    The Mystic Seaport is a hot tourist spot! With its
                                    magnificent ships and beautiful museum, you'll be able
                                    to have fun and learn about the history of Mystic
                                    Seaport.
                                </p>
                                <div className="mt-6 flex justify-center">
                                    <div className="bg-navy/10 text-navy font-semibold px-4 py-2 rounded-full text-sm">
                                        Historic Attraction
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* B.F. Clyde's Cider Mill */}
                        <div className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
                            <div className="overflow-hidden aspect-[4/3]">
                                <img
                                    src={community6}
                                    className="w-full h-full object-cover hover:scale-110 transition-transform duration-500"
                                    alt="B.F. Clyde's Cider Mill"
                                />
                            </div>
                            <div className="p-6">
                                <h3 className="text-2xl font-bold text-navy mb-4 text-center">
                                    B.F. Clyde's Cider Mill
                                </h3>
                                <p className="text-base text-gray-600 leading-relaxed text-center">
                                    This cider mill has tasty cider, apples, and donuts for
                                    you to try! Fun fact: The last steam-powered cider mill
                                    in the United States is B.F. Clyde's Cider Mill!
                                </p>
                                <div className="mt-6 flex justify-center">
                                    <div className="bg-gold/10 text-gold font-semibold px-4 py-2 rounded-full text-sm">
                                        Local Favorite
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};
