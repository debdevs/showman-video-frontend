import React from 'react';
import './ProfilePageSubheading.css';
import AccountBox from '../../UI/molecules/AccountBox/AccountBox';
import HomeSearchBox from '../../UI/molecules/HomeSearchBox/HomeSearchBox';
import ProfilePageTextInfo from '../../UI/atoms/ProfilePageTextInfo/ProfilePageTextInfo';
import LatestTemplateImage from '../../UI/atoms/LatestTemplateImage/LatestTemplateImage';
const ProfilePageSubheading = () => {
  return (
    <div className="profile-subheading-parent">
      <profile-subheading-content>
        <left-items>
          <texts-container>
            <ProfilePageTextInfo header_text='Estimated Time'/>
            <ProfilePageTextInfo header_text='Style'/>
            <ProfilePageTextInfo header_text='Remaining'/>
            <ProfilePageTextInfo header_text='Download Link'/>
          </texts-container>
        </left-items>
        <right-items>
          <LatestTemplateImage />
        </right-items>
      </profile-subheading-content>
    </div>
  );
};

export default ProfilePageSubheading;
