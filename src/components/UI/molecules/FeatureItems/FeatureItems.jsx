import React from 'react'

import '../../../../App.css';
import './FeatureItems.css';


const FeatureItems = ({title,subtitle,description}) => {
  return (
    <feature-parent>
 
    <h1 class = "istok-font">{title}</h1>
    <h2 class = "istok-font">{subtitle}</h2>
    <line-div/>
    <p class = 'istok-font'>{description}</p>
    </feature-parent>
  )
}

export default FeatureItems