import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import '../../../../App.css';
const Navbar = () => {
  return (
    <navbar-element class = "navbar-element">
      <navbar-elements-container>
            <logo-parent class = "logo-parent">
            <img src={require('/home/deborah/pro-websites/showman-video-frontend/src/assets/logo.png')} />
            </logo-parent>
            <nav-container>
              <ul>
                <li className='istok-font'>HOME</li>
                <li className='istok-font'>SEARCH</li>
                <li className='istok-font'>TEMPLATES</li>
                <li className='istok-font'>ABOUT</li>
              </ul>

              <profile-card-container>
              <img src={require('/home/deborah/pro-websites/showman-video-frontend/src/assets/pexels-yuri-manei-2690323.jpg')} />
              <h2 className='istok-font'>Ashley</h2>
              </profile-card-container>
            </nav-container>
      </navbar-elements-container>
    </navbar-element>
      

  )
}

export default Navbar;