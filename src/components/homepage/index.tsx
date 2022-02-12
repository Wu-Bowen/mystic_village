import React from 'react';
import building from './../../assets/images/building.jpg';

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
                    borderRadius: '8px',
                }}
            />
        </div>
    );
};
