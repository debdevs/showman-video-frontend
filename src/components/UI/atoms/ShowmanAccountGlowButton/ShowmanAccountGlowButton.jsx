import React from 'react';
import './ShowmanAccountGlowButton.css';
const ShowmanAccountGlowButton = ({ button_text }) => {
  return (
    <div href="#" class="showman-account-glow-button-box">
      <button className="showman-account-glow-button-background-box">
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
              fill-opacity="0.21"
            />
          </svg>
        </a>
        {button_text}
      </button>
    </div>
  );
};

export default ShowmanAccountGlowButton;
