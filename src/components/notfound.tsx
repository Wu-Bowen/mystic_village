import React from 'react';
import { Link } from 'react-router-dom';
export const NotFound = () => {
    return (
        <div>
            <div>
                <p> 404 </p>
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
        </div>
    );
};
