import React from 'react';
import homepage1 from './../../../assets/images/homepage/homepage1.png';
import homepage2 from './../../../assets/images/homepage/homepage2.png';
import homepage3 from './../../../assets/images/homepage/homepage3.png';
import '../../styles/homepage.scss';
export const Homepage = (): JSX.Element => {
    return (
        <div className="homepage">
            <h1 className="homepageTitle"> About Us </h1>
            <img
                src={homepage1}
                width="55%"
                style={{
                    display: 'flex',
                    margin: '40px 1% 40px 10%',
                    float: 'left',
                }}
                alt="Homepage Image"
            />
            <img
                src={homepage2}
                width="25%"
                style={{
                    display: 'flex',
                    margin: '61px 10% 0px 0px',
                }}
                alt="Homepage Image"
            />
            <img
                src={homepage3}
                width="25%"
                style={{
                    display: 'flex',
                    margin: '1% 10% 40px 0px',
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
