import React from 'react';
import './MediaPreviewerElement.css';
const MediaPreviewerElement = ({ image_source }) => {
  return (
    <div>
      <media-previewer-image>
        <img className="media-previewer-image" src={image_source} />
      </media-previewer-image>
    </div>
  );
};

export default MediaPreviewerElement;
