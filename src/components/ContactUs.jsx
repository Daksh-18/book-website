import React, { useState } from 'react';
import './ContactUs.css';

const ContactUs = () => {
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Contact Form Submitted:', { firstName, lastName, email, message });
        setFirstName('');
        setLastName('');
        setEmail('');
        setMessage('');
    };

    return (
        <div className="contact-us-container">
            <div className="contact-info">
                <h2>Contact Us</h2>
                <p>
                    Need to get in touch with us? Fill out the form with your inquiry and we will get in touch with you.
                    
                </p>
            </div>
            <div className="contact-form-container">
                <form onSubmit={handleSubmit}>
                    <div className="form-row">
                        <div className="form-group">
                            <label htmlFor="firstName">First name*</label>
                            <input
                                type="text"
                                id="firstName"
                                value={firstName}
                                onChange={(e) => setFirstName(e.target.value)}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label htmlFor="lastName">Last name</label>
                            <input
                                type="text"
                                id="lastName"
                                value={lastName}
                                onChange={(e) => setLastName(e.target.value)}
                            />
                        </div>
                    </div>
                    <div className="form-group">
                        <label htmlFor="email">Email*</label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="message">What can we help you with?</label>
                        <textarea
                            id="message"
                            value={message}
                            onChange={(e) => setMessage(e.target.value)}
                            required
                        />
                    </div>
                    <button type="submit" className="submit-button">Submit</button>
                </form>
            </div>
        </div>
    );
};

export default ContactUs;
