import React from "react";
import { motion } from "framer-motion";
import Header from "../components/Header";
import Hero from "../components/Hero";
import PropertiesSection from "../components/PropertiesSection";
import WhyUs from "../components/WhyUs";
import HowItWorks from "../components/HowItWorks";
import WhyChooseUs from "../components/WhyChooseUs";
import Testimonials from "../components/Testimonials";
import Footer from "../components/Footer";
import { FOR_SALE_PROPERTIES, FOR_RENT_PROPERTIES } from "../constants";

const LandingPage: React.FC = () => {
  return (
    <motion.div 
      className="min-h-screen bg-gray-900"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <Header />
      <main className="w-full">
        <Hero />
        
        {/* For Sale Properties Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.3, delay: 0.05 }}
        >
          <PropertiesSection
            title="منتخب آگهی‌های فروشی"
            subtitle="بهترین و باکیفیت‌ترین ملک‌های فروشی در اصفهان و حومه"
            properties={FOR_SALE_PROPERTIES}
            viewMoreLink="/properties/for-sale"
          />
        </motion.div>

        {/* Why Us Section */}
        <div className="px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <WhyUs />
          </motion.div>
        </div>

        {/* For Rent Properties Section */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <PropertiesSection
            title="منتخب آگهی‌های اجاره‌ای"
            subtitle="متنوع‌ترین و مناسب‌ترین آپارتمان‌ها و خانه‌های اجاره‌ای"
            properties={FOR_RENT_PROPERTIES}
            viewMoreLink="/properties/for-rent"
          />
        </motion.div>
      </main>
      
      {/* Additional sections outside the main container */}
      <HowItWorks />
      <WhyChooseUs />
      <Testimonials />
      <Footer />
    </motion.div>
  );
};

export default LandingPage;
