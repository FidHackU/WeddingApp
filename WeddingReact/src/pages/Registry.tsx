import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { WEDDING } from '../config/wedding';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import qrCode from '../assets/qr_code.jpg';
import paynowQr from '../assets/paynow-qr.png';
import './Registry.css';

export function Registry() {
    const location = useLocation();
    const [showQR, setShowQR] = useState(false);
    const [activeRegion, setActiveRegion] = useState<'MY' | 'SG'>('MY');

    useEffect(() => {
        // Check if user came from RSVP submission
        const state = location.state as { fromRSVP?: boolean };
        if (state?.fromRSVP) {
            const timer = setTimeout(() => {
                setShowQR(true);
                // Optional: Clear state so it doesn't pop up again on refresh (if desired, though tricky with history state)
                // history.replaceState({}, document.title); 
            }, 3000);
            return () => clearTimeout(timer);
        }
    }, [location]);

    return (
        <div className="page">
            <Navigation />

            <section className="registry-section">
                <p className="section-subtitle">Wedding Gift</p>
                <h2 className="section-title">Registry</h2>
                <p className="registry-intro">
                    Your love and support mean the world to us—whether you’re celebrating with us in person or from afar. If you’d like to give a wedding gift, we would be truly grateful. Most of all, thank you for being part of our journey.
                </p>

                {/* Honeymoon Fund */}
                <div className="honeymoon-fund">
                    <h3 className="fund-title">{WEDDING.registry.honeymoonFund.title}</h3>
                    <p className="fund-description">
                        Click here for your kind contribution
                    </p>
                    <div className="fund-goal">
                        <span className="fund-amount">${WEDDING.registry.honeymoonFund.goal.toLocaleString()}</span>
                        <span className="fund-label">Goal</span>
                    </div>
                    <button className="btn btn-outline" onClick={() => setShowQR(true)}>Contribute to Fund</button>
                </div>

                {showQR && (
                    <div className="qr-modal-overlay" onClick={() => setShowQR(false)}>
                        <div className="qr-modal-content" onClick={e => e.stopPropagation()}>
                            <button className="qr-close-btn" onClick={() => setShowQR(false)}>×</button>

                            <div className="qr-region-tabs">
                                <button
                                    className={`qr-tab-btn ${activeRegion === 'MY' ? 'active' : ''}`}
                                    onClick={() => setActiveRegion('MY')}
                                >
                                    Malaysia (DuitNow)
                                </button>
                                <button
                                    className={`qr-tab-btn ${activeRegion === 'SG' ? 'active' : ''}`}
                                    onClick={() => setActiveRegion('SG')}
                                >
                                    Singapore (PayNow)
                                </button>
                            </div>

                            <img
                                src={activeRegion === 'MY' ? qrCode : paynowQr}
                                alt={activeRegion === 'MY' ? "DuitNow QR" : "PayNow QR"}
                                className="qr-image"
                            />
                            <p className="qr-instruction">
                                {activeRegion === 'MY' ? "Scan to transfer via DuitNow" : "Scan to transfer via PayNow"}
                            </p>

                            <div className="bank-details">
                                <p className="bank-label">OR TRANSFER TO:</p>
                                <p className="bank-name">Darrell Yong</p>
                                {activeRegion === 'MY' ? (
                                    <p className="bank-number">7058-67-2525 (CIMB BANK)</p>
                                ) : (
                                    <p className="bank-number">271-312194-3 (DBS BANK)</p>
                                )}
                            </div>
                        </div>
                    </div>
                )}


            </section>

            <Footer />
        </div>
    );
}
