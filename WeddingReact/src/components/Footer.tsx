import { WEDDING } from '../config/wedding';
import './Footer.css';

export function Footer() {
    return (
        <footer className="footer">
            <p className="footer-names">{WEDDING.groom} & {WEDDING.bride}</p>
            <p className="footer-date">{WEDDING.date}</p>
            <p className="footer-message">Can't wait to see you!</p>
        </footer>
    );
}
