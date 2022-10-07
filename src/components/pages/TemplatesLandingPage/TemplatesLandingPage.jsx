import React from 'react';

import TemplatesLandingHero from '../../templates/TemplatesLandingHero/TemplatesLandingHero';
import TemplatesLandingSubheading from '../../templates/TemplatesLandingSubheading/TemplatesLandingSubheading';
import { Navbar } from '../../UI/organisms';
const TemplatesLandingPage = () => {
  return (
    <div className="templates-landing-page">
      <Navbar />
      <TemplatesLandingHero />
      <TemplatesLandingSubheading />
      <div>er</div>
    </div>
  );
};

export default TemplatesLandingPage;
