import { useState } from 'react';
import { WEDDING } from '../config/wedding';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './Travel.css';

export function Travel() {
    const [activeTab, setActiveTab] = useState('fly');

    return (
        <div className="page">
            <Navigation />

            <section className="travel-section">
                <p className="section-subtitle">Getting Here</p>
                <h2 className="section-title">Travel</h2>

                {/* Transport Tabs */}
                <div className="transport-tabs">
                    <button
                        className={`transport-tab ${activeTab === 'fly' ? 'active' : ''}`}
                        onClick={() => setActiveTab('fly')}
                    >
                        ✈️ Fly
                    </button>
                    <button
                        className={`transport-tab ${activeTab === 'drive' ? 'active' : ''}`}
                        onClick={() => setActiveTab('drive')}
                    >
                        🚗 Drive
                    </button>
                    <button
                        className={`transport-tab ${activeTab === 'train' ? 'active' : ''}`}
                        onClick={() => setActiveTab('train')}
                    >
                        🚂 Train
                    </button>
                    <button
                        className={`transport-tab ${activeTab === 'shuttle' ? 'active' : ''}`}
                        onClick={() => setActiveTab('shuttle')}
                    >
                        🚌 Shuttle
                    </button>
                </div>

                {/* Tab Content */}
                <div className="transport-content">
                    {activeTab === 'fly' && (
                        <div className="transport-panel">
                            <h3 className="transport-title">Fly</h3>
                            <div className="airports-list">
                                {WEDDING.travel.fly.map((airport, index) => (
                                    <div key={index} className="airport-card">
                                        <h4 className="airport-name">{airport.name}</h4>
                                        <p className="airport-distance">{airport.distance}</p>
                                        <p className="airport-description">{airport.description}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    )}

                    {activeTab === 'drive' && (
                        <div className="transport-panel">
                            <h3 className="transport-title">Drive</h3>
                            <p className="transport-description">{WEDDING.travel.drive.description}</p>
                            <a
                                href={WEDDING.travel.drive.mapLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                Get Directions
                            </a>
                        </div>
                    )}

                    {activeTab === 'train' && (
                        <div className="transport-panel">
                            <h3 className="transport-title">Train</h3>
                            <p className="transport-description">{WEDDING.travel.train.description}</p>
                            <a
                                href={WEDDING.travel.train.scheduleLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn"
                            >
                                View Schedule
                            </a>
                        </div>
                    )}

                    {activeTab === 'shuttle' && (
                        <div className="transport-panel">
                            <h3 className="transport-title">Wedding Shuttle</h3>
                            <p className="transport-description">{WEDDING.travel.shuttle.description}</p>
                            <div className="shuttle-details">
                                <div className="shuttle-info">
                                    <span className="shuttle-label">Pickup Location</span>
                                    <span className="shuttle-value">{WEDDING.travel.shuttle.pickupLocation}</span>
                                </div>
                                <div className="shuttle-info">
                                    <span className="shuttle-label">Departure Time</span>
                                    <span className="shuttle-value">{WEDDING.travel.shuttle.departureTime}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </section>

            {/* Accommodations */}
            <section className="accommodations-section">
                <p className="section-subtitle">Where to Stay</p>
                <h2 className="section-title">Hotels</h2>
                <div className="accommodations-grid">
                    {WEDDING.accommodations.map((hotel, index) => (
                        <div key={index} className="accommodation-card">
                            <h3 className="accommodation-name">{hotel.name}</h3>
                            <p className="accommodation-distance">{hotel.distance}</p>
                            <p className="accommodation-price">{hotel.priceRange}</p>
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
