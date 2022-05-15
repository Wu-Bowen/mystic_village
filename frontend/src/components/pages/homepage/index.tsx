import React from 'react';
import { ImageCarousel } from './imageCarousel';
import homepage from './../../../assets/images/homepage.png';
import '../../styles/homepage.scss';
export const Homepage = (): JSX.Element => {
    return (
        <div className="homepage">
            {/* <h1> Looking for a Home? </h1> */}
            {/* <ImageCarousel /> */}
            <img
                src={homepage}
                width="80%"
                style={{
                    display: 'flex',
                    margin: '40px auto',
                    borderRadius: '10px',
                }}
                alt="Homepage Image"
            />
            <h1> About Us </h1>
            <p className="homepageText">
                At 888 Holdings, the management team for Mystic Village
                Apartments, we have brought together a highly effective team
                that has in-depth experience in all aspects of real estate and
                property management.
            </p>
            <p className="homepageText">
                In Mystic Village Apartments, we provide extraordinary value and
                superior service to our tenants and Airbnb guests, so they feel
                at Home.
            </p>
        </div>
    );
};
