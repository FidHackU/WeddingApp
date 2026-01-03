import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './Travel.css';

export function Travel() {
    return (
        <div className="page">
            <Navigation />

            <section className="travel-section">


                <h2 className="travel-title">Travel</h2>
                <p className="travel-subtitle">Wish you could teleport to the Place? Us, too. Here are the next best options.</p>

                <div className="travel-grid">
                    {/* Fly Card */}
                    <div className="travel-card">
                        <div className="travel-icon-wrapper">
                            <div className="travel-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M21 16v-2l-8-5V3.5c0-.83-.67-1.5-1.5-1.5S10 2.67 10 3.5V9l-8 5v2l8-2.5V19l-2 1.5V22l3.5-1 3.5 1v-1.5L13 19v-5.5l8 2.5z" />
                                </svg>
                            </div>
                            <div className="icon-ring"></div>
                        </div>
                        <h3 className="travel-card-title">FLY</h3>
                        <p className="travel-card-desc">Book your flights to Kota Kinabalu International Airport (BKI)</p>
                        <a href="https://my.trip.com/" target="_blank" rel="noopener noreferrer" className="travel-btn">
                            <span>FIND FLIGHTS</span>
                            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>

                    {/* Church Card */}
                    <div className="travel-card">
                        <div className="travel-icon-wrapper">
                            <div className="travel-icon">
                                <svg viewBox="0 0 24 24" fill="currentColor">
                                    <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                                </svg>
                            </div>
                            <div className="icon-ring"></div>
                        </div>
                        <h3 className="travel-card-title">CHURCH</h3>
                        <p className="travel-card-location">St. Simon Catholic Church Likas (1984)</p>
                        <p className="travel-card-time">
                            <span className="time-icon">🕘</span> 9:00 AM
                        </p>
                        <a href="https://maps.google.com/?q=St.+Simon+Catholic+Church+Likas" target="_blank" rel="noopener noreferrer" className="travel-btn">
                            <span>CHURCH/ HOLY MATRIMONY</span>
                            <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                                <path d="M5 12h14M12 5l7 7-7 7" />
                            </svg>
                        </a>
                    </div>
                </div>

                {/* Divider */}
                <div className="travel-divider">
                    <span className="divider-ornament">✦</span>
                </div>

                {/* Dinner Card - Full Width */}
                <div className="travel-card travel-card-center travel-card-featured">
                    <div className="travel-icon-wrapper">
                        <div className="travel-icon travel-icon-featured">
                            <svg viewBox="0 0 24 24" fill="currentColor">
                                <path d="M18.92 6.01C18.72 5.42 18.16 5 17.5 5h-11c-.66 0-1.21.42-1.42 1.01L3 12v8c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-1h12v1c0 .55.45 1 1 1h1c.55 0 1-.45 1-1v-8l-2.08-5.99zM6.5 16c-.83 0-1.5-.67-1.5-1.5S5.67 13 6.5 13s1.5.67 1.5 1.5S7.33 16 6.5 16zm11 0c-.83 0-1.5-.67-1.5-1.5s.67-1.5 1.5-1.5 1.5.67 1.5 1.5-.67 1.5-1.5 1.5zM5 11l1.5-4.5h11L19 11H5z" />
                            </svg>
                        </div>
                        <div className="icon-ring icon-ring-featured"></div>
                    </div>
                    <h3 className="travel-card-title travel-card-title-featured">DINNER</h3>
                    <p className="travel-card-location">Hilton Hotel KK</p>
                    <p className="travel-card-time">
                        <span className="time-icon">🕖</span> 6:30 PM
                    </p>
                    <a href="https://maps.google.com/?q=Hilton+Kota+Kinabalu" target="_blank" rel="noopener noreferrer" className="travel-btn travel-btn-featured">
                        <span>DINNER RECEPTION</span>
                        <svg className="btn-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                            <path d="M5 12h14M12 5l7 7-7 7" />
                        </svg>
                    </a>
                </div>


            </section>

            <Footer />
        </div>
    );
}
