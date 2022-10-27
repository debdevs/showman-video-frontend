import React from 'react';
import { useState } from 'react';
import './EtsySimpleEditPage.css';
import EtsySimpleEditHero from '../../templates/EtsySimpleEditHero/EtsySimpleEditHero';
import { EtsyEditContext } from '../../../Contexts/EtsyEditContext';
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
    >
      <div>
        <EtsySimpleEditHero />
      </div>{' '}
    </EtsyEditContext.Provider>
  );
};

export default EtsySimpleEditPage;
