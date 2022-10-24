import React from 'react';

import TemplatesLandingHero from '../../templates/TemplatesLandingHero/TemplatesLandingHero';
import TemplatesLandingSubheading from '../../templates/TemplatesLandingSubheading/TemplatesLandingSubheading';
import { Navbar } from '../../UI/organisms';
import { motion } from 'framer-motion/dist/framer-motion';
import TemplatesNavbar from '../../UI/organisms/TemplatesNavbar/TemplatesNavbar';
import TemplatesEditorBar from '../../UI/organisms/TemplatesEditorBar/TemplatesEditorBar';
const TemplatesLandingPage = () => {
  return (
    <motion.div
      className="templates-landing-page"
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
      <TemplatesLandingHero />
      {/* <TemplatesLandingSubheading /> */}
      <TemplatesNavbar />
      <TemplatesEditorBar />
    </motion.div>
  );
};

export default TemplatesLandingPage;
