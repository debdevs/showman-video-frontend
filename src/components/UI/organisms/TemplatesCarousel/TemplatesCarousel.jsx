import React from 'react';
import { Context } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { TemplatesContext } from '../../../../Contexts/TemplatesPageContext';
import { motion } from 'framer-motion/dist/framer-motion';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import './TemplatesCarousel.css';
export const CarouselItem = ({ children, width }) => {
  const { activeIndex, setActiveIndex } = useContext(TemplatesContext);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  return (
    <motion.div
      className="carousel_parent"
      transition={{ delay: 0.6 }}
      // animate={{ rotate: rotation, scale: scale }}
      animate={{
        scale: [null, 1.05, 1],
        rotate: [-2, -0.5, 0],
        opacity: [1, 1, 1],
        y: [-105, 5, 0],
      }}
      onClick={() => {
        setRotation(rotation + 180);
        setScale(scale + 0.5);
      }}
    >
      <carousel-item>
        <img src=""></img>
        {children}
      </carousel-item>
    </motion.div>
  );
};

const TemplatesCarousel = ({ children }) => {
  const { activeIndex, setActiveIndex } = useContext(TemplatesContext);

  const updateIndex = (newIndex) => {
    if (newIndex < 0) {
      newIndex = 0;
    } else if (newIndex >= React.Children.count(children)) {
      newIndex = React.Children.count(children) - 1;
    }
    setActiveIndex(newIndex);
  };
  return (
    <templates-carousel className="templates-carousel">
      <inner-content
        className="inner-content"
        //take number of slides. Divide item width by that number. Divide result by 1/2 (and ask google what percent of width is result)to get percantage for shifting to center 'translateX(12.5015211%)'
        //style={{ transform: `translateX(-${activeIndex * 12.5015211}% )` }}
        style={{
          transform: `translateX(-${activeIndex * 20}% )`,
        }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </inner-content>
      <div className="indicators">
        <button
          onClick={() => {
            updateIndex(activeIndex - 1);
          }}
        >
          Prev
        </button>
        <button
          onClick={() => {
            updateIndex(activeIndex + 1);
          }}
        >
          Next
        </button>
      </div>
    </templates-carousel>
  );
};

export default TemplatesCarousel;
