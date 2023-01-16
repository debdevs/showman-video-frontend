import React from 'react';
import profile_image from '../../../../assets/images/vintage-flower-card-template-background_188398-265.webp';
import './ProfileCardImage.css';
const ProfileCardImage = () => {
  return (
    <div className="profile-card-image">
      {' '}
      <image-container>
        <img src={profile_image} className="profile-image" alt="" />
        <image-shadow  />
        <image-outline />
      </image-container>
    </div>
  );
};

export default ProfileCardImage;
