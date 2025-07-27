import React from 'react';
import '../styles/ServiceMaintance.scss';
import services from '../assets/6.png';

const ServiceMaintenance = () => {
    return (
        <section className="service-maintenance">
            <div className="service-maintenance__overlay"></div>
            <div className="service-maintenance__background">
                <img
                    src={services}
                    alt="Person with electric bike"
                    className="service-maintenance__bg-image"
                />
            </div>

            <div className="service-maintenance__container">
                <div className="service-maintenance__content">
                    <div className="service-maintenance__text">
                        <h2 className="service-maintenance__title">
                            Service,<br />
                            maintenance and<br />
                            insurance
                        </h2>

                        <p className="service-maintenance__description">
                            The lease includes an all-in service package.
                            Throughout the entire 36 months, you are
                            fully insured against damage, theft and
                            maintenance. In addition, you always have
                            access to roadside assistance.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ServiceMaintenance;