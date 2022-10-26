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
      }}
    >
      <Logo className="logo" />

      <h3 className="istok-font">{button_text}</h3>
    </button>
  );
};

export default BasicButton;
