import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './QnA.css';

export function QnA() {
    return (
        <div className="page">
            <Navigation />

            <section className="qna-section">
                {/* Decorative Elements */}
                <div className="qna-decoration qna-decoration-left">❧</div>
                <div className="qna-decoration qna-decoration-right">❧</div>

                <h2 className="qna-title">Q & A</h2>
                <p className="qna-subtitle">
                    For all our friends and family who have lots of questions, please check out our Q & A first!
                </p>

                <div className="qna-container">
                    <div className="qna-item">
                        <h3 className="qna-question">When is the RSVP deadline?</h3>
                        <p className="qna-answer">
                            Please RSVP by 31st January 2026, So we can have an accurate headcount. :)
                        </p>
                    </div>

                    <div className="qna-item">
                        <h3 className="qna-question">Can I bring a date?</h3>
                        <p className="qna-answer">
                            Please check your invite for your +1! Thank you for your kind understanding.
                        </p>
                    </div>

                    <div className="qna-item">
                        <h3 className="qna-question">What should I wear?</h3>
                        <p className="qna-answer">
                            Semi-formal. We also have a theme (Old Money Rich Style) and would love for you to join us by wearing shades of olive/mint green and cream, but of course, it’s entirely your choice—wear whatever makes you feel your best!
                        </p>
                    </div>

                    <div className="qna-item">
                        <h3 className="qna-question">Is it okay to take pictures with our phones and cameras during the wedding?</h3>
                        <p className="qna-answer">
                            Yes! We would love for you to take photos and share them with us. However, do give way for our official photographer and videographer.
                        </p>
                    </div>

                    <div className="qna-item">
                        <h3 className="qna-question">Is parking available?</h3>
                        <p className="qna-answer">
                            Yes! For the Church, parking is available on-site. For the dinner reception at Hilton Kota Kinabalu, a flat rate of RM10.00 per entry applies for banquet guests (please validate your ticket at the reception). Valet parking is also available for RM30.00.
                        </p>
                    </div>
                </div>

                {/* Bottom Flourish */}
                <div className="qna-flourish">
                    <span>♥</span>
                </div>
            </section>

            <Footer minimal />
        </div>
    );
}
