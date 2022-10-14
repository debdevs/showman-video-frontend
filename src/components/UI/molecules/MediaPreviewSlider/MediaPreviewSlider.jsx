import React from 'react';
import PreviewThumb from '../../atoms/PreviewThumb/PreviewThumb';
import { IoIosImages } from 'react-icons/io';
import './MediaPreviewSlider.css';
const MediaPreviewSlider = ({ image_source }) => {
  return (
    <parent-preview-slider-container>
      <overlay-div>
        <IoIosImages className="preview-icon" />
      </overlay-div>
      <preview-slider-container>
        <thumb-container>
          <img src={image_source} />
        </thumb-container>
        <thumb-container>
          <img src={image_source} />
        </thumb-container>
        <thumb-container>
          <img src={image_source} />
        </thumb-container>
        <thumb-container>
          <img src={image_source} />
        </thumb-container>
      </preview-slider-container>
    </parent-preview-slider-container>
  );
};

export default MediaPreviewSlider;
