import React, { ReactChild, useEffect, useState } from 'react';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import './styles/carousel.scss';
import { Carousel } from 'react-responsive-carousel';
import { LazyImage } from './LazyImage';
import { CircleIcon } from './CircleIcon';

interface newElement {
    key?: number;
}
export interface OptimizedImageCarouselProps {
    images: string[];
    isMobile: boolean;
}

export const OptimizedImageCarousel = ({
    images,
    isMobile,
}: OptimizedImageCarouselProps): JSX.Element => {
    const [selectedDot, setSelectedDot] = useState(0);
    const [currentIndex, setCurrentIndex] = useState(0);

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
        setCurrentIndex(index);
    };

    // Only render images that are currently visible or adjacent (for better UX)
    const getVisibleImages = () => {
        const visibleRange = 2; // Show current + 2 before + 2 after
        const start = Math.max(0, currentIndex - visibleRange);
        const end = Math.min(images.length, currentIndex + visibleRange + 1);
        
        return images.slice(start, end).map((image, index) => ({
            src: image,
            originalIndex: start + index
        }));
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
            swipeable={true}
            emulateTouch={true}
            showStatus={false}
            showArrows={!isMobile}
        >
            {images.map((image, i) => {
                return (
                    <div key={i} className="carousel-slide">
                        <img
                            src={image}
                            alt={`Apartment image ${i + 1}`}
                            className="carousel-image"
                            style={{ width: '100%', height: 'auto' }}
                            loading="lazy"
                        />
                    </div>
                );
            })}
        </Carousel>
    );
};