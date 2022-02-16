import React, { useEffect, useState } from 'react';

export const Apartments = (): JSX.Element => {
    const [message, setMessage] = useState(null);
    useEffect(() => {
        fetch('http://localhost:3001/api')
            .then((res) => res.json())
            .then((data) => setMessage(data?.message));
    }, []);

    return (
        <div className={'apartments'}>
            <p>{!message ? 'Loading...' : message}</p>
        </div>
    );
};
