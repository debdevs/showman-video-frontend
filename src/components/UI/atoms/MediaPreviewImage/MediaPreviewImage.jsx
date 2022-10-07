import React from 'react';
import './MediaPreviewImage.css';
const MediaPreviewImage = ({ image_source }) => {
  return (
    <div>
      <media-preview-image>
        <img class="media-preview-image" src={image_source} />
      </media-preview-image>
    </div>
  );
};

export default MediaPreviewImage;
