import React from 'react';
import './CarouselText.css';
const CarouselText = ({ header, subtext, description }) => {
  return (
    <div className='carousel_text'>
      <h1 className="rumble-brave-font">{header}</h1>
      <h2 className="outfit">{subtext}</h2>
      <p className="outfit">{description}</p>
    </div>
  );
};

export default CarouselText;
