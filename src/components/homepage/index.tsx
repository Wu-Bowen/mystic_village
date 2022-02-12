import React from 'react';
import { ImageCarousel } from './imageCarousel';
import '../scss/homepage.scss';
export const Homepage = (): JSX.Element => {
    return (
        <div className="homepage">
            <h1> Looking for a Home? </h1>
            <ImageCarousel />
            <h1> About Us </h1>
            <p>
                At 888 Holdings, the management team for Mystic Village
                Apartments, we have brought together a highly effective team
                that has in-depth experience in all aspects of real estate and
                property management.
            </p>
            <p>
                In Mystic Village Apartments, we provide extraordinary value and
                superior service to our tenants and Airbnb guests, so they feel
                at Home.
            </p>
        </div>
    );
};
