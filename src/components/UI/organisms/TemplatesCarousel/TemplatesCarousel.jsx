import React from 'react';
import { useState } from 'react';
import './TemplatesCarousel.css';
export const CarouselItem = ({ children, width }) => {
  return (
    <carousel-item>
      <img src=""></img>
      {children}
    </carousel-item>
  );
};

const TemplatesCarousel = ({ children }) => {
  const [activeIndex, setActiveIndex] = useState(1);
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
          transform: `translateX(-${activeIndex * 25.0030422}% )`,
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
