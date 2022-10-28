import React from 'react';
import './MobileNavbar.css';
import { MdHighlight } from 'react-icons/md';
import { MdMenu } from 'react-icons/md';
import { IoMdOptions } from 'react-icons/io';
import { IoIosOptions } from 'react-icons/io';
import NavbarProfileImage from '../../atoms/NavbarProfileImage/NavbarProfileImage';
const MobileNavbar = () => {
  return (
    <mobile-nav-container className="mobile-nav-container">
      <mobile-nav-content-container>
        <ul>
          <li>
            Hello
            <IoIosOptions className="nav-icon" />
          </li>

          <li>
            <button className="Menu Sort">Sort</button>
          </li>
        </ul>
        <NavbarProfileImage />
      </mobile-nav-content-container>
    </mobile-nav-container>
  );
};

export default MobileNavbar;
