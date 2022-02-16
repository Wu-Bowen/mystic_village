import React from 'react';
import outside from './../../../assets/images/outside.jpg';

export const Community = (): JSX.Element => {
    return (
        <div className={'Community'}>
            <img
                src={outside}
                width={'45%'}
                style={{
                    display: 'flex',
                    margin: '40px auto',
                    borderRadius: '10px',
                }}
                alt={'Image of Outside of Apartment'}
            />

            <h1> Our Neighborhood </h1>
            <h3 className="homepageText">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor
                in reprehenderit in voluptate velit esse cillum dolore eu fugiat
                nulla pariatur. Excepteur sint occaecat cupidatat non proident,
                sunt in culpa qui officia deserunt mollit anim id est laborum
            </h3>
            <h1>About Mystic</h1>
            <h3 className="homepageText">
                Mystic is a charming village on Connecticut's southeast
                coastline. The city revolves around boating and is home to an
                array of marinas and historic landmarks. Residents and visitors
                alike enjoy visiting the family-friendly Mystic Seaport Museum.
                This reimagined settlement on the Mystic River features a
                19th-century village, historic chips, a museum, and more. The
                central commercial district in Mystic is lined with local
                restaurants and specialty shops like the Engine Room, a
                rustic-chic eatery offering classic comfort food and craft
                beers. Across the river you'll find even more dining options and
                local shops. Residents flock to Williams Beach Park to enjoy the
                seasonal benefits to this green space that offers swimming, a
                playground, sports fields, and scenic picnic spots overlooking
                the water.
            </h3>
            <h1>Highlights</h1>
            <h3 className="homepageText">
                <ul style={{ listStyle: 'square' }}>
                    <li> Bowling </li>
                    <li> Swimming </li>
                    <li> Food </li>
                </ul>
            </h3>
        </div>
    );
};
