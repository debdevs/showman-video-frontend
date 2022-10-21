import React from 'react';
import './ProfilePage.css';
import { Navbar } from '../../UI/organisms';
import ProfilePageHero from '../../templates/ProfilePageHero/ProfilePageHero';
const ProfilePage = () => {
  return (
    <div>
      <Navbar />
      <ProfilePageHero />
    </div>
  );
};

export default ProfilePage;
