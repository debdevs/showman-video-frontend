import React from 'react';
import './MediaPreviewElement.css';
import MediaPreviewImage from '../../atoms/MediaPreviewImage/MediaPreviewImage';
const MediaPreviewElement = () => {
  return (
    <div>
      <media-preview-element-container>
        <MediaPreviewImage
          image_source={
            require('../../../../assets/images/pexels-yuri-manei-2690323.jpg')
              .default
          }
        />
      </media-preview-element-container>
    </div>
  );
};

export default MediaPreviewElement;
