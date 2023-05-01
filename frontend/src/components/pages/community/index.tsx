import React, { useEffect, useState } from 'react';
import '../../styles/community.scss';
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
    return (
        <div className="community">
            <h1> Our Community </h1>

            <img
                src={community1}
                width={screenType === deviceScreenType.mobile ? '100%' : '55%'}
                style={{
                    display: 'flex',
                    margin:
                        screenType === deviceScreenType.mobile
                            ? 'auto'
                            : '40px 1% 40px 10%',
                    float: 'left',
                }}
                alt="Homepage Image"
            />
            <img
                src={community2}
                width={screenType === deviceScreenType.mobile ? '50%' : '25%'}
                style={{
                    display:
                        screenType === deviceScreenType.mobile
                            ? 'inline-block'
                            : 'flex',
                    margin:
                        screenType === deviceScreenType.mobile
                            ? '0'
                            : '61px 10% 0px 0px',
                    paddingTop:
                        screenType === deviceScreenType.mobile ? '10px' : '0px',
                }}
                alt="Homepage Image"
            />
            <img
                src={community3}
                width={screenType === deviceScreenType.mobile ? '50%' : '25%'}
                style={{
                    display:
                        screenType === deviceScreenType.mobile
                            ? 'inline-block'
                            : 'flex',
                    margin:
                        screenType === deviceScreenType.mobile
                            ? '0'
                            : '1% 10% 40px 0px',
                    paddingTop:
                        screenType === deviceScreenType.mobile ? '10px' : '0px',
                }}
                alt="Homepage Image"
            />

            <p className="text community-text">
                With serene views, peaeful vibes, and plenty of nature, plenty
                are happy to call this community their home! There is a variety
                of fun activies to do and places to see around Mystic Village
                Apartments.
            </p>
            <h1> Top Attractions Nearby</h1>
            <div className="community-image-sections">
                <div className="image-left">
                    <div className="community-image-section">
                        <img
                            className="community-image"
                            src={community4}
                            width={'100%'}
                        />
                    </div>
                    <h2> Mystic Aquarium</h2>
                    <p className="text community-image-text">
                        This aquarium is about a quick 6 minute drive from
                        Mystic Village Apartments. Here you can see cute sea
                        creatures such as beluga whales and colorful fish!
                    </p>
                </div>

                <div className="image-middle">
                    <div className="community-image-section">
                        <img
                            className="community-image"
                            src={community5}
                            width={'100%'}
                        />
                    </div>
                    <h2> Mystic Seaport</h2>
                    <p className="text community-image-text">
                        The Mystic Seaport is a hot tourist spot! With its
                        magnificent ships and beautiful museium, you'll be able
                        to have fun and learn about the history of Mystic
                        Seaport.
                    </p>
                </div>
                <div className="image-right">
                    <div className="community-image-section">
                        <img
                            className="community-image"
                            src={community6}
                            width={'100%'}
                        />
                    </div>
                    <h2> B.F. Clyde's Cider Mill</h2>
                    <p className="text community-image-text">
                        This cider mill has tasty cider, apples, and donus for
                        you to try! Fun fact: The last steam-powered cider mill
                        in the United States is B.F. Clyde's Cider Mill!
                    </p>
                </div>
            </div>
        </div>
    );
};
