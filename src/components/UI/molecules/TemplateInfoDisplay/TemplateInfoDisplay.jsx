import React from 'react';
import './TemplateInfoDisplay.css';
import NeonButton from '../../atoms/NeonButton/NeonButton';
import AnimatedGlowButton from '../../atoms/AnimatedGlowButton/AnimatedGlowButton';

const TemplateInfoDisplay = ({ button_1_function }) => {
  return (
    <div class="template-info-column">
      <details-row>
        <h4 className="template-label istok-font">NEW</h4>
        <h5 className="template-price rumble-brave-font">$12</h5>
      </details-row>
      <template-text>
        <h1 className="template-header istok-font">Stylish Media Social</h1>
        <p className="template-description istok-font">
          A stylish Instagram story to add pizzazz to your newest social media
          posts. tweak the colors, add your images and make it yours. Get ready
          to broadcast yourself in the most stylish way possible
        </p>
      </template-text>
      <buttons-container>
        <AnimatedGlowButton
          button_text="Get it now"
          onClick={button_1_function}
        />
        <NeonButton button_text="Get it now" />
      </buttons-container>
    </div>
  );
};

export default TemplateInfoDisplay;
