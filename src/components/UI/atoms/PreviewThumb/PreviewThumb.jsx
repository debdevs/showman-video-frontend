import React from 'react';
import './PreviewThumb.css';
import image from '../../../../assets/images/pexels-yuri-manei-2690323.jpg';
const PreviewThumb = ({ image_source }) => {
  return (
    <thumb-container>
      <img src={image_source} />
    </thumb-container>
  );
};

export default PreviewThumb;
