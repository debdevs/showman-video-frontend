import React from 'react';
import { useState } from 'react';
import '../../../../App.css';
import './OrderHistoryCard.css';
const OrderHistoryCard = ({
  title,
  date,
  status,
  cover_image,
  cardClick,
  order_history_animation_box_className,
  order_history_box_className,
  order_history_image_fx_container_className,
  order_history_image_className,
  order_history_cover_outline_className,
  order_card_container_className,
  class_name,
}) => {
  return (
    <div onClick={cardClick} className="order_card_container">
      <div className="order_history_box">
        <div className="order_history_image_fx_container">
          <order-history-image className="order_history_image">
            <img
              className="order-history-category-box-image"
              src={cover_image}
            ></img>
          </order-history-image>
          <order-history-inset-shadow />
          <div id="myDiv" className="order_history_cover_outline">
            <order-history-shine />
          </div>
        </div>
        <order-history-info-container>
          <h2 className="rumble-brave-font order_title">{title}</h2>
          <h3 className="outfit">Date: {date}</h3>
          <h4 className="outfit">Status: {status}</h4>
        </order-history-info-container>
      </div>
    </div>
  );
};

export default OrderHistoryCard;
