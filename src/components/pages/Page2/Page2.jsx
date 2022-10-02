import React from 'react';
import './Page2.css';
import { TemplatesHero } from '../../templates/TemplatesHero';
import { Navbar } from '../../UI/organisms';
import TemplatesSubheading from '../../templates/TemplatesSubheading/TemplatesSubheading';

const Page2 = () => {
  return (
    <div className="templates-page">
      <Navbar />
      <TemplatesHero />
      <TemplatesSubheading />
   
    </div>
  );
};

export default Page2;
