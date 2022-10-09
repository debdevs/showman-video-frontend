import React from 'react';

import Navbar from '../../../components/UI/organisms/Navbar/Navbar';
import Hero from '../../../components/templates/Hero/Hero';
import SubHeading from '../../../components/templates/SubHeading/SubHeading';
import AlternateSubHeading from '../../../components/templates/AlternateSubHeading/AlternateSubHeading';
import FrontInfoSection from '../../../components/templates/FrontInfoSection/FrontInfoSection';
import Footer from '../../../components/templates/Footer/Footer';
import { motion } from 'framer-motion/dist/framer-motion';
import '../../../App.css';
import '../../../meyer-reset.css';
const HomePage = () => {
  return (
    <motion.div
      className="home-column"
      initial={{ scaleX: 0.9, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      exit={{
        scaleX: 0.97,
        opacity: 0,
        transition: { type: 'spring', stiffness: 50 },
      }}
      transition={{ delay: 0.6 }}
    >
      <Navbar />
      <Hero />
      <SubHeading />
      <AlternateSubHeading />
      <FrontInfoSection />
      <Footer />
    </motion.div>
  );
};

export default HomePage;
