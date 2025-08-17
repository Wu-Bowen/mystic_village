import React, { useState, useRef, useEffect } from 'react';
import LazyLoad from 'react-lazyload';

interface LazyImageProps {
    src: string;
    alt: string;
    className?: string;
    sizes?: string;
    placeholder?: string;
    width?: number;
    height?: number;
}

export const LazyImage: React.FC<LazyImageProps> = ({
    src,
    alt,
    className = '',
    sizes = '(max-width: 400px) 400px, (max-width: 800px) 800px, 1200px',
    placeholder = 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48cmVjdCB3aWR0aD0iMTAwIiBoZWlnaHQ9IjEwMCIgZmlsbD0iI2VlZSIvPjx0ZXh0IHg9IjUwJSIgeT0iNTAlIiBmb250LXNpemU9IjE4IiBmaWxsPSIjYWFhIiB0ZXh0LWFuY2hvcj0ibWlkZGxlIiBkeT0iLjNlbSI+SW1hZ2U8L3RleHQ+PC9zdmc+',
    width,
    height
}) => {
    const [imageSrc, setImageSrc] = useState(placeholder);
    const [imageRef, setImageRef] = useState<HTMLImageElement | null>(null);
    const [isLoaded, setIsLoaded] = useState(false);
    const [isInView, setIsInView] = useState(false);

    // Generate responsive image sources
    const getOptimizedImageSources = (originalSrc: string) => {
        // For now, let's use the original image until we set up proper asset serving
        // This ensures the images work while we fix the optimization pipeline
        return {
            webpSources: '',
            jpegSources: '',
            fallback: originalSrc
        };
    };

    const sources = getOptimizedImageSources(src);

    const handleLoad = () => {
        setIsLoaded(true);
    };

    const handleIntersection = () => {
        if (!isInView) {
            setIsInView(true);
            setImageSrc(sources.fallback);
        }
    };

    // Check if WebP is supported
    const supportsWebP = () => {
        return new Promise((resolve) => {
            const webP = new Image();
            webP.onload = webP.onerror = function () {
                resolve(webP.height === 2);
            };
            webP.src = 'data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA';
        });
    };

    return (
        <LazyLoad 
            height={height || 200} 
            offset={100}
            placeholder={<img src={placeholder} alt={alt} className={className} />}
            once
        >
            <img
                ref={setImageRef}
                src={sources.fallback}
                alt={alt}
                className={`${className} ${isLoaded ? 'loaded' : 'loading'}`}
                onLoad={handleLoad}
                loading="lazy"
                width={width}
                height={height}
                style={{
                    transition: 'opacity 0.3s ease-in-out',
                    opacity: isLoaded ? 1 : 0.8
                }}
            />
        </LazyLoad>
    );
};