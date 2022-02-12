import React from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import building from './../../assets/images/building.jpg';
// import { Carousel } from 'react-responsive-carousel';

export const Homepage = (): JSX.Element => {
    return (
        <div className="Homepage">
            <h1> Looking for a Home? </h1>
            <img
                src={building}
                width={'65%'}
                style={{
                    display: 'block',
                    margin: 'auto',
                }}
            />
            {/* <Carousel>
                <div>
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <p className="legend">Legend 2</p>
                </div>
                <div>
                    <p className="legend">Legend 3</p>
                </div>
            </Carousel> */}
        </div>
    );
};
