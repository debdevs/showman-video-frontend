import React from 'react';
import '../../../../App.css';
import './FilterSection.css';

const FilterSection = () => {
  return (
    <div className="filter-column">
      <filter-header-items>
        <h2 className="istok-font">Filters</h2>
        <line-div />
      </filter-header-items>
      <div className="new">
        <form>
          <div className="form-group">
            <input type="checkbox" id="html"></input>
            <label for="html" className="istok-font">
              Wedding
            </label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="css"></input>
            <label for="css" className="istok-font">
              Logo Sting
            </label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="3"></input>
            <label for="3" className="istok-font">
              Gaming
            </label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="4"></input>
            <label for="4" className="istok-font">
              Social
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterSection;
