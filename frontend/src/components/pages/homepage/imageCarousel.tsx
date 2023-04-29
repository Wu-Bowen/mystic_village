import React, { ReactChild, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../styles/carousel.scss';
import { Carousel } from 'react-responsive-carousel';
import { IIconProps, initializeIcons } from '@fluentui/react';
import { IconButton, IButtonStyles } from '@fluentui/react/lib/Button';

initializeIcons();

interface newElement {
    key?: number;
}
export interface ImageCarouselProps {
    images: string[];
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

export const ImageCarousel = ({ images }: ImageCarouselProps): JSX.Element => {
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
        <Carousel
            showIndicators={false}
            width="55%"
            thumbWidth={30}
            interval={10000}
            autoPlay
            infiniteLoop
            renderThumbs={customRenderThumb}
            onChange={handleChange}
        >
            {images.map((image, i) => {
                return (
                    <div key={i}>
                        <img src={image} />
                    </div>
                );
            })}
        </Carousel>
    );
};
