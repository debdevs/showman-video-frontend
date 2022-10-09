import '../../../../App.css';
import './TemplateMarketplace.css';
import { motion } from 'framer-motion/dist/framer-motion';
import React from 'react';

const TemplateMarketplace = () => {
  return (
    <motion.div
      className="home-column"
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0, transition: { duration: 0.1 } }}
    >
      <div>TemplateMarketplace</div>
    </motion.div>
  );
};

export default TemplateMarketplace;
