import { WEDDING } from '../config/wedding';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './Travel.css';

export function Travel() {
    return (
        <div className="page">
            <Navigation />

            <section className="accommodations-section">
                <p className="section-subtitle">Travel & Stay</p>
                <h2 className="section-title">Accommodations</h2>
                <div className="accommodations-grid">
                    {WEDDING.accommodations.map((hotel, index) => (
                        <div key={index} className="accommodation-card">
                            <h3 className="accommodation-name">{hotel.name}</h3>
                            <p className="accommodation-distance">{hotel.distance}</p>
                            <div className="accommodation-details">
                                <p>{hotel.address}</p>
                                <p>{hotel.phone}</p>
                                <p>
                                    <a href={hotel.website} target="_blank" rel="noopener noreferrer">
                                        Book Now →
                                    </a>
                                </p>
                            </div>
                            <p className="accommodation-note">{hotel.note}</p>
                        </div>
                    ))}
                </div>
            </section>

            <Footer minimal />
        </div>
    );
}
