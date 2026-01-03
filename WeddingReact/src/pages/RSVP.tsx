import { useState, type FormEvent, useEffect } from 'react';
import { WEDDING } from '../config/wedding';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './RSVP.css';

export function RSVP() {
    const [submitted, setSubmitted] = useState(false);
    const [attending, setAttending] = useState<string>('');
    const [guestCount, setGuestCount] = useState<string>('1');
    const [isCustomGuestCount, setIsCustomGuestCount] = useState(false);
    const [customGuestCount, setCustomGuestCount] = useState<string>('');
    const [guestNames, setGuestNames] = useState<string[]>([]);

    // Contact & Main Guest Info
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        songRequest: ''
    });

    // Update guest name inputs when count changes
    useEffect(() => {
        const count = isCustomGuestCount ? parseInt(customGuestCount) || 1 : parseInt(guestCount);
        const extraGuestsNeeded = Math.max(0, count - 1);

        setGuestNames(prev => {
            const newNames = [...prev];
            // Trim if too many
            if (newNames.length > extraGuestsNeeded) {
                return newNames.slice(0, extraGuestsNeeded);
            }
            // Add if too few
            while (newNames.length < extraGuestsNeeded) {
                newNames.push('');
            }
            return newNames;
        });
    }, [guestCount, isCustomGuestCount, customGuestCount]);

    const handleInputChange = (field: string, value: string) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleGuestNameChange = (index: number, value: string) => {
        const newNames = [...guestNames];
        newNames[index] = value;
        setGuestNames(newNames);
    };

    const handleGuestCountChange = (value: string) => {
        if (value === 'other') {
            setIsCustomGuestCount(true);
            setGuestCount('other');
        } else {
            setIsCustomGuestCount(false);
            setGuestCount(value);
            setCustomGuestCount('');
        }
    };

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const count = isCustomGuestCount ? parseInt(customGuestCount) || 1 : parseInt(guestCount);

        const rsvpData = {
            ...formData,
            attending: attending === 'yes',
            guestCount: count,
            additionalGuests: guestNames,
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
                    <p className="section-subtitle">Respond</p>
                    <h1 className="section-title">RSVP</h1>
                    <p className="rsvp-intro">
                        Please let us know if you'll be joining us for our celebration. We truly hope you can make it!
                    </p>

                    {!submitted ? (
                        <form className="rsvp-form" onSubmit={handleSubmit}>
                            {/* Contact Info */}
                            <div className="form-group">
                                <label className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Email Address</label>
                                <input
                                    type="email"
                                    className="form-input"
                                    value={formData.email}
                                    onChange={(e) => handleInputChange('email', e.target.value)}
                                    required
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Phone Number</label>
                                <input
                                    type="tel"
                                    className="form-input"
                                    value={formData.phone}
                                    onChange={(e) => handleInputChange('phone', e.target.value)}
                                    required
                                />
                            </div>

                            {/* Attendance */}
                            <div className="form-group">
                                <label className="form-label">Will You Be Attending?</label>
                                <div className="radio-group">
                                    <label className={`radio-option ${attending === 'yes' ? 'selected' : ''}`}>
                                        <input
                                            type="radio"
                                            name="attending"
                                            value="yes"
                                            checked={attending === 'yes'}
                                            onChange={(e) => setAttending(e.target.value)}
                                            required
                                        />
                                        <span className="radio-label">Joyfully Accept</span>
                                    </label>
                                    <label className={`radio-option ${attending === 'no' ? 'selected' : ''}`}>
                                        <input
                                            type="radio"
                                            name="attending"
                                            value="no"
                                            checked={attending === 'no'}
                                            onChange={(e) => setAttending(e.target.value)}
                                        />
                                        <span className="radio-label">Regretfully Decline</span>
                                    </label>
                                </div>
                            </div>

                            {/* Conditional Fields for Attending Guests */}
                            {attending === 'yes' && (
                                <div className="attending-fields">
                                    <div className="form-group">
                                        <label className="form-label">Number of Guests</label>
                                        <select
                                            className="form-select"
                                            value={guestCount}
                                            onChange={(e) => handleGuestCountChange(e.target.value)}
                                        >
                                            <option value="1">1 Guest</option>
                                            <option value="2">2 Guests</option>
                                            <option value="3">3 Guests</option>
                                            <option value="4">4 Guests</option>
                                            <option value="5">5 Guests</option>
                                            <option value="other">Other</option>
                                        </select>
                                    </div>

                                    {isCustomGuestCount && (
                                        <div className="form-group">
                                            <label className="form-label">Enter Number of Guests</label>
                                            <input
                                                type="number"
                                                min="1"
                                                max="20"
                                                className="form-input"
                                                value={customGuestCount}
                                                onChange={(e) => setCustomGuestCount(e.target.value)}
                                                required
                                            />
                                        </div>
                                    )}

                                    {/* Dynamic Guest Name Inputs */}
                                    {guestNames.length > 0 && (
                                        <div className="guest-names-group">
                                            <label className="form-label">Guest Names</label>
                                            <div className="guest-names-list">
                                                {guestNames.map((name, index) => (
                                                    <input
                                                        key={index}
                                                        type="text"
                                                        className="form-input guest-name-input"
                                                        placeholder={`Guest ${index + 2} Name`}
                                                        value={name}
                                                        onChange={(e) => handleGuestNameChange(index, e.target.value)}
                                                        required
                                                    />
                                                ))}
                                            </div>
                                        </div>
                                    )}



                                    <div className="form-group">
                                        <label className="form-label">Song Request</label>
                                        <input
                                            type="text"
                                            className="form-input"
                                            placeholder="What song will get you on the dance floor?"
                                            value={formData.songRequest}
                                            onChange={(e) => handleInputChange('songRequest', e.target.value)}
                                        />
                                    </div>
                                </div>
                            )}

                            <button type="submit" className="submit-btn">Send RSVP</button>
                            <p className="rsvp-deadline-text">Please respond by {WEDDING.rsvp.deadline}</p>

                            <div className="organizer-contact">
                                <p className="contact-heading">Questions?</p>
                                <p>You can reach us at:</p>

                                <div className="contact-person">
                                    <p className="contact-name">Darrell Yong</p>
                                    <p className="contact-links">
                                        <a href="https://wa.me/6581563295" target="_blank" rel="noopener noreferrer">+65-81563295 (SG)</a>
                                        {' , '}
                                        <a href="https://wa.me/601131538372" target="_blank" rel="noopener noreferrer">+6011-31538372 (MY)</a>
                                    </p>
                                </div>

                                <div className="contact-person">
                                    <p className="contact-name">Maybelline Yau</p>
                                    <p className="contact-links">
                                        <a href="https://wa.me/60138833144" target="_blank" rel="noopener noreferrer">+6013-8833144 (MY)</a>
                                    </p>
                                </div>
                            </div>
                        </form>
                    ) : (
                        <div className="rsvp-success">
                            <h3>Thank You!</h3>
                            <p>Your RSVP has been received. We can't wait to celebrate with you!</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
