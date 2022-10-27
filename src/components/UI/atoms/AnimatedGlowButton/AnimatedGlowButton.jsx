import React from 'react';
import './AnimatedGlowButton.css';
const AnimatedGlowButton = ({
  button_text,
  onClick,
  neon_button_box_className,
  neon_button_background_box_className,
}) => {
  return (
    <div href="#" className={neon_button_box_className}>
      <button
        className={neon_button_background_box_className}
        onClick={onClick}
      >
        {button_text}{' '}
      </button>
    </div>
  );
};

export default AnimatedGlowButton;
