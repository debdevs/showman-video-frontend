import React from 'react';
import './ShowmanAccountGlowButton.css';
import { ReactComponent as Logo } from '../../../../assets/images/button-rhombus.svg';
const ShowmanAccountGlowButton = ({ button_text, icon }) => {
  return (
    <div href="#" className="showman-account-glow-button-box">
      <button className="showman-account-glow-button-background-box">
        <a href="#">
          <Logo className=".svg" />
        </a>
        <button-content className="button_content">
          {icon}
          {button_text}
        </button-content>
      </button>
    </div>
  );
};

export default ShowmanAccountGlowButton;
