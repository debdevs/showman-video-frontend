import React from 'react';
import BasicButton from '../../atoms/BasicButton/BasicButton';
import '../../../../App.css';
import './HomeSearchBox.css';
import { useState } from 'react';
import { GoSearch } from 'react-icons/all';
import { ReactComponent as Rhombus } from '../../../../assets/images/button-rhombus.svg';
const HomeSearchBox = () => {
  const [activeItem, setActiveItem] = useState(false);
  return (
    <div className='box_parent'>
      <div className='parent-container'>
      <div className='input_container'>
      <div
        className={
          activeItem === false ? 'input-parent' : 'input-parent-active'
        }
      >
        <div
          onFocus={() => {
            setActiveItem(true);
          }}
          onBlur={() => {
            setActiveItem(false);
          }}
          className={
            activeItem === false ? 'search-input' : 'search-input-active'
          }
        >
          <input className='absolute_input'
                 onFocus={() => {
                  setActiveItem(true);
                }}
                onBlur={() => {
                  setActiveItem(false);
                }}

          >
          
          </input>


        </div>

      </div>


      </div>
      <GoSearch
          className={
            activeItem === false ? 'search-icon' : 'search-icon-active'
          }
        />
        </div>
        <button className={
            activeItem === false ? 'search-button' : 'search-button-active'
          }><Rhombus className="logo" /> 
          <h3 className="outfit">
          DEMO
          </h3>
        </button>
    </div>
    
  );
};

export default HomeSearchBox;
