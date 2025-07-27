import React from 'react';
import '../styles/HeroSection.scss';
import bikeImage from '../assets/bike.png';

const HeroSection = () => {
    return (
        <div className="hero-section">
            <img src={bikeImage} alt="Bike" className="hero-bike" />
            <div className="hero-text">
                <span className="subheading">VELORETTI BUSINESS</span>
                <h1 className="main-heading">Bike Lease Plan For Employees.</h1>
            </div>
        </div>
    );
};

export default HeroSection;
