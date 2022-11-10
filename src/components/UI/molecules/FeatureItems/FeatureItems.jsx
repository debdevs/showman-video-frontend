import React from 'react';

import '../../../../App.css';
import './FeatureItems.css';

const FeatureItems = ({ title, subtitle, description }) => {
  return (
    <feature-parent>
      <h1 className="istok-font">{title}</h1>
      <h2 className="istok-font">{subtitle}</h2>
      <line-div />
      <p className="istok-font">{description}</p>
    </feature-parent>
  );
};

export default FeatureItems;
