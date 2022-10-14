import React from 'react';
import './AnimatedGlowButton.css';
const AnimatedGlowButton = ({ button_text, onClick }) => {
  return (
    <div href="#" class="neon-button-box">
      <button className="neon-button-background-box" onClick={onClick}>
        {button_text}{' '}
      </button>
    </div>
  );
};

export default AnimatedGlowButton;
