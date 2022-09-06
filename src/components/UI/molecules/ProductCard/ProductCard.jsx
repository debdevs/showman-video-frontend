import React from 'react'

const ProductCard = () => {
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
        <left-items>
          <h2>Stylish Instagram Overlay</h2>
        </left-items>
        <right-items>
          <button-parent href = "#">
            <a href='../image-resources/button-rhomus.svg' ><img src='../image-resources/button-rhomus.svg' title='semi-transparent-rhombus' /></a>
            <h3>View</h3>
            </button-parent>       
        </right-items>
        </product-info-container>
    </product-box>
     </product-animation-box>    
  )
}

export default ProductCard