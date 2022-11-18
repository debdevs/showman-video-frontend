import React from 'react';
import '../../../../App.css';
import './ToolTipMediaButton.css';

const ToolTipMediaButton = ({ title, image, category, price, label }) => {
  return (
    <div>
      <button className="tool-button outfit">
        <span class="button_text">{title}</span>

        <image-container>
          <img class="tool-tip-image" src={image}></img>
          <shadow-element />
          <outline-element>
            <shine-element />
          </outline-element>
        </image-container>
        <tool-tip-container>
          <tool-tip-imagefx-container>
            <img class="tool-tip-image" src={image}></img>

            <tool-tip-basic-inset-shadow />
            <tool-tip-basic-cover-outline id="myDiv">
              <tool-tip-basic-shine />
            </tool-tip-basic-cover-outline>
          </tool-tip-imagefx-container>

          <tool-tip-content></tool-tip-content>

          <tool-tip-bottom>
            <tool-tip-main-content>
              <tool-tip-left-items>
                <h1 className="outfit">Luxury Instagram</h1>
                <h2 className="outfit">Basic, Slideshow</h2>
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

export default ToolTipMediaButton;
