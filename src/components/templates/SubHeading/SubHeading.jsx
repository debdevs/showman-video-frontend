import React from 'react'
import './SubHeading.css'
import '../../../App.css';
import FeatureItems from '../../UI/molecules/FeatureItems/FeatureItems';
import FrontCategoryCard from '../../UI/molecules/FrontCategoryCard/FrontCategoryCard';
import MainCategoryCard from '../../UI/molecules/MainCategoryCard/MainCategoryCard'

const SubHeading = () => {
  return (
    
    <subheading-container>
        <subheading-container-main>
        <subheading-bg/>
     


        <div className = "subheading_content_parent">
            <left-items>
            <overlay-card/>
                <FeatureItems 
                title={"The Power To Create"}
                subtitle = {"is here"} 
                description = {"From Showman. An online template library of professional videos"}/>
                
            </left-items>
            <right-items>
            
            <MainCategoryCard/>
            <MainCategoryCard/>
            <MainCategoryCard/>
            <MainCategoryCard/>
          
            </right-items>
            
        </div>      

        </subheading-container-main>


    </subheading-container>

  )
}

export default SubHeading