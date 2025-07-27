import React from 'react';
import '../styles/HowItWorks.scss';
import imageer from '../assets/Video.png';

const HowItWorks = () => {
    const steps = [
        {
            title: "Register your company",
            description: "Simply complete our online registration form with your company details. Our team will set up your account and get you registered with our system, sending you the final steps to complete setup.",
            number: "01"
        },
        {
            title: "Determine the requirements",
            description: "You get access to the application, set the requirements for your employees and choose their bike selection.",
            number: "02"
        },
        {
            title: "Ride your bike!",
            description: "Have your employees select and choose their bike and enjoy the ride straight from the office.",
            number: "03"
        },
        {
            title: "Administration",
            description: "Everything from here is the application service as easy as sending your employees a link to their bikes!",
            number: "04"
        }
    ];

    return (
        <section className="how-it-works">
            <div className="how-it-works__container">
                <div className="how-it-works__content">
                    {/* Left Side - Text Content */}
                    <div className="how-it-works__text-section">
                        <h2 className="how-it-works__title">How it works</h2>

                        <div className="how-it-works__steps">
                            {steps.map((step, index) => (
                                <div key={index} className="how-it-works__step">
                                    <div className="how-it-works__step-header">
                                        <span className="how-it-works__step-number">{step.number}</span>
                                        <h3 className="how-it-works__step-title">{step.title}</h3>
                                    </div>
                                    <p className="how-it-works__step-description">
                                        {step.description}
                                    </p>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Image */}
                    <div className="how-it-works__image-section">
                        <div className="how-it-works__image">
                            <img
                                src={imageer}
                                alt="Person riding electric bike in office environment"
                                className="how-it-works__img"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default HowItWorks;