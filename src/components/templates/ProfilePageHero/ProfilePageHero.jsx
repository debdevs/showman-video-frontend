import React from 'react';
import './ProfilePageHero.css';
import profile_image from '../../../assets/images/downloadable-30037622-48ec-4eda-92b5-2348e45c77a4.png';
const ProfilePageHero = () => {
  return (
    <section className="profile-hero">
      <profile-hero-content>
        <image-container>
          <img src={profile_image} className="profile-image" />
        </image-container>
        <center-items>
          <h1 className="rumble-brave-font">SparkleKnight</h1>
          <h2 className="rumble-brave-font">Impresario</h2>
        </center-items>
        <right-items>
          {' '}
          <image-container>
            <img src={profile_image} className="profile-image" />
          </image-container>
        </right-items>
      </profile-hero-content>
    </section>
  );
};

export default ProfilePageHero;
