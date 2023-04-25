import gaming_image from '../assets/images/wallpapersden.com_k-destiny-2_3840x2160.jpg';
import social_image from '../assets/images/fashion-banner.webp';
import wedding_image from '../assets/images/ElegeantWeddingPromo.png';
import real_estate_image from '../assets/images/RealEstatePromo.png';
import all_category from '../assets/images/all.jpg';
import sports_image from '../assets/images/SportsPromo.png';
import advertisement_image from '../assets/images/StompPromoScreenShot.png';
import global_image from '../assets/images/CorporatePromo.png';
import gaming_image_update from '../assets/images/AnimatedTwitchOverlayTest.png';
import React from 'react';

const categories = [
  {
    id: 1,
    title: 'Weddings',
    image: wedding_image,
    tagline: 'Stellar graphics for a stellar day',
    description: 'Make professional wedding invitations & videos, right here.',
  },
  {
    id: 2,
    title: 'Real Estate',
    image: real_estate_image,
    tagline: "Let's get to business.",
    description:
      'Sell more properties with professional graphics that generate clicks',
  },
  {
    id: 3,
    title: 'Gaming',
    image: gaming_image_update,
    tagline: 'You wanna rock? Let’s go.',
    description:
      'From overlays to streaming screens, make your mark with Showman',
  },
  {
    id: 4,
    title: 'Social Media',
    image: advertisement_image,
    tagline: 'Catch some eyes.',
    description: 'Add some modern flair to your socials with Showman',
  },
  {
    id: 5,
    title: 'All Templates',
    image: global_image,
    tagline: "Too many options? That's the best part",
    description:
      'Find any kind of template to make any kind of video. Place your edits & make your mark',
  },
];

export default categories;
