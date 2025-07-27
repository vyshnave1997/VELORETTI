import React from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import BikePlans from "./components/BikePlans";
import ServiceMaintenance from "./components/ServiceMaintance";
import bikePlanData from "./data/data";
import HowItWorks from "./components/HowItWorks";
import ProductDemo from "./components/Products";
import ContactForm from "./components/ContactForm";
import FAQ from "./components/Faq";
import Footer from "./components/Footer";

function App() {
    return (
        <div className="App">
            <Navbar />
            <HeroSection />

            {/* First BikePlan before ServiceMaintenance */}
            <BikePlans
                image={bikePlanData[0].image}
                title={bikePlanData[0].title}
                description={bikePlanData[0].description}
                buttonText={bikePlanData[0].buttonText}
            />

            <ServiceMaintenance />

            {/* Second BikePlan after ServiceMaintenance */}
            <BikePlans
                image={bikePlanData[1].image}
                title={bikePlanData[1].title}
                description={bikePlanData[1].description}
                buttonText={bikePlanData[1].buttonText}
            />
            <HowItWorks />
            <ProductDemo />
            <ContactForm />
            <FAQ />
            <Footer />
        </div>
    );
}

export default App;
