import React from 'react'

const ContactUs = () => {
    return (
        <section className="contact">
            <div className="contact-container">
                <h2>Contact Us</h2>
                <p>We’d love to hear from you! Fill out the form below and we’ll get back to you soon.</p>

                <form className="contact-form">
                    <div className="form-group">
                        <label htmlFor="name">Your Name</label>
                        <input type="text" id="name" placeholder="Enter your name" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="email">Your Email</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                    </div>

                    <div className="form-group">
                        <label htmlFor="message">Message</label>
                        <textarea id="message" rows="5" placeholder="Write your message..." required></textarea>
                    </div>

                    <button type="submit" className="btn-submit">Send Message</button>
                </form>
            </div>
        </section>
    );
};

export default ContactUs