import React from 'react';
import './FrontInfoSection.css';
import '../../../App.css';
import FrontInfoCard from '../../UI/molecules/FrontInfoCard/FrontInfoCard';

const FrontInfoSection = () => {
  return (
    <div>
      <front-info-container>
        <h2 className="istok-font">How To Use</h2>
        <img
          src={require('../../../assets/images/logo-desaturated.png').default}
        />
        <info-card-row>
          <FrontInfoCard
            stepNumber="1"
            stepDescription={'Choose a template & click ‘Edit’'}
          />
          <FrontInfoCard
            stepNumber="2"
            stepDescription={'Add your colors text & images'}
          />
          <FrontInfoCard
            stepNumber="3"
            stepDescription={'Enter your Email, Click submit & wait'}
          />
        </info-card-row>
        <button className="view-info-button istok-font">Video Demo</button>
      </front-info-container>
    </div>
  );
};

export default FrontInfoSection;
