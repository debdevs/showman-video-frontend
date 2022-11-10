import React from 'react';
import './AlternateSubHeading.css';
import '../../../App.css';
import FeatureItems from '../../UI/molecules/FeatureItems/FeatureItems';
import FrontCategoryCard from '../../UI/molecules/FrontCategoryCard/FrontCategoryCard';

const AlternateSubHeading = () => {
  return (
    <alternate-subheading-container>
      <subheading-container-main>
        <subheading-bg />

        <subheading-content-parent>
          <left-items>
            <FeatureItems
              title={'Unique, Eye-catching'}
              subtitle={'Variety'}
              description={
                'Browse through our 2000+ templates to add pizzazz to your online presence'
              }
            />
          </left-items>
          <right-items>
            <FrontCategoryCard title={'Weddings'} />
            <FrontCategoryCard title={'Real Estate'} />
            <FrontCategoryCard title={'News'} />
            <FrontCategoryCard title={'Slideshows'} />
            <FrontCategoryCard title={'Sports'} />
          </right-items>
        </subheading-content-parent>
      </subheading-container-main>
    </alternate-subheading-container>
  );
};

export default AlternateSubHeading;
