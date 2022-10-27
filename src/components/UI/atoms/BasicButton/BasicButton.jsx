import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../../../App.css';
import './BasicButton.css';
import { button_rhombus } from '../../../../assets/images/button-rhombus.svg';
import { ReactComponent as Logo } from '../../../../assets/images/button-rhombus.svg';
const BasicButton = ({
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
      className="button-parent"
      style={{
        width: button_width,
        opacity: button_opacity,
        display: button_display,
        transform: scalex,
        height: button_height,
        padding: '0px',
        border: border_value,
      }}
    >
      <Logo className="logo" />

      <h3 className="istok-font" style={{ opacity: button_text_opacity }}>
        {button_text}
      </h3>
    </button>
  );
};

export default BasicButton;
