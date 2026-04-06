import React, { useRef } from 'react';
import Hero from '../components/Hero';
import About from '../components/About';
import Services from '../components/Services';
import Experience from '../components/Experience';
import ContactForm from '../components/ContactForm';
import Footer from '../components/Footer';
import { consultantData, contactFormData } from '../data/mock';

const Home = () => {
  const contactRef = useRef(null);

  const scrollToContact = () => {
    contactRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen">
      <Hero data={consultantData} onContactClick={scrollToContact} />
      <About data={consultantData} />
      <Services data={consultantData} />
      <Experience data={consultantData} />
      <div ref={contactRef}>
        <ContactForm data={contactFormData} email={consultantData.email} />
      </div>
      <Footer data={consultantData} />
    </div>
  );
};

export default Home;
