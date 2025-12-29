import { useState } from 'react';
import { WEDDING } from '../config/wedding';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './Location.css';

export function Location() {
    const [activeTab, setActiveTab] = useState<'eat' | 'drink' | 'do' | 'shop'>('eat');

    const tabs = [
        { key: 'eat' as const, label: 'Eat', emoji: '🍽️' },
        { key: 'drink' as const, label: 'Drink', emoji: '🍷' },
        { key: 'do' as const, label: 'Do', emoji: '🎯' },
        { key: 'shop' as const, label: 'Shop', emoji: '🛍️' },
    ];

    return (
        <div className="page">
            <Navigation />

            <section className="location-section">
                <p className="section-subtitle">The Venue</p>
                <h2 className="section-title">Location</h2>
                <h3 className="location-venue">{WEDDING.venueDetails.name}</h3>
                <p className="location-address">{WEDDING.venueDetails.address}</p>
                <p className="location-description">{WEDDING.venueDetails.description}</p>

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

            {/* Local Recommendations */}
            <section className="recommendations-section">
                <p className="section-subtitle">While You're Here</p>
                <h2 className="section-title">Local Favorites</h2>

                <div className="rec-tabs">
                    {tabs.map((tab) => (
                        <button
                            key={tab.key}
                            className={`rec-tab ${activeTab === tab.key ? 'active' : ''}`}
                            onClick={() => setActiveTab(tab.key)}
                        >
                            <span className="rec-tab-emoji">{tab.emoji}</span>
                            <span className="rec-tab-label">{tab.label}</span>
                        </button>
                    ))}
                </div>

                <div className="rec-content">
                    <div className="rec-grid">
                        {WEDDING.recommendations[activeTab].map((item, index) => (
                            <div key={index} className="rec-card">
                                <span className="rec-type">{item.type}</span>
                                <h4 className="rec-name">{item.name}</h4>
                                <p className="rec-description">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer minimal />
        </div>
    );
}
