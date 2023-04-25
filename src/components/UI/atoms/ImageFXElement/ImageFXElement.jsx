import React from 'react'

import './ImageFXElement.css'
import ProductCardButton from '../../atoms/ProductCardButton/ProductCardButton';
import ProductCardViewButton from '../../atoms/ProductCardViewButton/ProductCardViewButton';
import placeholder_image from '../../../../assets/images/real_estate_image_3.jpg'
const ImageFXElement = ({image = {placeholder_image}}) => {
  return (
    <div className = 'image_FX__image_fx_container'>
    <div className='image_FX__image'>
      <img
        alt=""
        className="product-basic-category-box-image"
        src={image}
      />
    </div>
    <div className='image_FX__inset_shadow'/>
    <div className='image_FX__cover_outline' image_FX__cover_outline id="myDiv">
      <product-basic-shine />
    </div>
  </div>
  )
}

export default ImageFXElement