import React from 'react';

import '../../../../App.css';
import './FeatureItems.css';

const FeatureItems = ({ title, subtitle, description }) => {
  return (
    <feature-parent>
      <h1 className="outfit">{title}</h1>
      <h2 className="outfit">{subtitle}</h2>
      <line-div />
      <p className="outfit">{description}</p>
    </feature-parent>
  );
};

export default FeatureItems;
