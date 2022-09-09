import React from 'react'
import './Footer.css'
import '../../../App.css';
const Footer = () => {
  return (
   
        <footer-parent>
          <footer-content-container>
            <footer-left-items>
            <img src={require('/home/deborah/pro-websites/showman-video-frontend/src/assets/images/logo.png')} />
            </footer-left-items>

            <footer-center-items>
              <ul class = "center-links">
                <li class = "footer-link istok-font">Home</li>
                <li class = "footer-link istok-font">Templates</li>
                <li class = "footer-link istok-font">About</li>
                <li class = "footer-link istok-font">Contact</li>

              </ul>
              <p class = 'istok-font'>Find the most stylish media templates here at Showman. No subscription required. Customizable and Social media ready.</p>
              
            </footer-center-items>

            <footer-right-items>
            

            </footer-right-items>
          </footer-content-container>

        </footer-parent>
   
  )
}

export default Footer