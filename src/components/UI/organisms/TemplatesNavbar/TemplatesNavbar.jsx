import React from 'react';
import './TemplatesNavbar.css';
import { MdHighlight } from 'react-icons/md';
import { MdMenu } from 'react-icons/md';
import { IoMdOptions } from 'react-icons/io';
import { IoIosOptions } from 'react-icons/io';
import NavbarProfileImage from '../../atoms/NavbarProfileImage/NavbarProfileImage';
import desaturated_icon from '../../../../assets/images/Showman_V02_Desaturated_Edit.png';
const TemplatesNavbar = () => {
  return (
    <templates-nav-container className="templates-nav-container">
      <templates-nav-content-container>
        <ul>
          <li>
            <img src={desaturated_icon} alt="" />
          </li>

          <li>
            <h1 className="rumble-brave-font">Stylish Media Social</h1>
          </li>
          <li>
            <IoIosOptions className="nav-icon" />
          </li>
        </ul>
      </templates-nav-content-container>
    </templates-nav-container>
  );
};

export default TemplatesNavbar;
