import React, { useEffect, useState } from 'react';
import homepage1 from './../../../assets/images/homepage/homepage1.jpg';
import homepage2 from './../../../assets/images/homepage/homepage2.png';
import homepage3 from './../../../assets/images/homepage/homepage3.png';
import '../../styles/homepage.scss';
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

    return (
        <div className="homepage">
            <h1 className="homepageTitle"> About Us </h1>
            <img
                src={homepage1}
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
                src={homepage2}
                width={screenType === deviceScreenType.mobile ? '50%' : '55%'}
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
                src={homepage3}
                width={screenType === deviceScreenType.mobile ? '50%' : '55%'}
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

            <p className="text">
                At 888 Holdings, the management team for Mystic Village
                Apartments, we have brought together a highly effective team
                that has in-depth experience in all aspects of real estate and
                property management.
            </p>
            <p className="text homepageTextBottom">
                In Mystic Village Apartments, we provide extraordinary value and
                superior service to our tenants and Airbnb guests, so they feel
                at Home.
            </p>
        </div>
    );
};
