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
        <nav className="nav-section">
            <div className="nav-wrapper">
                <div className="nav-line"></div>

                {/* Hamburger Button - Mobile Only */}
                <button
                    className={`hamburger ${isMenuOpen ? 'active' : ''}`}
                    onClick={() => setIsMenuOpen(!isMenuOpen)}
                    aria-label="Toggle menu"
                >
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                    <span className="hamburger-line"></span>
                </button>

                {/* Navigation Links */}
                <ul className={`nav-links ${isMenuOpen ? 'open' : ''}`}>
                    {navItems.map(item => (
                        <li key={item.path}>
                            <Link
                                to={item.path}
                                className={`nav-link ${location.pathname === item.path ? 'active' : ''}`}
                                onClick={handleLinkClick}
                            >
                                {item.label}
                            </Link>
                        </li>
                    ))}
                </ul>

                <div className="nav-line"></div>
            </div>

            {/* Mobile Menu Overlay */}
            {isMenuOpen && (
                <div className="nav-overlay" onClick={() => setIsMenuOpen(false)}></div>
            )}
        </nav>
    );
}
