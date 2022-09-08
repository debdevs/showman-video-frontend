import React from 'react'
import './FrontInfoSection.css'
import '../../../App.css';
import FrontInfoCard from '../../UI/molecules/FrontInfoCard/FrontInfoCard';

const FrontInfoSection = () => {
  return (
    <div>
        <front-info-container>
            <h2 class = "istok-font">How To Use</h2>
            <img src={require('/home/deborah/pro-websites/showman-video-frontend/src/assets/images/logo-desaturated.png')} />
            <info-card-row>
            <FrontInfoCard/>
            <FrontInfoCard/>
            <FrontInfoCard/>
            </info-card-row>
            <button class = 'view-info-button istok-font'>Video Demo</button>

        </front-info-container>

    </div>
  )
}

export default FrontInfoSection
