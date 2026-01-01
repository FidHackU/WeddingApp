import { WEDDING } from '../config/wedding';
import './Footer.css';

interface FooterProps {
    minimal?: boolean;
}

export function Footer({ minimal = false }: FooterProps) {
    if (minimal) {
        return (
            <footer className="footer">
                <p className="footer-names footer-names-small">{WEDDING.groom} & {WEDDING.bride}</p>
            </footer>
        );
    }

    return (
        <footer className="footer">
            <p className="footer-names">{WEDDING.groom} & {WEDDING.bride}</p>
            <p className="footer-date">{WEDDING.date}</p>
            <p className="footer-message">Can't wait to see you!</p>
        </footer>
    );
}
