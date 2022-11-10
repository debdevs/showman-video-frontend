import React from 'react';
import { NavLink } from 'react-router-dom';

import '../../../../App.css';
import './PlansButton.css';
const PlansButton = () => {
  return (
    <button className="plans-button-parent">
      <a href="#">
        <svg
          width="67"
          height="22"
          viewBox="0 0 67 22"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect
            width="34.9076"
            height="34.9076"
            transform="matrix(0.951673 -0.307113 0.951673 0.307113 0 10.7206)"
            fill="black"
            fillOpacity="0.21"
          />
        </svg>
      </a>

      <h3 className="istok-font">DEMO</h3>
    </button>
  );
};

export default PlansButton;
