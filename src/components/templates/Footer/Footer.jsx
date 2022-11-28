import React from 'react';
import './Footer.css';
import '../../../App.css';
import EmailBox from '../../UI/atoms/EmailBox/EmailBox';
import { RiFacebookFill } from 'react-icons/all';
import { RiInstagramLine } from 'react-icons/all';
import { RiTwitterFill } from 'react-icons/all';

const Footer = () => {
  return (
    <footer-parent>
      <footer-content-container>
        <footer-left-items>
          <img
            src={require('../../../assets/images/logo.png').default}
            alt=""
          />
          <social-row>
            <icon-box>
              <RiFacebookFill className="social-icon" />
            </icon-box>
            <icon-box>
              <RiInstagramLine className="social-icon" />
            </icon-box>
            <icon-box>
              <RiTwitterFill className="social-icon" />
            </icon-box>
          </social-row>
        </footer-left-items>

        <footer-center-items>
          <ul className="center-links">
            <li className="footer-link outfit">Home</li>
            <li className="footer-link outfit">Templates</li>
            <li className="footer-link outfit">About</li>
            <li className="footer-link outfit">Contact</li>
          </ul>
          <p className="outfit footer-paragraph">
            Find the most stylish media templates here at Showman. No
            subscription required. Customizable and Social media ready.
          </p>
        </footer-center-items>

        <footer-right-items>
          <EmailBox />
        </footer-right-items>
      </footer-content-container>
    </footer-parent>
  );
};

export default Footer;
