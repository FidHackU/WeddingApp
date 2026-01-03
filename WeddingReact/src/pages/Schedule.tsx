import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './Schedule.css';

export function Schedule() {
    return (
        <div className="page">
            <Navigation />

            <section className="schedule-section">
                <h2 className="section-title">Schedule</h2>
                <p className="schedule-date">2<sup>nd</sup> May 2026 (Saturday)</p>

                <div className="schedule-grid">
                    {/* Church / Holy Matrimony */}
                    <div className="schedule-card">
                        <div className="schedule-card-header">
                            <span className="schedule-time">9:00AM</span>
                            <h3 className="schedule-event">CHURCH/ HOLY MATRIMONY</h3>
                        </div>
                        <p className="schedule-description">
                            Although the courthouse will have our signatures on the dotted line, we know it won't be real in our eyes until you help us make the commitment. After some lip-locking, a Pablo Neruda poem and the string-quartet version of 'Into the Mystic,' we think the deal will be sealed.
                        </p>
                        <div className="schedule-detail">
                            <h4>Venue</h4>
                            <p>St. Simon Catholic Church Likas</p>
                        </div>
                        <div className="schedule-detail">
                            <h4>Attire</h4>
                            <p>Olive Green / Cream. Dress appropriately</p>
                        </div>
                        <div className="schedule-detail">
                            <h4>Address</h4>
                            <p>St. Simon Catholic Church Likas (1984) Jalan Punai Tanah, 88450 Kota Kinabalu, Sabah, Malaysia</p>
                        </div>
                        <a href="https://maps.google.com/?q=St.+Simon+Catholic+Church+Likas" target="_blank" rel="noopener noreferrer" className="schedule-map-link">
                            VIEW ON MAP
                        </a>
                    </div>

                    {/* Dinner Reception */}
                    <div className="schedule-card">
                        <div className="schedule-card-header">
                            <span className="schedule-time">7:00PM</span>
                            <h3 className="schedule-event">DINNER RECEPTION</h3>
                        </div>
                        <p className="schedule-description">
                            No need to front, this is what we all have been waiting for. Enjoy a margarita or glass of prosecco at the Electric Eel while wifey & hubby (wait, us?) snap some photos in the teepee, then gather back 'round in the garden for a lantern-lit fiesta
                        </p>
                        <div className="schedule-detail">
                            <h4>Venue</h4>
                            <p>Hilton Hotel Kota Kinabalu</p>
                        </div>
                        <div className="schedule-detail">
                            <h4>Attire</h4>
                            <p>Smart Casual(Old Money Rich Clothing)/ Kadazan Costume. Dancing shoes required.</p>
                        </div>
                        <div className="schedule-detail">
                            <h4>Address</h4>
                            <p>Hilton Kota Kinabalu Jln Tunku Abdul Rahman, Asia City, 88000 Kota Kinabalu, Sabah, Malaysia</p>
                        </div>
                        <a href="https://maps.google.com/?q=Hilton+Kota+Kinabalu" target="_blank" rel="noopener noreferrer" className="schedule-map-link">
                            VIEW ON MAP
                        </a>
                    </div>
                </div>
            </section>

            <Footer minimal />
        </div>
    );
}
