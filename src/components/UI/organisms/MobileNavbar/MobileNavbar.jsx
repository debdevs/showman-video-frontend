import React from 'react';
import './MobileNavbar.css';
import { MdHighlight } from 'react-icons/md';
import { MdMenu } from 'react-icons/md';
import { IoMdOptions } from 'react-icons/io';
import { IoIosOptions } from 'react-icons/io';
import { AiFillHome } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { FiMenu } from 'react-icons/fi';
import { MdVideoLibrary } from 'react-icons/md';
import { BsFillInfoSquareFill } from 'react-icons/bs';

import NavbarProfileImage from '../../atoms/NavbarProfileImage/NavbarProfileImage';
import { BrowserRouter, Routes, Route, NavLink, Link } from 'react-router-dom';
const MobileNavbar = () => {
  return (
    <mobile-nav-container className="mobile-nav-container">
      <mobile-nav-content-container>
        <ul>
          <li>
            <Link to="/">
              <AiFillHome className="nav-icon" />
            </Link>
          </li>
          <li>
            <Link to="/Page2">
              <FiSearch className="nav-icon" />
            </Link>
          </li>
          <li>
            <Link to="/profile-page">
              <FiMenu className="nav-icon" />
            </Link>
          </li>
          {/* 
          <li>
            <button className="Menu Sort">Sort</button>
          </li> */}
        </ul>
        <Link to="/profile">
          <NavbarProfileImage />
        </Link>
      </mobile-nav-content-container>
    </mobile-nav-container>
  );
};

export default MobileNavbar;
