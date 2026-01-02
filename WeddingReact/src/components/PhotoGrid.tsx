import './PhotoGrid.css';

// Import images
import photo1 from '../assets/carousel/photo1.jpg';
import photo2 from '../assets/carousel/photo2.jpg';
import photo3 from '../assets/carousel/photo3.jpg';
import photo4 from '../assets/carousel/photo4.jpg';
import photo5 from '../assets/carousel/photo5.jpg';

const photos = [
    { src: photo2, type: 'hero' }, // Hero
    { src: photo1, type: 'standard' },
    { src: photo3, type: 'standard' },
    { src: photo5, type: 'standard' },
    { src: photo4, type: 'standard' },
];

export function PhotoGrid() {
    return (
        <div className="photo-grid-container">
            <div className="photo-grid">
                {photos.map((photo, index) => (
                    <div
                        key={index}
                        className={`grid-item ${index === 0 ? 'hero' : ''}`}
                    >
                        <img src={photo.src} alt="Wedding moment" loading="lazy" />
                    </div>
                ))}
            </div>
        </div>
    );
}
