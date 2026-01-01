import { useState, useEffect } from 'react';
import { WEDDING } from '../config/wedding';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './Home.css';
import './Schedule.css';

export function Home() {
    const [countdown, setCountdown] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 });

    useEffect(() => {
        const weddingDate = new Date(WEDDING.date);
        weddingDate.setHours(12, 0, 0, 0);

        const updateCountdown = () => {
            const now = new Date();
            const diff = weddingDate.getTime() - now.getTime();

            if (diff <= 0) {
                setCountdown({ days: 0, hours: 0, minutes: 0, seconds: 0 });
                return;
            }

            setCountdown({
                days: Math.floor(diff / (1000 * 60 * 60 * 24)),
                hours: Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
                minutes: Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60)),
                seconds: Math.floor((diff % (1000 * 60)) / 1000),
            });
        };

        updateCountdown();
        const interval = setInterval(updateCountdown, 1000);
        return () => clearInterval(interval);
    }, []);

    return (
        <div className="page">
            {/* Hero Section */}
            <section className="hero">
                <div className="hero-floral">
                    <div className="hero-floral-fallback"></div>
                </div>
                <div className="hero-content">
                    <h1 className="hero-names">
                        <span>{WEDDING.groom}</span> & <span>{WEDDING.bride}</span>
                    </h1>
                    <p className="hero-date">{WEDDING.date}</p>
                    <p className="hero-location">{WEDDING.city}, {WEDDING.state}</p>
                </div>
            </section>

            <Navigation />

            {/* Countdown Section */}
            <section className="countdown-section">
                <h2 className="countdown-title">The Big Day</h2>
                <div className="countdown-grid">
                    <div className="countdown-item">
                        <div className="countdown-number">{String(countdown.days).padStart(2, '0')}</div>
                        <div className="countdown-label">Days</div>
                    </div>
                    <div className="countdown-item">
                        <div className="countdown-number">{String(countdown.hours).padStart(2, '0')}</div>
                        <div className="countdown-label">Hours</div>
                    </div>
                    <div className="countdown-item">
                        <div className="countdown-number">{String(countdown.minutes).padStart(2, '0')}</div>
                        <div className="countdown-label">Minutes</div>
                    </div>
                    <div className="countdown-item">
                        <div className="countdown-number">{String(countdown.seconds).padStart(2, '0')}</div>
                        <div className="countdown-label">Seconds</div>
                    </div>
                </div>
            </section>

            {/* Schedule Section */}
            <section className="schedule-section">
                <p className="section-subtitle">The Timeline</p>
                <h2 className="section-title">Schedule</h2>
                <div className="schedule-container">
                    <ul className="schedule-list">
                        {WEDDING.schedule.map((item, index) => (
                            <li key={index} className="schedule-item">
                                <span className="schedule-time">{item.time}</span>
                                <div className="schedule-details">
                                    <h3>{item.event}</h3>
                                    <p>{item.description}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </section>

            <Footer />
        </div>
    );
}
