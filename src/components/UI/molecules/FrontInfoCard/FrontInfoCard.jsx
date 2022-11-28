import React from 'react';
import '../../../../App.css';
import './FrontInfoCard.css';

const FrontInfoCard = ({ stepNumber, stepDescription }) => {
  return (
    <front-step-info-container>
      <number-box className="rumble-brave-font">{stepNumber}</number-box>
      <line-div />
      <front-step-box>
        <p className="outfit">{stepDescription}</p>
      </front-step-box>
    </front-step-info-container>
  );
};

export default FrontInfoCard;
