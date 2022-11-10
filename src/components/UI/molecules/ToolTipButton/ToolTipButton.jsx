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
              className="tool-tip-image"
              src="https://landisher.com/wp-content/uploads/2018/12/instagram-stories-template-pack-bundle-after-effects-psd-apple-download.jpg"
            ></img>

            <tool-tip-basic-inset-shadow />
            <tool-tip-basic-cover-outline id="myDiv">
              <tool-tip-basic-shine />
            </tool-tip-basic-cover-outline>
          </tool-tip-imagefx-container>

          <tool-tip-content></tool-tip-content>

          <tool-tip-bottom>
            <tool-tip-main-content>
              <tool-tip-left-items>
                <h1 className="istok-font">Luxury Instagram</h1>
                <h2 className="istok-font">Basic, Slideshow</h2>
              </tool-tip-left-items>
              <tool-tip-right-items>
                <h3 className="rumble-brave-font">$12</h3>
              </tool-tip-right-items>
            </tool-tip-main-content>
          </tool-tip-bottom>
          <tool-tip-extra>
            <item-label>NEW</item-label>
            <item-label>VIEW</item-label>
          </tool-tip-extra>
        </tool-tip-container>
      </button>
    </div>
  );
};

export default ToolTipButton;
