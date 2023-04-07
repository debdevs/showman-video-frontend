import React from 'react'
import './SubHeading.css'
import '../../../App.css';
import FeatureItems from '../../UI/molecules/FeatureItems/FeatureItems';
import FrontCategoryCard from '../../UI/molecules/FrontCategoryCard/FrontCategoryCard';
import MainCategoryCard from '../../UI/molecules/MainCategoryCard/MainCategoryCard'
import test_image from '../../../assets/images/test.png'
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
            <div className='home_category_cards_container'>
            <MainCategoryCard/>
            <MainCategoryCard/>
            <MainCategoryCard/>
            <MainCategoryCard/>
            </div>
            <div className='home_category_card_images_container'>
            <img src = {test_image}/>
            </div>

          
            </right-items>
            
        </div>      

        </subheading-container-main>


    </subheading-container>

  )
}

export default SubHeading