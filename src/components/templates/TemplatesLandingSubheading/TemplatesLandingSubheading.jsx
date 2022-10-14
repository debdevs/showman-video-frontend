import React from 'react';
import './TemplatesLandingSubheading.css';
import StyleSelectorDropdown from '../../UI/atoms/StyleSelectorDropdown/StyleSelectorDropdown';
import AnimatedResolutionButton from '../../UI/atoms/AnimatedResolutionButton/AnimatedResolutionButton';
import MediaPreviewerElement from '../../UI/molecules/MediaPreviewerElement/MediaPreviewerElement';
import EditorButton from '../../UI/atoms/EditorButton/EditorButton';
import TextEditorBox from '../../UI/atoms/TextEditorBox/TextEditorBox';
import ShowmanGlowButton from '../../UI/atoms/ShowmanGlowButton/ShowmanGlowButton';
import SubmitButton from '../../UI/atoms/SubmitButton/SubmitButton';
import PreviewThumb from '../../UI/atoms/PreviewThumb/PreviewThumb';
import MediaPreviewSlider from '../../UI/molecules/MediaPreviewSlider/MediaPreviewSlider';
import image from '../../../assets/images/pexels-yuri-manei-2690323.jpg';
import { useState } from 'react';
import { RiArrowGoBackFill } from 'react-icons/all';
const TemplatesLandingSubheading = ({ closeScreen }) => {
  const [openScreen, setOpenScreen] = useState(false);

  return (
    <div>
      <templates-landing-subheading>
        <close-container>
          <RiArrowGoBackFill
            className="close-back"
            onClick={() => closeScreen(false)}
          />
        </close-container>

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
              <MediaPreviewSlider image_source={image} />
            </template-preview-section>
          </left-items>
          <right-items>
            <editor-options-row>
              <EditorButton button_text={'Edit Text'} />
              <EditorButton button_text={'Edit Colors'} />
              <EditorButton
                button_text={'Edit Media'}
                onClick={() => {
                  setOpenScreen(true);
                }}
              />
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
            <result-buttons-container>
              <ShowmanGlowButton button_text={'PREVIEW'} />
              <SubmitButton button_text={'SUBMIT'} />
            </result-buttons-container>
          </right-items>
        </content-parent>
      </templates-landing-subheading>
    </div>
  );
};

export default TemplatesLandingSubheading;
