import React from 'react';
import './NeonButton.css';
const NeonButton = ({ button_text }) => {
  return (
    <div>
      <button class="neon-button">{button_text}</button>
    </div>
  );
};

export default NeonButton;
