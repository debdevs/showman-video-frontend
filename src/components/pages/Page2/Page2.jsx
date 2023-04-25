import React from 'react';
import { useState } from 'react';
import './Page2.css';
import { TemplatesHero } from '../../templates/TemplatesHero';
import { Navbar } from '../../UI/organisms';
import TemplatesSubheading from '../../templates/TemplatesSubheading/TemplatesSubheading';
import { motion } from 'framer-motion/dist/framer-motion';
import MobileNavbar from '../../UI/organisms/MobileNavbar/MobileNavbar';
import TemplatesCarouselHero from '../../templates/TemplatesCarouselHero/TemplatesCarouselHero';
import { TemplatesContext } from '../../../Contexts/TemplatesPageContext';
const categories = [
  { id: 1, title: 'Weddings' },
  { id: 2, title: 'Real Estate' },
  { id: 3, title: 'Gaming' },
  { id: 4, title: 'Social Media' },
  { id: 5, title: 'Real Estate' },
];

const Page2 = () => {
  const [isActive, setIsActive] = useState(false);
  const [clickedId, setClickedId] = useState(2);
  const [activeIndex, setActiveIndex] = useState(2);
  const [sortButtonClicked, setSortButtonClicked] = useState(false);
  return (
    <TemplatesContext.Provider
      value={{
        isActive,
        setIsActive,
        clickedId,
        setClickedId,
        activeIndex,
        setActiveIndex,
        sortButtonClicked,
        setSortButtonClicked
      }}
    >
      <motion.div
        className="templates-page"
        initial={{ scaleX: 0.9, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        exit={{
          scaleX: 0.97,
          opacity: 0,
          transition: { type: 'spring', stiffness: 50 },
        }}
        transition={{ delay: 0.6 }}
      >
        <Navbar className="navbar" />

        <TemplatesCarouselHero />
        {/* <TemplatesHero /> */}
        <TemplatesSubheading />
        <MobileNavbar />
      </motion.div>
    </TemplatesContext.Provider>
  );
};

export default Page2;
