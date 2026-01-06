import { useState, type FormEvent, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { WEDDING } from '../config/wedding';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './RSVP.css';

export function RSVP() {
    const navigate = useNavigate();
    const [submitted, setSubmitted] = useState(false);
    const [attending, setAttending] = useState<string>('');
    const [guestCount, setGuestCount] = useState<string>('1');
    const [isCustomGuestCount, setIsCustomGuestCount] = useState(false);
    const [customGuestCount, setCustomGuestCount] = useState<string>('');
    const [guestNames, setGuestNames] = useState<string[]>([]);

    // Contact & Main Guest Info
    const [formData, setFormData] = useState({
        name: '',

        phone: '',
        songRequest: '',
        events: [] as string[],
        guestType: 'self' // Added to track Mad Libs selection
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

    const handleInputChange = (field: string, value: any) => {
        setFormData(prev => ({ ...prev, [field]: value }));
    };

    const handleEventToggle = (eventName: string) => {
        setFormData(prev => {
            const currentEvents = prev.events || [];
            if (currentEvents.includes(eventName)) {
                return { ...prev, events: currentEvents.filter(e => e !== eventName) };
            } else {
                return { ...prev, events: [...currentEvents, eventName] };
            }
        });
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

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitError, setSubmitError] = useState('');

    const [countdown, setCountdown] = useState(3);

    useEffect(() => {
        if (submitted && countdown > 0) {
            const timer = setTimeout(() => setCountdown(c => c - 1), 1000);
            return () => clearTimeout(timer);
        } else if (submitted && countdown === 0) {
            navigate('/registry', { state: { fromRSVP: true } });
        }
    }, [submitted, countdown, navigate]);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitError('');

        const count = isCustomGuestCount ? parseInt(customGuestCount) || 1 : parseInt(guestCount);

        const rsvpData = {
            ...formData,
            attending: attending === 'yes',
            guestCount: count,
            additionalGuests: guestNames,
            submittedAt: new Date().toISOString(),
        };

        try {
            await fetch(WEDDING.rsvp.googleSheetsUrl, {
                method: 'POST',
                mode: 'no-cors',
                headers: {
                    'Content-Type': 'text/plain',
                },
                body: JSON.stringify(rsvpData),
            });

            // Store in localStorage as backup
            const existingRSVPs = JSON.parse(localStorage.getItem('weddingRSVPs') || '[]');
            existingRSVPs.push(rsvpData);
            localStorage.setItem('weddingRSVPs', JSON.stringify(existingRSVPs));

            console.log('RSVP submitted successfully');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            setSubmitted(true);
        } catch (error) {
            console.error('Error submitting RSVP:', error);
            setSubmitError('Something went wrong. Please try again or contact us directly.');
        } finally {
            setIsSubmitting(false);
        }
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
                            <div className="form-group">
                                <label className="form-label">Your Name</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    value={formData.name}
                                    onChange={(e) => handleInputChange('name', e.target.value)}
                                    placeholder="Enter your full name"
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
                                    placeholder="Enter your phone number"
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
                                    {/* Events Multi-Select */}
                                    <div className="form-group">
                                        <label className="form-label">Which events will you be attending?</label>
                                        <div className="checkbox-group" style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                                            {WEDDING.rsvp.rsvpEvents?.map(event => (
                                                <label key={event} className="checkbox-option" style={{ display: 'flex', alignItems: 'center', gap: '10px', cursor: 'pointer' }}>
                                                    <input
                                                        type="checkbox"
                                                        checked={formData.events?.includes(event)}
                                                        onChange={() => handleEventToggle(event)}
                                                        style={{ width: '18px', height: '18px', accentColor: 'var(--color-accent)' }}
                                                    />
                                                    <span style={{ fontSize: '1rem' }}>{event}</span>
                                                </label>
                                            ))}
                                        </div>
                                    </div>

                                    {/* Guest Type Selection (Mad Libs Style) */}
                                    <div className="form-group">
                                        <div className="mad-libs-container">
                                            <span className="mad-libs-text">My invitation mentioned I could bring</span>
                                            <select
                                                className="form-select inline-select"
                                                value={formData.guestType || 'self'}
                                                onChange={(e) => {
                                                    const type = e.target.value;
                                                    handleInputChange('guestType', type);

                                                    // Auto-set guest count based on type
                                                    if (type === 'self') {
                                                        setGuestCount('1');
                                                        setIsCustomGuestCount(false);
                                                    } else if (type === 'date') {
                                                        setGuestCount('2');
                                                        setIsCustomGuestCount(false);
                                                    } else if (type === 'family') {
                                                        // Reset to 2 or keep current if > 1
                                                        if (parseInt(guestCount) < 2) setGuestCount('2');
                                                    }
                                                }}
                                            >
                                                <option value="self">MY AWESOME SELF</option>
                                                <option value="date">A DATE</option>
                                                <option value="family">MY FAMILY</option>
                                            </select>
                                            {formData.guestType === 'self' && <span className="mad-libs-text">.</span>}
                                            {formData.guestType === 'date' && <span className="mad-libs-text">, so I'll be bringing:</span>}
                                            {formData.guestType === 'family' && <span className="mad-libs-text">.</span>}
                                        </div>
                                    </div>

                                    {/* Logic for "A DATE" */}
                                    {(formData.guestType === 'date' || formData.guestType === 'family') && (
                                        <div className="guest-names-group fade-in">
                                            {/* Note: Simplified logic for 'date' just showing 1 input if count is 2 */}
                                        </div>
                                    )}

                                    {/* Logic for "A DATE" */}
                                    {formData.guestType === 'date' && (
                                        <div className="guest-names-group fade-in">
                                            <label className="form-label">Guest #1 (Your Date)</label>
                                            <input
                                                type="text"
                                                className="form-input guest-name-input"
                                                placeholder="Date's Full Name"
                                                value={guestNames[0] || ''}
                                                onChange={(e) => handleGuestNameChange(0, e.target.value)}
                                                required
                                            />
                                        </div>
                                    )}

                                    {/* Logic for "MY FAMILY" */}
                                    {formData.guestType === 'family' && (
                                        <div className="family-section fade-in">
                                            <div className="form-group">
                                                <label className="form-label">Number of Guests (Total including you)</label>
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
                                                </select>
                                            </div>

                                            {/* Extra Guest Inputs for Family */}
                                            {guestNames.length > 0 && (
                                                <div className="guest-names-group">
                                                    <label className="form-label">Family Members</label>
                                                    <div className="guest-names-list">
                                                        {guestNames.map((name, index) => (
                                                            <input
                                                                key={index}
                                                                type="text"
                                                                className="form-input guest-name-input"
                                                                placeholder={`Guest #${index + 2} Name`}
                                                                value={name}
                                                                onChange={(e) => handleGuestNameChange(index, e.target.value)}
                                                                required
                                                            />
                                                        ))}
                                                    </div>
                                                </div>
                                            )}
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

                            <button type="submit" className="submit-btn" disabled={isSubmitting}>
                                {isSubmitting ? 'Sending...' : 'Send RSVP'}
                            </button>
                            {submitError && <p className="error-message" style={{ color: 'red', marginTop: '10px' }}>{submitError}</p>}
                            <p className="rsvp-deadline-text">Please respond by {WEDDING.rsvp.deadline}</p>

                            <div className="organizer-contact">
                                <p className="contact-heading">Have any questions or doubts?</p>
                                <p>Reach out to us!</p>

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



                            <p className="redirect-message">
                                Redirecting to registry in {countdown}...
                            </p>
                        </div>
                    )}
                </div>
            </section>

            <Footer />
        </div>
    );
}
