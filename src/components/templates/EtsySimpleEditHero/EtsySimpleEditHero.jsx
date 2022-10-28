import React from 'react';
import { useState } from 'react';
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
  const [isActive, setIsActive] = useState(false);
  const [clickedId, setClickedId] = useState(0);
  const [activeIndex, setActiveIndex] = useState(0);
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
            <AnimatedGlowButton
              button_text={'Change Text'}
              onClick={() => {
                setClickedId(0);
                setActiveIndex(0);
              }}
              neon_button_box_className={
                clickedId === 0 ? 'neon_button_box_clicked' : 'neon_button_box'
              }
              neon_button_background_box_className={
                clickedId === 0
                  ? 'neon_button_background_box_clicked'
                  : 'neon_button_background_box'
              }
            />
            <AnimatedGlowButton
              button_text={'Change Colors'}
              onClick={() => {
                setClickedId(1);
                setActiveIndex(1);
              }}
              neon_button_box_className={
                clickedId === 1 ? 'neon_button_box_clicked' : 'neon_button_box'
              }
              neon_button_background_box_className={
                clickedId === 1
                  ? 'neon_button_background_box_clicked'
                  : 'neon_button_background_box'
              }
            />
            <AnimatedGlowButton
              button_text={'Change Images'}
              onClick={() => {
                setClickedId(2);
                setActiveIndex(2);
              }}
              neon_button_box_className={
                clickedId === 2 ? 'neon_button_box_clicked' : 'neon_button_box'
              }
              neon_button_background_box_className={
                clickedId === 2
                  ? 'neon_button_background_box_clicked'
                  : 'neon_button_background_box'
              }
            />
          </top-items>
          <center-card>
            <center-card-content>
              <fields-container>
                <motion.div
                  className={
                    clickedId === 1
                      ? 'main-color-container'
                      : 'main-color-container-deactivated'
                  }
                >
                  <colors-container>
                    <h1 className="istok-font">Text Heading</h1>
                    <div className="full">
                      <input
                        type="text"
                        class="color-field"
                        value="rgb(0,0,0)"
                      />
                    </div>
                  </colors-container>
                  <colors-container>
                    <h1 className="istok-font">Text Heading</h1>
                    <div className="full">
                      <input
                        type="text"
                        class="color-field"
                        value="rgb(0,0,0)"
                      />
                    </div>
                  </colors-container>
                  <colors-container>
                    <h1 className="istok-font">Text Heading</h1>
                    <div className="full">
                      <input
                        type="text"
                        class="color-field"
                        value="rgb(0,0,0)"
                      />
                    </div>
                  </colors-container>
                </motion.div>

                <motion.div
                  key={0}
                  className={
                    clickedId === 0
                      ? 'main-text-container'
                      : 'main-text-container-deactivated'
                  }
                >
                  {plans.map((plan, key) => (
                    <TextEditorBox default_text="Text" />
                  ))}
                </motion.div>
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
