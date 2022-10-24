import React from 'react';
import './TemplatesEditorBar.css';
import { MdHighlight } from 'react-icons/md';
import { MdMenu } from 'react-icons/md';
import { IoMdOptions } from 'react-icons/io';
import { IoIosOptions } from 'react-icons/io';
import SubmitButton from '../../atoms/SubmitButton/SubmitButton';
import ShowmanGlowButton from '../../atoms/ShowmanGlowButton/ShowmanGlowButton';
import { BsFillDropletFill } from 'react-icons/bs';
import { BsImageFill } from 'react-icons/bs';
import { BsFonts } from 'react-icons/bs';

const TemplatesEditorBar = () => {
  return (
    <templates-editor-nav-container className="templates-editor-nav-container">
      <templates-editor-nav-content-container>
        <ul>
          <li>
            <BsFillDropletFill className="nav-icon" />
          </li>

          <li>
            <BsImageFill className="nav-icon" />
          </li>
          <li>
            <BsFonts className="nav-icon" />
          </li>
          <li>
            <buttons-container>
              <SubmitButton button_text={'PREVIEW'} />
              <ShowmanGlowButton button_text={'SUBMIT'} />
            </buttons-container>
          </li>
        </ul>
      </templates-editor-nav-content-container>
    </templates-editor-nav-container>
  );
};

export default TemplatesEditorBar;
