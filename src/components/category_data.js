import gaming_image from '../assets/images/wallpapersden.com_k-destiny-2_3840x2160.jpg';
import social_image from '../assets/images/fashion-banner.webp';
import wedding_image from '../assets/images/wedding_image_2.jpg';
import real_estate_image from '../assets/images/real_estate_image_3.jpg';
import all_category from '../assets/images/all.jpg';

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
    image: gaming_image,
    tagline: 'You wanna rock? Let’s go.',
    description:
      'From overlays to streaming screens, make your mark with Showman',
  },
  {
    id: 4,
    title: 'Social Media',
    image: social_image,
    tagline: 'Catch some eyes.',
    description: 'Add some modern flair to your socials with Showman',
  },
  {
    id: 5,
    title: 'All Templates',
    image: all_category,
    tagline: "Too many options? That's the best part",
    description:
      'Find any kind of template to make any kind of video. Place your edits & make your mark',
  },
];

export default categories;
