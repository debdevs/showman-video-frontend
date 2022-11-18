import React from 'react';
import './NavbarProfileImage.css';
import template_image from '../../../../assets/images/wedding_image.webp';

const NavbarProfileImage = () => {
  return (
    <div className="navbar-profile-image">
      <div className="navbar_profile_image_fx_container">
        <navbar-profile-image className="navbar_profile_image">
          <img
            className="navbar-profile-category-box-image"
            src={
              require('../../../../assets/pexels-yuri-manei-2690323.jpg')
                .default
            }
            alt=""
          ></img>
        </navbar-profile-image>
        <navbar-profile-inset-shadow />
        <div id="myDiv" className="navbar_profile_cover_outline">
          <navbar-profile-shine />
        </div>
      </div>
    </div>
  );
};

export default NavbarProfileImage;
