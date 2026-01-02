import { WEDDING } from '../config/wedding';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './Registry.css';

export function Registry() {
    return (
        <div className="page">
            <Navigation />

            <section className="registry-section">
                <p className="section-subtitle">Gift Registry</p>
                <h2 className="section-title">Registry</h2>
                <p className="registry-intro">{WEDDING.registry.message}</p>

                {/* Honeymoon Fund */}
                <div className="honeymoon-fund">
                    <h3 className="fund-title">{WEDDING.registry.honeymoonFund.title}</h3>
                    <p className="fund-description">{WEDDING.registry.honeymoonFund.description}</p>
                    <div className="fund-goal">
                        <span className="fund-amount">${WEDDING.registry.honeymoonFund.goal.toLocaleString()}</span>
                        <span className="fund-label">Goal</span>
                    </div>
                    <button className="btn btn-outline">Contribute to Fund</button>
                </div>


            </section>

            <Footer minimal />
        </div>
    );
}
