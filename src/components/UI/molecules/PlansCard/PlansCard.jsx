import React from 'react';
import './PlansCard.css';
import PlansButton from '../../atoms/PlansButton/PlansButton';
const PlansCard = ({ title, details, users, downloads, license }) => {
  return (
    <div className="plans-card-container">
      <plans-card-bg />
      <plans-card-content>
        <header-items>
          <h1 className="rumble-brave-font">{title}</h1>
          <p className="outfit">{details}</p>
        </header-items>
        <center-items>
          <button>{users}</button>
          <button>{downloads}</button>
          <button>{license}</button>
        </center-items>
        <lower-items>
          <h2>Free</h2>
          <PlansButton />
        </lower-items>
      </plans-card-content>
    </div>
  );
};

export default PlansCard;
