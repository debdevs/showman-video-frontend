import React from 'react';
import '../../../../App.css';
import './FilterSection.css';

const FilterSection = () => {
  return (
    <div className="filter-column">
      <filter-header-items>
        <h2 className="outfit">Filters</h2>
        <line-div />
      </filter-header-items>
      <div className="new">
        <form>
          <div className="form-group">
            <input type="checkbox" id="html"></input>
            <label htmlFor="html" className="outfit">
              Wedding
            </label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="css"></input>
            <label htmlFor="css" className="outfit">
              Logo Sting
            </label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="3"></input>
            <label htmlFor="3" className="outfit">
              Gaming
            </label>
          </div>
          <div className="form-group">
            <input type="checkbox" id="4"></input>
            <label htmlFor="4" className="outfit">
              Social
            </label>
          </div>
        </form>
      </div>
    </div>
  );
};

export default FilterSection;
