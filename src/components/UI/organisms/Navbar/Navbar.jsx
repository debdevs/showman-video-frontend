import React from 'react';
import { BrowserRouter, Routes, Route, NavLink } from 'react-router-dom';
import './Navbar.css';
import '../../../../App.css';

import { AiFillHome } from 'react-icons/ai';
import { FiSearch } from 'react-icons/fi';
import { MdVideoLibrary } from 'react-icons/md';
import { BsFillInfoSquareFill } from 'react-icons/bs';
import { Link } from 'react-router-dom';
import NavbarProfileImage from '../../atoms/NavbarProfileImage/NavbarProfileImage';

const logo1 = require('../../../../assets/images/logo.png').default;
const Navbar = () => {
  return (
    <navbar-element className="navbar-element">
      <navbar-elements-container>
        <Link to="/">
          <logo-parent className="logo-parent">
            <img src={require('../../../../assets/images/logo.png').default} />
          </logo-parent>
        </Link>
        <nav-container>
          <ul>
            <Link to="/">
              <li className="istok-font">
                <AiFillHome className="icon" />
                HOME
              </li>
            </Link>
            <Link to="/template-landing-page">
              <li className="istok-font">
                <FiSearch className="icon" />
                SEARCH
              </li>
            </Link>
            <Link to="/Page2">
              <li className="istok-font">
                <MdVideoLibrary className="icon" />
                TEMPLATES
              </li>
            </Link>
            <li className="istok-font">
              <BsFillInfoSquareFill className="icon" />
              ABOUT
            </li>
          </ul>
          <Link to="/profile">
            <profile-card-container>
              <NavbarProfileImage />
              <h2 className="istok-font">Ashley</h2>
            </profile-card-container>
          </Link>
        </nav-container>
      </navbar-elements-container>
    </navbar-element>
  );
};

export default Navbar;
