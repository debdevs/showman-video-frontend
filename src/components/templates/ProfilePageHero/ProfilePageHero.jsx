import React from 'react';
import './ProfilePageHero.css';
import profile_image from '../../../assets/images/vintage-flower-card-template-background_188398-265.webp';
import ProfileCardImage from '../../UI/atoms/ProfileCardImage/ProfileCardImage';
import LatestTemplateImage from '../../UI/atoms/LatestTemplateImage/LatestTemplateImage';
import ShowmanAccountGlowButton from '../../UI/atoms/ShowmanAccountGlowButton/ShowmanAccountGlowButton';
import { motion } from 'framer-motion/dist/framer-motion';
import { BsInfoCircle } from 'react-icons/all';
import { CgPassword } from 'react-icons/all';
import { RiHistoryFill } from 'react-icons/all';
import plans from '../../plans_data.js';
const ProfilePageHero = () => {
  return (
    <section className="profile-hero">
      <h1 className="rumble-brave-font profile-header">Welcome Backstage</h1>
      <motion.div
        className="profile_hero_parent_animator"
        initial={{ opacity: 0, traslateX: 0, translateY: 0, rotateX: 70 }}
        animate={{ opacity: 1, traslateX: 0, translateY: 0, rotateX: 0 }}
        transition={{
          type: 'spring',
          stiffness: 20,
          duration: 35,
          delay: 0.5,
        }}
      >
        <profile-hero-parent>
          <fade-bg1></fade-bg1>
          <profile-hero-content>
            <background-image-container>
              <img className="profile-background-image" src={profile_image} />
            </background-image-container>
            <left-items>
              <ProfileCardImage />
            </left-items>
            <center-items>
              <header-texts>
                <h1 className="rumble-brave-font">SparkleKnight</h1>
                <h2 className="istok-font">IMPRESARIO</h2>
              </header-texts>
              <lower-items>
                <ul>
                  <li className="istok-font">
                    ◆ Backstage pass ID:
                    <span className="istok-font"> #SparkleKnight</span>
                  </li>
                  <li className="istok-font">
                    ◆ Level:
                    <span className="istok-font"> #Impresario</span>
                  </li>
                  <li className="istok-font">
                    ◆ Member Since:
                    <span className="istok-font"> 2022</span>
                  </li>
                  <li className="istok-font">
                    ◆ Favorite Template:
                    <span className="istok-font"> Stylish Social</span>
                  </li>
                </ul>
              </lower-items>
            </center-items>
            <right-items>
              {plans.map((plan, key) => (
                <motion.div
                  className="account-buttons-column"
                  initial={{ opacity: 0, traslateX: -50, translateY: -50 }}
                  animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
                  transition={{ duration: 1, delay: 0.25 + key * 0.25 }}
                >
                  <ShowmanAccountGlowButton
                    button_text={'Account Info'}
                    icon={<BsInfoCircle className="button-icon" />}
                  />
                </motion.div>
              ))}

              <ShowmanAccountGlowButton
                button_text={'Change Password'}
                icon={<CgPassword className="button-icon" />}
              />
              <ShowmanAccountGlowButton
                button_text={'Order History'}
                icon={<RiHistoryFill className="button-icon" />}
              />
            </right-items>
          </profile-hero-content>
        </profile-hero-parent>
      </motion.div>
    </section>
  );
};

export default ProfilePageHero;
