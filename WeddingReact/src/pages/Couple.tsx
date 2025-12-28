import { Link } from 'react-router-dom';
import { WEDDING } from '../config/wedding';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './Couple.css';

export function Couple() {
    return (
        <div className="page">
            <Navigation />

            <section className="welcome-section">
                <div className="welcome-container">
                    <div className="welcome-image">
                        <div className="welcome-image-placeholder">Your photo here</div>
                    </div>
                    <div className="welcome-content">
                        <p className="welcome-label">Welcome</p>
                        <h2 className="welcome-title">{WEDDING.welcomeTitle}</h2>
                        <p className="welcome-text">{WEDDING.welcomeMessage}</p>
                        <Link to="/schedule" className="welcome-link">
                            See the Schedule <span>→</span>
                        </Link>
                    </div>
                </div>
            </section>

            <Footer minimal />
        </div>
    );
}
