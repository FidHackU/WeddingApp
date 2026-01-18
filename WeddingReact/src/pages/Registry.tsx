import { useState, useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { WEDDING } from '../config/wedding';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import qrCode from '../assets/qr_code.jpg';
import paynowQr from '../assets/paynow-qr.png';
import './Registry.css';

// Component to handle the progress bar logic
function GoalProgress() {
    const [currentAmount, setCurrentAmount] = useState(0);

    useEffect(() => {
        const calculateAmount = () => {
            const { startDate, startAmount, perRsvpAmount, maxTimeAmount, goal } = WEDDING.registry.honeymoonFund as any;

            // 1. Time Based Calculation
            const start = new Date(startDate).getTime();
            const now = new Date().getTime();
            const daysElapsed = Math.max(0, Math.floor((now - start) / (1000 * 60 * 60 * 24)));

            // Assume minimal daily increase to simulate "time based" progress
            const dailyRate = 5; // $5 per day
            const timeBasedAmount = Math.min(maxTimeAmount, daysElapsed * dailyRate);

            // 2. RSVP Based Calculation
            // Check localStorage for submitted RSVPs as a proxy for "new" RSVPs from this device
            // Realistically we can't count ALL RSVPs without a backend, so we combine:
            // - A base number of RSVPs (estimated from time)
            // - + Any RSVPs in localStorage

            const localRSVPs = JSON.parse(localStorage.getItem('weddingRSVPs') || '[]');
            const rsvpCount = localRSVPs.length;

            // Base RSVP count per day (simulation)
            const baseRsvpCount = Math.floor(daysElapsed / 2);

            const totalRsvpAmount = (baseRsvpCount + rsvpCount) * perRsvpAmount;

            let total = startAmount + timeBasedAmount + totalRsvpAmount;

            // Cap at goal (or just below to encourage more?)
            if (total > goal) total = goal;

            setCurrentAmount(total);
        };

        calculateAmount();
        // Recalculate every minute? Not really needed, once on mount is fine.
    }, []);

    const percentage = Math.min(100, (currentAmount / WEDDING.registry.honeymoonFund.goal) * 100);

    return (
        <div className="goal-progress-container">
            <div className="goal-text">
                <span className="raised-text">Raised: ${currentAmount.toLocaleString()}</span>
                <span className="goal-subtext">of ${WEDDING.registry.honeymoonFund.goal.toLocaleString()}</span>
            </div>
            <div className="progress-bar-bg">
                <div
                    className="progress-bar-fill"
                    style={{ width: `${percentage}%` }}
                ></div>
            </div>
        </div>
    );
}

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

                {/* Honeymoon Fund / Wedding Gift */}
                <div className="honeymoon-fund">
                    <h3 className="fund-title">{WEDDING.registry.honeymoonFund.title}</h3>
                    <p className="fund-description">
                        Click here for your kind contribution
                    </p>

                    <div className="fund-goal">
                        <span className="fund-amount">${WEDDING.registry.honeymoonFund.goal.toLocaleString()}</span>
                        <span className="fund-label">Goal</span>
                    </div>

                    <GoalProgress />

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
