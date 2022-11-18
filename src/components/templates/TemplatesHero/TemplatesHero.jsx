import React from 'react';
import '../../../App.css';
import './TemplatesHero.css';
import { ParticleHero } from '../../UI/organisms';
import BasicButton from '../../UI/atoms/BasicButton/BasicButton';
import HomeSearchBox from '../../UI/molecules/HomeSearchBox/HomeSearchBox';
import logo from '../../../assets/images/pexels-yuri-manei-2690323.jpg';
const TemplatesHero = () => {
  return (
    <templates-hero-parent-container>
      <templates-hero-container className="templates-hero-container">
        <templates-hero-background-image>
          <img
            src={
              require('../../../assets/images/pexels-yuri-manei-2690323.jpg')
                .default
            }
            alt=""
          />
        </templates-hero-background-image>
        <ParticleHero className="particle-hero" />
        <templates-hero-overlay-gradient />
        <templates-hero-main-content>
          <img
            src={require('../../../assets/images/logo.png').default}
            alt=""
          />
          <h1 className="istok-font">
            Create any kind of video you want. No subscription necessary
          </h1>

          <HomeSearchBox className="search-box" />
        </templates-hero-main-content>
      </templates-hero-container>
    </templates-hero-parent-container>
  );
};

export default TemplatesHero;
