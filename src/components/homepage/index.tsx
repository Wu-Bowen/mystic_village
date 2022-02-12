import React, { ReactChild, useState } from 'react';
import building from './../../assets/images/building.jpg';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../scss/carousel.scss';
import { Carousel } from 'react-responsive-carousel';
import { IIconProps, initializeIcons } from '@fluentui/react';
import { IconButton, IButtonStyles } from '@fluentui/react/lib/Button';

initializeIcons();

interface newElement {
    key?: number;
}

const circleIcon: IIconProps = { iconName: 'CircleFill' };

const buttonStyles: IButtonStyles = {
    icon: { fontSize: '20px' },
    root: { color: '#1d2959' },
    rootHovered: { backgroundColor: 'transparent', color: '#f3d89e' },
    rootPressed: { backgroundColor: 'transparent', color: '#f3d89e' },
};
const buttonSelectedStyles: IButtonStyles = {
    icon: { fontSize: '20px' },
    root: { color: '#f3d89e' },
    rootHovered: { backgroundColor: 'transparent', color: '#f3d89e' },
    rootPressed: { backgroundColor: 'transparent' },
};

export const Homepage = (): JSX.Element => {
    const [selectedDot, setSelectedDot] = useState(0);
    const customRenderThumb = (children: any): ReactChild[] => {
        return children.map((item: newElement) => {
            return (
                <IconButton
                    key={`dot` + item}
                    iconProps={circleIcon}
                    styles={
                        selectedDot == item.key
                            ? buttonSelectedStyles
                            : buttonStyles
                    }
                    aria-label="Dot Icon"
                />
            );
        });
    };
    const handleChange = (index: number) => {
        setSelectedDot(index);
    };
    return (
        <div className="Homepage">
            <h1> Looking for a Home? </h1>
            <Carousel
                showIndicators={false}
                showArrows={false}
                width={'65%'}
                thumbWidth={30}
                interval={10000}
                autoPlay
                infiniteLoop
                renderThumbs={customRenderThumb}
                onChange={handleChange}
            >
                <div key={0}>
                    <img src={building} />
                    <p className="legend">Image 1</p>
                </div>
                <div key={1}>
                    <img src={building} />
                    <p className="legend">Image 2</p>
                </div>
                <div key={2}>
                    <img src={building} />
                    <p className="legend">Image 3</p>
                </div>
            </Carousel>
        </div>
    );
};
