import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css';
import '../../../../App.css';
const BasicButton = () => {
  return (
    <button-items>
    <button-parent href = "#">
      <a href='../image-resources/button-rhomus.svg' ><img src={require('/home/deborah/pro-websites/showman-video-frontend/src/assets/logo.png')} /></a>
      
      <h3>View</h3>
      
      </button-parent>
    
  </button-items>
  )
}

export default BasicButton