import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import '../../../../App.css';

import { AiFillHome} from "react-icons/ai";
import { FiSearch } from "react-icons/fi";
import { MdVideoLibrary} from 'react-icons/md'
import { BsFillInfoSquareFill} from 'react-icons/bs'

const Navbar = () => {
  return (
    <navbar-element class = "navbar-element">
      <navbar-elements-container>
            <logo-parent class = "logo-parent">
            <img src={require('/home/deborah/pro-websites/showman-video-frontend/src/assets/images/logo.png')} />
            </logo-parent>
            <nav-container>
              <ul>
                <li className='istok-font'><AiFillHome className='icon'/>HOME</li>
                <li className='istok-font'><FiSearch className='icon'/>SEARCH</li>
                <li className='istok-font'><MdVideoLibrary className='icon'/>TEMPLATES</li>
                <li className='istok-font'><BsFillInfoSquareFill className='icon'/>ABOUT</li>
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