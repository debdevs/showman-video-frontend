import React from 'react';
import './TemplatesLandingSubheading.css';
import StyleSelectorDropdown from '../../UI/atoms/StyleSelectorDropdown/StyleSelectorDropdown';
import AnimatedResolutionButton from '../../UI/atoms/AnimatedResolutionButton/AnimatedResolutionButton';
import MediaPreviewerElement from '../../UI/molecules/MediaPreviewerElement/MediaPreviewerElement';
import EditorButton from '../../UI/atoms/EditorButton/EditorButton';
import TextEditorBox from '../../UI/atoms/TextEditorBox/TextEditorBox';
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
            <template-preview-section>
              <MediaPreviewerElement />
            </template-preview-section>
          </left-items>
          <right-items>
            <editor-options-row>
              <EditorButton button_text={'Edit Text'} />
              <EditorButton button_text={'Edit Colors'} />
              <EditorButton button_text={'Edit Media'} />
            </editor-options-row>
            <editor-container>
              <TextEditorBox default_text="Text 1" />
              <TextEditorBox default_text="Text 1" />
              <TextEditorBox default_text="Text 1" />
              <TextEditorBox default_text="Text 1" />
              <TextEditorBox default_text="Text 1" />
              <TextEditorBox default_text="Text 1" />
              <TextEditorBox default_text="Text 1" />
            </editor-container>
          </right-items>
        </content-parent>
      </templates-landing-subheading>
    </div>
  );
};

export default TemplatesLandingSubheading;
