import React from 'react';
import { useState } from 'react';
import './EtsySimpleEditPage.css';
import EtsySimpleEditHero from '../../templates/EtsySimpleEditHero/EtsySimpleEditHero';
import { EtsyEditContext } from '../../../Contexts/EtsyEditContext';
import ImageUploader from '../../UI/atoms/ImageUploader/ImageUploader';

import Footer from '../../templates/Footer/Footer';
const EtsySimpleEditPage = () => {
  const [isActive, setIsActive] = useState(false);
  const [clickedId, setClickedId] = useState(2);
  const [activeIndex, setActiveIndex] = useState(2);
  return (
    <EtsyEditContext.Provider
      value={{
        isActive,
        setIsActive,
        clickedId,
        setClickedId,
        activeIndex,
        setActiveIndex,
      }}
      className="etsy_page"
    >
      <EtsySimpleEditHero />

      <Footer />
    </EtsyEditContext.Provider>
  );
};

export default EtsySimpleEditPage;
