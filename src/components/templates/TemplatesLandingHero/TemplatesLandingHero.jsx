import React from 'react';
import './TemplatesLandingHero.css';
import MediaPreviewImage from '../../UI/atoms/MediaPreviewImage/MediaPreviewImage';
import MediaPreviewElement from '../../UI/molecules/MediaPreviewElement/MediaPreviewElement';

const TemplatesLandingHero = () => {
  return (
    <div>
      <templates-landing-hero-container>
        <fade-bg />
        <content-container>
          <MediaPreviewElement />
        </content-container>
      </templates-landing-hero-container>
    </div>
  );
};

export default TemplatesLandingHero;
