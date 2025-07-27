import React, { useState } from 'react';
import { faqData } from '../data/faqdata.js';
import '../styles/Faq.scss';

const FAQ = () => {
    const [openFaq, setOpenFaq] = useState(null);

    const toggleFaq = (id) => {
        setOpenFaq(openFaq === id ? null : id);
    };

    return (
        <div className="faq-section">
            <div className="faq-container">
                <h1 className="faq-title">{faqData.title}</h1>

                <div className="paperwork-section">
                    <h2 className="paperwork-title">{faqData.paperworkSection.title}</h2>
                    <p className="paperwork-content">{faqData.paperworkSection.content}</p>
                </div>

                <div className="faq-list">
                    {faqData.faqs.map((faq) => (
                        <div key={faq.id} className="faq-item">
                            <button
                                className={`faq-question ${openFaq === faq.id ? 'active' : ''}`}
                                onClick={() => toggleFaq(faq.id)}
                            >
                                <span>{faq.question}</span>
                                <span className={`faq-icon ${openFaq === faq.id ? 'rotate' : ''}`}>+</span>
                            </button>
                            <div className={`faq-answer ${openFaq === faq.id ? 'open' : ''}`}>
                                <p>{faq.answer}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default FAQ;