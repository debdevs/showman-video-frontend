import React from 'react';
import './TemplatesLandingHero.css';
import MediaPreviewImage from '../../UI/atoms/MediaPreviewImage/MediaPreviewImage';
import MediaPreviewElement from '../../UI/molecules/MediaPreviewElement/MediaPreviewElement';
import TemplateInfoDisplay from '../../UI/molecules/TemplateInfoDisplay/TemplateInfoDisplay';
import TemplatesLandingSubheading from '../TemplatesLandingSubheading/TemplatesLandingSubheading';
import { useState } from 'react';
import { motion } from 'framer-motion/dist/framer-motion';
import { AnimatePresence } from 'framer-motion/dist/framer-motion';
const TemplatesLandingHero = () => {
  const [openScreen, setOpenScreen] = useState(false);
  function OpenModal() {
    setOpenScreen(false);
  }

  return (
    <div>
      <templates-landing-hero-container>
        <fade-bg />
        <content-background>
          <content-container>
            <MediaPreviewElement />
            <TemplateInfoDisplay
              button_1_function={() => {
                setOpenScreen(true);
              }}
            />
          </content-container>
        </content-background>
      </templates-landing-hero-container>

      {openScreen && <TemplatesLandingSubheading closeScreen={setOpenScreen} />}
    </div>
  );
};

export default TemplatesLandingHero;
