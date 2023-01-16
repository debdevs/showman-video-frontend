import React from 'react';
import './ProfilePageLowerSubheading.css';
import OrderHistoryCard from '../../UI/molecules/OrderHistoryCard/OrderHistoryCard';
import HomeSearchBox from '../../UI/molecules/HomeSearchBox/HomeSearchBox';
import image from '../../../assets/images/fashion-banner.webp';
import LatestTemplateImage from '../../UI/atoms/LatestTemplateImage/LatestTemplateImage';
const ProfilePageLowerSubheading = () => {
  return (
    <div className="profile-lower-subheading">
      <div className="profile-lower-subheading-content">
      <left-section>
        <LatestTemplateImage />
      </left-section>
      <order-section>
        <top-items>
          <h1 className="rumble-brave-font">Order History</h1>
          <HomeSearchBox />
        </top-items>
        <order-history-cards>
          <OrderHistoryCard
            title={'Stylish Media Social'}
            cover_image={image}
          />
          <OrderHistoryCard title={'Stylish Media Social'} />
          <OrderHistoryCard title={'Stylish Media Social'} />
          <OrderHistoryCard title={'Stylish Media Social'} />
        </order-history-cards>
      </order-section>
      </div>
    </div>
  );
};

export default ProfilePageLowerSubheading;
