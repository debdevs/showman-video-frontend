import React from 'react';
import './EtsySimpleEditHero.css';
import AnimatedGlowButton from '../../UI/atoms/AnimatedGlowButton/AnimatedGlowButton';
import TextEditorBox from '../../UI/atoms/TextEditorBox/TextEditorBox';
import plans from '../../plans_data.js';
import BasicButton from '../../UI/atoms/BasicButton/BasicButton';
const EtsySimpleEditHero = () => {
  return (
    <div className="etsy-hero">
      <fade-bg1></fade-bg1>
      <form-container>
        <left-items>
          <top-items>
            <h1 className="rumble-brave-font">Stylish Media Social</h1>
            <h2 className="istok-font">
              Edit Your <span>Etsy</span> Order
            </h2>
          </top-items>
          <center-card></center-card>
        </left-items>
        <right-items>
          <top-items>
            <AnimatedGlowButton button_text={'Change Text'} />
            <AnimatedGlowButton button_text={'Change Colors'} />
            <AnimatedGlowButton button_text={'Change Images'} />
          </top-items>
          <center-card>
            <center-card-content>
              <fields-container>
                {plans.map((plan, key) => (
                  <TextEditorBox default_text="Text" />
                ))}
              </fields-container>
              <BasicButton
                button_width={'144.81px'}
                button_height={'41.03px'}
                button_text="PREVIEW"
              />
            </center-card-content>
          </center-card>
        </right-items>
      </form-container>
    </div>
  );
};

export default EtsySimpleEditHero;
