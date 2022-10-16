import React from 'react';
import './TemplatesCarousel.css';
export const CarouselItem = ({ children, width }) => {
  return <carousel-item>{children}</carousel-item>;
};

const TemplatesCarousel = ({ children }) => {
  return (
    <templates-carousel className="templates-carousel">
      <inner-content className="inner-content">
        {React.Children.map(children, (child, index) => {
          return React.cloneElement(child, { width: '100%' });
        })}
      </inner-content>
    </templates-carousel>
  );
};

export default TemplatesCarousel;
