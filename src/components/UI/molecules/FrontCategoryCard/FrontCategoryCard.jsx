import React from 'react'
import '../../../../App.css';
import'./FrontCategoryCard.css'
const FrontCategoryCard = ({Title}) => {
  return (
<product-animation-box class = "site-img">
<product-box>
  <product-image-fx-container>
    <product-image>
    <img class = "product-category-box-image"src="https://landisher.com/wp-content/uploads/2018/12/instagram-stories-template-pack-bundle-after-effects-psd-apple-download.jpg"></img>            
    </product-image>
    <product-inset-shadow/>
    <product-cover-outline id = "myDiv">
    <product-shine/>
    </product-cover-outline>
    </product-image-fx-container>
  <product-info-container>

      <h2 class = "rumble-brave-font">{Title}</h2>
   
    </product-info-container>
</product-box>
 </product-animation-box>    
  )
}

export default FrontCategoryCard