import React from 'react';
import { useState } from 'react';
import '../../../../App.css';
import './TemplatesCategoryCard.css';
const TemplatesCategoryCard = ({
  title,
  cardClick,
  product_category_animation_box_className,
  product_category_box_className,
  product_category_image_fx_container_className,
  product_category_image_className,
  product_category_cover_outline_className,
  class_name,
}) => {
  return (
    <div className={product_category_animation_box_className}>
      <div onClick={cardClick} className={product_category_box_className}>
        <div className={product_category_image_fx_container_className}>
          <product-category-image className={product_category_image_className}>
            <img
              class="product-category-category-box-image"
              src="https://landisher.com/wp-content/uploads/2018/12/instagram-stories-template-pack-bundle-after-effects-psd-apple-download.jpg"
            ></img>
          </product-category-image>
          <product-category-inset-shadow />
          <div id="myDiv" className={product_category_cover_outline_className}>
            <product-category-shine />
          </div>
        </div>
        <product-category-info-container>
          <h2 class="rumble-brave-font">{title}</h2>
        </product-category-info-container>
      </div>
    </div>
  );
};

export default TemplatesCategoryCard;
