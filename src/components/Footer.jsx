import React, { useState } from 'react';
import { footerData } from '../data/footerData';
import '../styles/Footer.scss';

const Footer = () => {
    const [email, setEmail] = useState('');
    const [isChecked, setIsChecked] = useState(false);

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email && isChecked) {
            console.log('Subscribed:', email);
            // Handle subscription logic here
            setEmail('');
            setIsChecked(false);
        }
    };

    const handleScrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <footer className="footer">
            {/* Top Banner */}
            <div className="footer-banner">
                <div className="footer-banner-content">
                    <p>{footerData.banner.text}</p>
                    <button className="book-now-btn">{footerData.banner.buttonText}</button>
                </div>
            </div>

            {/* Main Footer Content */}
            <div className="footer-content">
                <div className="footer-container">
                    {/* Explorer Section */}
                    <div className="footer-section">
                        <h3>{footerData.sections.explorer.title}</h3>
                        <ul>
                            {footerData.sections.explorer.links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* About Section */}
                    <div className="footer-section">
                        <h3>{footerData.sections.about.title}</h3>
                        <ul>
                            {footerData.sections.about.links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Help Section */}
                    <div className="footer-section">
                        <h3>{footerData.sections.help.title}</h3>
                        <ul>
                            {footerData.sections.help.links.map((link, index) => (
                                <li key={index}>
                                    <a href={link.url}>{link.text}</a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Newsletter Section */}
                    <div className="footer-section newsletter-section">
                        <h3>{footerData.newsletter.title}</h3>
                        <p>{footerData.newsletter.subtitle}</p>

                        <div className="newsletter-form">
                            <div className="email-input-container">
                                <input
                                    type="email"
                                    placeholder={footerData.newsletter.placeholder}
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="email-input"
                                />
                                <button onClick={handleSubscribe} className="subscribe-btn">
                                    {footerData.newsletter.buttonText}
                                </button>
                            </div>

                            <div className="privacy-checkbox">
                                <input
                                    type="checkbox"
                                    id="privacy-agree"
                                    checked={isChecked}
                                    onChange={(e) => setIsChecked(e.target.checked)}
                                />
                                <label htmlFor="privacy-agree">
                                    {footerData.newsletter.privacyText.beforeLink}
                                    <a href={footerData.newsletter.privacyText.link.url}>
                                        {footerData.newsletter.privacyText.link.text}
                                    </a>
                                    {footerData.newsletter.privacyText.afterLink}
                                </label>
                            </div>
                        </div>

                        {/* Social Media Icons */}
                        <div className="social-icons">
                            {footerData.socialMedia.map((social, index) => (
                                <a key={index} href={social.url} className="social-icon">
                                    <span className={`icon-${social.name}`}>{social.icon}</span>
                                </a>
                            ))}
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll to Top Button */}
            <button className="scroll-to-top" onClick={handleScrollToTop}>
                ↑
            </button>
        </footer>
    );
};

export default Footer;