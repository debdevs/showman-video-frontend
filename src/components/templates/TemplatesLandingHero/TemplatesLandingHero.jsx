import React from 'react';
import './TemplatesLandingHero.css';
import MediaPreviewImage from '../../UI/atoms/MediaPreviewImage/MediaPreviewImage';
import MediaPreviewElement from '../../UI/molecules/MediaPreviewElement/MediaPreviewElement';
import TemplateInfoDisplay from '../../UI/molecules/TemplateInfoDisplay/TemplateInfoDisplay';

const TemplatesLandingHero = () => {
  return (
    <div>
      <templates-landing-hero-container>
        <fade-bg />
        <content-background>
          <content-container>
            <MediaPreviewElement />
            <TemplateInfoDisplay />
          </content-container>
        </content-background>
      </templates-landing-hero-container>
    </div>
  );
};

export default TemplatesLandingHero;
