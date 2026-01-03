import { Navigation } from '../components/Navigation';
import { Footer } from '../components/Footer';
import './QnA.css';

export function QnA() {
    return (
        <div className="page">
            <Navigation />

            <section className="qna-section">


                <h2 className="qna-title">Q & A</h2>
                <p className="qna-subtitle">
                    For all our friends and family who have lots of questions, please check out our Q & A first!
                </p>

                <div className="qna-container">
                    <div className="qna-item">
                        <h3 className="qna-question">When is the RSVP deadline?</h3>
                        <p className="qna-answer">
                            Please RSVP by 25th February 2026, So we can have an accurate headcount. :)
                        </p>
                    </div>

                    <div className="qna-item">
                        <h3 className="qna-question">Can I bring an additional guest?</h3>
                        <p className="qna-answer">
                            Due to limited seating, each invitation is limited to the number of guests stated on the invitation. Thank you for your kind understanding.
                        </p>
                    </div>

                    <div className="qna-item">
                        <h3 className="qna-question">What should I wear?</h3>
                        <p className="qna-answer">
                            <strong>Semi-formal/Formal.</strong>
                            <br /><br />
                            <strong>Church Ceremony:</strong> Please dress modestly and appropriately. We have a theme colour and would love for you to join us. Any shades of Green and Cream are welcome.
                            <br /><br />
                            <strong>Hotel Reception:</strong> The Theme is Old Money Rich styles or Traditional Kadazan Attire.
                            <br /><br />
                            But it’s entirely your choice! Most importantly, wear whatever makes you feel your best!
                        </p>
                    </div>

                    <div className="qna-item">
                        <h3 className="qna-question">Is it okay to take pictures with our phones and cameras during the wedding?</h3>
                        <p className="qna-answer">
                            Yes! We would love for you to take photos and share them with us. However, do give way for our official photographer and videographer.
                        </p>
                    </div>

                    <div className="qna-item">
                        <h3 className="qna-question">Do you have hotel accommodations?</h3>
                        <p className="qna-answer">
                            Yes! Hilton Hotel is offering special discounted rates for all our guests. If you need a room, please reach out to us directly. (Before 31st Jan 2026)
                        </p>
                    </div>

                    <div className="qna-item">
                        <h3 className="qna-question">Is parking available?</h3>
                        <p className="qna-answer">
                            Yes! For the Church, parking is available on-site. For the dinner reception at Hilton Kota Kinabalu, a flat rate of RM10.00 per entry applies for banquet guests (please validate your ticket at the reception). Valet parking is also available for RM30.00.
                        </p>
                    </div>
                </div>


            </section>

            <Footer minimal />
        </div>
    );
}
