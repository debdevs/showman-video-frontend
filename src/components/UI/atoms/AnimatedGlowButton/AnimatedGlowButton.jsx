import React from 'react';
import './AnimatedGlowButton.css';
const AnimatedGlowButton = ({ button_text }) => {
  return (
    <div href="#" class="neon-button-box">
      <button className="neon-button-background-box">{button_text}</button>
    </div>
  );
};

export default AnimatedGlowButton;
