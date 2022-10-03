import React from 'react';
import '../../../../App.css';
import './ToolTipButton.css';
const ToolTipButton = () => {
  return (
    <div>
      <button className="tool-button istok-font">
        Luxury Instagram
        <tool-tip-container>
          <tool-tip-imagefx-container>
            <img
              class="tool-tip-image"
              src="https://landisher.com/wp-content/uploads/2018/12/instagram-stories-template-pack-bundle-after-effects-psd-apple-download.jpg"
            ></img>

            <tool-tip-basic-inset-shadow />
            <tool-tip-basic-cover-outline id="myDiv">
              <tool-tip-basic-shine />
            </tool-tip-basic-cover-outline>
          </tool-tip-imagefx-container>
        </tool-tip-container>
      </button>
    </div>
  );
};

export default ToolTipButton;
