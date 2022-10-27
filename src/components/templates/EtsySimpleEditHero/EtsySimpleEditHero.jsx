import React from 'react';
import './EtsySimpleEditHero.css';
import AnimatedGlowButton from '../../UI/atoms/AnimatedGlowButton/AnimatedGlowButton';
import TextEditorBox from '../../UI/atoms/TextEditorBox/TextEditorBox';
import plans from '../../plans_data.js';
import BasicButton from '../../UI/atoms/BasicButton/BasicButton';
import '@melloware/coloris/dist/coloris.css';
import { coloris, init } from '@melloware/coloris';
init();
coloris({
  parent: '.container',
  el: '.color-field',
  themeMode: 'dark',
  alpha: true,
  formatToggle: true,
  theme: 'polaroid',
  wrap: true,
  margin: 2,
  format: 'hex',
  formatToggle: true,
  swatches: [],
  swatchesOnly: false,
  alpha: true,
  forceAlpha: false,
  focusInput: false,
  selectInput: false,

  defaultColor: '#000000',
  clearButton: true,
  clearLabel: 'Clear',
});

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
              <main-color-container>
                <colors-container>
                  <h1 className="istok-font">Text Heading</h1>
                  <div className="full">
                    <input type="text" class="color-field" value="rgb(0,0,0)" />
                  </div>
                </colors-container>
                <colors-container>
                  <h1 className="istok-font">Text Heading</h1>
                  <div className="full">
                    <input type="text" class="color-field" value="rgb(0,0,0)" />
                  </div>
                </colors-container>
                <colors-container>
                  <h1 className="istok-font">Text Heading</h1>
                  <div className="full">
                    <input type="text" class="color-field" value="rgb(0,0,0)" />
                  </div>
                </colors-container>
              </main-color-container>
              <fields-container>
                {plans.map((plan, key) => (
                  <TextEditorBox default_text="Text" />
                ))}
              </fields-container>
              <BasicButton
                button_width={'144.81px'}
                button_height={'41.03px'}
                button_padding={'1px 6px'}
                button_opacity={'1'}
                button_text={'PREVIEW'}
              />
            </center-card-content>
          </center-card>
        </right-items>
      </form-container>
    </div>
  );
};

export default EtsySimpleEditHero;
