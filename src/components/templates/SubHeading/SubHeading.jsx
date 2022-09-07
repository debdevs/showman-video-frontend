import React from 'react'
import './SubHeading.css'
import '../../../App.css';
import FeatureItems from '../../UI/molecules/FeatureItems/FeatureItems';
import FrontCategoryCard from '../../UI/molecules/FrontCategoryCard/FrontCategoryCard';

const SubHeading = () => {
  return (
    
    <subheading-container>
        <subheading-container-main>
        <subheading-bg/>
     


        <subheading-content-parent>
            <left-items>
                <FeatureItems/>
                
            </left-items>
            <right-items>
                <FrontCategoryCard/>
                <FrontCategoryCard/>
                <FrontCategoryCard/>
                <FrontCategoryCard/>
                <FrontCategoryCard/>
            </right-items>
        </subheading-content-parent>      

        </subheading-container-main>
=

    </subheading-container>

  )
}

export default SubHeading