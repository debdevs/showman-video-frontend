import React from 'react';
import './BaseImageDisplay.css';
import template_image from '../../../../assets/images/wedding_image.webp';
const BaseImageDisplay = ({ image_height, image_width, image_class }) => {
  return (
    <div className="base-image-display">
      <div className="image-display_image_fx_container">
        <product-category-image className="image-display_image">
          <img
            alt=""
            className="product-category-category-box-image"
            src={template_image}
          ></img>
        </product-category-image>
        <product-category-inset-shadow />
        <div id="myDiv" className="image-display_cover_outline">
          <product-category-shine />
        </div>
      </div>
    </div>
  );
};

export default BaseImageDisplay;
