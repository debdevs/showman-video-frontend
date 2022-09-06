import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';

const Navbar = () => {
  return (
    <navbar-element class = "navbar-element">
      <navbar-elements-container>
            <logo-parent class = "logo-parent">
            <img src={require('/home/deborah/pro-websites/showman-video-frontend/src/assets/logo.png')} />
            </logo-parent>
            <nav-container>
              <ul>
                <li>HOME</li>
                <li>SEARCH</li>
                <li>TEMPLATES</li>
                <li>ABOUT</li>
              </ul>
            </nav-container>
      </navbar-elements-container>
    </navbar-element>
      

  )
}

export default Navbar;