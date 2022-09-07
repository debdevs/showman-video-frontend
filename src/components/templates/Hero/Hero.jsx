import React from 'react'
import '../../../App.css';
import './Hero.css';
const Hero = () => {
  return (
    <hero-container>
        <hero-background-image>
        <img src={require('/home/deborah/pro-websites/showman-video-frontend/src/assets/pexels-yuri-manei-2690323.jpg')} />
        </hero-background-image>
        <hero-overlay-gradient/>
        <hero-main-content>
        <img src={require('/home/deborah/pro-websites/showman-video-frontend/src/assets/logo.png')} />
        <h1 className='istok-font'>Create any kind of video you want. No subscription necessary</h1>
        <input className='search-input'></input>
        </hero-main-content>
        
        


        
     
    </hero-container>
  )
}

export default Hero