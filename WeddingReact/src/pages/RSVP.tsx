import { useState, type FormEvent } from 'react';
import { WEDDING } from '../config/wedding';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './RSVP.css';

interface Guest {
    id: string;
    name: string;
    status: 'attending' | 'not_attending';
    count: number;
}

export function RSVP() {
    const [submitted, setSubmitted] = useState(false);
    const [guests, setGuests] = useState<Guest[]>([
        { id: '1', name: '', status: 'attending', count: 0 }
    ]);
    const [contactInfo, setContactInfo] = useState({
        name: '',
        email: '',
        phone: '',
        songRequest: ''
    });

    const handleGuestChange = (id: string, field: keyof Guest, value: any) => {
        setGuests(guests.map(guest =>
            guest.id === id ? { ...guest, [field]: value } : guest
        ));
    };

    const addGuest = () => {
        setGuests([
            ...guests,
            { id: Date.now().toString(), name: '', status: 'attending', count: 0 }
        ]);
    };

    const removeGuest = (id: string) => {
        if (guests.length > 1) {
            setGuests(guests.filter(g => g.id !== id));
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const rsvpData = {
            guests,
            contactInfo,
            submittedAt: new Date().toISOString(),
        };

        // Store in localStorage
        const existingRSVPs = JSON.parse(localStorage.getItem('weddingRSVPs') || '[]');
        existingRSVPs.push(rsvpData);
        localStorage.setItem('weddingRSVPs', JSON.stringify(existingRSVPs));

        console.log('RSVP submitted:', rsvpData);
        setSubmitted(true);
    };

    return (
        <div className="page rsvp-page">
            <Navigation />

            <section className="rsvp-section">
                <div className="rsvp-container">
                    <h1 className="rsvp-title">RSVP</h1>
                    <p className="rsvp-deadline-text">Please RSVP by {WEDDING.rsvp.deadline}</p>

                    {!submitted ? (
                        <form className="rsvp-form" onSubmit={handleSubmit}>
                            <div className="guests-container">
                                {guests.map((guest) => (
                                    <div key={guest.id} className="guest-entry">
                                        <div className="guest-row name-row">
                                            <span className="guest-prefix">I,</span>
                                            <input
                                                type="text"
                                                className="form-input-line"
                                                placeholder="Name"
                                                value={guest.name}
                                                onChange={(e) => handleGuestChange(guest.id, 'name', e.target.value)}
                                                required
                                            />
                                            <span className="guest-suffix">,</span>
                                            {guests.length > 1 && (
                                                <button type="button" className="remove-guest-btn" onClick={() => removeGuest(guest.id)}>&times;</button>
                                            )}
                                        </div>

                                        <div className="attendance-select-wrapper">
                                            <select
                                                className="attendance-select"
                                                value={guest.status}
                                                onChange={(e) => handleGuestChange(guest.id, 'status', e.target.value)}
                                            >
                                                <option value="attending">AM ATTENDING</option>
                                                <option value="not_attending">WILL NOT BE ATTENDING</option>
                                            </select>
                                        </div>

                                        <div className="wedding-text">Wedding.</div>

                                        <div className="guest-row count-row">
                                            <span>I will be attending</span>
                                            <select
                                                className="count-select"
                                                value={guest.count}
                                                onChange={(e) => handleGuestChange(guest.id, 'count', parseInt(e.target.value))}
                                                disabled={guest.status === 'not_attending'}
                                            >
                                                {[0, 1, 2, 3, 4, 5].map(num => (
                                                    <option key={num} value={num}>{num}</option>
                                                ))}
                                            </select>
                                            <span>.</span>
                                        </div>
                                    </div>
                                ))}
                            </div>

                            <button type="button" className="add-guest-btn" onClick={addGuest}>
                                + Add Another Guest
                            </button>

                            <div className="song-request-section">
                                <label>You'll find us on the dance floor when they play</label>
                                <input
                                    type="text"
                                    className="form-input-line song-input"
                                    placeholder="SONG NAME"
                                    value={contactInfo.songRequest}
                                    onChange={(e) => setContactInfo({ ...contactInfo, songRequest: e.target.value })}
                                />
                                <span>.</span>
                            </div>

                            <div className="contact-section">
                                <div className="contact-row">
                                    <span className="contact-label">I'm</span>
                                    <input
                                        type="text"
                                        className="form-input-line"
                                        placeholder="YOUR NAME"
                                        value={contactInfo.name}
                                        onChange={(e) => setContactInfo({ ...contactInfo, name: e.target.value })}
                                        required
                                    />
                                    <span>.</span>
                                </div>

                                <div className="contact-sub-header">You can reach me at:</div>

                                <input
                                    type="email"
                                    className="form-input-line full-width"
                                    placeholder="EMAIL ADDRESS"
                                    value={contactInfo.email}
                                    onChange={(e) => setContactInfo({ ...contactInfo, email: e.target.value })}
                                    required
                                />

                                <input
                                    type="tel"
                                    className="form-input-line full-width"
                                    placeholder="PHONE NUMBER"
                                    value={contactInfo.phone}
                                    onChange={(e) => setContactInfo({ ...contactInfo, phone: e.target.value })}
                                />
                            </div>

                            <button type="submit" className="btn">Send RSVP</button>
                        </form>
                    ) : (
                        <div className="rsvp-success">
                            <h3>Thank You!</h3>
                            <p>Your RSVP has been received.</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer minimal />
        </div>
    );
}
