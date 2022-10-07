import React from 'react';
import './TemplatesLandingSubheading.css';
import StyleSelectorDropdown from '../../UI/atoms/StyleSelectorDropdown/StyleSelectorDropdown';
import AnimatedResolutionButton from '../../UI/atoms/AnimatedResolutionButton/AnimatedResolutionButton';
const TemplatesLandingSubheading = () => {
  return (
    <div>
      <templates-landing-subheading>
        <content-parent>
          <left-items>
            <h1 className="rumble-brave-font template-name">
              Stylish Media Social
            </h1>
            <extra-details-row>
              <extra-details-column-1>
                <h1 className="istok-font">
                  Available Styles{' '}
                  <span className="style-number rumble-brave-font">5</span>
                </h1>

                <StyleSelectorDropdown />
              </extra-details-column-1>
              <extra-details-column-2>
                <h1 className="istok-font">Available Styles</h1>
                <button-row>
                  <AnimatedResolutionButton button_text="Landscape" />
                  <AnimatedResolutionButton button_text="Vertical" />
                  <AnimatedResolutionButton button_text="Square" />
                </button-row>
              </extra-details-column-2>
            </extra-details-row>
            <template-preview-section></template-preview-section>
          </left-items>
          <right-items></right-items>
        </content-parent>
      </templates-landing-subheading>
    </div>
  );
};

export default TemplatesLandingSubheading;
