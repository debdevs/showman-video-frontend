import React from 'react';
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
  return (
    <templates-carousel className="templates-carousel">
      <inner-content
        className="inner-content"
        //take number of slides. Divide item width by that number. Divide result by 1/2 to get percantage for shifting to center
        style={{ transform: 'translateX(12.5015211%)' }}
      >
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </inner-content>
    </templates-carousel>
  );
};

export default TemplatesCarousel;
