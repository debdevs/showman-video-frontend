import React from 'react';
import { useState } from 'react';
import '../../../../App.css';
import './MainCategoryCard.css';
const MainCategoryCard = ({
  title,
  cover_image,
  cardClick,
  main_category_animation_box_className = "main_category_animation_box",
  main_category_box_className = "main_category_box",
  main_category_image_fx_container_className = "main_category_image_fx_container",
  main_category_image_className = "main_category_image",
  main_category_cover_outline_className = "main_category_cover_outline",
  main_cat_card_container_className = "main_cat_card_container",
  class_name,
}) => {
  return (
    <div onClick={cardClick} className={main_cat_card_container_className}>
      <div className={main_category_animation_box_className} />
      <div className={main_category_box_className}>
        <div className={main_category_image_fx_container_className}>
          <div className={main_category_image_className}>
            <img
              className="main-category-category-box-image"
              src={cover_image}
            ></img>
          </div>
          <div />
          <div id="myDiv" className={main_category_cover_outline_className}>
            <div/>
          </div>
        </div>
        <div classname = "main_category_info_container">
          <h2 className="rumble-brave-font">{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default MainCategoryCard;
