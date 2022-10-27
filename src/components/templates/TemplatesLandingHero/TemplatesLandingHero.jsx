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
    <div className="templates-landing-parent">
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
      <AnimatePresence>
        {openScreen && (
          <>
            <motion.div
              className="modal-bg"
              key="modal"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{
                opacity: 0,
              }}
              transition={{ delay: 0 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
                background: '#000',
              }}
            />
            <motion.div
              key="modal-content"
              initial={{ scaleX: 0.9, opacity: 0, x: -100 }}
              animate={{ scaleX: 1, opacity: 1, x: 0 }}
              exit={{
                scaleX: 1.1,
                opacity: 0,
                transition: { type: 'spring', stiffness: 50 },
                x: 200,
                delay: 0.4,
                duration: 5,
              }}
              transition={{ delay: 0.4 }}
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              }}
            >
              <TemplatesLandingSubheading closeScreen={setOpenScreen} />
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </div>
  );
};

export default TemplatesLandingHero;
