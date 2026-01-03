import { useState } from 'react';
import { WEDDING } from '../config/wedding';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import qrCode from '../assets/qr_code.jpg';
import paynowQr from '../assets/paynow-qr.png';
import './Registry.css';

export function Registry() {
    const [showQR, setShowQR] = useState(false);
    const [activeRegion, setActiveRegion] = useState<'MY' | 'SG'>('MY');

    return (
        <div className="page">
            <Navigation />

            <section className="registry-section">
                <p className="section-subtitle">Gift Registry</p>
                <h2 className="section-title">Registry</h2>
                <p className="registry-intro">
                    Your presence at our wedding is the greatest gift! If you’d like to help us celebrate our honeymoon, you can use the QR code or bank details below. Thank you for your love and support!
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
