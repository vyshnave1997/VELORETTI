import React, { useState } from 'react';
import '../styles/ContactForm.scss';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        companyName: '',
        companySize: '',
        numberOfIdeas: '',
        howCanWeHelp: ''
    });

    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitted, setSubmitted] = useState(false);

    const companySizeOptions = [
        'Select company size',
        '1-10 employees',
        '11-50 employees',
        '51-100 employees',
        '101-500 employees',
        '500+ employees'
    ];

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        setTimeout(() => {
            setIsSubmitting(false);
            setSubmitted(true);
            console.log('Form submitted:', formData);
        }, 2000);
    };

    if (submitted) {
        return (
            <div className="contact-container">
                <div className="success-message">
                    <h2>Thank you!</h2>
                    <p>We'll get back to you soon.</p>
                    <button
                        className="reset-button"
                        onClick={() => {
                            setSubmitted(false);
                            setFormData({
                                firstName: '',
                                lastName: '',
                                email: '',
                                phone: '',
                                companyName: '',
                                companySize: '',
                                numberOfIdeas: '',
                                howCanWeHelp: ''
                            });
                        }}
                    >
                        Send another message
                    </button>
                </div>
            </div>
        );
    }

    return (
        <div className="contact-container">
            <div className="contact-form">
                <h1 className="form-title">Get in touch</h1>

                <div onSubmit={handleSubmit}>
                    <div className="form-group">
                        <input
                            type="text"
                            name="firstName"
                            placeholder="First name"
                            value={formData.firstName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="lastName"
                            placeholder="Last name"
                            value={formData.lastName}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="email"
                            name="email"
                            placeholder="Email address"
                            value={formData.email}
                            onChange={handleInputChange}
                            required
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="tel"
                            name="phone"
                            placeholder="Phone number"
                            value={formData.phone}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <input
                            type="text"
                            name="companyName"
                            placeholder="Company name"
                            value={formData.companyName}
                            onChange={handleInputChange}
                        />
                    </div>

                    <div className="form-group">
                        <select
                            name="companySize"
                            value={formData.companySize}
                            onChange={handleInputChange}
                            className={formData.companySize === '' ? 'placeholder' : ''}
                        >
                            {companySizeOptions.map((option, index) => (
                                <option
                                    key={index}
                                    value={index === 0 ? '' : option}
                                    disabled={index === 0}
                                >
                                    {option}
                                </option>
                            ))}
                        </select>
                    </div>

                    <div className="form-group">
                        <input
                            type="number"
                            name="numberOfIdeas"
                            placeholder="Number of ideas"
                            value={formData.numberOfIdeas}
                            onChange={handleInputChange}
                            min="0"
                        />
                    </div>

                    <div className="form-group">
            <textarea
                name="howCanWeHelp"
                placeholder="How can we help"
                value={formData.howCanWeHelp}
                onChange={handleInputChange}
                rows="4"
            />
                    </div>

                    <button
                        type="submit"
                        className="submit-button"
                        disabled={isSubmitting}
                        onClick={handleSubmit}
                    >
                        {isSubmitting ? 'Sending message...' : 'Send message'}
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ContactForm;