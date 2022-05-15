import React from 'react';
import { Link } from 'react-router-dom';
export const NotFound = (): JSX.Element => {
    return (
        <>
            <h1> 404 </h1>
            <div className="margin" style={{ paddingBottom: '400px' }}>
                <p> No es bueno </p>
                <p>
                    It looks like you've reached a URL that doesn't exist.
                    Please use the navigation above to find your way back to our
                    site! :)
                </p>
                <p>
                    <Link to="/">Back To Safety</Link>
                </p>
            </div>
        </>
    );
};
