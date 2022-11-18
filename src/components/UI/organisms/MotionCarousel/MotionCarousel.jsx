import React from 'react';
import { Context } from 'react';
import { useContext } from 'react';
import { useState } from 'react';
import { TemplatesContext } from '../../../../Contexts/TemplatesPageContext';
import { motion } from 'framer-motion/dist/framer-motion';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import './MotionCarousel.css';
export const CarouselItem = ({ children, width }) => {
  const { activeIndex, setActiveIndex } = useContext(TemplatesContext);
  const [rotation, setRotation] = useState(0);
  const [scale, setScale] = useState(1);
  const variants = {
    initial: { x: 200, opacity: 0 },
    animate: { x: 0, opacity: 0 },
    exit: { x: 0, opacity: 0 },
  };
  return (
    <AnimatePresence initial={false}>
      <motion.div
        key={activeIndex}
        className="carousel_parent"
        initial={{ scaleX: 0.9, opacity: 0 }}
        animate={{ scaleX: 1, opacity: 1 }}
        exit={{
          scaleX: 0.97,
          opacity: 0,
          transition: { type: 'spring', stiffness: 50 },
        }}
        transition={{ duration: 1 }}
      >
        <carousel-item>
          <img src="" alt=""></img>
          {children}
        </carousel-item>
      </motion.div>
    </AnimatePresence>
  );
};

const MotionCarousel = ({ children }) => {
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
    <motion-carousel className="motion-carousel">
      <inner-content
        className="inner-content"
        //take number of slides. Divide item width by that number. Divide result by 1/2 (and ask google what percent of width is result)to get percantage for shifting to center 'translateX(12.5015211%)'
        //style={{ transform: `translateX(-${activeIndex * 12.5015211}% )` }}
        style={
          {
            // transform: `translateX(-${activeIndex * 100}% )`,
          }
        }
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
    </motion-carousel>
  );
};

export default MotionCarousel;
