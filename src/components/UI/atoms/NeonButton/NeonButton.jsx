import React from 'react';
import './NeonButton.css';
const NeonButton = ({ button_text }) => {
  return (
    <div>
      <button className="neon-button">{button_text}</button>
    </div>
  );
};

export default NeonButton;
