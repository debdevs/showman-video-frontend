import React from 'react';

import Navbar from '../../../components/UI/organisms/Navbar/Navbar';
import Hero from '../../../components/templates/Hero/Hero';
import SubHeading from '../../../components/templates/SubHeading/SubHeading';
import AlternateSubHeading from '../../../components/templates/AlternateSubHeading/AlternateSubHeading';
import FrontInfoSection from '../../../components/templates/FrontInfoSection/FrontInfoSection';
import Footer from '../../../components/templates/Footer/Footer';

import '../../../App.css';
import '../../../meyer-reset.css';
const HomePage = () => {
  return (
    <div className="home-column">
      <Navbar />
      <Hero />
      <SubHeading />
      <AlternateSubHeading />
      <FrontInfoSection />
      <Footer />
    </div>
  );
};

export default HomePage;
