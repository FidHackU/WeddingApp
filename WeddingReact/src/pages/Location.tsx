import { WEDDING } from '../config/wedding';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './Location.css';

export function Location() {
    return (
        <div className="page">
            <Navigation />

            <section className="location-section">
                <p className="section-subtitle">The Venue</p>
                <h2 className="section-title">Location</h2>
                <h3 className="location-venue">{WEDDING.venueDetails.name}</h3>
                <p className="location-address">{WEDDING.venueDetails.address}</p>

                <div className="location-map">
                    <p>Interactive map coming soon</p>
                </div>

                <div className="location-info">
                    <div className="location-info-item">
                        <h4>Directions</h4>
                        <p>{WEDDING.venueDetails.directions}</p>
                    </div>
                    <div className="location-info-item">
                        <h4>Parking</h4>
                        <p>{WEDDING.venueDetails.parking}</p>
                    </div>
                </div>
            </section>

            <Footer minimal />
        </div>
    );
}
