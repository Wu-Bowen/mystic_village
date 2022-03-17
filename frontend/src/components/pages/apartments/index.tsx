import React, { useEffect, useState } from 'react';
import { NavItem } from '../../navigation/navitem';

export const Apartments = (): JSX.Element => {
    // const [message, setMessage] = useState(null);
    // useEffect(() => {
    //     fetch('http://localhost:3001/api')
    //         .then((res) => res.json())
    //         .then((data) => setMessage(data?.message));
    // }, []);

    return (
        <div className={'Apartments'}>
            {/* <p>{!message ? 'Loading...' : message}</p> */}
            <NavItem
                buttonType={'portalButton'}
                name={'Studio'}
                location={'studio'}
            />
            <NavItem
                buttonType={'portalButton'}
                name={'1 Bedroom'}
                location={'1BR'}
            />
        </div>
    );
};
