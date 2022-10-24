import React from 'react';
import './ProfilePageSubheading.css';
import AccountBox from '../../UI/molecules/AccountBox/AccountBox';
import HomeSearchBox from '../../UI/molecules/HomeSearchBox/HomeSearchBox';
const ProfilePageSubheading = () => {
  return (
    <div className="profile-subheading-parent">
      <profile-subheading-content>
        ProfilePageSubheading
        <left-items></left-items>
        <center-items>
          <top-items>
            <h1 className="istok-font">Order History</h1>
            <HomeSearchBox />
          </top-items>
        </center-items>
        <right-items>
          <AccountBox />
        </right-items>
      </profile-subheading-content>
    </div>
  );
};

export default ProfilePageSubheading;
