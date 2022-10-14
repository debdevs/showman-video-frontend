import React from 'react';
import './TemplatesNavbar.css';
import { MdHighlight } from 'react-icons/md';
import { MdMenu } from 'react-icons/md';
import { IoMdOptions } from 'react-icons/io';
import { IoIosOptions } from 'react-icons/io';

const TemplatesNavbar = () => {
  return (
    <templates-nav-container className="templates-nav-container">
      <templates-nav-content-container>
        <ul>
          <li>
            Hello
            <IoIosOptions className="nav-icon" />
          </li>

          <li>
            <h1>Stylish Media Social</h1>
          </li>
        </ul>
      </templates-nav-content-container>
    </templates-nav-container>
  );
};

export default TemplatesNavbar;
