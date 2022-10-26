import React from 'react';
import './ProfilePageHero.css';
import profile_image from '../../../assets/images/vintage-flower-card-template-background_188398-265.webp';
import ProfileCardImage from '../../UI/atoms/ProfileCardImage/ProfileCardImage';
import LatestTemplateImage from '../../UI/atoms/LatestTemplateImage/LatestTemplateImage';
import ShowmanAccountGlowButton from '../../UI/atoms/ShowmanAccountGlowButton/ShowmanAccountGlowButton';
const ProfilePageHero = () => {
  return (
    <section className="profile-hero">
      <h1 className="rumble-brave-font profile-header">Welcome Backstage</h1>
      <profile-hero-parent>
        <fade-bg1></fade-bg1>
        <profile-hero-content>
          <background-image-container>
            <img className="profile-background-image" src={profile_image} />
          </background-image-container>
          <left-items>
            <ProfileCardImage />
          </left-items>
          <center-items>
            <header-texts>
              <h1 className="rumble-brave-font">SparkleKnight</h1>
              <h2 className="istok-font">IMPRESARIO</h2>
            </header-texts>
            <lower-items>
              <ul>
                <li className="istok-font">
                  ◆ Backstage pass ID:
                  <span className="istok-font"> #SparkleKnight</span>
                </li>
                <li className="istok-font">
                  ◆ Level:
                  <span className="istok-font"> #Impresario</span>
                </li>
                <li className="istok-font">
                  ◆ Member Since:
                  <span className="istok-font"> 2022</span>
                </li>
                <li className="istok-font">
                  ◆ Favorite Template:
                  <span className="istok-font"> Stylish Social</span>
                </li>
              </ul>
            </lower-items>
          </center-items>
          <right-items>
            <ShowmanAccountGlowButton button_text={'Account Info'} />
            <ShowmanAccountGlowButton button_text={'Change Password'} />
            <ShowmanAccountGlowButton button_text={'Account Info'} />
          </right-items>
        </profile-hero-content>
      </profile-hero-parent>
    </section>
  );
};

export default ProfilePageHero;
