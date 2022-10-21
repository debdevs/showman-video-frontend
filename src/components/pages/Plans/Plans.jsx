import React from 'react';
import PlansHeroAnimated from '../../templates/PlansHeroAnimated/PlansHeroAnimated';
import { Navbar } from '../../UI/organisms';
import { motion, useAnimation } from 'framer-motion/dist/framer-motion';
const Plans = () => {
  return (
    <motion.div
      className="plans-page"
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
      <PlansHeroAnimated />
    </motion.div>
  );
};

export default Plans;
