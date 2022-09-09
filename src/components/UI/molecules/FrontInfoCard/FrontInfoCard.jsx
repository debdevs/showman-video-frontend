import React from 'react'
import '../../../../App.css';
import'./FrontInfoCard.css'


const FrontInfoCard = ({stepNumber,stepDescription }) => {
  return (
  
        <front-step-info-container>
            <number-box class = "rumble-brave-font">{stepNumber}</number-box>
            <line-div/>
            <front-step-box>
            <p class = "istok-font">{stepDescription}</p>
            </front-step-box>

        </front-step-info-container>

  )
}

export default FrontInfoCard