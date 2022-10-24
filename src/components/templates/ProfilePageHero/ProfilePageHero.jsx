import React from 'react';
import './ProfilePageHero.css';
import profile_image from '../../../assets/images/vintage-flower-card-template-background_188398-265.webp';
import ProfileCardImage from '../../UI/atoms/ProfileCardImage/ProfileCardImage';
import LatestTemplateImage from '../../UI/atoms/LatestTemplateImage/LatestTemplateImage';
const ProfilePageHero = () => {
  return (
    <section className="profile-hero">
      <profile-hero-parent>
        <profile-hero-content>
          <ProfileCardImage />

          <center-items>
            <header-texts>
              <h1 className="rumble-brave-font">SparkleKnight</h1>
              <h2 className="rumble-brave-font">Impresario</h2>
            </header-texts>
            <lower-items>
              <ul>
                <li className="istok-font">Backstage pass ID:</li>
                <li className="istok-font">Level:</li>
                <li className="istok-font">Member Since:</li>
                <li className="istok-font">Favorite Template:</li>
              </ul>
            </lower-items>
          </center-items>
          <right-items>
            <h1 className="istok-font">Latest Render:</h1>
            <h2 className="rumble-brave-font">Stylish Media Social</h2>
            <LatestTemplateImage />
          </right-items>
        </profile-hero-content>
      </profile-hero-parent>
    </section>
  );
};

export default ProfilePageHero;
