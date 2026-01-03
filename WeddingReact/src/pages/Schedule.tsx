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
                            Join us as we exchange our vows and celebrate our holy matrimony. Please arrive early, as the ceremony will begin promptly at 9:00am. Dress modestly and appropriately for the church.
                        </p>
                        <div className="schedule-detail">
                            <h4>Venue</h4>
                            <p>St. Simon Catholic Church Likas</p>
                        </div>
                        <div className="schedule-detail">
                            <h4>Attire</h4>
                            <p>Olive Green / Cream</p>
                        </div>
                        <div className="schedule-detail">
                            <h4>Address</h4>
                            <p>St. Simon Catholic Church Likas (1984) Jalan Punai Tanah, 88450 Kota Kinabalu, Sabah, Malaysia</p>
                        </div>
                        <a href="https://maps.google.com/?q=St.+Simon+Catholic+Church+Likas" target="_blank" rel="noopener noreferrer" className="schedule-map-link">
                            VIEW ON MAP
                        </a>
                    </div>

                    {/* Evening Celebration: Light Refreshments & Dinner */}
                    <div className="schedule-card">
                        {/* Light Refreshments */}
                        <div className="schedule-card-header">
                            <span className="schedule-time">6:30PM</span>
                            <h3 className="schedule-event">LIGHT REFRESHMENTS</h3>
                        </div>
                        <p className="schedule-description" style={{ marginBottom: '40px' }}>
                            Join us for light refreshments and drinks while you mingle and get ready for the evening celebration.
                        </p>

                        {/* Dinner Reception */}
                        <div className="schedule-card-header">
                            <span className="schedule-time">7:00PM</span>
                            <h3 className="schedule-event">DINNER RECEPTION</h3>
                        </div>
                        <p className="schedule-description">
                            Join us for the dinner reception at Hilton Hotel, Kota Kinabalu, centrally located and just minutes from Jesselton Jetty and shopping areas.
                        </p>
                        <div className="schedule-detail">
                            <h4>Venue</h4>
                            <p>Hilton Hotel Kota Kinabalu</p>
                        </div>
                        <div className="schedule-detail">
                            <h4>Attire</h4>
                            <p>Old Money Rich styles / Traditional Kadazan Costume.</p>
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

            <Footer />
        </div>
    );
}
