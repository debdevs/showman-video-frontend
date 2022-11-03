import React from 'react';
import './MobileFilterNavbar.css';
import { MdHighlight } from 'react-icons/md';
import { MdMenu } from 'react-icons/md';
import { IoMdOptions } from 'react-icons/io';
import { IoIosOptions } from 'react-icons/io';
import NavbarProfileImage from '../../atoms/NavbarProfileImage/NavbarProfileImage';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
const MobileFilterNavbar = () => {
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
        <Link to="/profile">
          <NavbarProfileImage />
        </Link>
      </mobile-nav-content-container>
    </mobile-nav-container>
  );
};

export default MobileFilterNavbar;
