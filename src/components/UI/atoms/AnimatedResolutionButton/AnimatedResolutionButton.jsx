import React from 'react';
import './AnimatedResolutionButton.css';
const AnimatedResolutionButton = ({ button_text }) => {
  return (
    <div href="#" className="neon-resolution-button-box">
      <button className="neon-resolution-button-background-box">
        {button_text}
      </button>
    </div>
  );
};

export default AnimatedResolutionButton;
