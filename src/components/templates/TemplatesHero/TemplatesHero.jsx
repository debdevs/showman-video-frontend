import React from 'react';
import '../../../App.css';
import './TemplatesHero.css';
import { ParticleHero } from '../../UI/organisms';
import BasicButton from '../../UI/atoms/BasicButton/BasicButton';
import HomeSearchBox from '../../UI/molecules/HomeSearchBox/HomeSearchBox';
import logo from '../../../assets/images/pexels-yuri-manei-2690323.jpg';
const TemplatesHero = () => {
  return (
    <hero-parent-container>
      <hero-container>
        <hero-background-image>
          <img
            src={
              require('../../../assets/images/pexels-yuri-manei-2690323.jpg')
                .default
            }
          />
        </hero-background-image>
        <ParticleHero />
        <hero-overlay-gradient />
        <hero-main-content>
          <img src={require('../../../assets/images/logo.png').default} />
          <h1 className="istok-font">
            Create any kind of video you want. No subscription necessary
          </h1>

          <HomeSearchBox class="search-box" />
        </hero-main-content>
      </hero-container>
    </hero-parent-container>
  );
};

export default TemplatesHero;
