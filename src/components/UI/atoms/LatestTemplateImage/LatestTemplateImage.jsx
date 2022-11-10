import React from 'react';
import './LatestTemplateImage.css';
import template_image from '../../../../assets/images/wedding_image.webp';
const LatestTemplateImage = ({ image_height, image_width, image_class }) => {
  return (
    <div className="latest-template-image">
      <div className="product_category_image_fx_container">
        <product-category-image className="product_category_image">
          <img
            className="product-category-category-box-image"
            src={template_image}
          ></img>
        </product-category-image>
        <product-category-inset-shadow />
        <div id="myDiv" className="product_category_cover_outline">
          <product-category-shine />
        </div>
      </div>
    </div>
  );
};

export default LatestTemplateImage;
