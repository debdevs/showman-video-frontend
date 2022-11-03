import React from 'react';
import './ProfilePageTextInfo.css';
const ProfilePageTextInfo = ({
  header_text = 'Current Order',
  subtext = 'Template Name',
}) => {
  return (
    <div className="profile-info-text">
      <h1 className="rumble-brave-font">{header_text}:</h1>
      <h2 className="istok-font">{subtext}</h2>
    </div>
  );
};

export default ProfilePageTextInfo;
