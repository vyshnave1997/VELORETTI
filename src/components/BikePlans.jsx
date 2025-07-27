// components/BikePlans.jsx
import React from 'react';
import '../styles/BikePlans.scss';

const BikePlans = ({ image, title, description, buttonText }) => {
    return (
        <section className="bike-plans">
            <div className="bike-plans__container">
                <div className="bike-plans__content">
                    {/* Left Side - Image */}
                    <div className="bike-plans__image-section">
                        <div className="bike-plans__image">
                            <img
                                src={image}
                                alt={title}
                                className="bike-plans__img"
                            />
                        </div>
                    </div>

                    {/* Right Side - Text Content */}
                    <div className="bike-plans__text-section">
                        <div className="bike-plans__text-content">
                            <h1 className="bike-plans__title">{title}</h1>
                            <p className="bike-plans__description">{description}</p>
                            <button className="bike-plans__cta">{buttonText}</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default BikePlans;
