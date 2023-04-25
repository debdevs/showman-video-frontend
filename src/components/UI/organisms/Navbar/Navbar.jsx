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
    <div className="navbar_element">
      <navbar-elements-container>
        <div className='left_items'>
        <Link to="/">
          <logo-parent className="logo-parent">
            <img
              src={require('../../../../assets/images/logo.png').default}
              alt=""
            />
          </logo-parent>
        </Link>
        </div>
        <div className='right_items'>
        <div className='navigation_links_container'>
          <ul>
            <Link to="/">
              <li className="outfit">
                <AiFillHome className="icon" />
                HOME
              </li>
            </Link>
            <Link to="/template-landing-page">
              <li className="outfit">
                <FiSearch className="icon" />
                SEARCH
              </li>
            </Link>
            <Link to="/Page2">
              <li className="outfit">
                <MdVideoLibrary className="icon" />
                TEMPLATES
              </li>
            </Link>
            <li className="outfit">
              <BsFillInfoSquareFill className="icon" />
              ABOUT
            </li>
          </ul>
          <Link to="/profile">
            <profile-card-container>
              <NavbarProfileImage />
              <h2 className="outfit">Ashley</h2>
            </profile-card-container>
          </Link>
        </div>




        </div>

      </navbar-elements-container>
    </div>
  );
};

export default Navbar;
