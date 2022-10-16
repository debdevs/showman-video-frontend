import React from 'react';
import './CarouselText.css';
const CarouselText = ({ header, subtext, description }) => {
  return (
    <carousel-text>
      <h1 className="rumble-brave-font">{header}</h1>
      <h2 className="istok-font">{subtext}</h2>
      <p className="istok-font">{description}</p>
    </carousel-text>
  );
};

export default CarouselText;
