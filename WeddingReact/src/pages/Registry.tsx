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

                {/* Registry Items */}
                <div className="registry-grid">
                    {WEDDING.registry.items.map((item, index) => (
                        <div key={index} className="registry-item">
                            <div className="registry-item-icon">🎁</div>
                            <h4 className="registry-item-name">{item.name}</h4>
                            <p className="registry-item-store">{item.store}</p>
                            <p className="registry-item-price">${item.price}</p>
                        </div>
                    ))}
                </div>

                {/* External Registry Links */}
                <div className="registry-links">
                    <p className="registry-links-title">View our full registries:</p>
                    <div className="registry-links-buttons">
                        {WEDDING.registry.externalLinks.map((link, index) => (
                            <a
                                key={index}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="btn btn-outline"
                            >
                                {link.name} →
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            <Footer minimal />
        </div>
    );
}
