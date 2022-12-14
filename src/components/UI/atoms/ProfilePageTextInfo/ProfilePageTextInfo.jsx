import React from 'react';
import './ProfilePageTextInfo.css';
const ProfilePageTextInfo = ({
  header_text = 'Current Order',
  subtext = 'Template Name',
}) => {
  return (
    <div className="profile-info-text-bg">
  
      <div className="profile-info-text">
      <div className="profile-info-text-container">
      <h1 className="rumble-brave-font">{header_text}:</h1>
      <h2 className="outfit">{subtext}</h2>
      </div>
      </div>
    </div>
  );
};

export default ProfilePageTextInfo;
