import React from 'react';
import { motion, useAnimation } from 'framer-motion/dist/framer-motion';
import '../../../App.css';
import './PlansHeroAnimated.css';
import { ParticleHero } from '../../UI/organisms';
import BasicButton from '../../UI/atoms/BasicButton/BasicButton';
import HomeSearchBox from '../../UI/molecules/HomeSearchBox/HomeSearchBox';
import logo from '../../../assets/images/pexels-yuri-manei-2690323.jpg';
import bg from '../../../assets/images/instagram-story-slideshow-pack-download-videohive-27504760-free-hunterae-com.jpg';
import PlansCard from '../../UI/molecules/PlansCard/PlansCard';
import plans from '../../plans_data.js';
// src={
//   require('../../../assets/images/pexels-yuri-manei-2690323.jpg')
//     .default
// }
const PlansHeroAnimated = () => {
  return (
    <plans-hero-parent-container>
      <plans-hero-container>
        <plans-hero-background-image>
          <img className="background" src={bg} />
        </plans-hero-background-image>
        <ParticleHero />
        <plans-hero-overlay-gradient />
        <plans-hero-main-content>
          {plans.map((plan, key) => (
            <motion.div
              className="cat-card-plans"
              key={plan.id}
              initial={{ opacity: 0, traslateX: -50, translateY: -50 }}
              animate={{ opacity: 1, traslateX: 0, translateY: 0 }}
              transition={{ duration: 1, delay: 1 + key * 0.25 }}
            >
              <PlansCard
                title={plan.title}
                users={plan.users}
                details={plan.details}
                downloads={plan.downloads}
                license={plan.license}
              />
            </motion.div>
          ))}
        </plans-hero-main-content>
      </plans-hero-container>
    </plans-hero-parent-container>
  );
};

export default PlansHeroAnimated;
