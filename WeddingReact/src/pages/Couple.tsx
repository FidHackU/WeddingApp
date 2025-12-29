import { Link } from 'react-router-dom';
import { WEDDING } from '../config/wedding';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './Couple.css';

export function Couple() {
    return (
        <div className="page">
            <Navigation />

            <section className="welcome-section">
                <div className="welcome-container">
                    <div className="welcome-image">
                        <div className="welcome-image-placeholder">Your photo here</div>
                    </div>
                    <div className="welcome-content">
                        <p className="welcome-label">Our Story</p>
                        <h2 className="welcome-title">{WEDDING.welcomeTitle}</h2>
                        <p className="welcome-text">{WEDDING.welcomeMessage}</p>
                        <Link to="/schedule" className="welcome-link">
                            See the Schedule <span>→</span>
                        </Link>
                    </div>
                </div>
            </section>

            {/* Photo Gallery */}
            <section className="gallery-section">
                <p className="section-subtitle">Memories</p>
                <h2 className="section-title">Our Journey</h2>
                <div className="photo-gallery">
                    <div className="gallery-item gallery-large">
                        <div className="gallery-placeholder">Photo 1</div>
                    </div>
                    <div className="gallery-item">
                        <div className="gallery-placeholder">Photo 2</div>
                    </div>
                    <div className="gallery-item">
                        <div className="gallery-placeholder">Photo 3</div>
                    </div>
                    <div className="gallery-item">
                        <div className="gallery-placeholder">Photo 4</div>
                    </div>
                    <div className="gallery-item gallery-wide">
                        <div className="gallery-placeholder">Photo 5</div>
                    </div>
                    <div className="gallery-item">
                        <div className="gallery-placeholder">Photo 6</div>
                    </div>
                </div>
            </section>

            <Footer minimal />
        </div>
    );
}
