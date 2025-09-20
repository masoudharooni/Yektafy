import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import FeaturedProperties from '../components/FeaturedProperties';
import WhyUs from '../components/WhyUs';
import Footer from '../components/Footer';

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <FeaturedProperties />
        <WhyUs />
      </main>
      <Footer />
    </>
  );
};

export default LandingPage;
