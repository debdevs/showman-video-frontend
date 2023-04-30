import React from 'react';
import './Footer.css';
import '../../../App.css';
import EmailBox from '../../UI/atoms/EmailBox/EmailBox';
import { RiFacebookFill } from 'react-icons/all';
import { RiInstagramLine } from 'react-icons/all';
import { RiTwitterFill } from 'react-icons/all';
import {ReactComponent as FacebookButton} from '../../../assets/images/FacebookButton.svg'
import {ReactComponent as LinkedInButton} from '../../../assets/images/LinkedInButton.svg'
import {ReactComponent as EmailButton} from '../../../assets/images/EmailButton.svg'
import showman_logo from '../../../assets/images/Showman_V02_logodesat.png'

const Footer = () => {
  return (
    <div className='footer_parent_container'>
<div className='footer_parent'>
  <div className='footer_contents'>
    <div className='footer_top_items'>
      <div className='logo_wt_text'>
      <img src = {showman_logo} className='footer_logo'/>
        <h1 className='footer_text'>
          Your destination for media pizazz
        </h1>
      </div>
      <div className='footer_items_row'>
      <p>Home</p>
      <p>About</p>
      <p>Templates</p>
      <p>Licensing</p>
      <p>Etsy</p>
      </div>
      
    </div>
<div className='footer_bottom_items'>
<div className='footer_button_row'>
      <FacebookButton className = 'footer_icon'/>
      <LinkedInButton className = 'footer_icon'/>
      <EmailButton className = 'footer_icon'/>

    </div>
</div>


  </div>
</div>
</div>
  );
};

export default Footer;
