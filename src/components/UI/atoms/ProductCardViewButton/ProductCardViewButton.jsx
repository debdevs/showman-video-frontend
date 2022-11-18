import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../../../App.css';
import './ProductCardViewButton.css';
import { button_rhombus } from '../../../../assets/images/button-rhombus.svg';
import { ReactComponent as Rhombus } from '../../../../assets/images/button-rhombus.svg';
const ProductCardViewButton = ({
  button_text,
  button_width,
  button_height,
  button_opacity,
  button_display,
  button_padding,
  button_text_opacity,
  border_value,
  scalex,
}) => {
  return (
    <button
      className="product_button_parent"
      style={{
        width: button_width,
        opacity: button_opacity,
        display: button_display,
        transform: scalex,
        height: button_height,

        border: border_value,
      }}
    >
      <Rhombus className="logo" />

      <h3 className="outfit" style={{ opacity: button_text_opacity }}>
        {button_text}
      </h3>
    </button>
  );
};

export default ProductCardViewButton;
