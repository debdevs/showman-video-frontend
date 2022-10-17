import React from 'react';
import { useState } from 'react';
import '../../../../App.css';
import './TemplatesCategoryCard.css';
const TemplatesCategoryCard = ({ title, cardClick, acClass, class_name }) => {
  return (
    <product-category-animation-box class="site-img">
      <div onClick={cardClick} className={acClass}>
        <product-category-image-fx-container>
          <product-category-image>
            <img
              class="product-category-category-box-image"
              src="https://landisher.com/wp-content/uploads/2018/12/instagram-stories-template-pack-bundle-after-effects-psd-apple-download.jpg"
            ></img>
          </product-category-image>
          <product-category-inset-shadow />
          <product-category-cover-outline id="myDiv">
            <product-category-shine />
          </product-category-cover-outline>
        </product-category-image-fx-container>
        <product-category-info-container>
          <h2 class="rumble-brave-font">{title}</h2>
        </product-category-info-container>
      </div>
    </product-category-animation-box>
  );
};

export default TemplatesCategoryCard;
