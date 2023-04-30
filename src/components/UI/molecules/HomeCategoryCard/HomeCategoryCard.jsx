import React from 'react';
import { useState } from 'react';
import '../../../../App.css';
import './HomeCategoryCard.css';
const HomeCategoryCard = ({
  title,
  cover_image,
  cardClick,
  home_product_category_animation_box_className,
  home_product_category_box_className,
  home_product_category_image_fx_container_className,
  home_product_category_image_className,
  home_product_category_cover_outline_className,
  home_cat_card_container_className,
  class_name,
}) => {
  return (
    <div onClick={cardClick} className={home_cat_card_container_className}>
      <div className={home_product_category_animation_box_className} />
      <div className={home_product_category_box_className}>
        <div className={home_product_category_image_fx_container_className}>
          <home-product-category-image className={home_product_category_image_className}>
            <img
              className="home-product-category-category-box-image"
              src={cover_image}
              alt = {"product image"}
            ></img>
          </home-product-category-image>
          <home-product-category-inset-shadow />
          <div id="myDiv" className={home_product_category_cover_outline_className}>
            <home-product-category-shine />
          </div>
        </div>
        <home-product-category-info-container>
          <h2 className="rumble-brave-font">{title}</h2>
        </home-product-category-info-container>
      </div>
    </div>
  );
};

export default HomeCategoryCard;
