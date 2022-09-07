import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import '../../../../App.css';
import { FaHeart } from "react-icons/fa";

 
const Navbar = () => {
  return (
    <navbar-element class = "navbar-element">
      <navbar-elements-container>
            <logo-parent class = "logo-parent">
            <img src={require('/home/deborah/pro-websites/showman-video-frontend/src/assets/images/logo.png')} />
            </logo-parent>
            <nav-container>
              <ul>
                <li className='istok-font'><FaHeart/>HOME</li>
                <li className='istok-font'>SEARCH</li>
                <li className='istok-font'>TEMPLATES</li>
                <li className='istok-font'>ABOUT</li>
              </ul>

              <profile-card-container>
                <image-parent>
                <img src={require('/home/deborah/pro-websites/showman-video-frontend/src/assets/pexels-yuri-manei-2690323.jpg')} />
                </image-parent>
              <h2 className='istok-font'>Ashley</h2>       
              </profile-card-container>
            </nav-container>
      </navbar-elements-container>
    </navbar-element>
      

  )
}

export default Navbar;