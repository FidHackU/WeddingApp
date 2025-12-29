import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export function Navigation() {
    const location = useLocation();
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/couple', label: 'The Couple' },
        { path: '/schedule', label: 'Schedule' },
        { path: '/registry', label: 'Registry' },
        { path: '/rsvp', label: 'RSVP' },
        { path: '/travel', label: 'Travel' },
        { path: '/location', label: 'Location' },
    ];

    const handleLinkClick = () => {
        setIsMenuOpen(false);
    };

    return (
        <>
            {/* Desktop Navigation */}
            <nav className="nav-section nav-desktop">
                <div className="nav-wrapper">
                    <div className="nav-line"></div>
                    <ul className="nav-links">
                        {navItems.map(item => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                    <div className="nav-line"></div>
                </div>
            </nav>

            {/* Mobile Navigation */}
            <div className="nav-mobile">
                {/* Hamburger Button - Fixed Position */}
                <button
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Overlay */}
                <div
                    className={`nav-overlay ${isMenuOpen ? 'open' : ''}`}
                    onClick={() => setIsMenuOpen(false)}
                ></div>

                {/* Slide-in Panel */}
                <div className={`nav-panel ${isMenuOpen ? 'open' : ''}`}>
                    <button
                        className="nav-close"
                        onClick={() => setIsMenuOpen(false)}
                        aria-label="Close menu"
                    >
                        ✕
                    </button>
                    <ul className="nav-panel-links">
                        {navItems.map(item => (
                            <li key={item.path}>
                                <Link
                                    to={item.path}
                                    className={`nav-panel-link ${location.pathname === item.path ? 'active' : ''}`}
                                    onClick={handleLinkClick}
                                >
                                    {item.label}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </>
    );
}
