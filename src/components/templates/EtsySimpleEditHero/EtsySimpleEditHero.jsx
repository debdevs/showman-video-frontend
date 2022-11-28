import React from 'react';
import { useState } from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import './EtsySimpleEditHero.css';
import AnimatedGlowButton from '../../UI/atoms/AnimatedGlowButton/AnimatedGlowButton';
import TextEditorBox from '../../UI/atoms/TextEditorBox/TextEditorBox';
import plans from '../../plans_data.js';
import BasicButton from '../../UI/atoms/BasicButton/BasicButton';
import '@melloware/coloris/dist/coloris.css';
import { coloris, init } from '@melloware/coloris';
import { EtsyEditContext } from '../../../Contexts/EtsyEditContext';
import { motion } from 'framer-motion/dist/framer-motion';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
import ShowmanGlowButton from '../../UI/atoms/ShowmanGlowButton/ShowmanGlowButton';
import EtsyVideoDisplay from '../../UI/atoms/EtsyVideoDisplay/EtsyVideoDisplay';

init();
coloris({
  parent: '.container',
  el: '.color-field',
  themeMode: 'dark',
  alpha: false,
  formatToggle: true,
  theme: 'polaroid',
  wrap: true,
  margin: 2,

  formatToggle: true,
  swatches: [],
  swatchesOnly: false,
  forceAlpha: false,
  focusInput: false,
  selectInput: false,
  defaultColor: '#000000',
});

const EtsySimpleEditHero = () => {
  const [selectedId, setSelectedId] = useState(0);

  return (
    <div className="etsy-hero">
      <fade-bg1></fade-bg1>
      <form-container>
        <left-items>
          <top-items>
            <h1 className="rumble-brave-font">Stylish Media Social</h1>
            <h2 className="outfit">
              Edit Your <span>Etsy</span> Order
            </h2>
          </top-items>
          <left-center-card>
            <EtsyVideoDisplay video_height={'512px'} video_width={'307.2px'} />
          </left-center-card>
        </left-items>
        <right-items>
          <top-items>
            <AnimatedGlowButton
              button_text={'Change Text'}
              onClick={() => {
                setSelectedId(0);
              }}
              neon_button_box_className={
                selectedId === 0 ? 'neon_button_box_clicked' : 'neon_button_box'
              }
              neon_button_background_box_className={
                selectedId === 0
                  ? 'neon_button_background_box_clicked'
                  : 'neon_button_background_box'
              }
            />
            <AnimatedGlowButton
              button_text={'Change Colors'}
              onClick={() => {
                setSelectedId(1);
              }}
              neon_button_box_className={
                selectedId === 1 ? 'neon_button_box_clicked' : 'neon_button_box'
              }
              neon_button_background_box_className={
                selectedId === 1
                  ? 'neon_button_background_box_clicked'
                  : 'neon_button_background_box'
              }
            />
            <AnimatedGlowButton
              button_text={'Change Images'}
              onClick={() => {
                setSelectedId(2);
              }}
              neon_button_box_className={
                selectedId === 2 ? 'neon_button_box_clicked' : 'neon_button_box'
              }
              neon_button_background_box_className={
                selectedId === 2
                  ? 'neon_button_background_box_clicked'
                  : 'neon_button_background_box'
              }
            />
          </top-items>
          <center-card>
            <center-card-content>
              <fields-container>
                <div
                  className={
                    selectedId === 1
                      ? 'main-color-container'
                      : 'main-color-container-deactivated'
                  }
                >
                  <colors-container>
                    <h1 className="outfit">Text Heading</h1>
                    <div className="full">
                      <input
                        type="text"
                        className="color-field"
                        value="rgb(0,0,0)"
                      />
                    </div>
                  </colors-container>
                  <colors-container>
                    <h1 className="outfit">Text Heading</h1>
                    <div className="full">
                      <input
                        type="text"
                        className="color-field"
                        value="rgb(0,0,0)"
                      />
                    </div>
                  </colors-container>
                  <colors-container>
                    <h1 className="outfit">Text Heading</h1>
                    <div className="full">
                      <input
                        type="text"
                        className="color-field"
                        value="rgb(0,0,0)"
                      />
                    </div>
                  </colors-container>
                </div>

                <div
                  key={0}
                  className={
                    selectedId === 0
                      ? 'main-text-container'
                      : 'main-text-container-deactivated'
                  }
                >
                  {plans.map((plan, key) => (
                    <TextEditorBox default_text="Text" />
                  ))}
                </div>
              </fields-container>
              <result-button-row>
                <ShowmanGlowButton button_text={'PREVIEW'} />
                <BasicButton
                  button_width={'144.81px'}
                  button_height={'41.03px'}
                  button_padding={'1px 6px'}
                  button_opacity={'1'}
                  button_text={'SUBMIT'}
                />
              </result-button-row>
            </center-card-content>
          </center-card>
        </right-items>
      </form-container>
    </div>
  );
};

export default EtsySimpleEditHero;
