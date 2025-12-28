import { WEDDING } from '../config/wedding';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './Schedule.css';

export function Schedule() {
    return (
        <div className="page">
            <Navigation />

            <section className="schedule-section">
                <p className="section-subtitle">The Timeline</p>
                <h2 className="section-title">Schedule</h2>
                <p className="schedule-intro">
                    We can't wait to celebrate with you! Here's what we have planned for our special day.
                </p>
                <ul className="schedule-list">
                    {WEDDING.schedule.map((item, index) => (
                        <li key={index} className="schedule-item">
                            <span className="schedule-time">{item.time}</span>
                            <div className="schedule-details">
                                <h3>{item.event}</h3>
                                <p>{item.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </section>

            <div className="photo-banner"></div>

            <Footer minimal />
        </div>
    );
}
