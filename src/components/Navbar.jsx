import React, { useState } from 'react';
import '../styles/Navbar.scss';

const Navbar = () => {
    const [activeDropdown, setActiveDropdown] = useState(null);

    const handleDropdownToggle = (menu) => {
        setActiveDropdown(activeDropdown === menu ? null : menu);
    };

    return (
        <nav className="navbar">
            <div className="navbar__container">
                <div className="navbar__content">
                    {/* Left Side - Logo and Menu */}
                    <div className="navbar__left">
                        {/* Logo */}
                        <div className="navbar__logo">
                            <span>VELORETTI</span>
                        </div>

                        {/* Navigation Menu */}
                        <div className="navbar__menu">
                            {/* Electric Dropdown */}
                            <div className="navbar__item navbar__item--dropdown">
                                <button
                                    className="navbar__button"
                                    onClick={() => handleDropdownToggle('electric')}
                                >
                                    ELECTRIC
                                    <svg className="navbar__arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className={`navbar__dropdown ${activeDropdown === 'electric' ? 'navbar__dropdown--active' : ''}`}>
                                    <div className="navbar__dropdown-content">
                                        <a href="#" className="navbar__dropdown-link">Electric One</a>
                                        <a href="#" className="navbar__dropdown-link">Electric Two</a>
                                        <a href="#" className="navbar__dropdown-link">Electric Pro</a>
                                    </div>
                                </div>
                            </div>

                            {/* City Dropdown */}
                            <div className="navbar__item navbar__item--dropdown">
                                <button
                                    className="navbar__button"
                                    onClick={() => handleDropdownToggle('city')}
                                >
                                    CITY
                                    <svg className="navbar__arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className={`navbar__dropdown ${activeDropdown === 'city' ? 'navbar__dropdown--active' : ''}`}>
                                    <div className="navbar__dropdown-content">
                                        <a href="#" className="navbar__dropdown-link">City One</a>
                                        <a href="#" className="navbar__dropdown-link">City Two</a>
                                    </div>
                                </div>
                            </div>

                            {/* Kids Dropdown */}
                            <div className="navbar__item navbar__item--dropdown">
                                <button
                                    className="navbar__button"
                                    onClick={() => handleDropdownToggle('kids')}
                                >
                                    KIDS
                                    <svg className="navbar__arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className={`navbar__dropdown ${activeDropdown === 'kids' ? 'navbar__dropdown--active' : ''}`}>
                                    <div className="navbar__dropdown-content">
                                        <a href="#" className="navbar__dropdown-link">Balance Bike</a>
                                        <a href="#" className="navbar__dropdown-link">Kids Gear</a>
                                    </div>
                                </div>
                            </div>

                            {/* Regular Menu Items */}
                            <div className="navbar__item">
                                <a href="#" className="navbar__link">ACCESSORIES</a>
                            </div>
                            <div className="navbar__item">
                                <a href="#" className="navbar__link">STORES</a>
                            </div>

                            {/* Leasing Dropdown */}
                            <div className="navbar__item navbar__item--dropdown">
                                <button
                                    className="navbar__button"
                                    onClick={() => handleDropdownToggle('leasing')}
                                >
                                    LEASING
                                    <svg className="navbar__arrow" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                                <div className={`navbar__dropdown ${activeDropdown === 'leasing' ? 'navbar__dropdown--active' : ''}`}>
                                    <div className="navbar__dropdown-content">
                                        <a href="#" className="navbar__dropdown-link">Bike Lease</a>
                                        <a href="#" className="navbar__dropdown-link">Corporate Plans</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - Actions and Mobile Toggle */}
                    <div className="navbar__right">
                        {/* Right Side Icons */}
                        <div className="navbar__actions">
                            {/* Language Selector */}
                            <div className="navbar__language">
                                <span className="navbar__language-text">EN</span>
                                <div className="navbar__flag">
                                    <div className="flag-gb">
                                        <div className="flag-gb__blue"></div>
                                        <div className="flag-gb__white-diag1"></div>
                                        <div className="flag-gb__white-diag2"></div>
                                        <div className="flag-gb__red-diag1"></div>
                                        <div className="flag-gb__red-diag2"></div>
                                        <div className="flag-gb__white-cross-v"></div>
                                        <div className="flag-gb__white-cross-h"></div>
                                        <div className="flag-gb__red-cross-v"></div>
                                        <div className="flag-gb__red-cross-h"></div>
                                    </div>
                                </div>
                            </div>

                            {/* User Icon */}
                            <button className="navbar__icon-btn">
                                <svg className="navbar__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                                </svg>
                            </button>

                            {/* Shopping Bag Icon */}
                            <button className="navbar__icon-btn">
                                <svg className="navbar__icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
                                </svg>
                            </button>
                        </div>

                        {/* Mobile menu button */}
                        <div className="navbar__mobile-toggle">
                            <button className="navbar__mobile-btn">
                                <svg className="navbar__mobile-icon" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                                </svg>
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Click overlay to close dropdowns */}
            {activeDropdown && (
                <div
                    className="navbar__overlay"
                    onClick={() => setActiveDropdown(null)}
                ></div>
            )}
        </nav>
    );
};

export default Navbar;