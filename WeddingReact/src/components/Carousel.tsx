import { useState, useEffect, useCallback } from 'react';
import './Carousel.css';

// Import images
import photo1 from '../assets/carousel/photo1.jpg';
import photo2 from '../assets/carousel/photo2.jpg';
import photo3 from '../assets/carousel/photo3.jpg';
import photo4 from '../assets/carousel/photo4.jpg';
import photo5 from '../assets/carousel/photo5.jpg';

const photos = [photo1, photo2, photo3, photo4, photo5];

export function Carousel() {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [isPaused, setIsPaused] = useState(false);

    const nextSlide = useCallback(() => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % photos.length);
    }, []);

    const prevSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + photos.length) % photos.length);
    };

    const goToSlide = (index: number) => {
        setCurrentIndex(index);
    };

    // Auto-advance
    useEffect(() => {
        if (isPaused) return;

        const timer = setInterval(nextSlide, 4000);
        return () => clearInterval(timer);
    }, [isPaused, nextSlide]);

    return (
        <div
            className="carousel-container"
            onMouseEnter={() => setIsPaused(true)}
            onMouseLeave={() => setIsPaused(false)}
            onTouchStart={() => setIsPaused(true)}
            onTouchEnd={() => setIsPaused(false)}
        >
            <div className="carousel-wrapper">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
                    >
                        <img src={photo} alt={`Couple photo ${index + 1}`} loading="lazy" />
                    </div>
                ))}
            </div>

            {/* Invisible Navigation Overlay for Tapping */}
            <div className="carousel-nav-overlay">
                <div className="nav-zone left" onClick={prevSlide} />
                <div className="nav-zone right" onClick={nextSlide} />
            </div>

            <div className="carousel-indicators">
                {photos.map((_, index) => (
                    <button
                        key={index}
                        className={`carousel-dot ${index === currentIndex ? 'active' : ''}`}
                        onClick={() => goToSlide(index)}
                        aria-label={`Go to photo ${index + 1}`}
                    />
                ))}
            </div>
        </div>
    );
}
