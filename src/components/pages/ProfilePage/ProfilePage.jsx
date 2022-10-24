import React from 'react';
import './ProfilePage.css';
import { Navbar } from '../../UI/organisms';
import ProfilePageHero from '../../templates/ProfilePageHero/ProfilePageHero';
import ProfilePageSubheading from '../../templates/ProfilePageSubheading/ProfilePageSubheading';
import { motion } from 'framer-motion/dist/framer-motion';
const ProfilePage = () => {
  return (
    <motion.div
      className="profile-page"
      initial={{ scaleX: 0.9, opacity: 0 }}
      animate={{ scaleX: 1, opacity: 1 }}
      exit={{
        scaleX: 0.97,
        opacity: 0,
        transition: { type: 'spring', stiffness: 50 },
      }}
      transition={{ delay: 0.6 }}
    >
      <Navbar />
      <ProfilePageHero />
      <ProfilePageSubheading />
    </motion.div>
  );
};

export default ProfilePage;
