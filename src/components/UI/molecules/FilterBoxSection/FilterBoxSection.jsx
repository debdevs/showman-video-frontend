import React from 'react';
import '../../../../App.css';
import './FilterBoxSection.css';
import FilterButton from '../../atoms/FilterButton/FilterButton';
import NeonButton from '../../atoms/NeonButton/NeonButton';
const FilterBoxSection = () => {
  const resolutions = ["Any","Landscape", "Vertical", "Square"]
  return (
    <div className="filter-box-column">
      <div className = "filter-header-items">
      <NeonButton button_text={"Sort By"}/>
     
      </div>
      <div className="filter-box_box_element">
      <div className="filter-box_box_container">
        <h1 className='outfit filter_box_text'>Resolutions:</h1>
        <div className='filter_button_container'>
        {resolutions.map((resolution) =>(
           <FilterButton button_text = {resolution}/>
        ))
        
        }
       </div>
      </div>

      </div>
    </div>
  );
};

export default FilterBoxSection;
