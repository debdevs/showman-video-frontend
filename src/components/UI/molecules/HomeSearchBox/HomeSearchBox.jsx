import React from 'react';
import BasicButton from '../../atoms/BasicButton/BasicButton';
import '../../../../App.css';
import './HomeSearchBox.css';
import { useState } from 'react';
import { GoSearch } from 'react-icons/all';
const HomeSearchBox = () => {
  const [activeItem, setActiveItem] = useState(false);
  return (
    <parent-container>
      <div
        className={
          activeItem === false ? 'input-parent' : 'input-parent-active'
        }
      >
        <input
          onFocus={() => {
            setActiveItem(true);
          }}
          onBlur={() => {
            setActiveItem(false);
          }}
          className={
            activeItem === false ? 'search-input' : 'search-input-active'
          }
        ></input>
        <GoSearch
          className={
            activeItem === false ? 'search-icon' : 'search-icon-active'
          }
        />
      </div>
      <BasicButton
        button_width={activeItem === false ? '50%' : '10%'}
        button_text="DEMO"
        button_opacity={activeItem === false ? '1' : '0.5'}
        // scalex={activeItem === true ? 'scaleX(2%)' : 'scaleX(8000%);'}
      />
    </parent-container>
  );
};

export default HomeSearchBox;
