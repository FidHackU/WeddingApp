import { useState, FormEvent } from 'react';
import { WEDDING } from '../config/wedding';
import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './RSVP.css';

export function RSVP() {
    const [submitted, setSubmitted] = useState(false);
    const [formData, setFormData] = useState({
        guestName: '',
        guestEmail: '',
        attending: '',
        guestCount: '1',
        dietaryRestrictions: '',
        songRequest: '',
    });

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        const rsvpData = {
            ...formData,
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
        <div className="page">
            <Navigation />

            <section className="rsvp-section">
                <div className="rsvp-container">
                    <p className="section-subtitle">Respond</p>
                    <h2 className="section-title">RSVP</h2>
                    <p className="rsvp-intro">{WEDDING.rsvp.message}</p>

                    {!submitted ? (
                        <form className="rsvp-form" onSubmit={handleSubmit}>
                            <div className="form-group">
                                <label className="form-label" htmlFor="guestName">Your Name</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    id="guestName"
                                    required
                                    value={formData.guestName}
                                    onChange={(e) => setFormData({ ...formData, guestName: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="guestEmail">Email Address</label>
                                <input
                                    type="email"
                                    className="form-input"
                                    id="guestEmail"
                                    required
                                    value={formData.guestEmail}
                                    onChange={(e) => setFormData({ ...formData, guestEmail: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label">Will You Be Attending?</label>
                                <div className="form-radio-group">
                                    <label className="form-radio">
                                        <input
                                            type="radio"
                                            name="attending"
                                            value="yes"
                                            required
                                            checked={formData.attending === 'yes'}
                                            onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                                        />
                                        <span>Joyfully Accept</span>
                                    </label>
                                    <label className="form-radio">
                                        <input
                                            type="radio"
                                            name="attending"
                                            value="no"
                                            checked={formData.attending === 'no'}
                                            onChange={(e) => setFormData({ ...formData, attending: e.target.value })}
                                        />
                                        <span>Regretfully Decline</span>
                                    </label>
                                </div>
                            </div>

                            {formData.attending === 'yes' && (
                                <div className="form-group">
                                    <label className="form-label" htmlFor="guestCount">Number of Guests</label>
                                    <select
                                        className="form-select"
                                        id="guestCount"
                                        value={formData.guestCount}
                                        onChange={(e) => setFormData({ ...formData, guestCount: e.target.value })}
                                    >
                                        <option value="1">1 Guest</option>
                                        <option value="2">2 Guests</option>
                                        <option value="3">3 Guests</option>
                                        <option value="4">4 Guests</option>
                                    </select>
                                </div>
                            )}

                            <div className="form-group">
                                <label className="form-label" htmlFor="dietaryRestrictions">Dietary Restrictions</label>
                                <textarea
                                    className="form-textarea"
                                    id="dietaryRestrictions"
                                    placeholder="Please let us know of any dietary restrictions or allergies..."
                                    value={formData.dietaryRestrictions}
                                    onChange={(e) => setFormData({ ...formData, dietaryRestrictions: e.target.value })}
                                />
                            </div>

                            <div className="form-group">
                                <label className="form-label" htmlFor="songRequest">Song Request</label>
                                <input
                                    type="text"
                                    className="form-input"
                                    id="songRequest"
                                    placeholder="What song will get you on the dance floor?"
                                    value={formData.songRequest}
                                    onChange={(e) => setFormData({ ...formData, songRequest: e.target.value })}
                                />
                            </div>

                            <button type="submit" className="btn">Send RSVP</button>
                            <p className="rsvp-deadline">Please respond by <span>{WEDDING.rsvp.deadline}</span></p>
                        </form>
                    ) : (
                        <div className="rsvp-success">
                            <h3>Thank You!</h3>
                            <p>Your RSVP has been received. We can't wait to celebrate with you!</p>
                        </div>
                    )}
                </div>
            </section>

            <Footer minimal />
        </div>
    );
}
