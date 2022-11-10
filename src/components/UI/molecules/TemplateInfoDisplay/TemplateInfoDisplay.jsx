import React from 'react';
import './TemplateInfoDisplay.css';
import NeonButton from '../../atoms/NeonButton/NeonButton';
import AnimatedGlowButton from '../../atoms/AnimatedGlowButton/AnimatedGlowButton';

import { CgScreen } from 'react-icons/all';
import { ImVideoCamera } from 'react-icons/all';
const TemplateInfoDisplay = ({ button_1_function }) => {
  return (
    <div className="template-info-column">
      <details-row>
        <h4 className="template-label istok-font">NEW</h4>
        <h5 className="template-price rumble-brave-font">$12</h5>
      </details-row>
      <template-text>
        <h1 className="template-header rumble-brave-font">
          Stylish Media Social
        </h1>
        <p className="template-description istok-font">
          A stylish Instagram story to add pizzazz to your newest social media
          posts. tweak the colors, add your images and make it yours. Get ready
          to broadcast yourself in the most stylish way possible
        </p>
      </template-text>
      <div className="cg-container">
        <info-box>
          <CgScreen className="template-data-icon" />
          <h2 className="istok-font">24FPS</h2>
        </info-box>
        <info-box>
          <ImVideoCamera className="template-data-icon" />
          <h2 className="istok-font">1920X1080</h2>
        </info-box>
        <info-box>
          <CgScreen className="template-data-icon" />
          <h2 className="istok-font">Audio Included</h2>
        </info-box>
        <info-box>
          <ImVideoCamera className="template-data-icon" />
          <h2 className="istok-font">Fast Delivery</h2>
        </info-box>
      </div>
      <buttons-container>
        <AnimatedGlowButton
          button_text="Get it now"
          onClick={button_1_function}
          neon_button_box_className="neon_button_box"
          neon_button_background_box_className={'neon_button_background_box'}
        />
        <NeonButton button_text="Get it now" />
      </buttons-container>
    </div>
  );
};

export default TemplateInfoDisplay;
