import { Link, useLocation } from 'react-router-dom';
import './Navigation.css';

export function Navigation() {
    const location = useLocation();

    const navItems = [
        { path: '/', label: 'Home' },
        { path: '/couple', label: 'The Couple' },
        { path: '/schedule', label: 'Schedule' },
        { path: '/rsvp', label: 'RSVP' },
        { path: '/travel', label: 'Travel' },
        { path: '/location', label: 'Location' },
    ];

    return (
        <nav className="nav-section">
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
    );
}
