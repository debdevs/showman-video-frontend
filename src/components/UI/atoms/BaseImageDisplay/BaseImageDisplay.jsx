import React from 'react';
import './BaseImageDisplay.css';
import template_image from '../../../../assets/images/wedding_image.webp';
const BaseImageDisplay = ({extra_class = "", image_height, image_width, image_class, image_source = {template_image}}) => {
  return (
    <div className= {extra_class=="" ? "base-image-display": extra_class + " base-image-display"}>
      <div className="image-display_image_fx_container">
        <product-category-image className="image-display_image">
          <img
            alt=""
            className="product-category-category-box-image"
            src={image_source}
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
