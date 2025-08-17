import React, { ReactChild, useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import '../../styles/carousel.scss';
import { Carousel } from 'react-responsive-carousel';
import { CircleIcon } from '../../CircleIcon';

interface newElement {
    key?: number;
}
export interface ImageCarouselProps {
    images: string[];
    isMobile: boolean;
}

export const ImageCarousel = ({
    images,
    isMobile,
}: ImageCarouselProps): JSX.Element => {
    const [selectedDot, setSelectedDot] = useState(0);

    const customRenderThumb = (children: any): ReactChild[] => {
        return children.map((item: newElement, index: number) => {
            return (
                <CircleIcon
                    key={`dot-${index}`}
                    isSelected={selectedDot === index}
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
            width={isMobile ? '90%' : '55%'}
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
