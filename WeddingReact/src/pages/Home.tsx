import { useState, useEffect } from 'react';
import { WEDDING } from '../config/wedding';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import { PhotoGrid } from '../components/PhotoGrid';
import { Carousel } from '../components/Carousel';
import './Home.css';

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
        <div className="page home-page">
            {/* Header with Names and Date */}
            <header className="home-header">
                <h1 className="home-header-names">
                    {WEDDING.groom} & {WEDDING.bride}
                </h1>
                <p className="home-header-date">2<sup>nd</sup> May 2026 (Saturday)</p>
            </header>

            {/* Navigation */}
            <Navigation />

            {/* Photo Section - Hybrid Layout */}
            <section className="home-photo-section">
                <div className="desktop-photo-grid">
                    <PhotoGrid />
                </div>
                <div className="mobile-photo-carousel">
                    <Carousel />
                </div>
            </section>

            {/* Main Content - Two Column Layout */}
            <section className="home-content">
                <div className="home-content-grid">
                    {/* Left Column */}
                    <div className="home-content-left">
                        <h2 className="home-callout-text">You won't want to miss this!</h2>
                        <a href="/schedule" className="home-link">SCHEDULE</a>
                    </div>

                    {/* Right Column */}
                    <div className="home-content-right">
                        {/* Countdown */}
                        <div className="home-countdown">
                            <div className="home-countdown-grid">
                                <div className="home-countdown-item">
                                    <div className="home-countdown-number">{countdown.days}</div>
                                    <div className="home-countdown-label">DAYS</div>
                                </div>
                                <div className="home-countdown-item">
                                    <div className="home-countdown-number">{countdown.hours}</div>
                                    <div className="home-countdown-label">HOURS</div>
                                </div>
                                <div className="home-countdown-item">
                                    <div className="home-countdown-number">{countdown.minutes}</div>
                                    <div className="home-countdown-label">MINUTES</div>
                                </div>
                            </div>
                            <h3 className="home-countdown-title">Until the big day!</h3>
                        </div>

                        {/* RSVP Callout */}
                        <div className="home-rsvp-callout">
                            <h2 className="home-callout-text">Are you coming?</h2>
                            <a href="/rsvp" className="home-link">RSVP</a>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
