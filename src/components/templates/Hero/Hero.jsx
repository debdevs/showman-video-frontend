import React from 'react';
import '../../../App.css';
import './Hero.css';
import { ParticleHero } from '../../UI/organisms';
import BasicButton from '../../UI/atoms/BasicButton/BasicButton';
import HomeSearchBox from '../../UI/molecules/HomeSearchBox/HomeSearchBox';
import logo from '../../../assets/images/pexels-yuri-manei-2690323.jpg';
import bg from '../../../assets/images/ShowmanBanner8.png';
import bg1 from '../../../assets/images/ppt_1.png';
// src={
//   require('../../../assets/images/pexels-yuri-manei-2690323.jpg')
//     .default
// }
const Hero = () => {
  return (
    <hero-parent-container>
      <fade-bg1></fade-bg1>
      <hero-container>
        <hero-background-image>
          <img src={bg} alt="" />
        </hero-background-image>
        <ParticleHero />
        <hero-overlay-gradient />
        <hero-main-content>
          <img
            src={require('../../../assets/images/logo.png').default}
            alt=""
          />
          <h1 className="istok-font">
            Create any kind of video you want. No subscription necessary
          </h1>

          <HomeSearchBox className="search-box" />
        </hero-main-content>
      </hero-container>
    </hero-parent-container>
  );
};

export default Hero;
