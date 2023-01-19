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
         <h1 className="glow_button_text"> {button_text}</h1>
        </button-content>
      </button>
    </div>
  );
};

export default ShowmanAccountGlowButton;
