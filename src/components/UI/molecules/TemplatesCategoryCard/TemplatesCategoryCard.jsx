import React from 'react';
import { useState } from 'react';
import '../../../../App.css';
import './TemplatesCategoryCard.css';
const TemplatesCategoryCard = ({
  title,
  cover_image,
  cardClick,
  product_category_animation_box_className,
  product_category_box_className,
  product_category_image_fx_container_className,
  product_category_image_className,
  product_category_cover_outline_className,
  cat_card_container_className,
  class_name,
}) => {
  
  return (
    <div onClick={cardClick} className={cat_card_container_className}>
      <div className={product_category_animation_box_className} />
      <div className={product_category_box_className}>
        <div className={product_category_image_fx_container_className}>
          <product-category-image className={product_category_image_className}>
            <img
              class="product-category-category-box-image"
              src={cover_image}
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
